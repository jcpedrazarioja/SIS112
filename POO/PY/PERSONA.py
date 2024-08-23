class Persona:
    # Method -> Constructor
    def __init__(self, nombre, edad, carrera):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera

    # Method -> Saludar 
    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años. ")

    # Method -> Cumpleaños
    def cumpleaños(self):
        self.edad += 1
        print(f"¡Feliz cumpleaños! Ahora tengo {self.edad} años.")

    # Method -> Estudiar
    def estudiar(self):
        print(f"Estoy estudiando {self.carrera}.")

#Crear una instancia de la clase Persona
persona1 = Persona("Juan", 20, "Medicina")
persona2 = Persona("Maria", 21, "Odontologia")

#Llamar metodos
persona1.saludar()
persona2.saludar()
#persona1.estudiar()