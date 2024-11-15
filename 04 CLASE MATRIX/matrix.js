class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

    // Ejemplo 1: Patrón Aleatorio
   /* llenarMatrizAleatorio() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = Math.floor(Math.random() * 3); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }

    //Primera fila con 2, el resto 0
    llenarMatrizPrimeraFila(){
        for (let i = 0; i < this.filas; i++) {

            for (let j = 0; j < this.columnas; j++) {

                if (i == 0) {
                    this.matriz[i][j] = 2;
                }else{
                    this.matriz[i][j] = 0;
                }
                
            }
            
        }
        this.dibujarMatriz();
    }

    llenarMatrizPrimeraColumna(){
        for (let i = 0; i < this.filas; i++) {

            for (let j = 0; j < this.columnas; j++) {

                if (j == 0) {
                    this.matriz[i][j] = 2;
                }else{
                    this.matriz[i][j] = 0;
                }
                
            }
            
        }
        this.dibujarMatriz();
    }

    llenarMatrizDiagonalContrario() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }
    
    llenarMatrizBordes2() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila o columna,
                // estamos en el borde exterior de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0;
                } 
                // Si estamos en el borde del cuadrado interno, eliminamos ese borde asignando 0.
                else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 2;
                } 
                // Si estamos dentro del cuadrado interno, asignamos 2.
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizPiramide() {
    // Calcular el centro de la matriz
    const centro = Math.floor(this.columnas / 2);

       // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
        
       // Rellenar la pirámide
        for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
        const inicio = centro - i;
        const fin = centro + i;
        
        for (let j = 0; j < this.columnas; j++) {
        if (j >= inicio && j <= fin) {
        this.matriz[i][j] = 2; // Dibujar la pirámide en la parte superior
        } else {
        this.matriz[i][j] = 0; // Resto en 0
        }
        }
        }
        this.dibujarMatriz();
        }

        llenarMatrizEnCruzConBordes() {
            const centroFila = Math.floor(this.filas / 2);  // Calcula la fila central
            const centroColumna = Math.floor(this.columnas / 2); // Calcula la columna central
        
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    // Verificar si estamos en los bordes
                    if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;  // Borde
                    }
                    // Verificar si estamos en las filas o columnas que forman la cruz (con una fila y columna más)
                    else if (i === centroFila || j === centroColumna || i === centroFila -1 || j === centroColumna -1) {
                        this.matriz[i][j] = 1;  // Parte de la cruz
                    }
                    // Dejar en blanco los cuadrantes
                    else {
                        this.matriz[i][j] = 0;
                    }
                }
            }
        
            this.dibujarMatriz();
        }
        
llenarMatrizSecuencia(){
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = i % 3
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuencia2(){
    
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = j % 3
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuencia_0_al_7(){
    this.vaciarMatriz();
    var puntero = 0
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = puntero;
            if(puntero == 7){
                puntero = -1;
            }

            puntero = puntero + 1;
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuenciaColumna_0_al_7(){
    this.vaciarMatriz();
    var puntero = 0
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = puntero;
            if(puntero == 7){
                puntero = -1;
            }

            puntero = puntero + 1;
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuencia3(){
    this.vaciarMatriz();
    var puntero = 7
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = puntero;
            if(puntero == 0){
                puntero = 8;
            }

            puntero = puntero - 1;
    
        }
    }
    this.dibujarMatriz();
}

llenarMatrizSecuencia4(){
    this.vaciarMatriz();
    var intercambio = "disminuir"; //la condicional por defecto
    var puntero = 7;
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = puntero;
            //////////////////////////////////////////// 7 al 0
            if (intercambio == "disminuir") {
                if(puntero == 0){
                    intercambio = "incrementar"
                }
                puntero = puntero - 1;
            }
            //////////////////////////////////////// 0 al 7
            if (intercambio == "incrementar"){
                if(puntero == 7){
                    puntero = puntero -1;
                    intercambio = "disminuir"
                }
                puntero = puntero +1;
            }
        }
    }
    this.dibujarMatriz();
}


    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
*/

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
 //Ejercicio 1 
 llenarMatrizConUnos() {
    this.vaciarMatriz(); // Inicializa o limpia la matriz (probablemente la llena de ceros).
    for (let i = 0; i < this.filas; i++) { // Recorre cada fila de la matriz.
        for (let j = 0; j < this.columnas; j++) { // Recorre cada columna de la matriz dentro de la fila actual.
            this.matriz[i][j] = 1; // Asigna el valor 1 a la celda en la posición (i, j).
        }
    }
    this.dibujarMatriz(); // Dibuja o actualiza visualmente la matriz después de llenarla con unos.
}

