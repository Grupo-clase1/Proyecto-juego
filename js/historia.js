let sonidoEscribir
let historiaTexto
let historiaDiv

var bandera1 = false;

function escribir() {

    historiaTexto = document.getElementById('historiaTexto');
    historiaDiv = document.getElementById('historia');
    historiaTexto.style.visibility = 'visible';
    historiaDiv.style.visibility = 'visible';
    clearTimeout(juegoAnimacion)

    sonidoEscribir = new Audio('music/maquina_de_escribir4.mp3');
  
    let escribiendo = (str, callback) => {
      let arrFromStr = str.split('');
      let i = 0;
      let printStr = setInterval(function() {
        if (bandera1) return //para la funcion cuando se pulsa skip
        historiaDiv.innerHTML += arrFromStr[i];
        sonidoEscribir.play(); //reproduce el sonido
        i++;
        if (i === arrFromStr.length) {
          clearInterval(printStr);
          callback();
        }
      }, 50);
    };
  
        let escribirTexto1 = () => {
        setTimeout(function() {
            historiaDiv.innerHTML = '';
            escribiendo('- Creo que hemos hecho un bucle "for" a la ecuación de velocidad y nos ha llevado a unos años luz de distancia.', escribirTexto2);
            }, 1000);
        };
  
        let escribirTexto2 = () => {
        setTimeout(function() {
            historiaDiv.innerHTML = '';
            escribiendo('+ ¿¿Cómo?? ¡¡Hazlo otra vez y volvamos!!', escribirTexto3);
        }, 1000);
        };

        let escribirTexto3 = () => {
        setTimeout(function() {
          historiaDiv.innerHTML = '';
          escribiendo('- Mejor no, podría llevarnos más lejos aún.', escribirTexto4);
        }, 1000);
      };

      let escribirTexto4 = () => {
        setTimeout(function() {
          historiaDiv.innerHTML = '';
          escribiendo('+ Entonces, ¿hay que atravesar toda la galaxia?', escribirTexto5);
        }, 1000);
      };

      let escribirTexto5 = () => {
        setTimeout(function() {
          historiaDiv.innerHTML = '';
          escribiendo('- Hay que atravesar toda la galaxia', escribirTexto6);
        }, 1000);
      };

      let contadorRepeticiones = 0;

      let escribirTexto6 = () => {
        setTimeout(function() {
          historiaDiv.innerHTML = '';
          escribiendo('...', () => {
            contadorRepeticiones++;
            if (contadorRepeticiones == 3) {
              detener();
            } else {
              escribirTexto6();
            }
          });
        }, 1000);
      };
      
  //primer texto
    escribiendo('+ ¿Qué...        Qué ha pasado?', escribirTexto1);
   
   //evita que funcione 'espacio' cuando se ejecuta esta funcion
    document.addEventListener('keydown', function(event) {
      if (event.code === 'Space') {
        event.preventDefault();
      }
    });
  }

  function detener(){
    bandera1 = true;
    console.log('historia detenida');
    
    historiaDiv.style.visibility = 'hidden';
    historiaTexto.style.visibility = 'hidden';

    jugar1();
  }
  

