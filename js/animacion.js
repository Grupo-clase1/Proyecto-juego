function animacion(){

  console.log(pausa)

    document.getElementById("rana").style.top=Pepe.positionY
    
    Pepe.actualizarPosicion()

    if(pausa==true){
      clearInterval(intervalo); 
      return
    }

    moverFondo()
  
    // esto al final siempre
    setTimeout(animacion, 50)
    
  }

  //Movimiento del fondo, se mueve 20px cada 50ms
var posicion=5 
function moverFondo(){
    fondos = document.getElementById('pantalla');

        posicion -= 20;
        fondos.style.backgroundPosition=posicion+'px'
}

