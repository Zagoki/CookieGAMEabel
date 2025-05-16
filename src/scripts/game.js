import { ClickableArea } from "./clickable-area";
import { Shop } from "./shop";
import { spawnGoldenCookie } from "./random-spawn";

export class Game {
  // Game Properties
  cookies = 0;
  cookieLife = 10000; // Vie totale du cookie à battre

  // Game Elements
  gameElement = null;
  scoreElement = null;

  // Game Components
  clickableArea = null;
  shop = null;

  constructor(config) {
    this.cookies = config.cookies ?? 0;
    this.cursors = config.cursors ?? 0; // Ajouté pour la sauvegarde
    this.cookieLife = config.cookieLife ?? 10000;
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
        window.addEventListener("beforeunload", () => {
      this.save();
    }); 
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
      <span>${this.cookies.toFixed(1)} cookies</span><br>
      <span>Vie du cookie maléfique : ${this.cookieLife.toLocaleString()}</span>
    `;
  }

  save() {
    const config = {
      cookies: this.cookies,
      cursors: this.shop.cursors,
      cookieLife: this.cookieLife,
    };
    localStorage.setItem("cookieClickerSave", JSON.stringify(config));
  }

  load() {
    const data = localStorage.getItem("cookieClickerSave");
    if (data) {
      const config = JSON.parse(data);
      this.cookies = config.cookies ?? 0;
      this.shop.cursors = config.cursors ?? 0;
      this.cookieLife = config.cookieLife ?? 100000000;
      this.render(); // Ajouté pour rafraîchir l'affichage après chargement
      this.updateScore();
      if (this.shop.shopElement) this.shop.updateShop();
    }
  }

  onClickableAreaClick = () => {
    // Détermine le nombre de cookies gagnés par clic (par défaut 1, ou plus si tu ajoutes des upgrades)
    const cookiesPerClick = this.cookiesPerClick ?? 1;
    this.cookies += cookiesPerClick;
    this.cookieLife -= cookiesPerClick;
 //   this.save(); // Sauvegarde à chaque clic    ou save before unload 
    window.requestAnimationFrame(() => {
      this.updateScore();
      if (this.cookieLife <= 0) {
        this.showVictory();
      }
    });
  };

  showVictory() {
    this.gameElement.innerHTML = `
      <h1>Victoire !</h1>
      <p>Bravo, tu as vaincu Tung Tung Tung Tung Sahur !</p>
      <div id="paypal-message" style="margin:2em 0;">
        <h2>Voici mon Paypal :</h2>
        <a href="https://www.paypal.com/qrcodes/p2pqrc/2T9GU62LZ3326" target="_blank" style="color:#009cde;font-weight:bold;">
          https://www.paypal.com/qrcodes/p2pqrc/2T9GU62LZ3326
        </a>
      </div>
      <button id="restart-btn">Rejouer</button>
    `;
    document.getElementById("restart-btn").onclick = () => {
      this.cookies = 0;
      this.cookieLife = 100000000;
      this.save();
      this.render();
    };
  }
}
