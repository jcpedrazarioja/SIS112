class Entero:
    def __init__(self, Numero):
        self.Num = Numero

    def setNum(self):
        input_value = input("Enter a number: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num
    
    def showNum(self):
        print(self.getNum())

    def showResultado(self, respuesta):
        print(respuesta)

    def incrementarNum(self):
        self.Num += 1

    def decrementarNum(self):
        self.Num -= 1

    def esParImpar(self):
        return (self.Num % 2 == 0)
    
    def menu(self):
        while True:
            print("\nMenu: ")
            print("1. Establecer un nuevo numero")
            print("2. Mostrar el numero actual")
            print("3. Incrementar el numero")
            print("4. Decrementar el numero")
            print("5. Verificar si es par o impar")
            print("6. Salir")

            opcion = input("Ingrese una opcion: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incrementarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El numero es par.")
                else:
                    print("El numero es impar.")
            elif opcion == '6':
                print("¡Hasta luego!")
                break
            else:
                print("Opcion invalida. Intente nuevamente.")

numero = Entero(10)

numero.menu()
