const routes = require("./routes/routes");
//Server for backend, reading and storing to a json file - Hanna W

//using express and cors dependencies for server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//port for backend server, to allow front end and back end to run from separate ports
const PORT = 5000;

//allows cross origin requests from frontend
app.use(bodyParser.json());
const corsOptions = {
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}
app.use(cors(corsOptions));

//routes for accessing the data
app.use(routes);

//start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
