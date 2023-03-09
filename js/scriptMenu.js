var menuDiv 

function jugar(){
    var menuDiv = document.getElementById('menuDiv');
    var pantalla = document.getElementById('pantalla');

    menuDiv.style.visibility='hidden';
    pantalla.hidden=false
    var backgrounds = [
        '',
        'url(https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg)',
        'url(https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg)',
        'url(https://imagen.research.google/main_gallery_images/a-brain-riding-a-rocketship.jpg)'
    ];

    var inicioBackground = 0; 
    var intervalo = setInterval(cambiarBackground, 1500);

    function cambiarBackground() {
        if (inicioBackground == 3) {
            clearInterval(intervalo); 
        } else {
            inicioBackground = (inicioBackground + 1) % backgrounds.length;
            document.getElementById('pantalla').style.backgroundImage = backgrounds[inicioBackground];
        }
    }
}

function ajustes(){
    var texto='';
    document.write('<div id="inAjustes" class="inAjustes"></div>')

    texto+='hola caracola';
    document.getElementById('inAjustes').innerHTML=texto
}

function salir(){

   window.close();
}

