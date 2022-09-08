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
const db = new Database("./src/blog.db", { verbose: console.log });

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//endpoints, queries, etc.

//endpoint para sacar todos los artículos
server.get("/all", (req, res) => {
  const query = `SELECT * FROM blog`;
  res.json(query);
});

server.get("/detail", (req, res) => {
  const query = `SELECT * FROM blog WHERE id=2`;
  res.json(query);
});

server.get("/datos", (req, res) => {
  const query = `SELECT * FROM blog WHERE title LIKE '%datos%'`;
  res.json(query);
});
/*NOTA: dejando los querys así, al pincharle al enlace, te pone el query tal y como está escrito.
En sí, funcionan, los datos son los correctos, pero la transformación a algo visible de verdad 
debería hacerse con un motor de plantillas, React, etc. */

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));
