var menuDiv;
var pantalla;

var musicaMenuActiva=true
// Para poner la música al iniciar la página, escucha cuando el ratón se mueve y comprueba si "musicaMenuActiva" es "true"
document.addEventListener('mousemove', function() {
    if(musicaMenuActiva==true){
        var musicaMenu = document.getElementById("musicaMenu");
        musicaMenu.play();
        musicaMenu.volume = 0.30;
    }

  });

function jugar(){

    //con esto evito que se solapen las dos canciones, "desactivando" la reproduccion de la del menú
    musicaMenuActiva=false
    var musicaJuego = document.getElementById("musicaJuego")

    document.getElementById("musicaMenu").pause()

    //reproducir la música del juego y ponerla a la mitad de volumen
    musicaJuego.volume = 0.5;
    musicaJuego.play();
    musicaJuego.loop=true;

    //ejecuta el bucle para "animar" la nave
    animacion()

    menuDiv = document.getElementById('menuDiv');
    pantalla = document.getElementById('pantalla');

    menuDiv.style.visibility='hidden';//Ponemos en hidden el DivMenu y se pone en visible la pantalla
    pantalla.hidden=false
    var backgrounds = [// Se crea un array de los bg que se van a utilizar
        'url(media/fondo1.jpg)', 
        'url(media/fondo2.jpg)',
        'url(media/fondo3.jpg)',
    ];

    var inicioBackground = -1; 
    var intervalo = setInterval(cambiarBackground, 5000);// Se crea un setInterval para saber cada cuanto tiempo se van a cambiar los bg

    function cambiarBackground() {//La función comprueba si se han mostrado todas las imágenes de fondo definidas en la matriz backgrounds. Si todas las imágenes de fondo se han mostrado, la función clearInterval() se utiliza para detener el intervalo de tiempo. Si todavía hay 
        // imágenes de fondo disponibles, se cambia la imagen de fondo mediante la propiedad 
        if (inicioBackground == 2) {
            clearInterval(intervalo); 
        } else {
            inicioBackground = (inicioBackground + 1) % backgrounds.length;
            document.getElementById('pantalla').style.backgroundImage = backgrounds[inicioBackground];
        }
    }
}

function ajustes(){
    var inAjustes = document.getElementById('inAjustes');
    menuDiv = document.getElementById('menuDiv');

    menuDiv.style.visibility='hidden';
    inAjustes.hidden=false;
}

function salir(){

   window.close();
}

function back(){
    var inAjustes = document.getElementById('inAjustes');

    inAjustes.hidden=true;
    menuDiv.style='hidden=false';
}

