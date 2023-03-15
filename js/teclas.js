// Agregar un evento "keydown" al documento
document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "W") {
      if (Pepe.carril < 5) { // Si la rana no está en el carril 5
        Pepe.carril++; // Aumentar la propiedad "carril"
        // console.log(Pepe.carril)
      }
    } else if (event.key === "s" || event.key === "S") {
      if (Pepe.carril > 1) { // Si la rana no está en el carril 1
        Pepe.carril--; // Disminuir la propiedad "carril"
        // console.log(Pepe.carril)
      }
    }
  });