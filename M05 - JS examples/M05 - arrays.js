// var colores = ["amarillo", "azul"];
// colores.push('rojo');
// colores.unshift('verde');
// colores.pop();
// colores.shift();

// Como consultar si todos los elementos de un array cumplen con una condicion?// 
// Declaro el array numeros, y luego otra variable para realizar una pedir un resultado que cumpla con una condicio// `n.

// var numeros = [1, 6, 8, 9];
// var cumplenCondicion = numeros.every((num) => {
//     return num > 5
// });
// console.log(cumplenCondicion);

// Utilizando el metodo split para transformar un string en un array.

// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');

// Como nosotros queriamos cambiar la ultima letra, una i latina, por una y, vamos a escribir:

// palabraSeparada.pop();
// palabraSeparada.push('y');
// console.log(palabraSeparada);
// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

// Podemos complejizar el metodo for each agregando un parametro de ejecucion de la siguiente manera:

// var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => {
//    if (num === 3) {
//        (console.log(num));
//    }
// });

// var masUno = numeros.map(num => {
//     return num + 1
// });
// console.log(masUno)
// console.log(numeros)

const numbers = [3, 6, 2, 9, 1];
const sum = numbers.reduce((p, c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    return p + c;
}, 0);
console.log(sum);
