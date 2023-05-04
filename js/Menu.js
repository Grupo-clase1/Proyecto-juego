var menuDiv;
var pantalla;
var menuSup;
var activarOvni;
var pausa = true;
var pantallaPausa;
var intervalo;
var jugando = false;
var imagenOvni;
var nivelActual=1
var velodidadMusica=1.0

// document.getElementById("infoMundos").innerHTML="";


// pausar
function jugar1() {
    jugando = true
    menuDiv = document.getElementById('menuDiv');
    pantallaPausa = document.getElementById('pantallaPausa');
    imagenOvni = document.getElementById('imagen'); // Obtén la referencia a imagenOvni aquí
    menuDiv.style.visibility = 'hidden';
    pantallaPausa.hidden = false;
    clearTimeout(juegoAnimacion)

}
// esto inicia el juego
function jugar(){
    pausa=false
    efectoDeSonido()
    iniciarMusicaJuego()

    //ejecuta el bucle para "animar" la nave
    animacion()
    enAjustesOTienda=false
    pantallaPausa = document.getElementById('pantallaPausa');
    menuDiv = document.getElementById('menuDiv');
    pantalla = document.getElementById('pantalla');
    menuSup = document.getElementById('menuSup');
    imagenOvni = document.getElementById('imagen');

    menuDiv.style.visibility='hidden';//Ponemos en hidden el DivMenu y se pone en visible la pantalla
    pantalla.hidden = false;
    menuSup.style.visibility='visible'
    pantallaPausa.hidden = true;
    var tiendaBoton = document.getElementById('tiendaBoton');
    var ajustesBoton = document.getElementById('ajustesBoton');
    tiendaBoton.disabled = false;
    ajustesBoton.disabled = false;
}

function cuentaAtras() {
    enAjustesOTienda=true;
    var tiendaBoton = document.getElementById('tiendaBoton');
    var ajustesBoton = document.getElementById('ajustesBoton');
    tiendaBoton.disabled = true;
    ajustesBoton.disabled = true;
    var pantallaCuentaAtras = document.getElementById('pantallaCuentaAtras');
    pantallaCuentaAtras.style.visibility= "visible";
    var cuenta = 3;
    var intervalo = setInterval(function() {
      pantallaCuentaAtras.innerHTML = cuenta;
      cuenta--;
      if (cuenta < 0) {
        clearInterval(intervalo);
        pantallaCuentaAtras.style.visibility= "hidden";
        jugar();
      }
    }, 600);
  }

function ajustes(){

    efectoDeSonido()

    var inAjustes = document.getElementById('inAjustes');
    menuDiv = document.getElementById('menuDiv');

    menuDiv.style.visibility='hidden';
    inAjustes.style.visibility='visible';
}

function niveles (){
  efectoDeSonido()

    var inNiveles = document.getElementById('inNiveles');
    menuDiv = document.getElementById('menuDiv');

    menuDiv.style.visibility='hidden';
    inNiveles.style.visibility='visible';
}

function salir(){

    efectoDeSonido()

    window.close();
}

function back(){

    efectoDeSonido()

    var inAjustes = document.getElementById('inAjustes');
    var inNiveles = document.getElementById('inNiveles');

    inAjustes.style.visibility='hidden'; 
    inNiveles.style.visibility='hidden';
       menuDiv.style='hidden=false';
}

function creditos(){
    document.getElementById('pantallacreditos').hidden = false;
}

function creditos2(){
  document.getElementById('pantallacreditos').hidden = true;
  inAjustes.style.visibility='hidden'; 
       menuDiv.style='hidden=false'
}

function escribir1(){
  document.getElementById("infoMundos").innerHTML="informacion del mundo 1"
}
function escribir2(){
  document.getElementById("infoMundos").innerHTML="informacion del mundo 2"
}
function escribir3(){
  document.getElementById("infoMundos").innerHTML="informacion del mundo 3"
}
function escribir4(){
  document.getElementById("infoMundos").innerHTML="informacion del mundo 4"
}
function escribir5(){
  document.getElementById("infoMundos").innerHTML="informacion del mundo 5"
}

function irMundo1(){
  inNiveles.style.visibility='hidden';  
  jugar1()
}
function irMundo2(){
  inNiveles.style.visibility='hidden';  
  jugar1()
}
function irMundo3(){
  inNiveles.style.visibility='hidden';  
  jugar1()
}
function irMundo4(){
  inNiveles.style.visibility='hidden';  
  jugar1()
}
function irMundo5(){
  inNiveles.style.visibility='hidden';  
  jugar1()
}




