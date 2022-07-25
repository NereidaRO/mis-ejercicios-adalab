'use strict';

const div = document.querySelector('.js-div');
const button = document.querySelector('.js-button');

function getNumber(){
fetch('https://api.rand.fun/number/integer')
.then((response) => response.json())
.then((obtainedData) => 
(div.innerHTML = obtainedData.result)
)
};

function handleClick (ev){
    ev.preventDefault();
    getNumber();
};

button.addEventListener('click', handleClick);
//funciona!