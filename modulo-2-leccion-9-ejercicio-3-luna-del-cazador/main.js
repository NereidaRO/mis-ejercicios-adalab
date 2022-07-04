'use strict';

//5 de octubre de 2017 fue esta luna
//sucede cada 3 años
//programar para 15 próximas lunas

/*for (let i = 2017; i < 2063; i + 3){
    console.log(`La próxima luna es el año ${i}`)
};*/ //esto peta el navegador

let anio = 2017;

let aux = anio;

for (let i = 0; i <= 14; i++){
    aux = aux + 3;
    console.log (aux);
};

/*empiezas en 0 porque es lo usual en programación, quieres que
haga 15 lunas (como empieza en 0, es hasta 14) y le dices
que vaya de ciclo en ciclo (i + 1 o i++); en cada ciclo del bucle,
a "anio" le sumará 3 y te printeará en la consola el año*/

/*la variable auxiliar es para que anio siga siendo 2017, 
ya que los bucles te machacan el dato*/