class ListaCadenas {
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
        this.lista.sort();
    }
}

// Inicializamos la lista y agregamos algunos valores
const miLista = new ListaCadenas();
miLista.agregar('Hola');
miLista.agregar('Mundo');
miLista.agregar('UCB');

// Retornar la cadena con  mayor caracteres
//var = let
/*
var a = miLista.lista[0]
console.log(a);
var aCant = a.length
console.log(aCant);

var b = miLista.lista[1]
console.log(b);
var bCant = b.length
console.log(bCant);

var c = miLista.lista[2]
console.log(c);
var cCant = c.length
console.log(cCant);
//-------------------------------------------------------- BUSCA EL MAYOR

var mayor = 0;
var posicion = -1;
if (aCant > mayor) {
    mayor = aCant;
    posicion = 0;
}
//----------------
if (bCant > mayor) {
    mayor = bCant;
    posicion = 1;
}
//--------------------------
if (cCant > mayor) {
    mayor = cCant;
    posicion = 2;
}
*/

//REALIZAR EL MISMO EJERCICIO UTILIZANDO FOR 
var mayor = 0;
var posicion = -1;
var cadenaMayor = '';

for (var i = 0; i < miLista.lista.length; i++) {
    var elemento = miLista.lista[i];
    console.log(elemento); // Imprime el elemento
    var longitud = elemento.length;
    console.log(longitud); // Imprime la longitud del elemento

    // Busca el mayor
    if (longitud > mayor) {
        mayor = longitud;
        posicion = i;
        cadenaMayor = elemento; // Guarda la cadena de mayor longitud
    }
}

// Al final, mayor contendrá la longitud más alta y cadenaMayor la cadena correspondiente
console.log("La mayor cantidad de caracteres tiene:", mayor);
console.log("La CADENA con mayor cantidad de caracteres es:", cadenaMayor);



console.log(miLista.lista);












document.getElementById('btnAgregar').onclick = function() {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        miLista.agregar(valor);
        actualizarLista();
        document.getElementById('inputValor').value = '';
    }
};

document.getElementById('btnEliminar').onclick = function() {
    const valor = document.getElementById('inputValor').value;
    miLista.eliminar(valor);
    actualizarLista();
    document.getElementById('inputValor').value = '';
};

document.getElementById('btnBuscar').onclick = function() {
    const valor = document.getElementById('inputValor').value;
    const index = miLista.buscar(valor);
    alert(index !== -1 ? `Encontrado en posición: ${index}` : 'No encontrado');
};

document.getElementById('btnOrdenar').onclick = function() {
    miLista.ordenar();
    actualizarLista();
};

function actualizarLista() {
    const listaElement = document.getElementById('listaCadenas');
    listaElement.innerHTML = '';
    miLista.lista.forEach(cadena => {
        const li = document.createElement('li');
        li.textContent = cadena;
        listaElement.appendChild(li);
    });
}
