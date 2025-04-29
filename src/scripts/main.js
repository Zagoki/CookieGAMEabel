import '../styles/style.css' // Corrected path
import javascriptLogo from '../assets/javascript.svg' // Corrected path
import viteLogo from '/vite.jpg' // Path is correct for public folder
import { setupCounter } from './counter.js'
import "../styles/style.css";
import { Game } from "./game";


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>HELP HIM</h1>
    <h2>Oh non !  <strong>The Weeknd</strong> se fait attaquer par Tung tung tung tung tung Sahur !</h2>
    <p>Click sur le cookie pour lui faire des dégats !</p>
    <div class="card">
    </div>
  </div>
  <main id="game"> </main>
`

const game = new Game({
  cookies: 0,
});


game.start();


setupCounter(document.querySelector('#counter'))
