godMode = false;

function detectarColision(enemigo){

    var rana = document.getElementById("rana");

    if(godMode != true){
        if(enemigo){
            if(enemigo.positionX < rana.offsetWidth && enemigo.innerHTML!="" && enemigo.carril == Pepe.carril && enemigo.positionX > rana.offsetLeft){
                Pepe.restarVida()
                enemigo.borrarEnemigo()
            }    
        }
    };
}
