"use strict";

/*Parámetros:
-[] Un booleano para decir si es border-box o no
-[] Un número con el width de la caja
-[] Un número con el padding
-[] Un número con el border size

Tiene que decir el ancho del contenido y el ancho total con palabras
*/

const prueba = document.querySelector(".prueba");

const boolPrueba = prueba.box - sizing;
const widthPrueba = prueba.width;
const paddPrueba = prueba.padding;
const bzPrueba = prueba.border - size;

function calcBox(bool, anch, pdd, bz) {
  const anchoContenido = 0;
  if (bool === "border-box") {
    anchoContenido = anch + pdd + bz;
  } else {
    anchoContenido = anch - pdd - bz;
  }
  return anchoContenido;

  //

  // anch = parseInt(prueba.width);

  // pdd = parseInt(prueba.padding);

  // bz = parseInt(prueba.padding);
}

/*bool va a ser el valor box-sizing
anch va a ser el valor de anchura
pdd va a ser el valor del padding
bz va a ser el valor de border size*/

let result = calcBox(boolPrueba, widthPrueba, paddPrueba, bzPrueba);

console.log(result);
