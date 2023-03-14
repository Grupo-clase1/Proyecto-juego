var musicaMenuActiva=true
// Para poner la música al iniciar la página, escucha cuando el ratón se mueve y comprueba si "musicaMenuActiva" es "true"
document.addEventListener('mousemove', function() {
    if(musicaMenuActiva==true){
        var musicaMenu = document.getElementById("musicaMenu");
        musicaMenu.play();
        musicaMenu.volume = 0.30;
    }

  });


  function iniciarMusicaJuego(){

    //con esto evito que se solapen las dos canciones, "desactivando" la reproduccion de la del menú
    musicaMenuActiva=false
    var musicaJuego = document.getElementById("musicaJuego")
    
    document.getElementById("musicaMenu").pause()
    
    //reproducir la música del juego y ponerla a la mitad de volumen
    musicaJuego.volume = 0.5;
    musicaJuego.play();
    musicaJuego.loop=true;
    

  }