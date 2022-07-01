"use strict";

//Multiplicación

const a = 3;
const b = 4;
const c = 5;

function multiply(x, y){
    return x * y;
}

const result = multiply(b, c);
console.log(result); //funciona!

//ticket con IVA

let pvp = 10;

function withIva(price){
    return price * 1.21;
}

const finalPrice = withIva(pvp);

console.log(finalPrice); //funciona!

//Par o impar

function parImpar(number){
    if (number % 2 === 0)
    { console.log("es par"); }
    else{ console.log("es impar"); }
}
// el % es "es divisible por", es decir, resto = 0
const paresNones = parImpar(4); //funciona! 

//Media de 4 números

function media(num1, num2, num3, num4){
    return (num1 + num2 + num3 + num4)/4;
}

const theMedia = media(10, 5, 0, 5);
console.log(theMedia); //funciona