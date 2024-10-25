class Tank{
    posX;
    posY;
    direccionDisparo;
    Vidas;
    velocidad;

    constructor(_posX, _posY, _direccionDisparo, _Vidas){
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _Vidas;
        this.velocidad = 50; //velocidad del movimiento del tanque
    }

    moveLeft() {
        this.posX = this.posX - this.velocidad;
    }

    moveRight() {
        this.posX = this.posX + this.velocidad;
    }

    moveUp() {
        this.posY -= this.velocidad;
    }

    moveDown() {
        this.posY += this.velocidad;
    }

    rotarTank(_direccionDisparo){
        this.direccionDisparo = _direccionDisparo;
    }

}