'use strict';

const nameP = document.querySelector('.js-name-p');
const reposP = document.querySelector('.js-repos-p');
const img = document.querySelector('.js-img');
const inputName = document.querySelector('.js-input-name');

/*
[] fetch con ${username} (para el buscador) --> hacer objeto?
[] fetch de vuelta con datos del usuario
[] fetch se activa al buscar (click)
[] devuelve avatar_url, public_repos, name
*/

//fetch de vuelta del repo
fetch(`https://api.github.com/users/${username}`)
.then ((response) => response.JSON)
.then((data) => {
    nameP.innerHTML = data.name;
    reposP.innerHTML = data.public_repos;
    img.src = data.avatar_url;
});

//objeto para enviar al servidor con búsqueda usuaria
let searchItem = {
    "name" : "",
};

// Lupe + Olga
/*const inputName = document.querySelector(".js-userName");
function getUserData() {
  userName = inputName.value;
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(inputName);
      document.querySelector(".js-nameResult").innerHTML = data.name;
      document.querySelector(".js-imgResult").src = data.avatar_url;
      document.querySelector(".js-repoResult").innerHTML = data.public_repos;
    });
}
document.querySelector(".js-btn").addEventListener("click", getUserData);*/