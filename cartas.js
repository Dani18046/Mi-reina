// Lista de cartas (12)
const cartas = [
  { titulo: "💫Nos conocimos.....", contenido: `<p>💌 De una forma unica nos conocimos donde se fueron dando las cosas a su tiempo, no buscabamso nada pero nos enamoramos de la forma mas sincera y real, solo con escucharnos abrimos nuestros corazones, construyendo sueños y promesas que tenemos en nuestros corazones y en nuestro futuro. Formando un amor unico y sincero.....</p><img src="imagen1.jpg" alt="Carta 1">` },
  { titulo: "❤️Un detalle con todo el corazón.....", contenido: `<p>💕 Se que no es lo mismo que un abrazo pero lo hice con mucho cariño para ti mi reina hermosisima, son videos corticos que hablan de mi y mucho de ti, con mucha sinceridad y amor de ti de tu zorrito colombiano que te quiere con todo el corazon, lo de nosotros es unico y aunque sea a la distacncia ni he dejado de pensar en ti y tampoco me impide hacerte detallitos asi.....</p><iframe width="100%" height="315"
src="https://www.youtube.com/embed/cZieQJiOKus"
title="Video para ti" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "🌹Me encantas....", contenido: `<p>✨ No puedo expresar lo mucho que me gustas y me encantas.........</p><iframe width="100%" height="315"
src="https://www.youtube.com/embed/3XFEUWto5aM"
title="Video 2" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "💖Nos queda toda esta vida y muchas mas.....", contenido: `<p>🎥Compartimos muchas cosas hermosas, nuestras canciones, el juego, muchas risas, peleitas, chismosear, amor, cariño, sentimientos, cositas hermosas que no haríamos con cualquier persona y esto lo hace único, con pensar y extrañar en el otro y crear un futuro juntos. Aún faltan muchas más cosas por compartir, nos queda toda la vida mi reina.......</p><img src="imagen2.jpg" alt="Carta 2">` },
  { titulo: "💕Contigo.....", contenido: `<p>🌙 Lo eres todo mi reina, quiero que lo seas todo, un detallito con mucho cariño, contigo hasta el fin del mundo, todo con sinceridad y le caigo pa donde sea mi sapa.</p><iframe width="100%" height="315"
src="https://www.youtube.com/embed/n0I-UUF-Q8o"
title="Video 3" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "🦊Lo que quiero contigo....", contenido: `<p>❤️ Quiero todo contigo, contigo voy y me tiro de cabeza y sin casco, eres unico y quiero compartir todo contigo no solo amor y cariño sino en las buenas y en las malas, todo es real y sincero y te prometi que si todo era asi de sincero yo contigo hasta el fin, le caigo pa donde sea con solo sinceridad.....</p><iframe width="100%" height="315"
src="https://www.youtube.com/embed/kdjQX9o5t_8"
title="Video 4" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "🌹¿Por qué tú?.....", contenido: `<p>💘 Me encantas, tantas cosas que decir sobre ti que ni me da para explicarlo solo con palabras, me encantas, me gusta todo de ti, esa personalidad tan bella y única, esa risa, esa boquita que me encanta y me enloquece, sus ojitos, tu hermoso cabello esa forma de tu pelo me encantas bien lo sabes toda su carita, que seas chismosa, que pelees, que me quieras pegar, y obvioooo todo ese cariño y corazón que tienes tan sincero y lleno de sentimientos, quiero todo eso en mi vida y se que hay muchisimo más, contigo voy de cabeza y sin casco, me ganaste mi reina, me enamoraste con ser tu.....no le digas a nadie como me portó contigo por fa, eso es solo suyo 🤭.</p><img src="imagen3.jpg" alt="Carta 3">` },
  { titulo: "💞Entraste a mi corazon....", contenido: `<p>💕 Mi corazon es feliz a tu lado aunque sea distancia mi corazon te sinte y se que tambien lo sentiste, y es que tuuuu mi reina me tienes estupido sera que me hizo un amarre?, No mentiras yo se porque la quiero y porque quiero todo de ti, simplemente me corazon y todo lo que soy cayo en esa hermosura de persona y es feliz ahi mi ser y quiere darte todo hacerla feliz y de todo en esta vida y en todas.....</p><video src="video5.mp4" controls></video>` },
  { titulo: "💌Sinceridad....", contenido: `<p>🌹 Tengo tantos pensamientos, verdades, tanto he pensado en ti, y la verdad quiero decirte perdon por hacerte sentir asi la ultima vez que hablamos, quiero que siempre me digas la verdad, asi sin comer cuento, yo no le saco escusas, me gusta hablar comprenderte sin miedo ni incomodidad, si estuve mal yo lo reconozco(obviamente si es con razon sino pues nos agarramos mi reina🤭), toca que venga y me peliemos, y me de unas buenas nalgadas en eso jopo.......</p></p><video src="video6.mp4" controls></video>` },
  { titulo: "✨Una vida contigo.......", contenido: `<p>💫 No quiero ser el centro de tu vida, no quiero ser una preocupación más, quiero ser esa persona que compartirias todo, tus éxitos, tus tristezas, tus enojos, tus alegrías, disfrutar cada momento contigo en las buenas y en las malas y estar para ti siempre, además de eso obvioo no darle solo amor y cariño sino brindarte seguridad, apoyo, confianza y por qué no? Unos hijos bien hermosos que salgan con tu cabello y tu boquita hermosa y que tengan tu apellido y que sean mexicanos y colombianos (vamos a mejorar la raza 🤭), quiero todo contigo, una boda así como la imaginas y mucho mejor, un amor donde haya de todo, bien empalagoso, que nunca nos despegemos, un amor para la eternidad (solo es que me digas, le caigo y firmo 😉), quiero que seas mi todo, mi mundo, no te prometo bajar la luna pero si cumplir todos nuestros sueños y metas, un orgullo de que seas tu mi reina, entregarme completamente a ti y que tengas lo mejor de mi......💖</p><img src="imagen4.jpg" alt="Carta 4">` },
  { titulo: "💫Un comienzo......", contenido: `<p>💞 No importa el lugar, siempre estaras en mi, todo es real y sincero.....</p><video src="video7.mp4" controls></video>` },
  { titulo: "💖Todo contigo....", contenido: `<p>💘 Me importas mucho te volviste un ideal al que quiero darle todo mi ser porque lo eres todo mi reina, quiero hacerte de todo y que seas mi todo, mi mundo, esa muchachita con la que estoy dispuesto a entregarle mi vida, no todo es perfecto, pero jamas faltara el amor y cariño que le tengo, te aprecio mucho eres muy importante en mi vida, y se que tambien lo soy en la tuya, no nos perdamos jamas ya hicimos lo dificil que fue encontrarnos. Muchas gracias por ver y la quiero mucho y la extraño, no tengas miedo aqui estara tu colombiano y no se va ir de tu vida jamas, porque ese colombiano en ti encontro todooooo lo que quiere, desea y sueña, no nos dejemos jamas, mejoremos y queramonos muchisimo mas sin miedo a perdernos porque esto es real, unico y es para la eternidad, no cerremos nuestros corazones........</p><video src="video8.mp4" controls></video>` }
];

