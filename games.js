document.addEventListener("DOMContentLoaded", () => {
  const palabras = ["Slot", "Mesas en vivo", "Apuestas deportivas", "Ruleta", "Crash", "Blackjack"];
  const contenedor = document.getElementById("palabras-dinamicas");

  let i = 0;
  const cambiarPalabra = () => {
    contenedor.style.animation = "none"; // reset animación
    void contenedor.offsetWidth;        // trigger repaint
    contenedor.style.animation = "bounceIn 0.6s ease"; // animación rebote

    contenedor.textContent = palabras[i];
    i = (i + 1) % palabras.length;
  };

  cambiarPalabra(); // inicial
  setInterval(cambiarPalabra, 2500);
});
