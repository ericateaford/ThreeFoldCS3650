const express = require("express");
const { readData, writeData } = require("../util");
const { v4: generateId } = require("uuid");
const { hash } = require('bcryptjs')

const router = express.Router();

router.get("/data", (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read stored data" }); //internal server error
  }
});

router.post("/user/add", async (req, res) => {
  const data = readData();
  let errors = {};

  const newItem = req.body;
  if (!newItem) {
    //checks to ensure blank field is not being saved
    return res.status(400).json({ error: "Entry cannot be empty" }); //bad request error
  } 
  
  if (!newItem.username) {
    errors.username = "Entry needs username field";
  }

  if (!newItem.password) {
    errors.password = "Entry needs password field";
  }
  // TODO Should also check if the username is already being used
  
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "User signup failed due to validation errors.",
      errors,
    });
  } 

  const userId = generateId();
  const hashedPass = await hash(newItem.password, 10)

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

// TODO Need other routes to do things like login and add things to collections/notes/etc

module.exports = router;
