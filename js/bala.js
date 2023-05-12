var idBalas = 0
var arrayBalas = []

class bala {

    constructor(id) {
        this.image = "media/bala.gif";
        this.carril = pjActivo.carril;
        this.positionX = 0;
        this.positionY = pjActivo.positionY;
        this.id=id;
        this.aceleracion = 50;
        this.carril = pjActivo.carril;
    }

    actualizarPosicion(){
        // asigna el left de la bala
        this.positionX = this.positionX+this.aceleracion;
        document.getElementById(`bala${this.id}`).style.left = `${this.positionX}px`;

        if (this.positionX>6000) this.borrarBala();
    }

    anadirBala(){
        let pantalla = document.getElementById("pantalla");
        pantalla.innerHTML += `<div class="enemigo" id="bala${this.id}"><img class="imagen" id="imagenBala${this.id}" src="${this.image}"></div>`
        document.getElementById(`bala${this.id}`).style.top = this.positionY;
    }

    borrarBala() {
        arrayBalas[this.id]=undefined;
        var divBala = document.getElementById(`bala${this.id}`);
        divBala.remove();  
    }

}


function disparar() {

    arrayBalas.push(new bala(idBalas));
    
    // Añade el enemigo
    arrayBalas[idBalas].anadirBala()
    
    idBalas++;
    }