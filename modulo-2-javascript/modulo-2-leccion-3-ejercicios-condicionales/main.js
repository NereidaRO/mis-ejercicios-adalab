"use strict";

/*Control de accesos*/

const varName = "Nereida";

const controlAcceso = document.querySelector(".js-control-accesos");

if (varName === "Nereida" || "Nadia") {
    controlAcceso.innerHTML = `Bienvenida ${varName}`;
} else {controlAcceso.innerHTML = `Su acceso ha sido denegado`;}

/*Conversor perro-humano*/

//1 año = 15 años
//2o año = +9
//3º para delante = +5

const dogAge = 5;

let humanAge = document.querySelector(".js-human-age");

if (dogAge === 1){
    humanAge.innerHTML = 15;
} else if (dogAge === 2) {humanAge.innerHTML = 15 + 9;
} else if (dogAge >=3) {humanAge.innerHTML = 15 + 9 + dogAge*5;}

/*Notificación arcoiris*/