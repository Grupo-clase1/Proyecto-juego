// esto se ejecuta en bucle y genera el efecto de animación
var juegoAnimacion
var contadorEnemigos=0;
var contadorPowerUps=0;
var contadorDeNiveles = 1;
var pjActivo = Pepe;
var noSpawn = false;

function animacion(){

  if(pausa){
    return
  }

  document.getElementById("rana").style.top=pjActivo.positionY;

  for (let i = 0; i < arrayBalas.length; i++) {
    if (arrayBalas[i]) {
      arrayBalas[i].actualizarPosicion();
    }
  }

  pjActivo.actualizarPosicion()


    // actualizar la posición de los enemigos
    for (let i = 0; i < arrayEnemigos.length; i++) {
      if (arrayEnemigos[i]) {
        arrayEnemigos[i].actualizarPosicion();
        detectarColision(arrayEnemigos[i]);
        colisionBala(arrayEnemigos[i]);
      }

    }
    
    for (let i = 0; i < arrayPowerUps.length; i++) {
      if (arrayPowerUps[i]) {
        arrayPowerUps[i].actualizarPosicion();
        detectarColision(arrayPowerUps[i])
      }

    }

    comprobarSpawn()

    if(noSpawn){
      contadorEnemigos++;
    }else{
      generarEnemigos()
      generarpowerup()
    }

    moverFondo()



    if(contadorEnemigos % 800 == 0){
      if (contadorDeNiveles==5){
        // return
      } else {
        contadorDeNiveles++
        document.getElementById("contadorBackground").innerHTML ="Mundo " + contadorDeNiveles
        document.getElementById('pantalla').style.backgroundImage = backgrounds[contadorDeNiveles-1];
        NuevoNivel();
      } 
    }

    sumarMonedas()

    coldDown()

    coldDown2()

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
    pjActivo.masDinero()
  }
}



var multiplosDe800=[
  800,
  800*2,
  800*3,
  800*4,
  800*5
]

var contadorDeMultiplos = 0

var tiempoMultiplo = 50

function comprobarSpawn(){
  if(contadorEnemigos > multiplosDe800[contadorDeMultiplos]-tiempoMultiplo-tiempoMultiplo){
    noSpawn = true;
  }
  if(contadorEnemigos > multiplosDe800[contadorDeMultiplos]+tiempoMultiplo){
    noSpawn = false;
    contadorDeMultiplos++
  }
}