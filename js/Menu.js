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
    cargarBarras()
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
  document.getElementById("infoMundos").innerHTML="Había una vez dos galaxias que nacieron en el infinito tranquilo. Eran pequeñas y solitarias, flotando en el vasto espacio lleno de puntos luminosos. "
}
function escribir2(){
  document.getElementById("infoMundos").innerHTML="Un día, las dos galaxias se encontraron y comenzaron a acercarse. Al principio, se mantuvieron a distancia, pero pronto empezaron a orbitar juntas, bailando en el espacio y formando nuevas estrellas en su camino. Así se convirtieron en la nebulosa mantis."
}
function escribir3(){
  document.getElementById("infoMundos").innerHTML="A medida que crecían, las galaxias se acercaban cada vez más. Todo lo hacían juntas, explorando el universo y admirando la belleza de las nebulosas y los planetas. Eran inseparables y perfectas la una para la otra. Parecían Galaxias Gemelas."
}
function escribir4(){
  document.getElementById("infoMundos").innerHTML="Un día, algo terrible sucedió. Una de las galaxias se desvaneció en una gigante rosa, muriendo en un brillo de estrellas. La otra galaxia cayó en una profunda depresión, sintiéndose sola y perdida en el vasto universo."
}
function escribir5(){
  document.getElementById("infoMundos").innerHTML="La galaxia se sumió en la autodestrucción, convirtiendose en un quasar, perdiendo toda la esperanza y la luz que alguna vez había brillado en ella. <br> Pero incluso en su oscuridad, la galaxia nunca olvidó a su amor perdido. Recordaba los días felices en la nebulosa mantis y las noches acurrucadas de las galaxias gemelas.  Y así, incluso mientras caía en la oscuridad, la galaxia nunca dejó de brillar en el recuerdo de su amor eterno, esperando un día poder reunirse de nuevo en el infinito tranquilo del universo."
}

// function irMundo1(){
//   inNiveles.style.visibility='hidden';  
//   jugar1()
// }
// function irMundo2(){
//   inNiveles.style.visibility='hidden';  
//   jugar1()
// }
// function irMundo3(){
//   inNiveles.style.visibility='hidden';  
//   jugar1()
// }
// function irMundo4(){
//   inNiveles.style.visibility='hidden';  
//   jugar1()
// }
// function irMundo5(){
//   inNiveles.style.visibility='hidden';  
//   jugar1()
// }

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




