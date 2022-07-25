'use strict';

const titleOne = document.querySelector ('.js-one__title');
const titleTwo = document.querySelector ('.js-two__title');
const titleThree = document.querySelector ('.js-three__title');
const listOne = document.querySelector ('.js-one__list');
const listTwo = document.querySelector ('.js-two__list');
const listThree = document.querySelector ('.js-three__list');

const handleClick = (event) => {
    const elementClick = event.currentTarget;
    if(elementClick.classList.contains('js-one__title')){
        listOne.classList.toggle('hidden');
    } else if (elementClick.classList.contains('js-two__title')){
        listTwo.classList.toggle('hidden');
    } else if (elementClick.classList.contains('js-three__title')){
        listThree.classList.toggle('hidden');
    }
};

titleOne.addEventListener('click', handleClick);
titleTwo.addEventListener('click', handleClick);
titleThree.addEventListener('click', handleClick);

/*Querida Nereida, respira; haz el examen con una salvia doble
y chocolate sin lactosa*/

/*Lo que pone "classList" es una clase sieeeeempre, no una de las
constantes; las constantes son para llamar al evento*/

/*Y después del examen descansa; vicia al Zelda, rasca al perro
y duerme*/