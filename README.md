# ✈️ Horizons Voyages — Site Agence de Voyage Premium

> **10 pages · 3 langues (FR / EN / AR) · Site statique multilingue avec support RTL arabe**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/licence-MIT-blue?style=flat-square)]()

---

## 📖 À propos

Site web professionnel pour une **agence de voyage** proposant des séjours, circuits et voyages organisés à destination du monde entier. Le site inspire confiance, donne envie de voyager, et permet aux visiteurs de **demander un devis ou réserver en ligne**.

Design **moderne, immersif et chaleureux** — grandes photos de destinations, couleurs vibrantes, typographie élégante. Expérience utilisateur fluide sur mobile comme sur desktop.

---

## ✨ Fonctionnalités

| Feature | Détail |
|---|---|
| **🌍 Multilingue** | Français, English, العربية — détection automatique de la langue du navigateur |
| **📐 RTL Arabe** | Support complet de l'écriture droite-à-gauche avec `rtl.css` et police Tajawal |
| **🔁 i18n Dynamique** | Système de traduction via `data-i18n` + fichiers JSON chargés en fetch |
| **📱 Responsive** | Mobile (375px), tablette (768px), desktop (1280px+) |
| **🧭 Header sticky** | Navigation fixe qui devient blanche au scroll |
| **🍔 Menu burger** | Navigation mobile avec toggle et fermeture au clic |
| **🖼️ Lightbox** | Galerie plein écran avec navigation clavier (Escape) |
| **🎠 Carrousel** | Témoignages clients avec défilement auto, dots et navigation |
| **🔍 Filtres JS** | Filtrage par continent / type sans rechargement |
| **📝 Formulaire devis** | Validation complète (email, dates, champs requis, slider budget) |
| **❓ FAQ Accordéon** | Questions fréquentes avec animation smooth |
| **📊 Compteurs animés** | Chiffres clés qui s'animent au scroll (IntersectionObserver) |
| **📧 Newsletter** | Formulaire d'abonnement avec validation email |
| **📄 404 personnalisée** | Page d'erreur multilingue avec suggestions de navigation |
| **🔙 Back-to-top** | Bouton de retour en haut flottant |
| **⚡ Animations scroll** | Apparition progressive des sections au défilement |

---

## 📸 Aperçu

> *Des captures d'écran seront ajoutées prochainement.*

La page d'accueil comprend :
- Hero plein écran avec overlay dégradé et CTA
- Section "Pourquoi nous choisir" (4 cartes icônes)
- Grille de 6 destinations phares
- 3 étapes interactives (Choisir → Réserver → Partir)
- Carrousel de témoignages clients
- Compteurs animés (500+ destinations, 12 000 voyageurs, etc.)
- Bloc newsletter

---

## 📄 Pages du site (10 pages × 3 langues = 30 pages)

| Page | Fichier | Contenu |
|---|---|---|
| **Accueil** | `index.html` | Hero, features, destinations, étapes, témoignages, stats, newsletter |
| **Destinations** | `destinations.html` | 12 cartes avec filtres par continent (JS) |
| **Séjours** | `sejours.html` | 6 séjours avec filtres plage/culture/aventure/famille |
| **Détail séjour** | `sejour-detail.html` | Galerie photos, onglets programme/inclus/pratique, sidebar réservation |
| **Galerie** | `galerie.html` | Masonry photos avec lightbox + 3 vidéos YouTube |
| **Blog** | `blog.html` | Article à la une + 6 articles avec catégories |
| **Article** | `article.html` | Article complet avec breadcrumb, partage, commentaires |
| **Avis** | `avis.html` | Score 4.8/5, 9 avis clients, témoignages vidéo |
| **Contact** | `contact.html` | Formulaire devis complet + coordonnées + FAQ |
| **404** | `404.html` | Message d'erreur avec suggestions |

---

## 🎨 Design Tokens

```css
/* Couleurs */
--color-primary  : #0077B6   /* Bleu océan — liens, boutons */
--color-secondary: #F4A261   /* Orange soleil — CTA, accents */
--color-accent   : #2D6A4F   /* Vert nature — badges, succès */
--color-dark     : #1A1A2E   /* Texte principal */
--color-light    : #F8F9FA   /* Fond sections alternées */

/* Typographie */
--font-heading: 'Playfair Display', serif   /* Titres h1-h3 */
--font-body   : 'Inter', sans-serif         /* Texte courant */
--font-arabic : 'Tajawal', sans-serif       /* Texte arabe */
```

