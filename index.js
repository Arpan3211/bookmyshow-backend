const express = require("express"); 
const app = express(); 
const { connection } = require("./connection.js"); 
const cors = require("cors"); 
const bodyParser = require("body-parser"); 

// Defining the port number
const port = 8080; 

// Configuring the body-parser middleware to parse urlencoded data
app.use(bodyParser.urlencoded({ extended: false })); 

// Configuring the body-parser middleware to parse json data
app.use(bodyParser.json()); 

// Configuring cors middleware
app.use(cors()); 

// Calling the database connection function
connection(); 

app.use("/api", require("./routes")); 

app.listen(port, () => console.log(`App listening on port ${port}!`)); // Starting the server and logging a message to the console

module.exports = app;
