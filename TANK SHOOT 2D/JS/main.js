// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Funcion para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
}

// Llamamos a la funcion al cargar la pagina
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

//Creamos un tanque de jugador y uno de enemigo
const playerTank = new Tank(100, 100, 'up', 3);
const enemyTank = new EnemyTank(500, 100, 'down', 3);


// Dibujamos los elementos en el canvas
function drawTank(tank) {
    ctx.fillStyle = 'green';
    // Representamos el tanque como un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

function drawEnemyTank(enemyTank) {
    ctx.fillStyle = 'red';
    // Representamos el tanque como un cuadrado
    ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50);
}

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
})
//Logica del juego (actualizacion de pantalla)
function updateGame() {
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawTank(playerTank); //Dibujamos el tanque del jugador
    drawEnemyTank(enemyTank); // Dibujamos el tanque enemigo

    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}

//Iniciar el juego
updateGame();