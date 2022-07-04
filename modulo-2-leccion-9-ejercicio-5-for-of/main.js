'use strict';

const bookOne = document.querySelector('.js-firstbook');
const bookTwo = document.querySelector('.js-secondbook');
const button = document.querySelector('.js-button');

const valueOne = bookOne.value;
const valueTwo = bookTwo.value;

const bookList = [];

console.log("hola");

function handleClick(event){
    event.preventDefault();
    bookList[0] = valueOne;
    bookList[1] = valueTwo;
    console.log(bookList);
    return bookList;
}; //no le mete los valores

button.addEventListener('click', handleClick);

/*for (const book of bookList) {
    console.log(`${book} was nominated to 89th Academy Awards`);
  };*/
