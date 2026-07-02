# 🌐 Site Web Multilingue — HTML / CSS / JavaScript
> **10 pages · 3 langues (FR / EN / AR)**  
> Instructions complètes pour génération via OpenCode ou tout agent IA

---

## 📋 Objectif du projet

Créer un site web statique complet avec :
- **10 pages HTML** par langue
- **3 langues** : Français (`fr/`), English (`en/`), العربية (`ar/`)
- **Détection automatique** de la langue du navigateur
- **Support RTL** pour l'arabe
- **CSS/JS partagés** entre toutes les langues
- **Système de traductions** via fichiers JSON

---

## 🗂️ Structure des fichiers

```
mon-site/
│
├── index.html                  ← Point d'entrée : détection langue + redirection
├── .htaccess                   ← Redirection serveur Apache (optionnel)
│
├── fr/                         ← 10 pages en Français
│   ├── index.html              (Accueil)
│   ├── about.html              (À propos)
│   ├── services.html           (Services)
│   ├── portfolio.html          (Portfolio)
│   ├── blog.html               (Blog)
│   ├── equipe.html             (Équipe)
│   ├── faq.html                (FAQ)
│   ├── tarifs.html             (Tarifs)
│   ├── contact.html            (Contact)
│   └── 404.html                (Page erreur)
│
├── en/                         ← 10 pages en English (même structure que fr/)
│   ├── index.html              (Home)
│   ├── about.html              (About)
│   ├── services.html           (Services)
│   ├── portfolio.html          (Portfolio)
│   ├── blog.html               (Blog)
│   ├── team.html               (Team)
│   ├── faq.html                (FAQ)
│   ├── pricing.html            (Pricing)
│   ├── contact.html            (Contact)
│   └── 404.html                (Error page)
│
├── ar/                         ← 10 pages en العربية — RTL (même structure)
│   ├── index.html              (الرئيسية)
│   ├── about.html              (من نحن)
│   ├── services.html           (الخدمات)
│   ├── portfolio.html          (أعمالنا)
│   ├── blog.html               (المدونة)
│   ├── team.html               (الفريق)
│   ├── faq.html                (الأسئلة الشائعة)
│   ├── pricing.html            (الأسعار)
│   ├── contact.html            (اتصل بنا)
│   └── 404.html                (صفحة الخطأ)
│
├── css/
│   ├── style.css               ← Styles globaux (LTR)
│   ├── rtl.css                 ← Surcharges RTL pour l'arabe
│   └── components.css          ← Navbar, footer, boutons, cartes
│
├── js/
│   ├── main.js                 ← Comportements globaux (menu burger, scroll…)
│   └── i18n.js                 ← Chargement dynamique des traductions JSON
│
├── lang/
│   ├── fr.json                 ← Toutes les chaînes en français
│   ├── en.json                 ← Toutes les chaînes en anglais
│   └── ar.json                 ← Toutes les chaînes en arabe
│
└── assets/
    ├── images/                 ← Photos, illustrations, og-image.jpg
    ├── fonts/                  ← Polices locales (woff2)
    └── icons/                  ← SVG icons ou favicon.ico
```

---

## 📄 Instructions de génération — OpenCode

### ÉTAPE 1 — Fichier d'entrée `index.html`

```
Crée le fichier index.html à la racine du projet.
Ce fichier doit :
- Détecter la langue du navigateur via navigator.language
- Rediriger automatiquement vers /fr/, /en/ ou /ar/
- Utiliser /fr/ comme langue par défaut si non reconnue
- Ne pas afficher de contenu visible (page de redirection pure)
```

---

### ÉTAPE 2 — Fichier CSS principal `css/style.css`

```
Crée le fichier css/style.css avec :
- Reset CSS (box-sizing, margin, padding)
- Variables CSS : --color-primary, --color-secondary, --color-accent,
  --font-main, --font-heading, --radius, --shadow
- Styles globaux : body, h1-h6, p, a, ul, img
- Layout : header fixe, main avec padding-top, footer
- Navbar responsive avec menu burger (hamburger icon)
- Grid système simple (container, row, col)
- Styles pour : boutons (.btn, .btn-primary, .btn-outline),
  cartes (.card), sections (.section, .section-alt)
- Media queries : mobile (< 768px), tablet (768–1024px), desktop (> 1024px)
- Ne PAS inclure de styles RTL ici
```

