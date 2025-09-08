# 🚀 TIBUCE AFRIQUE

Un starter moderne pour créer rapidement une landing page Next.js stylée, responsive et prête pour la production.

## ✨ Fonctionnalités principales

-   UI moderne avec TailwindCSS
-   Composants réutilisables (Navbar, Hero, Cards, Footer...)
-   Formulaire de contact stylisé avec validation et envoi via EmailJS
-   Notifications toast (Sonner)
-   Icônes Lucide intégrées
-   SEO & Open Graph optimisés
-   Structure claire et évolutive

## 📦 Packages principaux

-   [next](https://nextjs.org/) — Framework React
-   [react-hook-form](https://react-hook-form.com/) — Gestion des formulaires
-   [@emailjs/browser](https://www.emailjs.com/) — Envoi d'emails côté client
-   [lucide-react](https://lucide.dev/) — Icônes SVG modernes
-   [sonner](https://sonner.emilkowal.ski/) — Toast notifications
-   [tailwindcss](https://tailwindcss.com/) — Utilitaires CSS
-   [@radix-ui](https://www.radix-ui.com/) — Primitives UI accessibles

## 🚀 Démarrage rapide

### 1. Cloner le repo

```bash
git clone https://github.com/HermannRichy/tibuce-afrique.git
cd tibuce-afrique
```

### 2. Installer les dépendances

```bash
pnpm install
# ou
npm install
# ou
yarn install
```

### 3. Configurer EmailJS

Crée un compte sur [EmailJS](https://www.emailjs.com/) et récupère :

-   Service ID
-   Template ID
-   Public Key

Crée un fichier `.env.local` à la racine :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=ton_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=ton_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ta_public_key
```

### 4. Lancer le serveur de dev

```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000)

## 🛠️ Structure des dossiers

-   `app/` : Entrée Next.js, layout global, styles globaux
-   `src/components/sections/` : Sections principales (Hero, Contact, Footer...)
-   `src/components/ui/` : Composants UI réutilisables (Button, Input, Card...)
-   `src/components/magicui/` : Composants animés ou avancés
-   `public/` : Images et icônes statiques
-   `lib/` : Fonctions utilitaires

## 🧩 UI & Thème

-   **[shadcn/ui](https://ui.shadcn.com/)** : Composants UI modernes, accessibles et personnalisables, utilisés comme base pour la plupart des éléments d’interface (boutons, formulaires, navigation, etc.).
-   **[tweakcn](https://tweakcn.com)** : Générateur de thèmes pour shadcn/ui. Le thème de ce boilerplate a été généré et customisé via tweakcn pour un rendu unique et cohérent.
-   **[Magic UI](https://magicui.design/)** : Bibliothèque de composants animés et interactifs, utilisée pour enrichir l’expérience utilisateur (ex : MagicCard, HeroVideoDialog).
-   **[Aceternity UI](https://ui.aceternity.com/)** : Composants UI avancés et animations, pour des effets visuels modernes et dynamiques.

Grâce à ce mix, tu bénéficies d’une base solide, moderne et facilement personnalisable pour créer des interfaces élégantes et interactives.

## ✍️ Personnalisation

-   Modifie les sections dans `src/components/sections/` pour adapter le contenu
-   Change les couleurs ou la config Tailwind dans `app/globals.css` et `tailwind.config.js`
-   Ajoute tes propres composants dans `src/components/`

## 📝 Licence

MIT

---

> Made with ❤️ by [Hermann Richy](https://hermann-richy.vercel.app)
