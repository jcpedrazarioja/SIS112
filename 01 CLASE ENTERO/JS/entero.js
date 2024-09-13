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

    //Obtener el valor de Numn y mostrarlo
    showResultado() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    incrementarNum(){
        this.Num = this.Num + 1;
    }

    decrementarNum(){
        this.Num = this.Num - 1;
    }

    esParImpar(){
        if (this.Num %2 ==0) {
            return true;
        }else{
            return false;
        }
    }

    esPositivoNegativo(){
        if (this.Num > 0){
            return true;
        }else{
            return false;
        }
    }
}

//Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//Crear Objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum() {
    ClaseEntero.showResultado();
}
//Incrementar el valor de Num
function IncrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showResultado();
}
//Decrementar el valor de Num
function DecrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showResultado();
}
//Verifica si es Par o Impar
function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par":"Es Num Impar"
    ClaseEntero.showResultado(resp);
}
function esPositivoNegativoNum(){
    var respuesta = ClaseEntero.esPositivoNegativo();
    var resp = respuesta ? "Es Num Pos":"Es Num Neg"
    ClaseEntero.showResultado(resp);
}

