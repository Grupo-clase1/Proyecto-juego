let historiaDiv
function escribir() {
    
    historiaDiv = document.getElementById('historia');
    historiaDiv.style.visibility = 'visible';
    // menuDiv = document.getElementById('menuDiv');
    // menuDiv.style.visibility = 'hidden';
    clearTimeout(juegoAnimacion)

    let sonidoEscribir = new Audio('music/maquina_de_escribir4.mp3');
  
    let escribiendo = (str, callback) => {
      let arrFromStr = str.split('');
      let i = 0;
      let printStr = setInterval(function() {
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

      let detener = () => {
        console.log('historia detenida');
        historiaDiv.style.visibility = 'hidden';
        jugar1();
      };
      
  //primer texto
    escribiendo('+ ¿Qué...        Qué ha pasado?', escribirTexto1);
   
  }


