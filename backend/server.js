
//Server for backend, reading and storing to a json file - Hanna W

//using express and cors dependencies for server
const express = require('express');
const cors = require('cors');
const app = express();
//file system for use of json
const fs = require('fs');
const path = require('path');

//port for backend server, to allow front end and back end to run from separate ports
const PORT = 5000;

//path to json file
const filePath = path.join(__dirname, 'data.json');

//allows cross origin requirest from frontend
app.use(cors());
app.use(express.json());

//reads from json file
const readFromFile = () => {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}

//write to json file as a json object
const writeToFile = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

//GET method to fetch data from json file
app.get('/api/data', (req, res) => {
    try {
        const data = readFromFile();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to read stored data' }); //internal server error
    }
});

//POST method to add new data to json file
app.post('/api/data', (req, res) => {
    const { text } = req.body;
    if (!text) { //checks to ensure blank field is not being saved
        return res.status(400).json({ error: 'Entry cannot be empty' }); //bad request error
    }
});

//start server
app.listen(PORT, () => {
    console.log("Server is running"); 
})