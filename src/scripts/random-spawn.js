import GoldenCookieIMG from "../assets/golden-cookie.png";

export function spawnGoldenCookie(passiveGain) { // callback teste
  // Crée l'image du cookie doré
  const goldenCookie = document.createElement("img");
  goldenCookie.src = GoldenCookieIMG; // Import ES module
  goldenCookie.alt = "Golden Cookie";
  goldenCookie.className = "golden-cookie";
  
  // Positionnement aléatoire
  const size = 64;
  goldenCookie.style.position = "fixed";
  goldenCookie.style.width = `${size}px`;
  goldenCookie.style.height = `${size}px`;
  goldenCookie.style.left = `${Math.random() * (window.innerWidth - size)}px`;
  goldenCookie.style.top = `${Math.random() * (window.innerHeight - size)}px`;

  // Ajoute au DOM
  document.body.appendChild(goldenCookie);

  // Animation d'apparition
  setTimeout(() => {
    goldenCookie.classList.add("show");
  }, 10);

  // Gestion du clic
  goldenCookie.addEventListener("click", () => {
    const gain = Math.floor(Math.random() * (passiveGain * 1000 - 1 + 1)) + 1;
    window.game.cookies += gain;
    window.game.updateScore();
    goldenCookie.classList.remove("show");
    goldenCookie.classList.add("hide");
    setTimeout(() => goldenCookie.remove(), 500);
  });

  // Disparition automatique après 5 secondes
  setTimeout(() => {
    goldenCookie.classList.remove("show");
    goldenCookie.classList.add("hide");
    setTimeout(() => goldenCookie.remove(), 500);
  }, 5000);
}