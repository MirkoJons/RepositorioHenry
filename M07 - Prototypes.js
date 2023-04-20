// // Veamos un ejemplo utilizando el prototipo del objeto global 'array'.
// // Vamos a agregar un nuevo metodo a su constructor, para transformar todos los nrs. > 3 que tenga un arreglo en un valor booleano 'false'.

// // Para ingresar al objeto global vamos a escribir "Array.prototype" y modificaremos el prototipo de los Arrays de manera global.
// // Lo que estamos haciendo es basicamente ingresar a la propiedad Array del objeto global Arrray, es decir, de todos los Arrays.

// // Luego lo que vamos a hacer es especificar el nombre que queremos darle al nuevo metodo. Vamos a usar "mayoresQueTres".

// // Luego lo vamos a declarar una funcion y por ultimo le vamos a agregar logica a esa funcion
// // Utilizando la palabra clave "this" le permitimos al arreglo que ejecute este metodo, que acceda a los valores dentro del arreglo.

// Array.prototype.mayoresQueTres = function() {
//     var arregloModificado = [];

//     for(let i = 0; i < this.length; i++) {
//         if(this[i] > 3) {
//             arregloModificado.push(false);
//         } else {
//             arregloModificado.push(this[i]);
//         }
//     }
//     return arregloModificado;
// };

// // Ahora vamos a declarar una variable que sea un array con numeros del 1 al 5 y ejecutar el metodo para comprobar que funciona.

// var arreglo = [1, 2, 3, 4, 5];

// // Ahora voy a aplicarle la funcion mayoresQueTres al arreglo que acabo de crear, y guardar el resultado dentro de un arreglo llamado nuevoArreglo

// var nuevoArreglo = arreglo.mayoresQueTres();

// // Ahora finalmente hago un console.log de nuevoArreglo y deberia traeme el arreglo con el 4 y el 5 como false.

// console.log(nuevoArreglo);

class LatinoAmerica {
    constructor() {
        this.paises = [];
    }
}

LatinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};

var continente = new LatinoAmerica ();
continente.agregarPais('Argentina');
console.log(continente.paises);

