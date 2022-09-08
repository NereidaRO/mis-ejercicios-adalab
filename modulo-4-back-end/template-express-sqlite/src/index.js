//import data and libraries
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

//set database (where database.db is your database)
const db = new Database("./src/database.db", { verbose: console.log });

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//endpoints, queries, etc.

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));
