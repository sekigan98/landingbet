document.addEventListener("DOMContentLoaded", () => {
const reviews = [
  { nombre: "Pablo M.", texto: "Les escribí y en 5 minutos ya estaba jugando. Muy bueno.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/91.jpg" },
  { nombre: "Camila D.", texto: "Me atendieron por WhatsApp re rápido y ya tenía usuario.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/21.jpg" },
  { nombre: "Leo F.", texto: "Transferí y me cargaron la cuenta al toque. Sin vueltas.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/41.jpg" },
  { nombre: "Antonella S.", texto: "Pensé que era trucho pero todo bien, ya estoy jugando.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/11.jpg" },
  { nombre: "Gonzalo T.", texto: "El bono me llegó al instante. Serios de verdad.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/36.jpg" },
  { nombre: "Mariela J.", texto: "Me explicaron paso a paso por WhatsApp. Súper fácil.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/53.jpg" },
  { nombre: "Agustín C.", texto: "Hablé, transferí, me cargaron y ya estaba en la ruleta.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/58.jpg" },
  { nombre: "Valen B.", texto: "Excelente atención. Me respondieron al instante y todo claro.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/32.jpg" },
  { nombre: "Nico A.", texto: "Te mandan link, les pasás el comprobante y listo. Real.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/63.jpg" },
  { nombre: "Brenda L.", texto: "Creía que era fake pero terminé depositando y ganando 😅", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/42.jpg" },
  { nombre: "Fede R.", texto: "Ya les pasé el link a varios. Todo 10 puntos.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/25.jpg" },
  { nombre: "Luciana P.", texto: "No tardaron nada en cargarme. Súper atentos.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/39.jpg" },
  { nombre: "Ramiro I.", texto: "Tenía dudas pero me explicaron todo por WhatsApp.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/22.jpg" },
  { nombre: "Sol G.", texto: "Cero complicaciones. Muy recomendable.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/29.jpg" },
  { nombre: "Lautaro E.", texto: "Cargué y jugué al toque. Todo bien con ellos.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/47.jpg" },
  { nombre: "Flor B.", texto: "El bono me lo activaron en minutos. Muy serios.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/36.jpg" },
  { nombre: "Ezequiel D.", texto: "Le mandás captura del pago y te cargan al instante.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/43.jpg" },
  { nombre: "Ayelén P.", texto: "Me ayudaron con todo por WhatsApp, muy buena onda.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/60.jpg" },
  { nombre: "Juan Cruz", texto: "Transferí, me dieron usuario y ya pude entrar.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/13.jpg" },
  { nombre: "Carla H.", texto: "Muy claro el paso a paso. Todo transparente.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/73.jpg" },
  { nombre: "Matías F.", texto: "Se nota que laburan bien, siempre responden rápido.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/19.jpg" },
  { nombre: "Vanesa T.", texto: "Me cargaron el bono sin vueltas. Bien ahí.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/23.jpg" },
  { nombre: "Kevin J.", texto: "No pensé que iba a estar jugando en 10 minutos.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/84.jpg" },
  { nombre: "Pamela M.", texto: "Todo real. Transferí y ya estaba jugando slots.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/45.jpg" },
  { nombre: "Brian C.", texto: "Probé y cumplió todo. Ya gané unas fichas 😎", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/75.jpg" },
  { nombre: "Luli D.", texto: "Lo recomiendo. Súper confiables y responden enseguida.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/62.jpg" },
  { nombre: "Joaquín S.", texto: "Te pasan el link, hablás y en nada ya jugás.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/31.jpg" },
  { nombre: "Carolina V.", texto: "No me dejaron esperando. Súper atentos.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/34.jpg" },
  { nombre: "Nahuel M.", texto: "Ya deposité dos veces. Siempre todo al día.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/50.jpg" },
  { nombre: "Rocío S.", texto: "Súper serio. Te explican y te acompañan en todo.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/64.jpg" }
];

 // 🔀 Mezclar reseñas para que aparezcan en orden aleatorio al cargar
  reviews.sort(() => Math.random() - 0.5);

  const container = document.getElementById("fake-reviews");
  if (!container) return;

  // 💄 Estilos del contenedor
  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    maxWidth: "320px",
    margin: "30px auto 0",
    minHeight: "90px",
    zIndex: "9994"
  });

  let index = 0;

  const showReview = () => {
    const r = reviews[index];
    container.innerHTML = ""; // Limpiar anterior

    const div = document.createElement("div");
    Object.assign(div.style, {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "#fff",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      opacity: 0,
      transition: "opacity 0.5s ease"
    });

    div.innerHTML = `
      <img src="${r.foto}" alt="Foto de ${r.nombre}" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
      <div style="font-size: 14px; color: #222;">
        <strong>${r.nombre}</strong> <span style="color:#666; font-size:12px;">· ${r.fecha}</span><br>
        <span style="color: #FFD700;">${"★".repeat(r.estrellas)}</span><br>
        <span>${r.texto}</span>
      </div>
    `;

    container.appendChild(div);

    setTimeout(() => {
      div.style.opacity = 1;
    }, 100);

    index = (index + 1) % reviews.length;
  };

  showReview();
  setInterval(showReview, 4000);
});
