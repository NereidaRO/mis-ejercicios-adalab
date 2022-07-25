"use strict";

document.querySelector(".js-hola").innerHTML = "¡Hola Mundo!"

document.querySelector(".js-password").innerHTML = "*******";

document.querySelector(".js-inside").innerHTML = `<h1>Lorem ipsum</h1> <img src="http://via.placeholder.com/350x150" alt="placeholder" title="placeholder" /> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>`;

const listElement = document.querySelector(".js-ul");
const listContent = '<li>1</li> <li>2</li> <li>3</li>';

listElement.innerHTML = listContent;

const whoWins = document.querySelector(".js-winner");

whoWins.innerHTML = whoWins.innerHTML +" Nadia";

const hiddenButton = document.querySelector(".js-hidden");
hiddenButton.classList.add("hidden");