function sumaTres(x) {
    console.log(x + 3);
}

sumaTres(5);

// HAY 3 MANERAS DE DEFINIR UNA FUNCION, Y LAS 3 CUMPLEN LA MISMA FUNCIONALIDAD

// Primero - Definiendo la función

function sumaTres(x) {
    return x + 3 ;
}

// Segunda - Definiendo la función dentro de una variable.
// Lo que hago acá es guardar mi función dentro de una variable.

var sumaTres = function (x) {
    return x + 3;
}

// Tercera - Utilizando la sintaxis llamada función de flecha "=>"

var sumaTres = (x) => {
    return x + 3;
}

var animal = 'caballo';

console.log(animal);

