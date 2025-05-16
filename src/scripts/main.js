import '../styles/style.css' // Corrected path
import javascriptLogo from '../assets/javascript.svg' // Corrected path
import viteLogo from '/vite.jpg' // Path is correct for public folder
import { setupCounter } from './counter.js'
import "../styles/style.css";
import { Game } from "./game";


document.querySelector("#app").innerHTML = `
  <header>
    <h1>Cookie Clicker Deluxe</h1>
    <p>Sauvez The Weeknd ! </p>
  </header>
  <main id="game-container">
    <section id="game">
    </section>
    <aside id="instructions">
      <h2>Comment jouer : </h2>
      <ul>
        <li>Cliquez sur Tung tung tung tung Sahur pour le vaincre </li>
        <li>Achetez des améliorations dans la boutique pour etre plus PUISSANT.</li>
        <li>Une légende raconte qu'un Golden Skibidi Roblox apparait pour vous aider de temps en temps...</li>
        <li>Faites vite... sinon, Bombardino Crocodilo viendra dans votre lit a 3h du matin</li>
      </ul>
    </aside>
  </main>
  <footer>
    <p>J'ai fais ça pour l'école, tout droits a ceux qui veulent, je m'en fous.</p>
  </footer>
`

const game = new Game({
  cookies: 0,
  cursors: 0,
});

game.load();
game.start();

setupCounter(document.querySelector('#counter'))
