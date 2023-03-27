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



function jugar1() {
    jugando = true

    menuDiv = document.getElementById('menuDiv');
    pantallaPausa = document.getElementById('pantallaPausa');
    imagenOvni = document.getElementById('imagen'); // Obtén la referencia a imagenOvni aquí
    menuDiv.style.visibility = 'hidden';
    pantallaPausa.hidden = false;
}
// esto inicia el juego
function jugar(){



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

    var backgrounds = [// Se crea un array de los bg que se van a utilizar
        'url('+nivel1.fondo+')', 
        'url('+nivel2.fondo+')',
        'url('+nivel3.fondo+')',
        'url('+nivel4.fondo+')',
    ];
    
    var inicioBackground = -1; 
    intervalo = setInterval(cambiarBackground, 10000);// Se crea un setInterval para saber cada cuanto tiempo se van a cambiar los bg

    function cambiarBackground() {//La función comprueba si se han mostrado todas las imágenes de fondo definidas en la matriz backgrounds. Si todas las imágenes de fondo se han mostrado, la función clearInterval() se utiliza para detener el intervalo de tiempo. Si todavía hay 

        // imágenes de fondo disponibles, se cambia la imagen de fondo mediante la propiedad 
        if (nivelActual == 5) {
            clearInterval(intervalo); 
        } else {
            nivelActual++
            document.getElementById("contadorBackground").innerHTML ="Nivel" +nivelActual
            Pepe.animacionOvni()

            setTimeout(() => {
                sumarVelocidadMusica()
                inicioBackground = (inicioBackground + 1) % backgrounds.length;
                document.getElementById('pantalla').style.backgroundImage = backgrounds[nivelActual-2];
            },1000);
        }        // contadorBackground++;
    }
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
    
}



