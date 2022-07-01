'use strict';

/*-[X] Coges el innerHTML de un párrafo
-[x] lo pasas a número
-[x] lo metes en una constante
-[x] compruebas si es par o impar
-[x] lo consoleas con un mensajito*/

function getEl(clase){
    if(clase.startsWith('.')){
        return document.querySelector(clase);
    };
};

const cumpleAlex = getEl(".cumple");

const innerCumple = cumpleAlex.innerHTML;

const numCumple = parseInt(innerCumple);

function parImpar(number){
    if (number % 2 === 0)
    { console.log(`${numCumple}es par`); }
    else{ console.log(`${numCumple} es impar`); }
}

parImpar(numCumple); //vaya, funciona!