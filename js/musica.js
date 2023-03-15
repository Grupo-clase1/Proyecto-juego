var musicaMenuActiva=true
// Para poner la música al iniciar la página, escucha cuando el ratón se mueve y comprueba si "musicaMenuActiva" es "true"
document.addEventListener('mousemove', function() {
    if(musicaMenuActiva==true){
        var musicaMenu = document.getElementById("musicaMenu");
        musicaMenu.play();
        musicaMenu.volume = 0.10;
    }

  });


function iniciarMusicaJuego(){
    //con esto evito que se solapen las dos canciones, "desactivando" la reproduccion de la del menú
    musicaMenuActiva=false
    var musicaJuego = document.getElementById("musicaJuego")
    
    document.getElementById("musicaMenu").pause()
    
    //reproducir la música del juego y ponerla a la mitad de volumen
    musicaJuego.volume = 0.40;
    musicaJuego.play();
    musicaJuego.loop=true;
}

function botonMusicaJuego(){
    //con esto evito que se solapen las dos canciones, "desactivando" la reproduccion de la del menú
    musicaMenuActiva=false
    var musicaJuego = document.getElementById("musicaJuego")
    var sonido=document.getElementById('sonido').innerHTML

    if (sonido=='🔊'){
        document.getElementById('sonido').innerHTML='🔈'
        musicaJuego.pause();
        }else{
        document.getElementById('sonido').innerHTML='🔊'
        musicaJuego.volume = 0.40;
        musicaJuego.play();
        musicaJuego.loop=true;
        }   
}

function efectoDeSonido(){
    var SonidoClick = document.getElementById("click")

    //reproducir la música del juego y ponerla a la mitad de volumen
    SonidoClick.volume = 0.25;
    SonidoClick.play();
    SonidoClick.loop=false;
}