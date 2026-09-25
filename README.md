# Application web TanStack Start

Base de projet destinée à construire une application web moderne avec React, TanStack Start et TypeScript.

> **État actuel :** le socle technique est prêt, mais l’écran d’accueil contient encore le modèle vierge initial. Le nom, le public cible et les fonctionnalités métier restent à définir.

## Technologies

- [TanStack Start](https://tanstack.com/start) et TanStack Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- TanStack Query
- Radix UI et Lucide React pour les éléments d’interface

## Prérequis

- [Bun](https://bun.sh/) installé sur la machine
- Git pour cloner le dépôt

## Installation

```bash
git clone <url-du-depot>
cd <nom-du-dossier>
bun install
```

## Lancer le projet

```bash
bun run dev
```

L’application est ensuite disponible à l’adresse indiquée dans le terminal.

## Commandes disponibles

| Commande | Description |
| --- | --- |
| `bun run dev` | Démarre le serveur de développement |
| `bun run build` | Génère la version de production |
| `bun run build:dev` | Génère une version avec la configuration de développement |
| `bun run preview` | Prévisualise localement la version générée |
| `bun run lint` | Analyse la qualité du code |
| `bun run format` | Formate les fichiers avec Prettier |

## Organisation principale

```text
src/
├── routes/        # Pages et structure de navigation
├── hooks/         # Hooks React partagés
├── lib/           # Fonctions utilitaires
├── router.tsx     # Configuration du routeur
├── start.ts       # Initialisation de l’application
└── styles.css     # Thème et styles globaux
public/            # Fichiers publics statiques
```

## Spécification

La courte spécification initiale se trouve dans [`PROJECT_SPEC.md`](./PROJECT_SPEC.md).

## Développement avec Lovable

Le projet peut être modifié dans [Lovable](https://lovable.dev) ou dans un environnement local. Les changements synchronisés avec GitHub restent dans le dépôt du projet.

## Licence

Aucune licence de distribution n’est définie à ce stade.