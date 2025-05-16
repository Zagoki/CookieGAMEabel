import CookieIMG from "../assets/cookie.png";
import PersonIMG from "../assets/person.gif"; // Nouvelle image

export class ClickableArea {
  gameElement = null;
  onClick = null;

  constructor(gameElement, onClick) {
    this.gameElement = gameElement;
    this.onClick = onClick;
  }

  render() {
    // On crée un nouvel élément du DOM.
    this.clickableAreaElement = document.createElement("section");
    this.clickableAreaElement.id = "game-clickable-area";

    // On modifie son HTML pour inclure les deux images.
    this.clickableAreaElement.innerHTML = `
      <div class="clickable-container">
        <img id="cookie" src="${CookieIMG}" alt="Cookie" />
        <img id="person" src="${PersonIMG}" alt="Person" />
      </div>
    `;

    // On ajoute un listener sur l'évènement "click" à l'image du cookie.
    this.clickableAreaElement.querySelector("#cookie").addEventListener("click", () => {
      window.requestAnimationFrame(() => {
        this.clickableAreaElement.classList.add("active");
        setTimeout(() => {
          window.requestAnimationFrame(() => {
            this.clickableAreaElement.classList.remove("active");
          });
        }, 100);
      });
      this.onClick();
    });

    // On ajoute l'élément au DOM.
    this.gameElement.append(this.clickableAreaElement);
  }
}