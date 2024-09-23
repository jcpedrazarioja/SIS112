class Entero {
    //Atributos
    Num;

    //Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;  
    }

    //CLASS- Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroInput')
        this.Num = parseInt(input.value, 10)
    }


    //CLASS- Obtener el valor del numero 
    getNum() {
        return this.Num;    
    }

    //CLASS- Mostra el vaalor del numero
    showNum() {
        const resultadoDiv = document.getElementById('resultado')
        resultadoDiv.textContent = this.getNum();
    }

    showResultado(respuesta) {
        const resultadoDiv = document.getElementById('resultado')
        resultadoDiv.textContent = respuesta;
    }

    incrementarNum(){
        this.Num = this.Num + 1;
    }

    decrementarNum(){
        this.Num = this.Num - 1;
    }
 
    // Estos dos son lo mismo solo que resumido
    // esParImpar(){
    //     if (this.Num % 2 !== 0){
    //         return true;
    //     }else{
    //         return false
    //     }
    // }
    esParImpar(){
        return (this.Num % 2 == 0)
    }

    esPosiNega(){
        return (this.Num >= 0)
    }

    factorial(){
        if (this.Num < 0) return "No hay factorial de numero negativos";
        let factorial = 1, i = this.Num;
        while (i > 1) factorial *= i--;
        return factorial;
    }

    esPerfecto(){
        let suma = 0;  // Inicializamos una variable para almacenar la suma de divisores

        // Recorremos desde 1 hasta Num-1 para encontrar los divisores
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {  // Si i es divisor de Num
                suma += i;  // Añadimos i a la suma
            }
        } 
        // Comprobamos si la suma de los divisores es igual al número
        return suma === this.Num;
    }

    esPrimo(){
        if (this.Num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(this.Num); i++) {
            if (this.Num % i === 0) return false;
        }
        return true;
    }

    Fibonucci(){
        if (this.Num <= 0) return "No hay sucesión de Fibonacci para números menores o iguales a 0";
        
        let fibo = [0, 1];
        while (fibo[fibo.length - 1] + fibo[fibo.length - 2] <= this.Num) {
            fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        }
        
        return fibo;
    }

    esArmstrong() {
        let numStr = this.Num.toString();  // Convertimos el número a cadena
        let numLength = numStr.length;  // Obtenemos el número de dígitos
        let suma = 0;
        // Sumamos los cubos de los dígitos
        for (let i = 0; i < numLength; i++) {
            suma += Math.pow(parseInt(numStr[i]), 3);
        }
        // Comparamos si la suma de los cubos es igual al número original
        return suma === this.Num;
    }

    esPerfectoGeneralizado(k) {
        let suma = 0;
        // Recorremos los divisores propios del número
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                // Sumamos la k-ésima potencia de los divisores propios
                suma += Math.pow(i, k);
            }
        }
        // Comparamos la suma con la k-ésima potencia del número original
        return suma === Math.pow(this.Num, k);
    }

    calcularFilaPascal() {
        let fila = [1]; // La primera posición siempre es 1
        for (let i = 1; i <= this.Num; i++) {
            fila[i] = fila[i - 1] * (this.Num - i + 1) / i;
        }
        return fila;
    }

    cifrarCesar(desplazamiento) {
        let resultado = '';
        for (let i = 0; i < this.Num.length; i++) {
            let char = this.Num[i];
            if (char.match(/[a-z]/i)) { // Verifica si el carácter es una letra
                let codigo = char.charCodeAt(0);
                // Manejo de mayúsculas
                if (codigo >= 65 && codigo <= 90) {
                    char = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
                }
                // Manejo de minúsculas
                else if (codigo >= 97 && codigo <= 122) {
                    char = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
                }
            }
            resultado += char; // Añade el carácter cifrado al resultado
        }
        return resultado;
    }

    tienePrimoGemelo() {
        // Función auxiliar para verificar si un número es primo
        const esPrimo = (num) => {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        };
        // Verificar si N tiene un primo gemelo
        if (esPrimo(this.Num)) {
            // Verificar si N-2 o N+2 también son primos
            return esPrimo(this.Num - 2) || esPrimo(this.Num + 2);
        }
        return false;
    }

    descomponerEnFactoresPrimos() {
        let num = this.Num;
        let factores = [];
        // Encontrar el número de veces que 2 divide a num
        let potencia = 0;
        while (num % 2 === 0) {
            num /= 2;
            potencia++;
        }
        if (potencia > 0) factores.push([2, potencia]); // Añadir el factor 2 con su potencia
        // Encontrar otros factores primos impares
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            potencia = 0;
            while (num % i === 0) {
                num /= i;
                potencia++;
            }
            if (potencia > 0) factores.push([i, potencia]); // Añadir el factor primo con su potencia
        }
        // Si num es mayor que 2, es un factor primo restante
        if (num > 2) factores.push([num, 1]);
    
        return factores;
    }

    calcularCatalan() {
        // Función auxiliar para calcular el factorial
        const factorial = (num) => {
            let resultado = 1;
            for (let i = 1; i <= num; i++) {
                resultado *= i;
            }
            return resultado;
        };
        // Fórmula de los números de Catalan: C(n) = (2n)! / ((n+1)! * n!)
        let n = this.Num;
        let catalan = factorial(2 * n) / (factorial(n + 1) * factorial(n));
        
        return catalan;
    }
    esMersenne() {
        let num = this.Num;
        // Comprobamos si num + 1 es una potencia de 2
        let p = Math.log2(num + 1); 
        if (p % 1 !== 0) return false; // Si p no es entero, no es de Mersenne
        // Verificamos si p es primo
        return this.esPrimo(p); // Usamos la función de primo existente
    }
}

// Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//crear el objeto 
function cargarNum() {
    ClaseEntero.setNum();
}

//mostrar el valor de num en html
function mostrarNum(){
    ClaseEntero.showNum();
}

function incrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

function decrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par":"Es Num Impar";
    ClaseEntero.showResultado(resp)
}

function esPosiNegaNum(){
    var respuesta = ClaseEntero.esPosiNega();
    var resp = respuesta ? "Es Num Positivo":"Es Num Negativo";
    ClaseEntero.showResultado(resp)
}

function factorialNum(){
    var respuesta = ClaseEntero.factorial();
    ClaseEntero.showResultado("Factorial:" + respuesta)
}

function esPerfectoNum(){
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta ? "Es Num perfecto":"No es Num perfecto"
    ClaseEntero.showResultado(resp)
}

function esPrimoNum(){
    var respuesta = ClaseEntero.esPrimo();
    var resp = respuesta ? "Es Num Primo" : "No es Num Primo";
    ClaseEntero.showResultado(resp);
}

function FibonucciNum(){
    var respuesta = ClaseEntero.Fibonucci();
    ClaseEntero.showResultado("Fibonacci: " + respuesta.join(", "));
}

function esArmstrongNum(){
    var respuesta = ClaseEntero.esArmstrong();
    var resp = respuesta ? "Es Num Armstrong" : "No es Num Armstrong";
    ClaseEntero.showResultado(resp);
}

function esPerfectoGeneralizadoNum(){
    const k = parseInt(document.getElementById('kInput').value, 10);
    var respuesta = ClaseEntero.esPerfectoGeneralizado(k);
    var resp = respuesta ? `Es Num perfecto generalizado con k=${k}` : `No es Num perfecto generalizado con k=${k}`;
    ClaseEntero.showResultado(resp);
}

function calcularFilaPascalNum() {
    var respuesta = ClaseEntero.calcularFilaPascal();
    ClaseEntero.showResultado("Fila de Pascal: " + respuesta.join(", "));
}

function cifrarCesarNum() {
    var desplazamiento = parseInt(prompt("Ingresa el valor del desplazamiento:"));
    var respuesta = ClaseEntero.cifrarCesar(desplazamiento);
    ClaseEntero.showResultado("Cifrado César: " + respuesta);
}

function tienePrimoGemeloNum() {
    var respuesta = ClaseEntero.tienePrimoGemelo();
    var resp = respuesta ? "Tiene un primo gemelo" : "No tiene primo gemelo";
    ClaseEntero.showResultado(resp);
}

function descomponerEnFactoresPrimosNum() {
    var respuesta = ClaseEntero.descomponerEnFactoresPrimos();
    var resultadoFormateado = respuesta.map(f => f[0] + "^" + f[1]).join(", ");
    ClaseEntero.showResultado("Factores primos: " + resultadoFormateado);
}

function calcularCatalanNum() {
    var respuesta = ClaseEntero.calcularCatalan();
    ClaseEntero.showResultado("Número de Catalan: " + respuesta);
}

function esMersenneNum() {
    var respuesta = ClaseEntero.esMersenne();
    var resp = respuesta ? "Es un número de Mersenne" : "No es un número de Mersenne";
    ClaseEntero.showResultado(resp);
}