//Ejercicio 2
llenarMatrizMarcoInterno() {
    this.vaciarMatriz(); // Inicializa o limpia la matriz (probablemente llena de ceros).
    for (let i = 0; i < this.filas; i++) { // Recorre cada fila de la matriz.
        for (let j = 0; j < this.columnas; j++) { // Recorre cada columna de la matriz dentro de la fila actual.
            // Verificar si es borde
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 0; // Si es una celda del borde, se asigna el valor 0.
            } else {
                this.matriz[i][j] = 1; // Si no es borde, se asigna el valor 1.
            }
        }
    }
    this.dibujarMatriz(); // Dibuja o actualiza visualmente la matriz después de llenarla con el marco interno.
}

// Ejercicio 3
llenarMatrizCruces() {
    this.vaciarMatriz(); // Inicializa o limpia la matriz (probablemente llena de ceros).
    const filaCentral = Math.floor(this.filas / 2) - 1; // Calcula la fila central (índice medio de las filas, ajustado).
    const columnaCentral = Math.floor(this.columnas / 2) - 1; // Calcula la columna central (índice medio de las columnas, ajustado).
    for (let i = 0; i < this.filas; i++) { // Recorre cada fila de la matriz.
        for (let j = 0; j < this.columnas; j++) { // Recorre cada columna de la matriz dentro de la fila actual.
            // Asigna 1 a la fila y columna centrales
            if (i === filaCentral || j === columnaCentral) {
                this.matriz[i][j] = 1; // Si está en la fila o columna central, asigna el valor 1.
            } else {
                this.matriz[i][j] = 0; // Si no está en la fila ni columna central, asigna el valor 0.
            }
        }
    }
    this.dibujarMatriz(); // Dibuja o actualiza visualmente la matriz después de llenarla con el patrón de cruces.
}

//Ejercicio 4
llenarBordesYDiagonales() {
    this.vaciarMatriz(); // Limpia la matriz actual para empezar con una vacía.
    for (let i = 0; i < this.filas; i++) { // Recorre las filas.
        for (let j = 0; j < this.columnas; j++) { // Recorre las columnas.
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                // Si estamos en el borde de la matriz, asignar 1.
                this.matriz[i][j] = 1;
            } else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                // Si estamos en la segunda capa de bordes internos, asignar 0.
                this.matriz[i][j] = 0;
            } else if (i === j || i + j === this.columnas - 1) {
                // Si estamos en las diagonales principales, asignar 2.
                this.matriz[i][j] = 2;
            }
        }
    }
    this.dibujarMatriz(); // Muestra la matriz generada.
}


