// esto se ejecuta en bucle y genera el efecto de animación
var juegoAnimacion
var contadorEnemigos=0;
var contadorPowerUps=0;
var contadorDeNiveles = 1
var pjActivo = "Pepe2"

function animacion(){

  if(pausa){
    return
  }

// console.log("animacion")
switch (pjActivo) {
  case "Pepe":
    document.getElementById("rana").style.top=Pepe.positionY;
    Pepe.actualizarPosicion()
    break;

    case "Pepe2":
      document.getElementById("rana").style.top=Pepe2.positionY;
      Pepe2.actualizarPosicion()

    break;

    case "Pepe3":
      document.getElementById("rana").style.top=Pepe3.positionY;
      Pepe3.actualizarPosicion()

    break;

    case "Pepe4":
      document.getElementById("rana").style.top=Pepe4.positionY;
      Pepe4.actualizarPosicion()

    break;

    case "Pepe5":
      document.getElementById("rana").style.top=Pepe5.positionY;
      Pepe5.actualizarPosicion()

    break;

  default:
    break;
}
    
    Pepe.actualizarPosicion()

    // actualizar la posición de los enemigos
    for (let i = 0; i < arrayEnemigos.length; i++) {
      if (arrayEnemigos[i]) {
        arrayEnemigos[i].actualizarPosicion();
        detectarColision(arrayEnemigos[i])
      }

    }
    
    for (let i = 0; i < arrayPowerUps.length; i++) {
      if (arrayPowerUps[i]) {
        arrayPowerUps[i].actualizarPosicion();
        detectarColision(arrayPowerUps[i])
      }

    }

    generarEnemigos()
    //generarpowerup()
    moverFondo()

    contadorEnemigos++


    if(contadorEnemigos % 600 == 0){
      if (contadorDeNiveles==5){
        return
      } else {
        contadorDeNiveles++
        document.getElementById("contadorBackground").innerHTML ="Nivel" + contadorDeNiveles
        document.getElementById('pantalla').style.backgroundImage = backgrounds[contadorDeNiveles-1];
        NuevoNivel();
      } 
    }

    sumarMonedas()

    // esto al final siempre
    juegoAnimacion = setTimeout(animacion, 50)

  }

  //Movimiento del fondo, se mueve 20px cada 50ms (se ejecuta en la función "animación")
var posicion=5 
function moverFondo(){
    fondos = document.getElementById('pantalla');

        posicion -= 2;
        fondos.style.backgroundPosition=posicion+'vh';
}

function sumarMonedas(){
  if(contadorEnemigos % 20 == 0){
    Pepe.masDinero()
  }
}