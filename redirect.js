document.addEventListener("DOMContentLoaded", function () {
  const numeros = [
    "https://wa.me/5491169613906",
    "https://wa.me/5491169613856"
  ];
  const elegido = numeros[Math.floor(Math.random() * numeros.length)];
  const mensaje = "?text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20el%20bono%20que%20vi.%20¿Cómo%20sigo?";

  const urlFinal = elegido + mensaje;

  // Enviar evento a Google Analytics
  if (typeof gtag === "function") {
    gtag('event', 'redireccion_whatsapp', {
      event_category: 'Redireccion',
      event_label: elegido,
      value: 1
    });
  }

  // Establecer URL en el botón de respaldo (si existe)
  const boton = document.getElementById("whatsapp-button");
  if (boton) {
    boton.href = urlFinal;
  }

  // Redireccionar automáticamente
  setTimeout(() => {
    window.location.href = urlFinal;
  }, 3500);
});
