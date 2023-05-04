class Nivel {
   //Atributos
  constructor(numero, velocidad, fondo, nombre) {
    this.numero = numero;
    this.velocidad = velocidad;
    this.fondo = fondo;
    this.nombre = nombre
  }

}

var niveles = [
  new Nivel(1, 15, "media/fondo1.jpg", "Galaxias Gemelas"),
  new Nivel(2, 25, "media/fondo2.jpg", "Nebulosa Mantis"),
  new Nivel(3, 30, "media/fondo3.jpg", "Gigante rosa"),
  new Nivel(4, 35, "media/fondo2.gif", "Infinito tranquilo"),
  new Nivel(5, 45, "media/fondo4.jpg", "Quasard intranquilo")
]

var backgrounds = [// Se crea un array de los bg que se van a utilizar
'url('+niveles[0].fondo+')', 
'url('+niveles[1].fondo+')',
'url('+niveles[2].fondo+')',
'url('+niveles[3].fondo+')',
'url('+niveles[4].fondo+')',
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

    textonivel.innerHTML='<h1>'+Nivel.nombre+'</h1>'
    textonivel.style.visibility = "visible";
    textonivel.classList.add= "nuevoNivel";
    if (godMode == false) {
      godMode = true;
      setTimeout(() => {
        godMode=false;
      }, 2500);
    } 

  setTimeout(function() {
    textonivel.classList.remove("nuevoNivel");
    textonivel.style.visibility = 'hidden'
  }, 2000); 
}