//Ejercicio 5
llenarBandera() {
    this.vaciarMatriz(); // Limpia la matriz.
    const tercioFilas = Math.floor(this.filas / 3); // Divide las filas en tres partes iguales.
    for (let i = 0; i < this.filas; i++) { // Recorre las filas.
        for (let j = 0; j < this.columnas; j++) { // Recorre las columnas.
            if (i < tercioFilas) {
                // Primera franja (superior), asignar 1.
                this.matriz[i][j] = 1;
            } else if (i < 2 * tercioFilas) {
                // Segunda franja (central), asignar 2.
                this.matriz[i][j] = 2;
            } else {
                // Tercera franja (inferior), asignar 0.
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz(); // Muestra la matriz.
}

//Ejercicio 6
llenarRellenoAlterno() {
    this.vaciarMatriz(); // Limpia la matriz.
    for (let i = 0; i < this.filas; i++) { // Recorre las filas.
        for (let j = 0; j < this.columnas; j++) { // Recorre las columnas.
            // Alterna entre 1 y 0 según si la fila es par o impar.
            this.matriz[i][j] = (i % 2 === 0) ? 1 : 0;
        }
    }
    this.dibujarMatriz(); // Muestra la matriz generada.
}

//Ejercicio 7
llenarZigZagHorizontal() {
    this.vaciarMatriz(); // Limpia la matriz.
    for (let i = 0; i < this.filas; i++) { // Recorre las filas.
        for (let j = 0; j < this.columnas; j++) { // Recorre las columnas.
            if (i === j) {
                // Si estamos en la diagonal principal, asignar 1.
                this.matriz[i][j] = 1;
            } else {
                // Para el resto de elementos, asignar 0.
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz(); // Muestra la matriz generada.
}

//Ejercicio 8
llenarEspiral() {
    this.vaciarMatriz();
    let row = 0;
    let col = 0;
    let direction = 0; 
    let steps = 1;
    let stepCount = 0;

    for (let i = 0; i < this.columnas * this.filas; i++) {
        this.matriz[row][col] = 1;

        stepCount++;

        if (stepCount === steps) {
            stepCount = 0;
            direction = (direction + 1) % 4;
            if (direction % 2 === 0) {
                steps++;
            }
        }

        switch (direction) {
            case 0: 
                if (col + 1 >= this.columnas) {
                    break; 
                }
                col++;
                break;
            case 1:
                if (row + 1 >= this.filas) {
                    break;
                }
                row++;
                break;
            case 2: 
                if (col - 1 < 0) {
                    break; 
                }
                col--;
                break;
            case 3:
                if (row - 1 < 0) {
                    break; 
                }
                row--;
                break;
        }
    }

    this.dibujarMatriz();
}
//Ejercicio 9
llenarTrianguloSuperiorIzquierdo() {
    this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i && j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

//Ejercicio 10

llenarTrianguloInferiorDerecho() {
    this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Llenar la mitad inferior derecha en forma de triángulo
                if (j >= this.columnas - i - 1) {
                    this.matriz[i][j] = 1;
                }
            }
        }
        this.dibujarMatriz();
    }

//Ejercicio 11

llenarCuadricula() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas - 1; i++) {  // Evitar la última fila
        if (i % 2 === 0) {
            // Fila completa de 1's
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        } else {
            // Fila con 1's al principio y al final
            this.matriz[i][0] = 1;  // Primer 1
            for (let j = 1; j < this.columnas - 1; j++) {
                this.matriz[i][j] = 0;  // Rellenar con 0's en el medio
            }
            this.matriz[i][this.columnas - 1] = 1;  // Último 1
        }
    }

    // Rellenar la última fila completamente con 0's
    for (let j = 0; j < this.columnas; j++) {
        this.matriz[this.filas - 1][j] = 0;
    }

    this.dibujarMatriz();
}


//Ejercicio 12
llenarTrianguloCentral() {
    this.vaciarMatriz();
    // Calcular el centro de la matriz
    const centro = Math.floor(this.columnas / 2);
    // Altura de la pirámide (mitad de la matriz)
    const alturaPiramide = Math.floor(this.filas / 2);
    // Rellenar la pirámide
    for (let i = 0; i < alturaPiramide; i++) {
    // Calcular los límites de cada fila de la pirámide
        const inicio = centro - i;
        const fin = centro + i;
        for (let j = 0; j < this.columnas; j++) {
            if (j >= inicio && j <= fin) {
            this.matriz[1 +i][j] = 1; // Dibujar la pirámide en la parte superior
            } else {
            this.matriz[i][j] = 0; // Resto en 0
            }
         }
     }
    this.dibujarMatriz();
}

//Ejercicio 13
llenarRombosConcentricos() {
    this.vaciarMatriz();

    const centro = Math.floor(this.columnas / 2);
    const alturaPiramide = Math.floor(this.filas / 2);

    // Dibujar la pirámide en la mitad superior
    for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
        const inicio = centro - i;
        const fin = centro + i;

        for (let j = inicio; j <= fin; j++) {
            this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
        }
    }

    // Dibujar la pirámide invertida en la mitad inferior
    for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide invertida
        const inicio = centro - i;
        const fin = centro + i;

        for (let j = inicio; j <= fin; j++) {
            this.matriz[this.filas - 1 - i][j] = 1; // Dibujar la pirámide invertida en la parte inferior
        }
    }

    this.dibujarMatriz();
}

//Ejercicio 14
llenarCrucesConcentricas() {
    this.vaciarMatriz();
    const filas = this.filas;
    const columnas = this.columnas;

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (
                // Evitar columnas 2 y 8
                j !== 1 && j !== 8 &&
                
                (
                    // Borde exterior de 1s
                    (i === 0 && j >= 2 && j <= columnas - 3) ||
                    (i === filas - 1 && j >= 2 && j <= columnas - 3) ||
                    (j === 0 && i >= 2 && i <= filas - 3) ||
                    (j === columnas - 1 && i >= 2 && i <= filas - 3) ||

                    // Segunda capa de 1s formando una cruz interna
                    (i === 2 && j >= 1 && j <= columnas - 2) ||
                    (i === filas - 3 && j >= 1 && j <= columnas - 2) ||
                    (j === 2 && i >= 1 && i <= filas - 2) ||
                    (j === columnas - 3 && i >= 1 && i <= filas - 2) ||

                    // Centro de la cruz
                    (i === Math.floor(filas / 2) && j >= 3 && j <= columnas - 4) ||
                    (j === Math.floor(columnas / 2) && i >= 3 && i <= filas - 4)
                )
            ) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }

    this.dibujarMatriz();
}



