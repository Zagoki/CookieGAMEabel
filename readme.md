#  Cookie Clicker Deluxe

Bienvenue sur **Cookie Clicker Deluxe** !
Un jeu de clicker où tu dois vaincre le cookie maléfique à force de clics et d'améliorations.

---

##  Installation

### 1. Cloner le dépôt

```bash
git clone <url-du-repo>
cd moncookieClicker/Coocou
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le jeu en mode développement

```bash
npm run dev
```

* Lance le serveur Vite en mode développement.
* Ouvre automatiquement le jeu sur [http://localhost:5173](http://localhost:5173)

---

##  Autres commandes

| Commande          | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `npm run build`   | Génère la version optimisée du jeu dans le dossier `dist/`.                   |
| `npm run preview` | Lance un serveur local pour prévisualiser la version de production (`dist/`). |

---

##  Règles du jeu

* Clique sur le cookie pour infliger des dégâts et gagner des cookies.
* Achète des améliorations dans la boutique pour générer des cookies passivement.
* Un **cookie doré** peut apparaître aléatoirement : clique dessus pour obtenir un bonus !
* Vaincs le **cookie maléfique** en réduisant sa vie à zéro pour gagner la partie.

---

##  Structure du projet

```
assets/       → Images du jeu (cookie, golden-cookie, etc.)
scripts/      → Logique du jeu (game, shop, clickable-area, etc.)
styles/       → Feuilles de style CSS
public/       → Fichiers statiques accessibles directement
index.html    → Point d'entrée HTML
package.json  → Dépendances et scripts npm
```

---

##  Remarques

* La progression est **sauvegardée automatiquement** dans le navigateur (`localStorage`).
* Pour recommencer, clique sur **"Rejouer"** après avoir gagné.
* Projet réalisé pour l'école.

---

##  Amuse-toi bien et clique sans pitié !
