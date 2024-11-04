// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsObj = new Utils();
// Funcion para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

    canvas.width = utilsObj.RoundTablero(canvas.width) 
    canvas.height = utilsObj.RoundTablero(canvas.height) 

    console.log('width', canvas.width)
    console.log('height', canvas.height)
}

// Llamamos a la funcion al cargar la pagina
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

//Creamos un tanque de jugador y uno de enemigo
const playerTank = new Tank(600, 300, 'up', 3, game.ancho, game.alto);

const enemyTank1 = new EnemyTank(100, 100, 'down', 3, game.ancho, game.alto);
const enemyTank2 = new EnemyTank(700, 200, 'down', 3, game.ancho, game.alto);
const enemyTank3 = new EnemyTank(500, 400, 'down', 3, game.ancho, game.alto);
const enemyTank4 = new EnemyTank(600, 100, 'down', 3, game.ancho, game.alto);

// Dibujamos los elementos en el canvas



//Controles basicos para mover el tanque del jugador
window.addEventListener('keydown', function (e) {
    switch(e.key) {
        //las teclas de las Flechas del teclado
        case 'ArrowLeft' :
            playerTank.moveLeft();
            break;
        case 'ArrowRight' :
            playerTank.moveRight();
            break;
        case 'ArrowUp' :
            playerTank.moveUp();
            break;
        case 'ArrowDown' :
            playerTank.moveDown();
            break;
        //las teclas de las letras del teclado
        case 'a':
            playerTank.moveLeft();
            break
        case 'd' :
            playerTank.moveRight();
            break
        case 'w' :
            playerTank.moveUp();
            break
        case 's' :
            playerTank.moveDown();
            break;
    }
});

//Añadir movimiento aleatorio enemigo
function moveEnemeyTankRandomly(enemyTank) {
    const directions = ['left' , 'right', 'up', 'down']; //Posibles direccions
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];

    //Movemos el tanque enemigo en la direccion elegida
    switch(randomDirection) {
        case 'left' :
            enemyTank.moveLeft();
            break;
        case 'right' :
            enemyTank.moveRight();
            break;
        case 'up' :
            enemyTank.moveUp();
            break;
        case 'down' :
            enemyTank.moveDown();
            break;
    }
}
//Hacemos que el tanque enemigo se mueva aleatoriamente cada 500ms
setInterval(() => {
    moveEnemeyTankRandomly(enemyTank1);
    moveEnemeyTankRandomly(enemyTank2);
}, 500);

setInterval(() => {
    moveEnemeyTankRandomly(enemyTank3);
    moveEnemeyTankRandomly(enemyTank4);
}, 100);

const escenario = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function drawEscenario(ctx, escenario) {
    for (let row = 0; row < escenario.length; row++) {
        for (let col = 0; col < escenario[row].length; col++) {
            const cell = escenario[row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;

            switch(cell) {
                case 0: //Espacio vacio
                    ctx.fillStyle = "black";
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1: //Pared
                    ctx.fillStyle = "gray";
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    //var wall = new Image();
                    //wall.src = "./ASSETS/pared.webp";
                    //ctx.drawImage(wall, x, y, cellSize, cellSize)
                    break;
                default:
                    break;
            }       
        }
    }
}

const mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1], 
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1], 
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], 
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const mapa2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1], 
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function DibujarCero(ctx, x, y, x1, y1){
    ctx.fillStyle = "brown";
    ctx.fillRect(x, y, x1, y1);
}

function DibujarUno(ctx, x, y, x1, y1){
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, x1, y1);
}

function DibujarDos(ctx, x, y, x1, y1){
    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, x1, y1);
}

function DibujarMapa(ctx, mapa){
    for (let row = 0; row < mapa.length; row++) {
        for (let col = 0; col < mapa[row].length; col++){
            const cell = mapa[row][col];
            console.log(cell);
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;
            switch (cell) {
                case 0:
                    DibujarCero(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1:
                    DibujarUno(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 2:
                    DibujarDos(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
            default:
                break;

            }
        }
    }
}
//Logica del juego (actualizacion de pantalla)
function updateGame() {
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //drawEscenario(ctx, escenario); //Dibujamos el escenario 
    //drawTank(playerTank)
    DibujarMapa(ctx, mapa);
    playerTank.drawTank(ctx);
    enemyTank1.drawEnemyTank(ctx);
    enemyTank2.drawEnemyTank(ctx);
    enemyTank3.drawEnemyTank(ctx);
    enemyTank4.drawEnemyTank(ctx);
   /* 
    drawTank(playerTank); //Dibujamos el tanque del jugador
    drawEnemyTank(enemyTank1); // Dibujamos el tanque enemigo
    drawEnemyTank(enemyTank2); // Dibujamos el tanque enemigo
    drawEnemyTank(enemyTank3); // Dibujamos el tanque enemigo
    drawEnemyTank(enemyTank4); // Dibujamos el tanque enemigo
*/
    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}

//Iniciar el juego
updateGame();