//Ejercicio 15

llenarBanderaDiagonal() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = i >= j ? 1 : 0;
        }
    }
    this.dibujarMatriz();
}

//Ejercicio 16

llenarCuadradoDentroDeCuadrado() {
    this.vaciarMatriz();
    const bordeExterior = 0;
    const bordeInterior = 2;
    const limiteExterior = this.filas - 1;
    const limiteInterior = this.filas - 3;

    // Dibujar el cuadrado exterior con 1
    for (let i = bordeExterior; i <= limiteExterior; i++) {
        this.matriz[bordeExterior][i] = 1; // Lado superior
        this.matriz[limiteExterior][i] = 1; // Lado inferior
        this.matriz[i][bordeExterior] = 1; // Lado izquierdo
        this.matriz[i][limiteExterior] = 1; // Lado derecho
    }

    // Dibujar el cuadrado interior con 2
    for (let i = bordeInterior; i <= limiteInterior; i++) {
        this.matriz[bordeInterior][i] = 2; // Lado superior
        this.matriz[limiteInterior][i] = 2; // Lado inferior
        this.matriz[i][bordeInterior] = 2; // Lado izquierdo
        this.matriz[i][limiteInterior] = 2; // Lado derecho
    }

    this.dibujarMatriz();
}

//Ejercicio 17

llenarBordesYCentro() {
    this.vaciarMatriz();
    
        const filas = this.filas;
        const columnas = this.columnas;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (i === 0 || i === filas - 1 || j === 0 || j === columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (
                    i >= Math.floor(filas / 3) &&
                    i < filas - Math.floor(filas / 3) &&
                    j >= Math.floor(columnas / 3) &&
                    j < columnas - Math.floor(columnas / 3)
                ) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }

//Ejercicio 18

llenarLineasParalelas() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas - 1; i++) {  // Evitar la última fila
        if (i % 2 === 0) {
            // Fila completa de 1's
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        } else {
            // Fila con 1's al principio y al final
            this.matriz[i][0] = 1;  // Primer 1
            for (let j = 1; j < this.columnas - 1; j++) {
                this.matriz[i][j] = 0;  // Rellenar con 0's en el medio
            }
            this.matriz[i][this.columnas - 1] = 1;  // Último 1
        }
    }

    // Rellenar la última fila completamente con 0's
    for (let j = 0; j < this.columnas; j++) {
        this.matriz[this.filas - 1][j] = 0;
    }

    this.dibujarMatriz();
}
//Ejercicio 19

