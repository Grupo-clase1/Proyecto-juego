var menuDiv 

function jugar(){
    var menuDiv = document.getElementById('menuDiv');
    var pantalla = document.getElementById('pantalla');

    menuDiv.style.visibility='hidden';//Ponemos en hidden el DivMenu y se pone en visible la pantalla
    pantalla.hidden=false
    var backgrounds = [// Se crea un array de los bg que se van a utilizar
        'url(https://imagen.research.google/main_gallery_images/a-brain-riding-a-rocketship.jpg)', 
        'url(https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg)',
        'url(https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg)',
    ];

    var inicioBackground = -1; 
    var intervalo = setInterval(cambiarBackground, 1500);// Se crea un setInterval para saber cada cuanto tiempo se van a cambiar los bg

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
    var texto='';
    document.write('<div id="inAjustes" class="inAjustes"></div>')

    texto+='hola caracola';
    document.getElementById('inAjustes').innerHTML=texto
}

function salir(){

   window.close();
}

