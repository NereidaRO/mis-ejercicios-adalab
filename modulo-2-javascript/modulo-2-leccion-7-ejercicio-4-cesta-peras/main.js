'use strict';

/*numeros máximos y mínimos de peras, un número actual y uno inicial
método para añadir una pera
método para sacar una pera
método para restablecer peras a número inicial
console.log de todo*/

const cestaPeras = {
    max: 10,
    min: 0,
    now: 4,
    start: 2,

    morePears: function morePears(now){
        now = now + 1;
        return now;
    },
    lessPears: function lessPears(now){
        now = now - 1;
        return now;
    },
    restart: function restart(now){
        now = cestaPeras.start
        return now;
    },
};

const result = cestaPeras.morePears(cestaPeras.now);
console.log(result);

const result2 = cestaPeras.lessPears(cestaPeras.now);
console.log(result2);

const result3 = cestaPeras.restart(cestaPeras.now);
console.log(result3);

//funciona!