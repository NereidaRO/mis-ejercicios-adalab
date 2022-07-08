'use strict';

const main = document.querySelector('.js-main');
const tasksList = document.querySelector('.js-tasksList');

const tasks = [
    { name: "Pasear al perro", completed: true },
    { name: "Comprar tofu", completed: true },
    { name: "Poner una lavadora de negros", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
];

tasksList.innerHTML = `<div class="wrapper"><li class="main__li">${tasks[0].name}</li>
<input class="main__check js-checkbox" type="checkbox" name="" id="" /></div>

<div class="wrapper"><li class="main__li">${tasks[1].name}</li>
<input class="main__check js-checkbox" type="checkbox" name="" id="" /></div>

<div class="wrapper"><li class="main__li">${tasks[2].name}</li>
<input class="main__check js-checkbox" type="checkbox" name="" id="" /></div>

<div class="wrapper"><li class="main__li">${tasks[3].name}</li>
<input class="main__check js-checkbox" type="checkbox" name="" id="" /></div>`;

//if tasks.completed === true, ponle un checked
//esto me lo haces cuando clickes al checkbox
//toggle es clave

const checkBox = document.querySelector('.js-checkbox');
console.log(checkBox); //funciona

function completedOrNot (objectcompleted) {
  if(objectcompleted === true){
    checkBox.checked = true;
  } else {
    checkBox.checked = false;
  }
};

function handleClick (event) {
  completedOrNot(tasks.completed);
};

checkBox.addEventListener('click', handleClick); //ahora no puedo usar la casillita :(