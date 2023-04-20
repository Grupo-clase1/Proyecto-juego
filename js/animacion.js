// esto se ejecuta en bucle y genera el efecto de animación
var juegoAnimacion
var contadorEnemigos=0;
var contadorPowerUps=0;


function animacion(){

  if(pausa){
    return
  }

// console.log("animacion")
    document.getElementById("rana").style.top=Pepe.positionY;
    
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

    // //crear enemigos al azar
    // let numeroAzar = parseInt(Math.floor((Math.random() * 100) + 1));

    // if(numeroAzar>98){
    //   nuevoEnemigo()
    // }

    // if(pausa==true){
    //   clearInterval(intervalo); 
    //   return
    // }


    generarEnemigos()
    generarpowerup()
    moverFondo()

    // console.log(contadorEnemigos)

    contadorEnemigos++




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


var backgrounds = [// Se crea un array de los bg que se van a utilizar
'url('+nivel1.fondo+')', 
'url('+nivel2.fondo+')',
'url('+nivel3.fondo+')',
'url('+nivel4.fondo+')',
];


// var inicioBackground = -1; 
// intervalo = setInterval(cambiarBackground, 10000);// Se crea un setInterval para saber cada cuanto tiempo se van a cambiar los bg

// function cambiarBackground() {//La función comprueba si se han mostrado todas las imágenes de fondo definidas en la matriz backgrounds. Si todas las imágenes de fondo se han mostrado, la función clearInterval() se utiliza para detener el intervalo de tiempo. Si todavía hay 

//     // imágenes de fondo disponibles, se cambia la imagen de fondo mediante la propiedad 
//     if (nivelActual == 5) {
//         clearInterval(intervalo); 
//     } else {
//         nivelActual++
//         document.getElementById("contadorBackground").innerHTML ="Nivel" +nivelActual
//         Pepe.animacionOvni()

//         setTimeout(() => {
//             sumarVelocidadMusica()
//             inicioBackground = (inicioBackground + 1) % backgrounds.length;
//             document.getElementById('pantalla').style.backgroundImage = backgrounds[nivelActual-2];
//         },1000);
//     }        // contadorBackground++;
// }