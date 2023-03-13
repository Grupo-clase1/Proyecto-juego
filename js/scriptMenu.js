var menuDiv;
var pantalla;

function jugar(){

    //reproducir la música del juego y ponerla a la mitad de volumen
    document.getElementById("musicaJuego").volume = 0.5;
    document.getElementById("musicaJuego").play();
    document.getElementById("musicaJuego").loop=true;

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

