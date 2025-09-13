# Configuration Prisma pour TIBUCE Afrique

## Installation et Configuration

### 1. Installation des dépendances

```bash
npm install prisma @prisma/client
```

### 2. Configuration de la base de données

Ajoutez votre URL de connexion PostgreSQL dans le fichier `.env` :

```env
DATABASE_URL="postgresql://username:password@hostname:port/database?sslmode=require"
```

### 3. Génération du client Prisma

```bash
npx prisma generate
```

### 4. Création et application des migrations

```bash
# Pour le développement
npx prisma migrate dev --name init

# Pour la production
npx prisma migrate deploy
```

### 5. Alternative : Push direct (développement uniquement)

```bash
npx prisma db push
```

## Structure du modèle

Le modèle `Inscription` contient tous les champs nécessaires pour l'inscription aux événements TIBUCE :

### Informations générales

-   `teamName`: Nom de l'équipe (unique)
-   `country`: Pays de représentation
-   `edition`: Édition concernée
-   `organization`: Type d'organisation
-   `numberOfMembers`: Nombre de membres (2 ou 3)
-   `projectTitle`: Titre du projet (optionnel)
-   `projectDescription`: Description du projet (optionnel)
-   `paymentMethod`: Mode de paiement
-   `paymentReference`: Référence de paiement
-   `teamRepresentative`: Représentant de l'équipe
-   `selectedTrack`: Volet choisi (array)

### Participants

Chaque participant (1, 2, et 3 optionnel) contient :

-   `name`: Nom complet
-   `phone`: Téléphone WhatsApp
-   `email`: Email (unique)
-   `birthDate`: Date de naissance
-   `gender`: Sexe (H/F)
-   `education`: Niveau d'études
-   `status`: Statut actuel (array)

### Validation

-   `validationDate`: Date de validation
-   `acceptTerms`: Acceptation des conditions

## Utilisation dans l'API

L'API `/api/inscription` utilise Prisma pour :

-   Validation des données
-   Vérification des doublons (nom d'équipe et emails)
-   Insertion des données
-   Récupération des inscriptions

## Commandes utiles

```bash
# Visualiser la base de données
npx prisma studio

# Réinitialiser la base de données
npx prisma migrate reset

# Voir le statut des migrations
npx prisma migrate status

# Générer le client après modification du schéma
npx prisma generate
```

## Sécurité

-   Tous les emails sont uniques pour éviter les doublons
-   Validation des formats d'email et de téléphone
-   Vérification des équipes existantes
-   Types stricts avec TypeScript
