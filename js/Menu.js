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
    
    pantallaPausa = document.getElementById('pantallaPausa');
    menuDiv = document.getElementById('menuDiv');
    pantalla = document.getElementById('pantalla');
    menuSup = document.getElementById('menuSup');
    imagenOvni = document.getElementById('imagen');

    menuDiv.style.visibility='hidden';//Ponemos en hidden el DivMenu y se pone en visible la pantalla
    pantalla.hidden = false;
    menuSup.style.visibility='visible'
    pantallaPausa.hidden = true;

}


function ajustes(){

    efectoDeSonido()

    var inAjustes = document.getElementById('inAjustes');
    menuDiv = document.getElementById('menuDiv');

    menuDiv.style.visibility='hidden';
    inAjustes.style.visibility='visible';
}

function salir(){

    efectoDeSonido()

    window.close();
}

function back(){

    efectoDeSonido()

    var inAjustes = document.getElementById('inAjustes');

    inAjustes.style.visibility='hidden'; 
       menuDiv.style='hidden=false';
}

function creditos(){
    document.getElementById('pantallacreditos').hidden = false;
}



