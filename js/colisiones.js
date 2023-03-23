function detectarColision(enemigo){

    var rana = document.getElementById("rana");

    if(enemigo){
        if(enemigo.positionX < rana.offsetWidth && enemigo.innerHTML!="" && enemigo.carril == Pepe.carril){
            Pepe.restarVida()
            enemigo.borrarEnemigo()
        }    
    }
}