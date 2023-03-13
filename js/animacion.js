function animacion(){

    document.getElementById("rana").style.top=Pepe.positionY
    
    Pepe.actualizarPosicion()

    moverFondo()

    // esto al final siempre
    setTimeout(animacion, 50)
  }

  //Movimiento del fondo, se mueve 10% cada 100ms
var posicion=5 
function moverFondo(){
    fondos = document.getElementById('pantalla');

        posicion -= 20;
        fondos.style.backgroundPosition=posicion+'px'

    // setInterval(() => {
    //     clearInterval(identificador);
    // }, 5000);
}
