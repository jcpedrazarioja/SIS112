class Persona {
    constructor(nombre, edad, carrera, universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
    }
  
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' anios.'
    }
  
    cumpleanios() {
      return 'Felicidades! tienes ' + this.edad + ' anios.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera;
    }
   
    Universidad() {
        return 'Estoy estudiando en la ' + this.universidad;
      }

    Modificar_Saludar() {
        this.nombre = prompt("Ingrese su nombre porfavor ")
        return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' anios';
    }

    Modificar_Cumpleanios() {
        this.edad = prompt("Ingrese su edad porfavor ")
        return 'Felicidades! tienes ' + this.edad + ' anios';
    }

    Modificar_Estudiar() {
        this.carrera = prompt("Ingrese la carrera que estudia porfavor")
        return 'Estoy estudiando ' + this.carrera;
    }

    Modificar_Universidad(){
        this.universidad = prompt("Ingrese la universidad en la que estudia porfavor ")
        return 'Estoy estudiando en la ' + this.universidad;
    }

    Eliminar_Saludar() {
        return ""
    }

    Eliminar_Cumpleanios() {
        return ""
    }

    Eliminar_Estudiar() {
        return ""
    }

    Eliminar_Universidad() {
        return ""
    }

  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona('Julio', 19, 'Ingeniería Industrial', 'Universidad Catolica Boliviana');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad = document.getElementById('universidad');
  
  // Funcion para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Funcion para cumpleanios
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Funcion para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }

  // Funcion para universidad
  function botonUniversidad() {
    universidad.textContent = persona.Universidad();
  }

  // Funcion para Modificar saludar
  function botonModificarSaludar() {
    saludar.textContent = persona.Modificar_Saludar();
  }
  // Funcion para Modificar cumpleanios
  function botonModificarCumpleanios() {
    edad.textContent = persona.Modificar_Cumpleanios();
  }

  // Funcion para Modificar carrera
  function botonModificarEstudiar() {
    carrera.textContent = persona.Modificar_Estudiar();
  }
   // Funcion para Modificar universidad
   function botonModificarUniversidad() {
    universidad.textContent = persona.Modificar_Universidad();
  }

    // Funcion para eliminar saludar
    function botonEliminarSaludar() {
    saludar.textContent = persona.Eliminar_Saludar();
  }

  // Funcion para eliminar cumpleanios
  function botonEliminarCumpleanios() {
    edad.textContent = persona.Eliminar_Cumpleanios();
  }

  // Funcion para eliminar carrera
  function botonEliminarEstudiar() {
    carrera.textContent = persona.Eliminar_Estudiar();
  }
   // Funcion para eliminar universidad
   function botonEliminarUniversidad() {
    universidad.textContent = persona.Eliminar_Universidad();
  }
