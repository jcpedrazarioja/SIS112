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

const miLista = new ListaCadenas();

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
