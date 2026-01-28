# Portfolio - Lucas GUILLEMAUD

Bienvenue sur le code source de mon portfolio.
Ce projet a pour but de présenter mon parcours, mes compétences et mes réalisations en tant qu'étudiant en informatique.

🔗 **Voir le site en ligne :** [lucasguillemaud-portfolio.netlify.app](https://lucasguillemaud-portfolio.netlify.app)

## 🛠 Technologies & Architecture

Ce site est une **Single Page Application (SPA)** développée avec les dernières fonctionnalités d'Angular.

*   **Framework :** Angular 17+ (Utilisation des *Standalone Components*, *Signals* et du nouveau *Control Flow* `@for/@if`).
*   **Langage :** TypeScript.
*   **Styling :** CSS Vanilla (Design System personnalisé : variables CSS, Responsive Design, Palette 60-30-10).
*   **Performance :** `NgOptimizedImage` pour le chargement optimisé des images (WebP).
*   **SEO :** Optimisation complète (Meta tags, JSON-LD Structured Data, Robots.txt).
*   **Hébergement :** Netlify (CI/CD automatique depuis GitHub).
*   **Formulaire :** Netlify Forms (Gestion `serverless` des contacts).

## 🚀 Installation & Lancement local

Pour explorer ce projet sur votre machine :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/Luk-26/portfolio.git
    cd portfolio
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    ng serve
    ```
    Ouvrez ensuite votre navigateur sur `http://localhost:4200/`.

## 📂 Structure du projet

*   `src/app/pages/` : Contient les vues principales (Accueil, Projets, Expériences, Contact).
*   `src/app/core/` : Configuration globale et constantes.
*   `public/images/` : Assets graphiques optimisés.
*   `netlify.toml` : Configuration de déploiement Netlify (Redirections pour le routing Angular).

## ✨ Fonctionnalités clés

*   **Responsive Design :** S'adapte parfaitement aux mobiles, tablettes et desktops.
*   **Routing Angular :** Navigation fluide sans rechargement de page.
*   **Animations :** Micro-interactions (survol des cartes, timeline, boutons).
*   **Mode Sombre (Dark Mode) :** Support natif via variables CSS (activable via classe body).
*   **Page 404 :** Gestion intelligente des routes inexistantes.

## 👤 Auteur

**Lucas GUILLEMAUD**
*   Étudiant en BTS SIO option SLAM
*   Recherche d'alternance pour 2026-2027 (Licence 3 Informatique)
