class Persona {
    constructor(nombre, edad, carrerqa) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;

    }

    saludar() {
        console.log('Hola, mi nombre es' + this.nombre + ' y tengo' + this.edad + ' años.');
    }

    cumpleaños() {
        this.edad = this.edad + 1;
        console.log('¡Feliz Cumpleaños! Ahora tengo ' + this.edad + ' años.');
    }

    estudiar() {
        console.log('Estoy estudiando' + this.carrera.);
    }
}

// Crear una instancia de la clase Persona
const personal = new Persona("Ana", 22, "Ingenieria Informatica");

//Llamar metodos
persona1.saludar();
persona1.estudiar();