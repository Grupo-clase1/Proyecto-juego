class Obstaculo {
  constructor(carril, imagen, velocidad) {
    this.carril = carril;
    this.imagen = imagen;
    this.posicionX = 0;
    this.posicionY = -100; // posición inicial fuera de la pantalla
    this.velocidad = velocidad; // velocidad del obstáculo
  }

  // Método para actualizar la posición del obstáculo
  actualizar() {
    this.posicionY += this.velocidad;
  }

  // Método para dibujar el obstáculo en el canvas
  dibujar(contexto) {
    const ancho = 50; // ancho del obstáculo en píxeles
    const alto = 50; // alto del obstáculo en píxeles
    const x = this.carril * ancho; // posición en el eje X según el carril
    const y = this.posicionY; // posición en el eje Y según la velocidad
    contexto.drawImage(this.imagen, x, y, ancho, alto);
  }
}
