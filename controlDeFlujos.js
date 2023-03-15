function viajar (destino) {
    if(destino==='Brasil') {
        console.log('Gire a la IZQUIERDA');
    } else if (destino === 'Argentina') {
    console.log('Gire a la DERECHA');
    } else {
        console.log('Nos PERDIMOS');
    }
}

viajar ('Prueba');
viajar ('Brasil');
viajar ('Argentina');

function puedeManejar (edad) {
    if (edad >= 18) {
        console.log(true)
    } else {
        console.log(false)
    }
}

puedeManejar (17)

// Funciones math

Math.pow(2, 3);
// 8

Math.round(0.49);
// 0

Math.round(0.50);
// 1

Math.floor(5.93);
// 5

Math.ceil(3.27);
// 4

Math.max(1, 2, 3, 4, 5);
// 5 

Math.min(1, 2, 3, 4, 5);
// 1

Math.random( );
// 0.8051478163546508