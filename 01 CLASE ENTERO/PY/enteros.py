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
    
    def esNumeroPerfecto(self):
        suma_divisores = sum(i for i in range(1, self.Num) if self.Num % i == 0)
        return suma_divisores == self.Num
    
    def esNumeroPrimo(self):
        if self.Num <= 1:
            return False
        for i in range(2, int(self.Num ** 0.5) + 1):
            if self.Num % i == 0:
                return False
        return True
    
    def mostrarFibonacci(self):
        a, b = 0, 1
        fibonacci_sequence = []
        for _ in range(self.Num):
            fibonacci_sequence.append(a)
            a, b = b, a + b
        print(fibonacci_sequence)

    def menu(self):
        while True:
            print("\nMenu: ")
            print("1. Establecer un nuevo numero")
            print("2. Mostrar el numero actual")
            print("3. Incrementar el numero")
            print("4. Decrementar el numero")
            print("5. Verificar si es par o impar")
            print("6. Verificar si es numero perfecto")
            print("7. Verificar si es numero primo")
            print("8. Mostrar la serie de Fibonacci")
            print("9. Salir")

            opcion = input("Ingrese una opcion: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incrementarNum()
            elif opcion == '4':
                self.decrementarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El numero es par.")
                else:
                    print("El numero es impar.")
            elif opcion == '6':
                if self.esNumeroPerfecto():
                    print("El numero es perfecto.")
                else:
                    print("El numero no es perfecto.")
            elif opcion == '7':
                if self.esNumeroPrimo():
                    print("El numero es primo.")
                else:
                    print("El numero no es primo.")
            elif opcion == '8':
                self.mostrarFibonacci()
            elif opcion == '9':
                print("¡Hasta luego!")
                break
            else:
                print("Opcion invalida. Intente nuevamente.")

# Ejemplo de uso
numero = Entero(3)
numero.menu()
