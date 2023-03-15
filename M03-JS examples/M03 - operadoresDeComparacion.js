console.log(4<7)
console.log(4>1)
console.log(4>4)
console.log(4==7)
console.log(4!=9)



console.log(3 == 3);
3 === 3;
3 == '3';
3 === '3';

var a = 1;
var b = 2;
var c = (a = b); // Al escribirlo de esta forma lo que hago es decirle al sistema que lea "b es igual a" primero.
// Lo que esto genera es que el valor original var a = 1 quede sobre escrito por el valor de b, que en este caso es 2. 
// Luego lo que realiza es igualar a c con a, pero con el nuevo valor de a, por lo que c = 2.

console.log(a);
console.log(b);
console.log(c);