---

### ÉTAPE 3 — Fichier RTL `css/rtl.css`

```
Crée le fichier css/rtl.css avec :
- Toutes les surcharges nécessaires pour la mise en page RTL (arabe)
- Inverser les marges, paddings, flexbox direction
- Changer text-align: left en text-align: right là où nécessaire
- Inverser les icônes directionnelles (flèches)
- Ajuster la navbar pour lecture droite-à-gauche
- Ce fichier est chargé UNIQUEMENT dans les pages du dossier ar/
- Ajouter <html dir="rtl" lang="ar"> dans toutes les pages arabes
```

---

### ÉTAPE 4 — Système de traductions `js/i18n.js`

```
Crée le fichier js/i18n.js avec :
- Fonction detectLang() : lit l'URL pour détecter la langue active (/fr/, /en/, /ar/)
- Fonction loadTranslations(lang) : fetch() du fichier lang/{lang}.json
- Fonction applyTranslations(data) : remplace le contenu des éléments
  ayant l'attribut data-i18n="clé" par la valeur correspondante dans le JSON
- Fonction switchLang(lang) : redirige vers la même page dans l'autre langue
- Appel automatique au chargement de la page (DOMContentLoaded)
- Export des fonctions pour usage dans main.js
```

---

### ÉTAPE 5 — Fichiers de traductions `lang/fr.json`, `lang/en.json`, `lang/ar.json`

```
Crée les 3 fichiers JSON de traductions avec les clés suivantes :

{
  "nav.home": "...",
  "nav.about": "...",
  "nav.services": "...",
  "nav.portfolio": "...",
  "nav.blog": "...",
  "nav.team": "...",
  "nav.faq": "...",
  "nav.pricing": "...",
  "nav.contact": "...",

  "hero.title": "...",
  "hero.subtitle": "...",
  "hero.cta": "...",

  "about.title": "...",
  "about.text": "...",

  "services.title": "...",
  "services.subtitle": "...",

  "footer.rights": "...",
  "footer.contact": "...",

  "404.title": "...",
  "404.message": "...",
  "404.back": "..."
}

Remplis chaque fichier dans la langue correspondante.
Pour ar.json, utilise du texte arabe courant et professionnel.
```

---

### ÉTAPE 6 — Template HTML réutilisable (modèle pour les 30 pages)

```
Crée un fichier template.html qui servira de modèle pour toutes les pages.
Structure requise :

<!DOCTYPE html>
<html lang="fr">        ← changer selon la langue (en / ar)
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title data-i18n="page.title">Titre</title>
  <link rel="stylesheet" href="../css/style.css">
  <!-- Pour ar/ seulement : <link rel="stylesheet" href="../css/rtl.css"> -->
</head>
<body>
  <header>
    <nav> ... liens avec data-i18n ... </nav>
    <div class="lang-switcher">
      <a href="../fr/[page].html">FR</a>
      <a href="../en/[page].html">EN</a>
      <a href="../ar/[page].html">ع</a>
    </div>
  </header>

  <main>
    <!-- Contenu spécifique à chaque page -->
  </main>

  <footer>
    <p data-i18n="footer.rights"></p>
  </footer>

  <script src="../js/i18n.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>
```

---

### ÉTAPE 7 — Générer les 10 pages pour chaque langue

Utilise le template ci-dessus pour créer **chaque page** dans les 3 dossiers.

#### Pages à créer :

