'use strict';
function workWithMovies(){
    const list = [
        "El viaje de Chihiro",
        "El castillo ambulante",
        "Jujutsu Kaisen 0",
        ];
        
        //ahora hay que añadir uno
        
        list[3] = "Your name";
        
        
        //modificar un valor
        
        list[2] = "Hellboy";
        
        //lo último es encapsular el código en una funcion llamada "workwithmovies"

        return console.log(list);
};

console.log(workWithMovies()); //funciona, devuelve una lista de 4 valores, uno se llama Hellboy
