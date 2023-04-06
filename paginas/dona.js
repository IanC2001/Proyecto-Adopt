const botones = document.querySelectorAll(".miBoton");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    // Quita la clase 'seleccionado' de cualquier otro botón que la tenga
    for (let i = 0; i < botones.length; i++) {
      if (botones[i] !== boton && botones[i].classList.contains("seleccionado")) {
        botones[i].classList.remove("seleccionado");
      }
    }
    
    // Agrega o quita la clase 'seleccionado' al botón tocado
    boton.classList.toggle("seleccionado");
  });
});


