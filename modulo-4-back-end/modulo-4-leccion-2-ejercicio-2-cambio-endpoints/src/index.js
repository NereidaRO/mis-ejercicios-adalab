const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
//   we must always put these lines, until we know what they do
//   more info: https://expressjs.com/es/guide/using-middleware.html
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 3500;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
/*Cambia el puerto const serverPort = 3000; por const serverPort = 3500;
¿Qué debes cambiar en public/main.js para que la web siga funcionando? */

//RESPUESTA: el fetch y las peticiones al puerto 3000, para que las pidan al 3500

// STATIC SERVER: listen files in public folder
const staticServerPath = "./public"; // relative to the root of the project
server.use(express.static(staticServerPath));

// API: listen fetch requests

// API request > GET > http://localhost:3000/users
server.post("/users", (req, res) => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  res.json(response);
});
/*Cambia la ruta app.get('/users', (req, res) => { por app.post('/users', (req, res) => {
¿Qué debes cambiar en public/main.js para que la web siga funcionando?*/

//RESPUESTA: el método, que ahora es post

// API request > POST > http://localhost:3000/new-user
server.post("/users/add", (req, res) => {
  // console request body params
  console.log(
    `Creating the user in database with user name: "${req.body.userName}"`
  );

  /*Cambia la ruta app.post('/new-user', (req, res) => { por app.post('/users/add', (req, res) => {
  ¿Qué debes cambiar en public/main.js para que la web siga funcionando?*/

  //RESPUESTA: la ruta

  const response = {
    result: `User created: ${req.body.userName}`,
  };
  res.json(response);
});
