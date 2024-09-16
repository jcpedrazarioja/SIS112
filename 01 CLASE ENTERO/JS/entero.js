class Entero {
    //Atributos
    Num;

    //Constructor
    constructor(Numero){
        this.Num = Numero;
    }

    //CLASS - Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numberInput')
        this.Num = parseInt(input.value, 10);
    }

    //CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }

    //CLASS - Mostrar el valor de Num
    showNum() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    //Obtener el valor de Numn y mostrarlo
    showResultado(respuesta) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;
    }

    incrementarNum(){
        this.Num = this.Num + 1;
    }

    decrementarNum(){
        this.Num = this.Num - 1;
    }

    esParImpar(){
        if(this.Num % 2 ==0){
            return true;
        } else{
            return false;
        }
    }

    esNegativoPositivo(){
        if (this.Num >= 0){
            return true;
        } else{
            return false;
        }
    }

    factorial(){
        if(this.Num < 0) {
            return "No existe factorial de numeros negativos";
        }
        let resultado = 1
        for (let i = 1; i <= this.Num; i++) {
            resultado *= i;
        }
        return resultado;
    }

    // VERIFICAR SI ES PERFECTO
    esPerfecto(){
        let sumaDivisores = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === this.Num
    }

}

//Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//Crear Objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum() {
    ClaseEntero.showNum();
}
//Incrementar el valor de Num
function IncrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}
//Decrementar el valor de Num
function DecrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}
//Verifica si es Par o Impar
function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par":"Es Num Impar"
    ClaseEntero.showResultado(resp);
}
function esPositivoNegativoNum(){
    var respuesta = ClaseEntero.esNegativoPositivo();
    var resp = respuesta ? "Es Num Pos":"Es Num Neg"
    ClaseEntero.showResultado(resp);
}
//Mostrar el factorial
function CalcularFactorial(){
    var resultado = ClaseEntero.factorial();
    ClaseEntero.showResultado("Factorial: " + resultado);
}
//Verifica numero perfecto
function verificarPerfecto(){
    var resultado = ClaseEntero.esPerfecto();
    var resp = resultado ? "Es un numero perfecto " : "No es un numero perfecto";
    ClaseEntero.showResultado(resp);
}
