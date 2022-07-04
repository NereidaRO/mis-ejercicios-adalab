'use strict';

/*Conseguir que al cambiar el icono del select, 
cambie el icono del main. Aleatorizar un número, par = amarillo
impar = naranja*/

/*-[X] Llamar a las etiquetas a JS
  -[X] Preparar un evento para el botón
  -[X] Hacer una función de aleatorizar número
  -[X] If en aleatorizar numero que devuelva color
  -[X] Hacer que JS coja los valores del select
  -[X] Hacer que JS muestre la option seleccionada en p
  -[X] Reunirlo todo en handleClick*/

const main = document.querySelector('.js-main');
const paragraph = document.querySelector('.js-paragraph');
const form = document.querySelector('.js-form');
const select = document.querySelector('.js-select');
const optionHappy = document.querySelector('.js-option-happy');
const optionSad = document.querySelector('.js-option-sad');
const button = document.querySelector('.js-button');

const valueHappy = optionHappy.value;
const valueSad = optionSad.value;
const valueSelect = select.value;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
  //Source: MDN
};

function handleClick(ev){
  ev.preventDefault();
  const result = getRandomIntInclusive(0, 100);
  //si no pones una cte, pierdes lo que retorne la función
  if (result % 2 !== 0){
    main.classList.remove('main-yellow');
    main.classList.add('main-orange');
  };
  if(valueSelect === optionHappy){
    paragraph.innerHTML = valueHappy;
  } else {
    paragraph.innerHTML = valueSad;
  }
};

button.addEventListener('click',handleClick);

//funciona!