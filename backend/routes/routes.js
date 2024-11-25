const express = require("express");
const {
  readData,
  writeData,
  createJSONToken,
  getUser,
  getUserId,
  verifyToken,
} = require("../util");
const { v4: generateId } = require("uuid");
const { hash, compare } = require("bcryptjs");

const router = express.Router();

// Route to get all data in data.json
router.get("/data", (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read stored data" }); //internal server error
  }
});

// Route to signup a new user
router.post("/signup", async (req, res) => {
  const data = readData();
  let errors = {};

  const newItem = req.body;
  if (!newItem) {
    //checks to ensure blank field is not being saved
    return res.status(400).json({ error: "Entry cannot be empty" }); //bad request error
  }

  if (!newItem.username) {
    errors.username = "Entry needs username field";
  } else {
    // Check if the username is already being used
    const existingUser = getUser(newItem.username);
    if (existingUser) {
      errors.uniqueUsername = `Username "${newItem.username}" already exists`;
    }
  }

  if (!newItem.password) {
    errors.password = "Entry needs password field";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "User signup failed due to validation errors.",
      errors,
    });
  }

  const userId = generateId();
  const hashedPass = await hash(newItem.password, 10);

  data.users[userId] = {
    username: newItem.username,
    password: hashedPass,
    collection: [],
    notes: [],
    "natal-chart": [],
  };
  writeData(data);
  res.status(201).json({ id: userId, username: newItem.username });
});

// Route to login
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const data = readData();

  const user = getUser(username);
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const pwIsValid = await compare(password, user.password);
  if (!pwIsValid) {
    return res.status(422).json({
      message: "Invalid credentials",
      errors: { credentials: "Invalid username or password" },
    });
  }

  // Frontend needs to store the token (and a 1 hr expiration) in local storage
  // To logout, delete the token and expiration from local storage
  const token = createJSONToken(username);
  res.json({ token });
});

//Route for adding item to a users collection from collections page
router.put("/collection/add", verifyToken, async (req, res) => {
  const username = req.user.username;
  const collectionItem = req.body;
  const data = readData();

  //search for user matching session value
  const userId = getUserId(username);
  if (!userId) {
    return res.status(404).json({ message: "User not found" });
  }

  if(!collectionItem.id) {
    return res.status(422).json({ message: "Entry needs an item id" })
  }

  //if the item ID isn't already within the user's collection, add it
  if (!data.users[userId].collection.includes(collectionItem.id)) {
    data.users[userId].collection.push(collectionItem.id);
  } else {
    //if the item is already on the list, return an error
    return res
      .status(400)
      .json({ message: "ID already exists within user's collection" });
  }
  //update JSON list with changes
  writeData(data);
  res.status(201).json({ message: "Item added successfully" });
});

// TODO Need other routes for adding things to collections/notes/etc

module.exports = router;
