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
