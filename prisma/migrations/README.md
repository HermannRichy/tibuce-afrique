# Migrations Prisma

Ce dossier contient les migrations Prisma pour le projet TIBUCE Afrique.

## Structure des Migrations

```
prisma/
├── schema.prisma        # Schéma de base de données
└── migrations/          # Dossier des migrations
    ├── README.md        # Ce fichier
    └── [timestamp]_init # Migration initiale (après création)
```

## Commandes de Migration

```bash
# Créer une migration initiale
npx prisma migrate dev --name init

# Créer une nouvelle migration
npx prisma migrate dev --name nom_de_la_migration

# Appliquer les migrations (production)
npx prisma migrate deploy

# Réinitialiser la base de données
npx prisma migrate reset

# Push direct (développement, sans migration)
npx prisma db push

# Voir le statut des migrations
npx prisma migrate status
```

## Génération du Client

```bash
# Générer le client Prisma
npx prisma generate
```

## Visualisation de la Base de Données

```bash
# Ouvrir Prisma Studio
npx prisma studio
```
