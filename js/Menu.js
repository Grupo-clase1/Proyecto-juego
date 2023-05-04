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

function levels(){
  efectoDeSonido()

    var texto =''; 
    var inNiveles = document.getElementById('inNiveles');
    // var botonesMundos= document.getElementById('botonesMundos');
    menuDiv = document.getElementById('menuDiv');

    menuDiv.style.visibility='hidden';
    inNiveles.style.visibility='visible';

    texto+='<input type="button" value="'+niveles[0].nombre+'" id="nivel1" class="nivelBoton" onclick="irMundo1()" onmouseover="escribir1()">'
    texto+='<input type="button" value="'+niveles[1].nombre+'" id="nivel2" class="nivelBoton" onclick="irMundo2()" onmouseover="escribir2()">'
    texto+='<input type="button" value="'+niveles[2].nombre+'" id="nivel3" class="nivelBoton" onclick="irMundo3()" onmouseover="escribir3()">'
    texto+='<input type="button" value="'+niveles[3].nombre+'" id="nivel4" class="nivelBoton" onclick="irMundo4()" onmouseover="escribir4()">'
    texto+='<input type="button" value="'+niveles[4].nombre+'" id="nivel5" class="nivelBoton" onclick="irMundo5()" onmouseover="escribir5()">'
    document.getElementById('botonesMundos').innerHTML=texto
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

function salirP(){
  efectoDeSonido()

  menuDiv.style.visibility='visible';//Ponemos en hidden el DivMenu y se pone en visible la pantalla
  pantalla.hidden = true;
  menuSup.style.visibility='hidden'
  pantallaPausa.hidden = false;
  divAjustes.hidden = true; 
  jugando = false; 
  enAjustesOTienda = false;
  pausa=false;
  pantallaPausa.hidden = true;

}