const cartasContainer = document.getElementById("cartas-container");
let cartasLeidas = 0;

// Crear las 12 cartas
cartas.forEach((carta, i) => {
  const div = document.createElement("div");
  div.classList.add("carta");
  div.textContent = "💗";
  div.addEventListener("click", () => abrirCarta(carta.titulo, carta.contenido, div));
  cartasContainer.appendChild(div);
});

const modal = document.getElementById("modal");
const tituloCarta = document.getElementById("titulo-carta");
const contenidoCarta = document.getElementById("contenido-carta");
const closeModal = document.querySelector(".close");

function abrirCarta(titulo, contenido, cartaDiv) {
  tituloCarta.textContent = titulo;
  contenidoCarta.innerHTML = contenido;
  modal.style.display = "flex";

  // Marca la carta como leída
  if (!cartaDiv.classList.contains("leida")) {
    cartaDiv.classList.add("leida");
    cartasLeidas++;
    if (cartasLeidas === cartas.length) mostrarMensajeFinal();
  }
}

closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Modal de pantalla completa
const fullscreenModal = document.createElement("div");
fullscreenModal.classList.add("fullscreen-modal");
fullscreenModal.innerHTML = `<span>&times;</span><div id="fullscreen-content"></div>`;
document.body.appendChild(fullscreenModal);

fullscreenModal.querySelector("span").addEventListener("click", () => {
  fullscreenModal.style.display = "none";
  fullscreenModal.querySelector("#fullscreen-content").innerHTML = "";
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".modal-content img, .modal-content video")) {
    const src = e.target.src;
    const tipo = e.target.tagName.toLowerCase();
    fullscreenModal.style.display = "flex";
    fullscreenModal.querySelector("#fullscreen-content").innerHTML =
      tipo === "img"
        ? `<img src="${src}" alt="imagen ampliada">`
        : `<video src="${src}" controls autoplay></video>`;
  }
});

// Mostrar mensaje final
function mostrarMensajeFinal() {
  const mensajeFinal = document.getElementById("mensaje-final");
  mensajeFinal.style.display = "block";

  const btnFinal = document.getElementById("btn-final");
  btnFinal.addEventListener("click", () => {
    window.location.href = "final.html"; // redirige a la última página
  });
}