---

## 🛠️ Stack technique

- **HTML5** — Balisage sémantique, Open Graph, hreflang
- **CSS3** — Variables CSS, Grid, Flexbox, animations, Media Queries
- **JavaScript** — Vanilla JS (ES6+), IntersectionObserver, Fetch API, DOM manipulation
- **i18n** — Système de traduction maison via fichiers JSON et attributs `data-i18n`
- **RTL** — Feuille de style dédiée pour le support arabe
- **Google Fonts** — Playfair Display, Inter, Tajawal
- **Font Awesome / Emoji** — Icônes sociales et fonctionnelles

---

## 📁 Structure du projet

```
horizons-voyages/
│
├── index.html                    ← Redirection automatique (langue navigateur)
├── .htaccess                     ← Règles Apache (Accept-Language, cache, GZip)
│
├── fr/                           ← 10 pages en Français
│   ├── index.html                ← Accueil
│   ├── destinations.html         ← Destinations
│   ├── sejours.html              ← Séjours
│   ├── sejour-detail.html        ← Détail d'un séjour
│   ├── galerie.html              ← Galerie photos & vidéos
│   ├── blog.html                 ← Blog & conseils
│   ├── article.html              ← Article de blog
│   ├── avis.html                 ← Avis clients
│   ├── contact.html              ← Contact & devis
│   └── 404.html                  ← Page non trouvée
│
├── en/                           ← 10 pages en English (même structure)
├── ar/                           ← 10 pages en العربية (RTL, même structure)
│
├── css/
│   ├── style.css                 ← Styles globaux (complets, responsifs)
│   ├── components.css            ← Composants additionnels
│   └── rtl.css                   ← Surcharges RTL pour l'arabe
│
├── js/
│   ├── main.js                   ← Fonctionnalités interactives
│   └── i18n.js                   ← Système de traduction dynamique
│
├── lang/
│   ├── fr.json                   ← Traductions françaises
│   ├── en.json                   ← English translations
│   └── ar.json                   ← الترجمات العربية
│
├── assets/
│   ├── images/
│   │   ├── hero/                 ← Photos hero plein écran
│   │   └── destinations/         ← Photos destinations
│   ├── icons/                    ← Favicon, og-image
│   └── fonts/                    ← Polices locales (optionnel)
│
├── README.md                     ← Vous êtes ici
├── INSTRUCTIONS.md               ← Description complète du projet
├── AGENTS.md                     ← Guide pour agents IA
└── .htaccess                     ← Configuration Apache
```

---

## 🚀 Utilisation

**Aucune dépendance, aucun build.** Site 100% statique.

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-utilisateur/horizons-voyages.git

# 2. Ouvrir dans un navigateur (double-clic sur index.html)
#    ou servir avec un serveur local :
python -m http.server 8000
#    → http://localhost:8000

# 3. Pour Apache, activer mod_rewrite pour la redirection automatique
```

Le fichier racine `index.html` détecte la langue du navigateur et redirige automatiquement vers `/fr/`, `/en/` ou `/ar/`.

---

## 🌐 Comment fonctionne le multilingue

1. **Détection** — `index.html` utilise `navigator.language` pour rediriger vers le bon dossier
2. **Chargement** — `js/i18n.js` détecte la langue depuis l'URL, fetch le fichier `lang/{langue}.json` correspondant
3. **Application** — Remplace le contenu de tous les éléments avec l'attribut `data-i18n="clef"` par la valeur traduite
4. **Switch** — Le sélecteur de langue en haut de chaque page redirige vers la même page dans l'autre langue

Pour l'arabe : les pages dans `ar/` ont `dir="rtl"` sur la balise `<html>` et chargent `rtl.css` en plus du CSS principal.

---

## 📝 Licence

Distribué sous licence **MIT**. Voir le fichier `LICENSE` pour plus d'informations.

---

<div align="center">
  <sub>Fait avec ❤️ pour les voyageurs du monde entier</sub>
</div>