| Fichier | Section principale | Contenu attendu |
|---|---|---|
| `index.html` | Hero + Services résumé + CTA | Grande bannière, 3 services, bouton |
| `about.html` | Histoire + Valeurs + Chiffres | Texte, 3 valeurs, compteurs animés |
| `services.html` | Grille de services | 6 cartes avec icône, titre, description |
| `portfolio.html` | Galerie de projets | Grille filtrable par catégorie |
| `blog.html` | Liste d'articles | Cartes avec image, date, extrait |
| `equipe.html` / `team.html` | Cartes membres | Photo, nom, poste, réseaux sociaux |
| `faq.html` | Accordéon Q&A | 8 questions-réponses en accordéon JS |
| `tarifs.html` / `pricing.html` | Tableau de tarifs | 3 colonnes (Basic, Pro, Enterprise) |
| `contact.html` | Formulaire + Carte | Form HTML5 validé + adresse |
| `404.html` | Message erreur | Illustration, message, lien retour |

```
Pour chaque page :
1. Dupliquer le template.html
2. Changer le data-i18n de <title>
3. Ajouter le contenu spécifique dans <main>
4. Ajuster les liens du lang-switcher pour pointer vers la bonne page
5. Pour ar/ : ajouter dir="rtl" sur <html> et charger rtl.css
```

---

### ÉTAPE 8 — JavaScript principal `js/main.js`

```
Crée le fichier js/main.js avec :
- Menu burger : toggle class .open sur la navbar au clic
- Scroll smooth : document.querySelectorAll('a[href^="#"]')
- Navbar sticky : ajouter classe .scrolled après 80px de scroll
- Accordéon FAQ : toggle .active sur les items .faq-item au clic
- Compteurs animés (page about) : animer les chiffres de 0 à la valeur cible
- Filtre portfolio : filtrer les cartes .portfolio-item par data-category au clic
- Validation formulaire contact : vérifier email, champs requis avant submit
- Fermer le menu mobile au clic sur un lien
```

---

### ÉTAPE 9 — Fichier `.htaccess` (optionnel Apache)

```
Crée le fichier .htaccess à la racine pour :
- Rediriger / vers /fr/ si Accept-Language contient "fr"
- Rediriger / vers /en/ si Accept-Language contient "en"
- Rediriger / vers /ar/ si Accept-Language contient "ar"
- Sinon rediriger vers /fr/ par défaut
- Gérer les erreurs 404 : ErrorDocument 404 /fr/404.html
- Activer la compression gzip pour CSS, JS, HTML
- Ajouter les headers de cache pour assets/
```

---

## ✅ Checklist de validation

```
Avant de livrer le projet, vérifier :

[ ] index.html redirige correctement selon la langue
[ ] Les 30 pages existent (10 × 3 langues)
[ ] Tous les liens de navigation sont corrects dans chaque dossier
[ ] Le lang-switcher pointe vers la bonne page dans chaque langue
[ ] Les fichiers JSON contiennent toutes les clés utilisées dans le HTML
[ ] i18n.js remplace correctement tous les data-i18n
[ ] La page arabe a bien dir="rtl" et charge rtl.css
[ ] Le menu burger fonctionne sur mobile
[ ] La page 404 existe dans les 3 langues
[ ] Les chemins vers css/ js/ assets/ utilisent ../ (chemin relatif)
[ ] Aucun lien cassé (tester chaque page)
[ ] Les images ont un attribut alt traduit
```

---

## 🚀 Ordre de génération recommandé pour OpenCode

```
1. css/style.css
2. css/rtl.css
3. css/components.css
4. lang/fr.json
5. lang/en.json
6. lang/ar.json
7. js/i18n.js
8. js/main.js
9. index.html (racine)
10. fr/index.html (page accueil FR comme modèle)
11. Toutes les pages fr/ (×9 restantes)
12. Toutes les pages en/ (×10, adapter textes)
13. Toutes les pages ar/ (×10, dir="rtl", rtl.css)
14. .htaccess
```

---

## 📌 Notes importantes

- **Chemins relatifs** : depuis `fr/`, `en/`, `ar/`, les assets sont à `../css/`, `../js/`, `../lang/`, `../assets/`
- **Langue arabe** : toujours ajouter `dir="rtl"` sur `<html>` ET `lang="ar"`
- **Sélecteur de langue** : toujours afficher les 3 options sur toutes les pages
- **SEO** : ajouter `<link rel="alternate" hreflang="fr|en|ar" href="...">` dans le `<head>` de chaque page
- **Accessibilité** : utiliser les balises sémantiques `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
