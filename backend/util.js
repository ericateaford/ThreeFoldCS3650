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

function getUser(username) {
  const data = readData();

  const user = Object.values(data.users).find(
    (user) => user.username === username
  );

  return user;
}

function getUserId(username) {
  const data = readData();

  const entry = Object.entries(data.users).find(
    ([key, user]) => user.username === username
  );

  if (entry) {
    return entry[0];
  }
}

function verifyToken(req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = validateJSONToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}

exports.readData = readData;
exports.writeData = writeData;
exports.createJSONToken = createJSONToken;
exports.validateJSONToken = validateJSONToken;
exports.getUser = getUser;
exports.getUserId = getUserId;
exports.verifyToken = verifyToken;
