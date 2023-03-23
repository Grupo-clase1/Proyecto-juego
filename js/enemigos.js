class enemigo {
  constructor(carril, imagen, velocidad, id) {
    this.carril = carril;
    this.imagen = imagen;
    switch(carril) {
      case 5:
          this.positionY = 0
          break;

        case 4:
          this.positionY = 20
          break;

        case 3:
            this.positionY = 40
            break;

        case 2:
            this.positionY = 60
            break;

        case 1:
            this.positionY = 80
            break;
    }
    this.positionX = 2000; // posición inicial fuera de la pantalla
    this.velocidad = velocidad; // velocidad del enemigo
    this.id = id
    this.fuera=false
  }


// Función para actualizar la posición del enemigo en cada frame
actualizarPosicion() {
  // Actualizar la posición vertical del enemigo

  this.positionX -= this.velocidad;

  document.getElementById(`enemigo${this.id}`).style.top = `${this.positionY}%`;

  // console.log(`${this.positionX}%;`);

  document.getElementById(`enemigo${this.id}`).style.left = `${this.positionX}px`;

  // Verificar si el enemigo ha llegado al final de la pantalla
  if (this.positionX < -500) {
    this.fuera=true
    this.borrarEnemigo()
  }
}

anadirEnemigo(){
  // Añadir el enemigo al DOM
  let pantalla = document.getElementById("pantalla");
  pantalla.innerHTML += `<div class="enemigo" id="enemigo${this.id}"><img class="imagen" id="imagen${this.id}" src="./media/enemigo${parseInt(Math.floor((Math.random() * 6) + 0))}.gif"></div>`
}


borrarEnemigo() {
  arrayEnemigos[this.id]=undefined;
  var divEnemigo = document.getElementById(`enemigo${this.id}`);
  divEnemigo.remove();  }

}





// -----------La wea de añadir enemigos


var idEnemigos = 0
var arrayEnemigos = []

// Crea el enemigo pero no lo muestra
function nuevoEnemigo(posicion, imagen, velocidad) {
arrayEnemigos.push(new enemigo(posicion, imagen, velocidad, idEnemigos));

// Añade el enemigo
arrayEnemigos[idEnemigos].anadirEnemigo()

idEnemigos++;
}


var indiceEnemigo = 0;

// Mapa de enemigos modificado para contener arrays de enemigos
var mapaEnemigos = [
  [
    { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
    { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
  ], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 20 },
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 1, imagen: "../media/enemigo2.gif", velocidad: 20 },
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 4, imagen: "../media/enemigo.gif", velocidad: 50 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50 },
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 50 },
  { posicion: 2, imagen: "../media/enemigo2.gif", velocidad: 50 },
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 80 },

  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 80 },
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 20 },
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
],
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 1, imagen: "../media/enemigo2.gif", velocidad: 20 },
],
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 4, imagen: "../media/enemigo.gif", velocidad: 50 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50 },
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 50 },
{ posicion: 2, imagen: "../media/enemigo2.gif", velocidad: 50 },
],
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 80 },

{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 80 },
],
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 20 },
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 20 },
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 20 },
], 
// Agrega más arrays de enemigos aquí
];

function generarEnemigos() {
if (indiceEnemigo < mapaEnemigos.length) {
  let enemigosActuales = mapaEnemigos[indiceEnemigo];

  // Crea todos los enemigos en el array de enemigosActuales
  for (let i = 0; i < enemigosActuales.length; i++) {
    let enemigoActual = enemigosActuales[i];
    nuevoEnemigo(enemigoActual.posicion, enemigoActual.imagen, enemigoActual.velocidad);
  }

  indiceEnemigo++;
} else {
  clearInterval(temporizadorEnemigos);
}
}

// Establece un temporizador para llamar a la función generarEnemigos() cada 1000 milisegundos (1 segundo)
var temporizadorEnemigos = setInterval(generarEnemigos, 1500);


/*var idEnemigos = 0
var arrayEnemigos = []

// crea el enemigo pero no lo muestra
function nuevoEnemigo(){
  let posicionAleatoria = parseInt(Math.floor((Math.random() * 5) + 0.05));
  arrayEnemigos.push(new enemigo(posicionAleatoria, "../media/enemigo.gif", 20, idEnemigos));

  // añade el enemigo
  arrayEnemigos[idEnemigos].anadirEnemigo()

  idEnemigos++;

}*/