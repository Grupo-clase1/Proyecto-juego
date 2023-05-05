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
    if (vidas!=0) godModeTemporal()
    var miDiv = document.getElementById("pantalla")
    miDiv.style.animation = "shake 0.5s";
    setTimeout(() => {
      miDiv.style.animation = "";
    }, 500);
}


function godModeTemporal(){
    if (godMode == false) {
        godMode = true;
        document.getElementById("imagen").style.opacity = 0.5;
        setTimeout(() => {
          godMode=false;
          document.getElementById("imagen").style.opacity = 1;
        }, 2000);
      } 
}
