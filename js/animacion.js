function animacion(){

    document.getElementById("rana").style.top=Pepe.positionY
    
    Pepe.actualizarPosicion()

    moverFondo()

    // esto al final siempre
    setTimeout(animacion, 50)
  }

var posicion=20
function moverFondo(){
    fondos = document.getElementById('pantalla');

    identificador=setInterval(() => {
        posicion += 10;
        fondos.style.backgroundPosition=posicion+'%'
    }, 100);

    // setInterval(() => {
    //     clearInterval(identificador);
    // }, 5000);
}
