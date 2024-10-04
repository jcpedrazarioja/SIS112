class ListaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
    }
}

const listaEnteros = new ListaEnteros();
listaEnteros.agregar(21);
listaEnteros.agregar(12);
listaEnteros.agregar(15);
listaEnteros.agregar(30);
console.log(listaEnteros.lista);

var a = listaEnteros.lista[0];
console.log(a);

var b = listaEnteros.lista[1];
console.log(b);

var c = listaEnteros.lista[2];
console.log(c);

var d = listaEnteros.lista[3];
console.log(d);


function actualizarResultado() {
    document.getElementById('result').innerHTML = `Resultado: [ ${miLista.lista.join(', ')} ]`;
}

function agregar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        miLista.agregar(valor);
        actualizarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function eliminar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        miLista.eliminar(valor);
        actualizarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function buscar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        const index = miLista.buscar(valor);
        alert(index !== -1 ? `El número ${valor} está en la posición ${index}` : `${valor} no se encuentra en la lista.`);
    }
}

function ordenar() {
    miLista.ordenar();
    actualizarResultado();
}