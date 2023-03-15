var menuDiv;
var pantalla;
var menuSup;
var activarOvni

function jugar1() {
    menuDiv = document.getElementById('menuDiv');
    pantallaPausa = document.getElementById('pantallaPausa');
    menuDiv.style.visibility = 'hidden';
    pantallaPausa.hidden = false;
  }

function jugar(){

    efectoDeSonido()

    iniciarMusicaJuego()

    //ejecuta el bucle para "animar" la nave
    animacion()

    pantallaPausa = document.getElementById('pantallaPausa');
    menuDiv = document.getElementById('menuDiv');
    pantalla = document.getElementById('pantalla');
    menuSup = document.getElementById('menuSup');

    menuDiv.style.visibility='hidden';//Ponemos en hidden el DivMenu y se pone en visible la pantalla
    pantalla.hidden = false;
    menuSup.style.visibility='visible'
    pantallaPausa.style.visibility = 'hidden';

    var backgrounds = [// Se crea un array de los bg que se van a utilizar
        'url('+nivel1.fondo+')', 
        'url('+nivel2.fondo+')',
        'url('+nivel3.fondo+')',
        'url('+nivel4.fondo+')',
    ];

    var inicioBackground = -1; 
    var intervalo = setInterval(cambiarBackground, 4000);// Se crea un setInterval para saber cada cuanto tiempo se van a cambiar los bg

    function cambiarBackground() {//La función comprueba si se han mostrado todas las imágenes de fondo definidas en la matriz backgrounds. Si todas las imágenes de fondo se han mostrado, la función clearInterval() se utiliza para detener el intervalo de tiempo. Si todavía hay 


        // imágenes de fondo disponibles, se cambia la imagen de fondo mediante la propiedad 
        if (inicioBackground == 3) {
            clearInterval(intervalo); 
        } else {
            Pepe.animacionOvni()
            setTimeout(() => {
                inicioBackground = (inicioBackground + 1) % backgrounds.length;
                document.getElementById('pantalla').style.backgroundImage = backgrounds[inicioBackground];
            }, 1000);
        }
    }


}

function ajustes(){

    efectoDeSonido()

    var inAjustes = document.getElementById('inAjustes');
    menuDiv = document.getElementById('menuDiv');

    menuDiv.style.visibility='hidden';
    inAjustes.hidden=false;
}

function salir(){

    efectoDeSonido()

    window.close();
}

function back(){

    efectoDeSonido()

    var inAjustes = document.getElementById('inAjustes');

    inAjustes.hidden=true;
    menuDiv.style='hidden=false';
}

