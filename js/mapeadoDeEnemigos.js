
var indiceEnemigo = 0;

// Mapa de enemigos modificado para contener arrays de enemigos
var mapaEnemigos = [
  //1
  [
    { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
    { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
  ], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 60},
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 40},
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 50},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 70},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 90},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 90},
], 
//2
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 40},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 1, imagen: "../media/enemigo2.gif", velocidad: 50},
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 60},
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 70},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 70},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 70},
], 
[
  { posicion: 4, imagen: "../media/enemigo.gif", velocidad: 50 },
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 70 },
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60 },
  { posicion: 2, imagen: "../media/enemigo2.gif", velocidad: 80 },
],
//3
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 50 },

  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50 },
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 70},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 90},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 90},
], 
//5
[
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
{ posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 50},
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 50},
],
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 70},
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
{ posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 60},
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 1, imagen: "../media/enemigo2.gif", velocidad: 70},
],
//6
  //1
  [
    { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 60},
    { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
  ], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 70},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 60},
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 40},
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 50},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 70},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
//2
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 40},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 1, imagen: "../media/enemigo2.gif", velocidad: 50},
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 60},
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
  { posicion: 4, imagen: "../media/enemigo.gif", velocidad: 50 },
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40 },
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60 },
  { posicion: 2, imagen: "../media/enemigo2.gif", velocidad: 70 },
],
//3
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 70 },

  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 70 },
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 70},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
//5
[
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
{ posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 70},
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 50},
],
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 50},
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 60},
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 1, imagen: "../media/enemigo2.gif", velocidad: 60},
],
//6
  //1
  [
    { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 60},
    { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
  ], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 60},
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 40},
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 50},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 70},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
//2
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 40},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 1, imagen: "../media/enemigo2.gif", velocidad: 50},
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 40},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 60},
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
  { posicion: 4, imagen: "../media/enemigo.gif", velocidad: 50 },
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 40 },
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60 },
  { posicion: 2, imagen: "../media/enemigo2.gif", velocidad: 50 },
],
//3
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 1, imagen: "../media/enemigo.gif", velocidad: 70 },

  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 70 },
],
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
  { posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 70},
  { posicion: 3, imagen: "../media/enemigo.gif", velocidad: 40},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 50},
], 
[
  { posicion: 2, imagen: "../media/enemigo.gif", velocidad: 70},
  { posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 70},
], 
//5
[
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
{ posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 70},
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 40},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 50},
],
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 70},
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 70},
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 80},
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 3, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 1, imagen: "../media/enemigo.gif", velocidad: 60},
{ posicion: 5, imagen: "../media/enemigo2.gif", velocidad: 60},
], 
[
{ posicion: 2, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 4, imagen: "../media/enemigo2.gif", velocidad: 60},
{ posicion: 3, imagen: "../media/enemigo.gif", velocidad: 50},
{ posicion: 1, imagen: "../media/enemigo2.gif", velocidad: 90},
],
//6
  //fin enemigos 
// Agrega más arrays de enemigos aquí
];

function generarEnemigos() {
    if (indiceEnemigo < mapaEnemigos.length) {
    let enemigosActuales = mapaEnemigos[indiceEnemigo];

    // Crea todos los enemigos en el array de enemigosActuales
    if(contadorEnemigos%30==0){
          for (let i = 0; i < enemigosActuales.length; i++) {
        let enemigoActual = enemigosActuales[i];
        nuevoEnemigo(enemigoActual.posicion, enemigoActual.imagen, enemigoActual.velocidad);
        }

        indiceEnemigo++;
    }

    } else {
    // clearInterval(temporizadorEnemigos);
    }
}

// Establece un temporizador para llamar a la función generarEnemigos() cada 1000 milisegundos (1 segundo)
// var temporizadorEnemigos = setInterval(generarEnemigos, 2000);
