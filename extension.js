class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola, mi nombre es " + this.nombre + ". Tengo " + this.edad);
    }
}

// Aparte de la clase Persona le vamos a agregar una Clase programador, mediante la palabra clave extends para transferir la herencia.
// Le vamos a poner al constructor 3 propiedades, 2 las arrastro de la clase Persona, y la ultima la agrego.
// Usamos la palabra reservada 'super' dentro del constructor para "invocar" las 2 clases que queremos heredar desde la clase Persona.
// La tercera clase vamos a declararla usando this ya que es ajena a la herencia y por lo tanto propia, y nueva.
// Luego vamos a agregar por fuera del constructor a un metodo que se llamara codear y le agregamos valores por parametro.

class Programador extends Persona {
    constructor(nombre, edad, aniosDeExperiencia) {
        super(nombre, edad);
        this.aniosDeExperiencia = aniosDeExperiencia;
    }

    codear() {
        console.log("Soy " + this.nombre + " . Codeo desde hace " + this.aniosDeExperiencia + ' anios.');
    }
}

var martin = new Persona('Martin', 26);
var programador = new Programador('Maria', 37, 4);
martin.saludar();
programador.codear();
