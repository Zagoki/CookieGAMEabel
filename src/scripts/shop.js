export class Shop {
  gameElement = null;
  shopElement = null;
  cursors = 0;

  constructor(gameElement) { // idem mettre en callback
    this.gameElement = gameElement;

    // Démarre le gain passif
    setInterval(() => {
      if (this.cursors > 0) {
        window.game.cookies += this.cursors * 0.1; // 0.1 cookie par curseur par seconde
        window.game.updateScore(); // Met à jour l'affichage du score
      }
    }, 1000); // Intervalle de 1 seconde
  }

  render() {
    // Crée un élément pour la boutique
    this.shopElement = document.createElement("section");
    this.shopElement.id = "game-shop";
    this.shopElement.innerHTML = `
      <h2>Boutique du Cookie</h2>
      <div id="shop-items">
        <div class="shop-item" id="cursor-item">
          <h3>Curseur Magique</h3>
          <p>Dépense tes cookies pour que Louis Bodin l'attaque secretement</p>
          <p>Gain : 0,1 cookie/sec par curseur acheté</p>
          <p>Prix : <span id="cursor-price">${this.getCursorPrice()}</span> cookies</p>
          <button id="buy-cursor">Acheter un curseur Bodin</button>
        </div>
      </div>
    `;
    // Ajoute un listener pour l'achat de curseur
    this.shopElement
      .querySelector("#buy-cursor")
      .addEventListener("click", () => this.buyCursor());
    // Ajoute la boutique à l'élément Game
    this.gameElement.append(this.shopElement);
  }

  getCursorPrice() {
    return 10 + this.cursors * 2;
  }

  buyCursor() {
    const price = this.getCursorPrice();
    if (window.game.cookies >= price) {
      window.game.cookies -= price;
      this.cursors += 1;
      this.updateShop();
      window.game.updateScore(); // Met à jour l'affichage du score
      window.game.save(); // Sauvegarde après achat
    } else {
      alert("Not enough cookies!");
    }
  }

  updateShop() {
    // Met à jour le prix du curseur
    this.shopElement.querySelector("#cursor-price").textContent =
      this.getCursorPrice();
  }
}