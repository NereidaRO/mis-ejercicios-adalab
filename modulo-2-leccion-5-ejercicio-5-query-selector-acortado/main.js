'use strict';

function getEl(clase){
    if(clase.startsWith('.')){
        return document.querySelector(clase);
    };
};

const btnEl = getEl(".btn");
console.log(btnEl);
//funciona, cuidado con la flechita azul de la consola

const titleEl = getEl(".title");
console.log(titleEl);

const paragraphEl = getEl(".paragraph");
console.log(paragraphEl);

const subtitleEl = getEl(".subtitle");
console.log(subtitleEl);