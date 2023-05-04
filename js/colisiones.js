godMode = false;

function detectarColision(enemigo){

    var rana = document.getElementById("rana");

    if(godMode != true){
        if(enemigo){
            if(enemigo.positionX < rana.offsetWidth && enemigo.innerHTML!="" && enemigo.carril == pjActivo.carril && enemigo.positionX > rana.offsetLeft){
                pjActivo.restarVida()
                enemigo.borrarEnemigo()
                golpeo()
            }    
        }
    };
}


function golpeo(){
    var miDiv = document.getElementById("pantalla")
    miDiv.style.animation = "shake 0.5s";
    setTimeout(() => {
      miDiv.style.animation = "";
    }, 500);
}