class ListaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.mostrar();
    }

    mostrar() {
        const ul = document.getElementById('lista');
        ul.innerHTML = ''; // Limpia la lista
        this.lista.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            ul.appendChild(li);
        });
    }
}

let miLista = new ListaEnteros();
miLista.agregar(5);
miLista.agregar(2);
console.log(miLista.lista);
