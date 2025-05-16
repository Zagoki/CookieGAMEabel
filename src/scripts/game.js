import { ClickableArea } from "./clickable-area";
import { Shop } from "./shop";
import { spawnGoldenCookie } from "./random-spawn";

export class Game {
  // Game Properties
  cookies = 0;

  // Game Elements
  gameElement = null;
  scoreElement = null;

  // Game Components
  clickableArea = null;
  shop = null;

  constructor(config) {
    this.cookies = config.cookies ?? 0;
    this.cursors = config.cursors ?? 0; // Ajouté pour la sauvegarde
    this.gameElement = document.querySelector("#game");
    this.clickableArea = new ClickableArea(
      this.gameElement,
      this.onClickableAreaClick
    );
    this.shop = new Shop(this.gameElement);
    this.shop.cursors = this.cursors; // Synchronise le shop avec la sauvegarde
    window.game = this;

    setInterval(() => {
      spawnGoldenCookie(this.shop.cursors * 0.1);
    }, Math.random() * 20000 + 20000);
  }

  start() {
    this.render();
  }

  render() {
    // Nettoie le contenu avant de re-render
    this.gameElement.innerHTML = "";

    this.renderScore();
    this.clickableArea.render();
    this.shop.render();
  }

  renderScore() {
    // Supprime l'ancien score si présent
    if (this.scoreElement && this.scoreElement.parentNode) {
      this.scoreElement.parentNode.removeChild(this.scoreElement);
    }
    this.scoreElement = document.createElement("section");
    this.scoreElement.id = "game-score";
    this.gameElement.append(this.scoreElement);
    this.updateScore();
  }

  updateScore() {
    this.scoreElement.innerHTML = `
        <span>${this.cookies.toFixed(1)} cookies</span>
    `;
  }

  save() {
    const config = {
      cookies: this.cookies,
      cursors: this.shop.cursors,
    };
    localStorage.setItem("cookieClickerSave", JSON.stringify(config));
  }

  load() {
    const data = localStorage.getItem("cookieClickerSave");
    if (data) {
      const config = JSON.parse(data);
      this.cookies = config.cookies ?? 0;
      this.shop.cursors = config.cursors ?? 0;
      this.render(); // Ajouté pour rafraîchir l'affichage après chargement
      this.updateScore();
      if (this.shop.shopElement) this.shop.updateShop();
    }
  }

  onClickableAreaClick = () => {
    this.cookies += 1;
    this.save(); // Sauvegarde à chaque clic
    window.requestAnimationFrame(() => {
      this.updateScore();
    });
  };
}
