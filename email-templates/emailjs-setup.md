# Configuration EmailJS pour TIBUCE Afrique

## 📧 Templates d'Email Créés

### 1. Template de Notification (pour l'équipe TIBUCE)

-   **Fichier :** `inscription-notification.html`
-   **Usage :** Envoi automatique à l'équipe TIBUCE lors d'une nouvelle inscription
-   **Destinataire :** contact@tibuce-afrique.org

### 2. Template de Confirmation (pour le participant)

-   **Fichier :** `inscription-confirmation.html`
-   **Usage :** Auto-réponse envoyée au participant après inscription
-   **Destinataire :** Email du participant (participant1Email)

## 🚀 Configuration dans EmailJS

### Étape 1 : Créer les Templates

1. Connectez-vous à votre compte EmailJS
2. Allez dans **Email Templates**
3. Cliquez sur **Create New Template**

### Étape 2 : Template de Notification

1. **Nom du template :** `inscription_notification`
2. **Sujet :** `🎉 Nouvelle Inscription TIBUCE Afrique - {{teamName}}`
3. **Contenu :** Copiez le contenu de `inscription-notification.html`
4. **Variables utilisées :**
    ```
    {{teamName}}, {{country}}, {{edition}}, {{organization}},
    {{organizationOther}}, {{numberOfMembers}}, {{projectTitle}},
    {{projectDescription}}, {{selectedTrack}}, {{paymentMethod}},
    {{paymentMethodOther}}, {{paymentReference}}, {{teamRepresentative}},
    {{participant1Name}}, {{participant1Email}}, {{participant1Phone}},
    {{participant1BirthDate}}, {{participant1Gender}}, {{participant1Education}},
    {{participant1Status}}, {{participant2Name}}, {{participant2Email}},
    {{participant2Phone}}, {{participant2BirthDate}}, {{participant2Gender}},
    {{participant2Education}}, {{participant2Status}}, {{participant3Name}},
    {{participant3Email}}, {{participant3Phone}}, {{participant3BirthDate}},
    {{participant3Gender}}, {{participant3Education}}, {{participant3Status}},
    {{validationDate}}, {{acceptTerms}}, {{timestamp}}, {{inscriptionId}}
    ```

### Étape 3 : Template de Confirmation

1. **Nom du template :** `inscription_confirmation`
2. **Sujet :** `✅ Confirmation d'Inscription TIBUCE Afrique - {{teamName}}`
3. **Contenu :** Copiez le contenu de `inscription-confirmation.html`
4. **Variables utilisées :** (mêmes que le template de notification)

### Étape 4 : Configuration des Variables d'Environnement

Ajoutez dans votre fichier `.env` :

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NOTIFICATION=template_id_notification
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONFIRMATION=template_id_confirmation
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🔧 Modification du Code d'Inscription

### Mise à jour de l'API Route

Modifiez `app/api/inscription/route.ts` pour envoyer les deux emails :

```typescript
// Dans la fonction onSubmit de la page d'inscription
try {
    // 1. Envoyer la notification à l'équipe TIBUCE
    await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NOTIFICATION!,
        {
            ...data,
            timestamp: new Date().toLocaleString('fr-FR'),
            inscriptionId: inscription.id,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    // 2. Envoyer la confirmation au participant
    await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONFIRMATION!,
        {
            ...data,
            timestamp: new Date().toLocaleString('fr-FR'),
            inscriptionId: inscription.id,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    // 3. Sauvegarder en base de données
    const response = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    // ... reste du code
}
```

## 📋 Checklist de Configuration

-   [ ] Compte EmailJS créé et configuré
-   [ ] Service EmailJS configuré (Gmail, Outlook, etc.)
-   [ ] Template de notification créé et testé
-   [ ] Template de confirmation créé et testé
-   [ ] Variables d'environnement configurées
-   [ ] Code modifié pour envoyer les deux emails
-   [ ] Test d'envoi effectué

## 🎨 Personnalisation des Templates

### Couleurs

Les templates utilisent la palette de couleurs TIBUCE :

-   **Primaire :** #667eea (bleu)
-   **Secondaire :** #764ba2 (violet)
-   **Succès :** #d4edda / #155724 (vert)
-   **Attention :** #fff3cd / #856404 (jaune)
-   **Info :** #e7f3ff / #004085 (bleu clair)

### Responsive Design

Les templates sont optimisés pour :

-   ✅ Desktop (800px+)
-   ✅ Tablet (600px-800px)
-   ✅ Mobile (<600px)

## 🔍 Test des Templates

1. **Test de rendu :** Utilisez l'aperçu EmailJS
2. **Test d'envoi :** Envoyez-vous un email de test
3. **Test sur mobile :** Vérifiez le rendu sur différents appareils
4. **Test des variables :** Assurez-vous que toutes les variables s'affichent correctement

## 📞 Support

En cas de problème :

-   Consultez la documentation EmailJS
-   Vérifiez les logs dans la console
-   Testez avec des données simples d'abord
-   Contactez le support EmailJS si nécessaire
