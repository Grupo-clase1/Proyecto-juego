
var indiceEnemigo = 0;

// Mapa de enemigos modificado para contener arrays de enemigos
var mapaEnemigos = [
  //1
  [
    { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
    { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
  ], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 60},
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 40},
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 50},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 70},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 90},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 90},
], 
//2
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 40},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 1, imagen: "media/enemigo2.gif", velocidad: 50},
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 60},
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 70},
], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 70},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 70},
], 
[
  { posicion: 4, imagen: "media/enemigo1.gif", velocidad: 50 },
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 70 },
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60 },
  { posicion: 2, imagen: "media/enemigo2.gif", velocidad: 80 },
],
//3
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 50 },

  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 50 },
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 70},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "media/enemigo4.gif", velocidad: 90},
  { posicion: 5, imagen: "media/enemigo4.gif", velocidad: 90},
], 
//5
[
{ posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
{ posicion: 3, imagen: "media/enemigo2.gif", velocidad: 50},
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 50},
],
[
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 5, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 70},
{ posicion: 3, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 3, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
{ posicion: 3, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 60},
{ posicion: 3, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 1, imagen: "media/enemigo3.gif", velocidad: 70},
],
//6
  //1
  [
    { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 60},
    { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
  ], 
[
  { posicion: 1, imagen: "media/enemigo3.gif", velocidad: 70},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 60},
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 40},
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 50},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 70},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
], 
//2
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 40},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 1, imagen: "media/enemigo2.gif", velocidad: 50},
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 60},
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
  { posicion: 4, imagen: "media/enemigo1.gif", velocidad: 50 },
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40 },
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60 },
  { posicion: 2, imagen: "media/enemigo2.gif", velocidad: 70 },
],
//3
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 70 },

  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 70 },
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 70},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 50},
], 
//5
[
{ posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
{ posicion: 3, imagen: "media/enemigo2.gif", velocidad: 70},
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 50},
],
[
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 3, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 50},
{ posicion: 3, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
{ posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 60},
{ posicion: 3, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 1, imagen: "media/enemigo2.gif", velocidad: 60},
],
//6
  //1
  [
    { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 60},
    { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
  ], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 60},
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 40},
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 50},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 70},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
], 
//2
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 40},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 1, imagen: "media/enemigo2.gif", velocidad: 50},
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 60},
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
  { posicion: 4, imagen: "media/enemigo1.gif", velocidad: 50 },
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 40 },
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60 },
  { posicion: 2, imagen: "media/enemigo2.gif", velocidad: 50 },
],
//3
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 1, imagen: "media/enemigo3.gif", velocidad: 70 },

  { posicion: 5, imagen: "media/enemigo3.gif", velocidad: 70 },
],
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 70},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "media/enemigo3.gif", velocidad: 70},
  { posicion: 5, imagen: "media/enemigo3.gif", velocidad: 70},
], 
//5
[
{ posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
{ posicion: 3, imagen: "media/enemigo2.gif", velocidad: 70},
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 50},
],
[
{ posicion: 2, imagen: "media/enemigo3.gif", velocidad: 70},
{ posicion: 5, imagen: "media/enemigo3.gif", velocidad: 70},
], 
[
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 80},
{ posicion: 3, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 3, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
{ posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 4, imagen: "media/enemigo2.gif", velocidad: 60},
{ posicion: 3, imagen: "media/enemigo1.gif", velocidad: 50},
{ posicion: 1, imagen: "media/enemigo4.gif", velocidad: 90},
],
[
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 70},
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 40},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 50},
  ],
  [
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 70},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 70},
  ], 
  [
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 80},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 3, imagen: "media/enemigo2.gif", velocidad: 60},
  ], 
  [
  { posicion: 1, imagen: "media/enemigo1.gif", velocidad: 60},
  { posicion: 5, imagen: "media/enemigo2.gif", velocidad: 60},
  ], 
  [
  { posicion: 2, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 4, imagen: "media/enemigo2.gif", velocidad: 60},
  { posicion: 3, imagen: "media/enemigo1.gif", velocidad: 50},
  { posicion: 1, imagen: "media/enemigo4.gif", velocidad: 90},
  ],
//6
  //fin enemigos 
// Agrega más arrays de enemigos aquí
];

function generarEnemigos() {
  if (contadorEnemigos % 25 === 0) {
    const enemigosActuales = mapaEnemigos[indiceEnemigo];
    for (let i = 0; i < enemigosActuales.length; i++) {
      const enemigoActual = enemigosActuales[i];
      nuevoEnemigo(enemigoActual.posicion, enemigoActual.imagen, (enemigoActual.velocidad+niveles[contadorDeNiveles-1].velocidad));
    }
    indiceEnemigo = (indiceEnemigo + 1) % mapaEnemigos.length; // utiliza el operador módulo para asegurar que el índice no sobrepase el límite del array
  }
  contadorEnemigos++;
}

// function generarEnemigos() {
//     if (indiceEnemigo < mapaEnemigos.length) {
//     let enemigosActuales = mapaEnemigos[indiceEnemigo];

//     // Crea todos los enemigos en el array de enemigosActuales
//     if(contadorEnemigos%25==0){
//           for (let i = 0; i < enemigosActuales.length; i++) {
//         let enemigoActual = enemigosActuales[i];
//         nuevoEnemigo(enemigoActual.posicion, enemigoActual.imagen, enemigoActual.velocidad);
//         }

