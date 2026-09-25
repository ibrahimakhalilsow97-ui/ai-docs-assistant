# Application web TanStack Start

> **Nom du projet :** `tanstack_start_ts` — nom technique provisoire. Le nom produit définitif reste à décider.

## Description

Base de projet destinée à construire une application web moderne avec React, TanStack Start et TypeScript. Elle fournit un socle technique complet — routage, styles, composants d’interface et commandes de développement — prêt à accueillir les premiers parcours utilisateur.

> **État actuel :** le socle technique est prêt, mais l’écran d’accueil contient encore le modèle vierge initial. Le public cible et les fonctionnalités métier restent à définir.

## Fonctionnalités

Le périmètre actuel est celui du socle technique :

- **Application web rendue côté client et serveur** avec React 19 et TanStack Start.
- **Navigation** gérée par TanStack Router, avec structure de pages prête à être étendue.
- **Styles globaux** basés sur Tailwind CSS 4 et des variables de thème sémantiques (couleurs, espacements centralisés).
- **Bibliothèque de composants d’interface** pré-intégrée : boutons, formulaires, dialogues, tableaux, graphiques, etc.
- **Gestion de données** asynchrone prête à l’emploi avec TanStack Query.
- **Validation de données** avec Zod et React Hook Form.

Les fonctionnalités métier (produit, parcours utilisateurs, authentification, persistance des données) ne sont pas encore définies.

## Utilisation

### Prérequis

- [Bun](https://bun.sh/) installé sur la machine
- Git pour cloner le dépôt

### Installation

```bash
git clone <url-du-depot>
cd <nom-du-dossier>
bun install
```

### Lancer le projet

```bash
bun run dev
```

L’application est ensuite disponible à l’adresse indiquée dans le terminal.

### Commandes disponibles

| Commande | Description |
| --- | --- |
| `bun run dev` | Démarre le serveur de développement |
| `bun run build` | Génère la version de production |
| `bun run build:dev` | Génère une version avec la configuration de développement |
| `bun run preview` | Prévisualise localement la version générée |
| `bun run lint` | Analyse la qualité du code |
| `bun run format` | Formate les fichiers avec Prettier |

### Organisation principale

```text
src/
├── routes/        # Pages et structure de navigation
├── components/    # Composants d'interface réutilisables
├── hooks/         # Hooks React partagés
├── lib/           # Fonctions utilitaires
├── router.tsx     # Configuration du routeur
├── start.ts       # Initialisation de l'application
└── styles.css     # Thème et styles globaux
public/            # Fichiers publics statiques
```

## Technologies utilisées

| Technologie | Rôle |
| --- | --- |
| [TanStack Start](https://tanstack.com/start) | Framework applicatif full-stack (rendu, serveur) |
| [TanStack Router](https://tanstack.com/router) | Routage et navigation |
| [React](https://react.dev) 19 | Bibliothèque d’interface utilisateur |
| [TypeScript](https://www.typescriptlang.org) | Typage statique du code |
| [Tailwind CSS](https://tailwindcss.com) 4 | Styles utilitaires et thème global |
| [Vite](https://vite.dev) | Outil de build et serveur de développement |
| [TanStack Query](https://tanstack.com/query) | Gestion des données asynchrones |
| [Radix UI](https://www.radix-ui.com) | Composants d’interface accessibles |
| [Lucide React](https://lucide.dev) | Icônes |
| [Zod](https://zod.dev) | Validation de données |
| [React Hook Form](https://react-hook-form.com) | Gestion des formulaires |
| [Bun](https://bun.sh/) | Exécution et gestion des dépendances |

## Spécification

La courte spécification initiale se trouve dans [`PROJECT_SPEC.md`](./PROJECT_SPEC.md).

## Développement avec Lovable

Le projet peut être modifié dans [Lovable](https://lovable.dev) ou dans un environnement local. Les changements synchronisés avec GitHub restent dans le dépôt du projet.

## Licence

Aucune licence de distribution n’est définie à ce stade.
