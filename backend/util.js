const fs = require("fs");
const { sign, verify } = require("jsonwebtoken");

//path to json file
const DATA_FILE = "./data.json";
//token key
const KEY = "supersecret";

//reads from json file
const readData = () => {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data);
};

//write to json file as a json object
const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
};

function createJSONToken(username) {
  return sign({ username }, KEY, { expiresIn: "1h" });
}

function validateJSONToken(token) {
  return verify(token, KEY);
}

exports.readData = readData;
exports.writeData = writeData;
exports.createJSONToken = createJSONToken;
exports.validateJSONToken = validateJSONToken;
