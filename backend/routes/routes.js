const express = require("express");
const { readData, writeData } = require("../util");
const { v4: generateId } = require("uuid");

const router = express.Router();

router.get("/data", (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read stored data" }); //internal server error
  }
});

router.post("/user/add", (req, res) => {
  const data = readData();

  const newItem = req.body;
  if (!newItem) {
    //checks to ensure blank field is not being saved
    return res.status(400).json({ error: "Entry cannot be empty" }); //bad request error
  } else if (!newItem.username) {
    return res.status(400).json({ error: "Entry needs username field" }); //bad request error
  }
  // TODO Should also check if the username is already being used 

  userId = generateId();
  data.users[userId] = {
    username: newItem.username,
    collection: {},
    notes: {},
    "natal-chart": {},
  };
  writeData(data);
  res.status(201).json({ id: userId, username: newItem.username });
});

// TODO Need other routes to do things like login and add things to collections/notes/etc

module.exports = router;
