'use strict';

const div = document.querySelector('.js-div');
const button = document.querySelector('.js-button');

function renderImage () {
    div.innerHTML =  '<img class="js-image" src="" alt="chihuahua" title="chihuahua"></img>';
};

function getChihuahua(){
    renderImage();
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => (response.json()))
    .then((obtainedData) => {
        const image = document.querySelector('.js-image');
        image.src = obtainedData.message;
    })
};

function handleClick(ev) {
    ev.preventDefault();
    getChihuahua();
};

button.addEventListener('click', handleClick);

//antes no funcionaba porque te complicabas con el segundo then; puedes usar {} y seguir como en cualquier función