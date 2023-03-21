// Ejemplo de uso del objeto this:

var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Aleman',
    amistoso: true,
    owner: 'Mirko',
    info: function(){
        console.log('Mi perro es un ' + this.raza)
    },
};
mascota.info();