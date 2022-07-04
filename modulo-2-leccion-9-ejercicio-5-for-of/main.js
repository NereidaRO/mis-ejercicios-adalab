'use strict';

const bookOne = document.querySelector('.js-firstbook'); //es el input
const bookTwo = document.querySelector('.js-secondbook'); //es el otro input
const button = document.querySelector('.js-button'); //es un input submit
const result = document.querySelector('.js-result'); //es un párrafo vacío



const bookList = [];


console.log("hola");

function addArrayElement(book){
    bookList.push(book);
};

function handleClick(event){
    event.preventDefault();
    const valueOne = bookOne.value;
    const valueTwo = bookTwo.value;
    addArrayElement(valueOne);
    addArrayElement(valueTwo);
    console.log(bookList);
    for (let book of bookList) {
        console.log(`También he leído ${book}`);
        result.innerHTML += (`También he leído ${book}. `);
      };
}; //cuidado con los valores default

button.addEventListener('click', handleClick);

//SINTAXIS
//for(variable of iterable{sentencia};)


