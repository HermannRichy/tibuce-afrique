const { execSync } = require("child_process");

console.log("🚀 Configuration de la base de données avec Prisma...\n");

try {
    // Générer le client Prisma
    console.log("📦 Génération du client Prisma...");
    execSync("npx prisma generate", { stdio: "inherit" });

    // Créer la migration
    console.log("\n🗄️  Création de la migration...");
    execSync("npx prisma migrate dev --name init", { stdio: "inherit" });

    console.log("\n✅ Configuration terminée avec succès !");
    console.log("\n📋 Prochaines étapes :");
    console.log("1. Configurez votre DATABASE_URL dans le fichier .env");
    console.log(
        '2. Exécutez "npx prisma db push" pour appliquer les changements à votre base de données'
    );
    console.log('3. Ou exécutez "npx prisma migrate deploy" en production');
} catch (error) {
    console.error("❌ Erreur lors de la configuration :", error.message);
    process.exit(1);
}
