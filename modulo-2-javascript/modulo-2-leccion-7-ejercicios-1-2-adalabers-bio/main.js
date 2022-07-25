'use strict';

const p1 = document.querySelector('.adalaber1-p');
const p2 = document.querySelector('.adalaber2-p');

const adalaber1 = {
    name: "Susana",
    age: 34,
    job: "periodista",
    speak: function speak(){
       return `Soy ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;
    },
};

const adalaber2 = {
    name: "Rocío",
    age: 25,
    job: "actriz",
    speak: function speak(){
        return `Soy ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
     }
};

p1.innerHTML = adalaber1.speak();

p2.innerHTML = adalaber2.speak();

//funciona!