//         indiceEnemigo++;
//     }

//     } else {
//     // clearInterval(temporizadorEnemigos);
//     }
// }

// Establece un temporizador para llamar a la función generarEnemigos() cada 1000 milisegundos (1 segundo)
// var temporizadorEnemigos = setInterval(generarEnemigos, 2000);

class PowerUp {
  constructor(carril, imagen, velocidad, tipo, id) {
    this.carril = carril;
    this.imagen = imagen;
    this.velocidad = velocidad;
    this.tipo = tipo;
    this.positionY = `${(5 - carril) * 20}%`;
    this.positionX = 2000;
    this.id = id;
  }
  
  actualizarPosicion() {
    this.positionX -= this.velocidad;
    const powerUpElement = document.getElementById(`power-up${this.id}`);
    
    if (powerUpElement) {
      powerUpElement.style.top = `${this.positionY}`;
      powerUpElement.style.left = `${this.positionX}px`;

      if (this.positionX < -500) {
        this.borrarPowerUp();
      }
    }
  }

  efecto(){
    switch (this.tipo) {
      case "vida":
        sumarVida();
        break;

        case "dinero":
          monedas+=10
        break;
    
      default:
        break;
    }
  }

  anadirPowerUp() {
    let pantalla = document.getElementById("pantalla");
    if (pantalla) {
      pantalla.innerHTML += `<div class="power-up" id="power-up${this.id}"><img class="imagen" id="imagen${this.id}" src="${this.imagen}"></div>`;
    } else {
      console.error('Pantalla element not found or not initialized');
    }
  }

  borrarPowerUp() {
    arrayPowerUps[this.id] = undefined; // Cambiar arrayEnemigos a arrayPowerUps
    var divPowerUp = document.getElementById(`power-up${this.id}`);
    if (divPowerUp) {
        divPowerUp.remove();
    } else {
        console.error('Power-up element not found or not initialized');
    }
}

}

var arrayPowerUps = [];
var contadorPowerUps = 0;
var powerUpsData = [
  { carril: 4, imagen: "media/dinero.gif", velocidad: 40, tipo: "dinero" },
  { carril: 5, imagen: "media/vida.gif", velocidad: 30, tipo: "vida" },
  { carril: 2, imagen: "media/dinero.gif", velocidad: 40, tipo: "dinero" },
  { carril: 3, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 4, imagen: "media/dinero.gif", velocidad: 30, tipo: "dinero" },
  { carril: 5, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 2, imagen: "media/dinero.gif", velocidad: 30, tipo: "dinero" },
  { carril: 3, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 4, imagen: "media/dinero.gif", velocidad: 40, tipo: "dinero" },
  { carril: 5, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 2, imagen: "media/dinero.gif", velocidad: 30, tipo: "dinero" },
  { carril: 3, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 5, imagen: "media/dinero.gif", velocidad: 40, tipo: "dinero" },
  { carril: 4, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 5, imagen: "media/dinero.gif", velocidad: 30, tipo: "dinero" },
  { carril: 2, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 4, imagen: "media/dinero.gif", velocidad: 40, tipo: "dinero" },
  { carril: 5, imagen: "media/vida.gif", velocidad: 30, tipo: "vida" },
  { carril: 2, imagen: "media/dinero.gif", velocidad: 40, tipo: "dinero" },
  { carril: 3, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 4, imagen: "media/dinero.gif", velocidad: 30, tipo: "dinero" },
  { carril: 5, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 1, imagen: "media/dinero.gif", velocidad: 30, tipo: "dinero" },
  { carril: 3, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 4, imagen: "media/dinero.gif", velocidad: 40, tipo: "dinero" },
  { carril: 1, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 5, imagen: "media/dinero.gif", velocidad: 30, tipo: "dinero" },
  { carril: 3, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 1, imagen: "media/dinero.gif", velocidad: 40, tipo: "dinero" },
  { carril: 4, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
  { carril: 2, imagen: "media/dinero.gif", velocidad: 30, tipo: "dinero" },
  { carril: 1, imagen: "media/vida.gif", velocidad: 40, tipo: "vida" },
];
function generarpowerup() {
  contadorPowerUps++;
  console.log('Contador de power-ups:', contadorPowerUps, contadorPowerUps % 20);

  if (arrayPowerUps.length < powerUpsData.length) {
    let powerUpActual = powerUpsData[arrayPowerUps.length];

    if ((contadorPowerUps % 40 ) == 0) {
      console.log('Generando nuevo power-up:', powerUpActual);
      nuevoPowerUp(
        powerUpActual.carril,
        powerUpActual.imagen,
        powerUpActual.velocidad,
        powerUpActual.tipo
      );
    }
  } else {
    // Comprobamos si todos los power-ups son undefined
    if (arrayPowerUps.every(powerUp => powerUp === undefined)) {
      // Si todos los power-ups son undefined, reiniciamos arrayPowerUps y contadorPowerUps
      arrayPowerUps = [];
      contadorPowerUps = 0;
    }
  }
}


function nuevoPowerUp(carril, imagen, velocidad, tipo) {
  console.log('Añadiendo power-up:', carril, imagen, velocidad, tipo);
  const powerUp = new PowerUp(carril, imagen, velocidad, tipo, arrayPowerUps.length);
  arrayPowerUps.push(powerUp);
  powerUp.anadirPowerUp();
}