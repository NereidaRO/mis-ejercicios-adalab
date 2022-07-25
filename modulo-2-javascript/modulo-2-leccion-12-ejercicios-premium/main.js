'use strict';

const paragraph1 = document.querySelector('.js-paragraph1');
const paragraph2 = document.querySelector('.js-paragraph2');
const paragraph3 = document.querySelector('.js-paragraph3');
const paragraph4 = document.querySelector('.js-paragraph4');

//MAP

//Ej 2: saludar es de buena educación

const simpleNames = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

function welcome (name) {
    return `Bienvenida, ${name}`; //fallaba por esto
};

const welcomedNames = simpleNames.map(welcome);
paragraph1.innerHTML = welcomedNames;

//Ej 3: saludar diferente a las premium

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
  ];

console.log(users);

/*for (let i = 0; i < users.length; i++){
    if (users[i].isPremium === true) {
        paragraph2.innerHTML += `Bienvenida ${users[i].name}, gracias por tu confianza`
    } else {paragraph2.innerHTML += `Bienvenida ${users[i].name}`};
} //el bucle sale bien
*/
const vipUsers = users.filter((anyObject) => anyObject.isPremium === true );
const welcomeVIP = vipUsers.map((anyObject) => `Bienvenida ${anyObject.name}, gracias por confiar en nosotros`);
paragraph2.innerHTML += welcomeVIP;
//NOTA 1: son funciones anónimas y tipo arrow
//NOTA 2: basado en el ejercicio de Lupe

//*******************************************************************************************
//Lupe
/*const premiumUser = users.filter((item) => item.isPremium === true);
const welcomePremium = premiumUser.map(
  (item) => `Bienvenida ${item.name}, gracias por confiar en nosotros`
);

console.log("ejercico3", premiumUser);
console.log(welcomePremium);*/
//*******************************************************************************************
//Mónica
//Con desestructurar objeto
/*const messages=users.map(({name, isPremium})=>{
  if (isPremium===true){
    return {saludo: (`Bienvenida ${name}. Gracias por confiar en nosotros.`)};

  }else{
        return {saludo:(`Bienvenida ${name}.`)};
  }
});*/