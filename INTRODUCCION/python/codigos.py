def HolaMundo():
    print ("Hola Mundo")

def obtenerEdad():
    obtener_edad = input("Ingrese su edad: ")
    print ("Tu edad es: ",obtener_edad)


def calcular_edad(año_nacimiento):
    año_actual = 2024
    edad = año_actual - año_nacimiento
    return edad

año_nacimiento = int(input("Ingresa el año de tu nacimiento: "))
edad = calcular_edad(año_nacimiento)
print(f"Tienes {edad} años")

HolaMundo()
obtenerEdad()
