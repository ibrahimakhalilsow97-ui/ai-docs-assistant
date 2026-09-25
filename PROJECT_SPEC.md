# Spécification courte du projet

## 1. Résumé

Le projet est un socle d’application web construit avec TanStack Start, React et TypeScript. Il doit servir de base à un produit dont le besoin métier reste à préciser.

## 2. Objectif actuel

Fournir une fondation technique claire, maintenable et prête à accueillir les premiers parcours utilisateur sans imposer de fonctionnalités non validées.

## 3. Périmètre initial

### Inclus

- Une application web rendue avec React et TanStack Start.
- Une navigation gérée par TanStack Router.
- Un système de styles basé sur Tailwind CSS et des variables de thème sémantiques.
- Une structure compatible avec des pages, des appels serveur et une gestion de données ultérieurs.
- Des commandes de développement, de contrôle et de génération de production.

### Non défini à ce stade

- Le nom du produit et son identité visuelle.
- Le public cible et le problème métier traité.
- Les fonctionnalités et parcours prioritaires.
- L’authentification, la persistance de données et les services externes.
- Le modèle économique et les règles métier.

## 4. Exigences techniques

- Conserver TypeScript pour la sécurité des types.
- Utiliser le système de routes existant de TanStack Start.
- Concevoir les écrans pour les formats mobiles et ordinateur.
- Centraliser les couleurs, espacements et états visuels dans le thème global.
- Préserver l’accessibilité des contenus et des commandes interactives.
- Ne jamais inclure de clé privée ou de secret dans le dépôt.

## 5. Critères d’acceptation du socle

- Les dépendances s’installent avec `bun install`.
- L’application démarre avec `bun run dev`.
- La version de production est générée avec `bun run build`.
- Chaque nouvelle page possède un titre et une description propres.
- Le futur écran d’accueil remplace entièrement le modèle vierge actuel.

## 6. Prochaines décisions produit

1. Définir le nom et la proposition de valeur.
2. Identifier les utilisateurs cibles et leur besoin principal.
3. Décrire le premier parcours utilisateur à livrer.
4. Lister les données à conserver et les éventuelles connexions externes.
5. Valider une direction visuelle avant la réalisation des écrans.