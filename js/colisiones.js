godMode = false;


function detectarColision(objeto){

    var rana = document.getElementById("rana");

    if(godMode != true){
        if(objeto){
            if(objeto.positionX < rana.offsetWidth && objeto.innerHTML!="" && objeto.carril == pjActivo.carril && objeto.positionX > rana.offsetLeft){
                if (objeto instanceof enemigo) {
                    objeto.borrarEnemigo()
                    pjActivo.restarVida()
                    golpeo()
                } else if (objeto instanceof PowerUp) {
                   objeto.borrarPowerUp()
                   objeto.efecto()
                }
            }    
        }
    };
}

function colisionBala(enemigo){
    
    if(arrayBalas.length>0){
        for(i=0; i!=arrayBalas.length; i++){
            balaAct=arrayBalas[i];
            if (balaAct!=undefined){
                if(document.getElementById("bala"+balaAct.id)){
                    var bala = document.getElementById("bala"+balaAct.id);
                    if(enemigo){
                        if(enemigo.carril == arrayBalas[i].carril && enemigo.positionX < bala.offsetLeft){
                            enemigo.borrarEnemigo()
                            arrayBalas[i].borrarBala()
                        }    
                    }
                }
            }
        }
    }
    

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
    // esto es de la barra de carga
    anchoActual = 0;
    duracionColdDown = 2000;

    coldDown(2000);
    if (godMode == false) {
        godMode = true;
        document.getElementById("imagen").style.opacity = 0.5;
        setTimeout(() => {
          godMode=false;
          document.getElementById("imagen").style.opacity = 1;
        }, 2000);
      } 
}
