class Entero {
    // Atributos
    Num;

    // Constructor
    constructor(Numero){
        this.Num = Numero;
    }

    // CLASS - Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numberInput');
        this.Num = parseInt(input.value, 10);
    }

    // CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }

    // CLASS - Mostrar el valor de Num
    showNum() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    // Obtener el valor de Num y mostrarlo
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
        return this.Num % 2 === 0;
    }

    esNegativoPositivo(){
        return this.Num >= 0;
    }

    factorial(){
        if(this.Num < 0) {
            return "No existe factorial de números negativos";
        }
        let resultado = 1;
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
        return sumaDivisores === this.Num;
    }

    // VERIFICAR SI ES PRIMO
    esPrimo() {
        if (this.Num <= 1) return false; 
        if (this.Num === 2) return true; 
        if (this.Num % 2 === 0) return false; 
        
        for (let i = 3; i <= Math.sqrt(this.Num); i += 2) {
            if (this.Num % i === 0) return false;
        }
        return true;
    }

    // CALCULAR SUCESIÓN DE FIBONACCI
    fibonacci() {
        if (this.Num <= 0) return "Número debe ser positivo";

        let serie = [];
        let a = 0;
        let b = 1;

        for (let i = 0; i < this.Num; i++) {
            serie.push(a);
            let temp = a + b;
            a = b;
            b = temp;
        }

        return serie.join(', ');
    }
}

// Las funciones = button HTML
var ClaseEntero = new Entero(0); // Se inicializa en 0

// Crear Objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum() {
    ClaseEntero.showNum();
}

// Incrementar el valor de Num
function IncrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

// Decrementar el valor de Num
function DecrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

// Verifica si es Par o Impar
function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es un número par" : "Es un número impar";
    ClaseEntero.showResultado(resp);
}

function esPositivoNegativoNum(){
    var respuesta = ClaseEntero.esNegativoPositivo();
    var resp = respuesta ? "Es un número positivo" : "Es un número negativo";
    ClaseEntero.showResultado(resp);
}

// Mostrar el factorial
function CalcularFactorial(){
    var resultado = ClaseEntero.factorial();
    ClaseEntero.showResultado("Factorial: " + resultado);
}

// Verifica si es número perfecto
function verificarPerfecto(){
    var resultado = ClaseEntero.esPerfecto();
    var resp = resultado ? "Es un número perfecto" : "No es un número perfecto";
    ClaseEntero.showResultado(resp);
}

function verificarPrimo(){
    var resultado = ClaseEntero.esPrimo();
    var resp = resultado ? "Es un número primo" : "No es un número primo";
    ClaseEntero.showResultado(resp);
}

function mostrarFibonacci() {
    var resultado = ClaseEntero.fibonacci();
    ClaseEntero.showResultado("Serie de Fibonacci: " + resultado);
}
