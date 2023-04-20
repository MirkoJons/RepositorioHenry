// En los comienzos de JavaScript se utilizaba la sintaxis conocida como "funcion constructora"
// Queremos crear la plantilla de un auto como ejemplo. Para ello vamos a declarar la funcion "Auto"
// Es importante aclarar que al declarar una clase, la primera letra del nombre SIEMPRE debe ir en MAYUSCULAS.

// Las clases cuentan con 2 tipos de datos, por un lado, cuentan con PROPIEDADES. Por el otro, al igual que a los objetos o arreeglos,
// podremos definirles una serie de METODOS.

// function Auto(puertas, color, marca, anio, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.anio = anio;
//     this.ruedas = ruedas;


// }

// Lo que hicimos fue poner el nombre de la clase 'Auto', luego dentro de (los parametros)
// Luego abajo creamos las propiedades de la clase, utilizando la palabra reservada 'this' usando la nomenclatura "this.propiedad1", y las igualamos a su valor recibido por parametro.

// Ahora lo unico que nos queda es incializar nuestra clase auto, para lo cual declararemos una variable como 'miPrimerAuto'


// Ahora para visualizar lo que hicimos llamaremos un console log de la instancia, y de la propiedad marca.

// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);


// Supongamos ahora que queremos que nuestros autos tengan un metodo que nos de informacion acerca de la instancia.
// Para esto declararemos una funcion dentro de la clase utilizando la nomenclatura previamente vista:

// function Auto(puertas, color, marca, anio, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.anio = anio;
//     this.ruedas = ruedas;

//     this.informacion = function () {
//         console.log("Este es un " + this.marca + " de color " + this.color);
//     }
// }

// var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4);

// miPrimerAuto.informacion();

//  Aca lo que hago es llamar a la funcion informacion dentro de la clase miPrimerAuto.

class Auto{
    constructor(puertas, color, marca, anio, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.anio = anio;
        this.ruedas = ruedas;  
    }
    informacion = function () {
        console.log("Este es un " + this.marca + " de color " + this.color);
    }
}

var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);

miSegundoAuto.informacion()

console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);

