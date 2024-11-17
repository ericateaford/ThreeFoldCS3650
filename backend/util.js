const fs = require("fs");

//path to json file
const DATA_FILE = "./data.json";

//reads from json file
const readData = () => {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data);
};

//write to json file as a json object
const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
};

exports.readData = readData;
exports.writeData = writeData;