llenarMarcasDeCruz() {
    this.vaciarMatriz();
    const intervalo = 4; // Ajusta este valor para cambiar la separación entre las marcas de X
    for (let i = 0; i < this.filas; i += intervalo) {
        for (let j = 0; j < this.columnas; j += intervalo) {
            // Dibuja la cruz "X" en cada intervalo
            if (i < this.filas && j < this.columnas) {
                this.matriz[i][j] = 1; // Esquina superior izquierda
            }
            if (i + 1 < this.filas && j + 1 < this.columnas) {
                this.matriz[i + 1][j + 1] = 1; // Diagonal hacia abajo
            }
            if (i + 2 < this.filas && j + 2 < this.columnas) {
                this.matriz[i + 2][j + 2] = 1; // Diagonal hacia abajo
            }
            if (i + 3 < this.filas && j + 3 < this.columnas) {
                this.matriz[i + 3][j + 3] = 1; // Diagonal hacia abajo
            }
        }
    }

    this.dibujarMatriz();
}
//Ejercicio 20

llenarRomboDeEsquinas() {
    this.vaciarMatriz();
        const tamRombo = 3; // Tamaño del rombo desde la esquina hacia el centro
        // Dibuja rombo en la esquina superior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][j] = 1;
                this.matriz[j][i] = 1;
            }
        }
        // Dibuja rombo en la esquina superior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[i][this.columnas - 1 - j] = 1;
                this.matriz[j][this.columnas - 1 - i] = 1;
            }
        }
        // Dibuja rombo en la esquina inferior izquierda
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][j] = 1;
                this.matriz[this.filas - 1 - j][i] = 1;
            }
        }
        // Dibuja rombo en la esquina inferior derecha
        for (let i = 0; i <= tamRombo; i++) {
            for (let j = 0; j <= tamRombo - i; j++) {
                this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1;
                this.matriz[this.filas - 1 - j][this.columnas - 1 - i] = 1;
            }
        }
        this.dibujarMatriz();
    }

//Ejercicio 21

llenarAjedrez() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = (i + j) % 2 === 0 ? 1 : 0;
        }
    }
    this.dibujarMatriz();
}

//Ejercicio 22
llenarMatrizRelojDeArena() {
    this.vaciarMatriz();
    // Calcular el centro de la matriz
    const centro = Math.floor(this.columnas / 2);
    // Altura de la pirámide (mitad de la matriz)
    const alturaPiramide = Math.floor(this.filas / 2);

    // Rellenar el triángulo en la parte superior
    for (let i = 0; i < alturaPiramide; i++) {
        const inicio = i;
        const fin = this.columnas - i - 1;
        for (let j = 0; j < this.columnas; j++) {
            // Condición para evitar la diagonal
            if (j >= inicio && j <= fin && j !== this.columnas - i - 1) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }

    // Rellenar el triángulo invertido en la parte inferior
    for (let i = 0; i < alturaPiramide; i++) {
        const inicio = i;
        const fin = this.columnas - i - 1;
        const filaActual = this.filas - i - 1;
        for (let j = 0; j < this.columnas; j++) {
            // Condición para evitar la diagonal
            if (j >= inicio && j <= fin && j !== this.columnas - i - 1) {
                this.matriz[filaActual][j] = 1;
            } else {
                this.matriz[filaActual][j] = 0;
            }
        }
    }

    // Añadir el "1" en la primera fila y primera columna (contando desde la derecha)
    this.matriz[0][this.columnas - 1] = 1;

    // Añadir el "1" en la décima fila y primera columna contando desde la derecha
    this.matriz[this.filas - 1][this.columnas - 1] = 1;

    this.dibujarMatriz();
}




    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e8ef0a "; // Color para valor 0 #ff33ce
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#ea2207 "; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#229cdd "; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "#50aa69"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("3", x + ancho / 2, y + alto / 2);
    }

    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("4", x + ancho / 2, y + alto / 2);
    }

    DibujarCinco(x, y, ancho, alto) {
        this.ctx.fillStyle = "#1d3235"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("5", x + ancho / 2, y + alto / 2);
    }

    DibujarSeis(x, y, ancho, alto) {
        this.ctx.fillStyle = "#5c9da6"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("6", x + ancho / 2, y + alto / 2);
    }

    DibujarSiete(x, y, ancho, alto) {
        this.ctx.fillStyle = "#a65c78"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("7", x + ancho / 2, y + alto / 2);
    }
}