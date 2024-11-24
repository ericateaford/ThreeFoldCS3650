const express = require("express");
const { readData, writeData, createJSONToken } = require("../util");
const { v4: generateId } = require("uuid");
const { hash, compare } = require("bcryptjs");

const router = express.Router();

router.get("/data", (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read stored data" }); //internal server error
  }
});

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
    const existingUser = Object.values(data.users).some(
      (user) => user.username === newItem.username
    );
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
    collection: {},
    notes: {},
    "natal-chart": {},
  };
  writeData(data);
  res.status(201).json({ id: userId, username: newItem.username });
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const data = readData();

  const user = Object.values(data.users).find(
    (user) => user.username === username
  );
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

// TODO Need other routes for adding things to collections/notes/etc

module.exports = router;
