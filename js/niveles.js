class Nivel {
   //Atributos
  constructor(numero, velocidad, fondo) {
    this.numero = numero;
    this.velocidad = velocidad;
    this.fondo = fondo;
  }

}

var nivel1 = new Nivel(1, 10, "media/fondo1.jpg");
var nivel2 = new Nivel(2, 15, "media/fondo2.jpg");
var nivel3 = new Nivel(3, 20, "media/fondo3.jpg");
var nivel4 = new Nivel(4, 25, "media/fondo2.gif");


var backgrounds = [// Se crea un array de los bg que se van a utilizar
'url('+nivel1.fondo+')', 
'url('+nivel2.fondo+')',
'url('+nivel3.fondo+')',
'url('+nivel4.fondo+')',
];

var contador = document.getElementById('contadorBackground').innerHTML;

function getPuntuacion() {
  return parseInt(document.getElementById('contadorBackground').innerText);
}

// function cambiarNivel() {
//   const puntuacion = getPuntuacion();
//   let nivelActual;

//   if (puntuacion >= 100) {
//     nivelActual = nivel3;
//   } else if (puntuacion >= 50) {
//     nivelActual = nivel2;
//   } else {
//     nivelActual = nivel1;
//   }

//   // Cambiar la velocidad del juego según el nivel
//   velocidad = nivelActual.velocidad;

//   // Cambiar el fondo del juego según el nivel
//   document.getElementById("pantalla").style.backgroundImage = `url(${nivelActual.fondo})`;

//   // Actualiza el texto del nivel en el menú superior
//   document.querySelector(".tituloNivel").innerHTML = `Nivel ${nivelActual.numero}<br><div id="vidas"><img id="vida1" src="media/vidas.png"><img id="vida2" src="media/vidas.png"><img id="vida3" src="media/vidas.png"></div><div id="contadorDinero"><img src="media/monedas.png" id="monedas">100<img src="media/billetes.png" id="billetes"></div>`;
// }


function NuevoNivel() {
  var textonivel = document.getElementById('textoNivel');

    textonivel.style.visibility = "visible";
    textonivel.classList.add= "nuevoNivel";
    if (godMode == false) {
      godMode = true;
      setTimeout(() => {
        godMode=false;
      }, 1000);
    } 

  setTimeout(function() {
    textonivel.classList.remove("nuevoNivel");
    textonivel.style.visibility = 'hidden'
    // godMode = false
  }, 1000); 
}



