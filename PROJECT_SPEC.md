# Spécification courte du projet

## 1. Résumé

**To-Do-List-en-HTML-CSS-et-JavaScript** est une application de liste de tâches : l'utilisateur ajoute ses tâches du quotidien, les coche quand elles sont terminées, les supprime et filtre la liste. Les tâches sont sauvegardées automatiquement dans le navigateur (localStorage), sans compte ni serveur.

L'application est réalisée avec HTML, CSS et JavaScript côté navigateur, sur le socle TanStack Start (React, TypeScript, Tailwind CSS).

## 2. Objectif

Offrir un moyen immédiat et sans inscription de noter et suivre ses tâches du quotidien, avec une interface claire en un seul écran.

## 3. Périmètre

### Inclus

- Ajout d'une tâche (champ de saisie, bouton « Ajouter », touche Entrée).
- Bascule « à faire / terminée » sur chaque tâche (texte barré quand terminée).
- Suppression d'une tâche individuelle.
- Filtres : *Toutes*, *À faire*, *Terminées*.
- Effacement groupé des tâches terminées.
- Compteur de tâches restantes et état vide accompagné.
- Persistance automatique dans le navigateur (localStorage).

### Hors périmètre (à ce stade)

- Comptes utilisateurs et authentification.
- Synchronisation entre appareils (base de données, serveur).
- Échéances, rappels, priorités ou listes multiples.
- Partage ou collaboration.

## 4. Exigences techniques

- TypeScript pour la sécurité des types ; interface unique sur la route d'accueil.
- Interface responsive (mobile et ordinateur) et accessible (libellés explicites, navigation clavier).
- Couleurs, espacements et états visuels centralisés dans le thème global (variables sémantiques).
- Aucune clé privée ni secret dans le dépôt ; aucune donnée personnelle envoyée à un serveur.

## 5. Critères d'acceptation

- Les dépendances s'installent avec `bun install` ; l'application démarre avec `bun run dev`.
- Une tâche ajoutée apparaît immédiatement dans la liste et survit au rechargement de la page.
- Le cochage, la suppression, les filtres et l'effacement des terminées fonctionnent sans erreur.
- Chaque page possède un titre et une description propres.
