// esto se ejecuta en bucle y genera el efecto de animación
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

  //Movimiento del fondo, se mueve 20px cada 50ms (se ejecuta en la función "animación")
var posicion=5 
function moverFondo(){
    fondos = document.getElementById('pantalla');

        posicion -= 5;
        fondos.style.backgroundPosition=posicion+'vh'
}

