import { Footer } from "@/src/components/sections/Footer";
import { Button } from "@/src/components/ui/button";
import {
    ArrowLeft,
    Shield,
    Eye,
    Database,
    Lock,
    Mail,
    Phone,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-b">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Retour à l&apos;accueil
                                </Link>
                            </Button>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold font-rakiby text-primary mb-4">
                            Politique de Confidentialité
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Dernière mise à jour :{" "}
                            {new Date().toLocaleDateString("fr-FR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="bg-primary/5 rounded-xl p-8 mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="h-8 w-8 text-primary" />
                                    <h2 className="text-2xl font-bold text-primary font-rakiby">
                                        Notre Engagement
                                    </h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Chez TIBUCE Africa, nous nous engageons à
                                    protéger votre vie privée et vos données
                                    personnelles. Cette politique de
                                    confidentialité explique comment nous
                                    collectons, utilisons et protégeons vos
                                    informations lorsque vous utilisez notre
                                    site web et nos services.
                                </p>
                            </div>
                        </section>

                        {/* Collecte des données */}
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">
                                    1. Collecte des Données
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-primary">
                                        Données que nous collectons
                                    </h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    Informations personnelles :
                                                </strong>{" "}
                                                Nom, prénom, adresse e-mail,
                                                numéro de téléphone
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    Informations académiques :
                                                </strong>{" "}
                                                Niveau d&apos;études,
                                                établissement, domaine
                                                d&apos;études
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    Informations
                                                    professionnelles :
                                                </strong>{" "}
                                                Expérience, compétences,
                                                objectifs de carrière
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    Données de navigation :
                                                </strong>{" "}
                                                Adresse IP, type de navigateur,
                                                pages visitées
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Utilisation des données */}
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Eye className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">
                                    2. Utilisation des Données
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Finalités principales
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • Traitement de votre inscription
                                            aux événements TIBUCE
                                        </li>
                                        <li>
                                            • Communication d&apos;informations
                                            sur nos programmes
                                        </li>
                                        <li>
                                            • Amélioration de nos services et
                                            contenus
                                        </li>
                                        <li>
                                            • Statistiques et analyses
                                            anonymisées
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Base légale
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • Consentement explicite pour
                                            l&apos;inscription
                                        </li>
                                        <li>
                                            • Intérêt légitime pour
                                            l&apos;amélioration des services
                                        </li>
                                        <li>
                                            • Exécution du contrat pour les
                                            participants
                                        </li>
                                        <li>
                                            • Obligation légale pour certaines
                                            données
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Partage des données */}
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Lock className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">
                                    3. Partage et Protection
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Nous ne vendons jamais vos données
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Vos données personnelles ne sont jamais
                                        vendues à des tiers. Nous pouvons
                                        partager vos informations uniquement
                                        dans les cas suivants :
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • Avec votre consentement explicite
                                        </li>
                                        <li>
                                            • Avec nos partenaires officiels
                                            pour l&apos;organisation des
                                            événements
                                        </li>
                                        <li>
                                            • Pour respecter une obligation
                                            légale
                                        </li>
                                        <li>
                                            • Pour protéger nos droits et notre
                                            sécurité
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Mesures de sécurité
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • Chiffrement SSL/TLS pour toutes
                                            les transmissions
                                        </li>
                                        <li>
                                            • Accès restreint aux données
                                            personnelles
                                        </li>
                                        <li>
                                            • Sauvegarde sécurisée et régulière
                                        </li>
                                        <li>
                                            • Formation du personnel sur la
                                            protection des données
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Vos droits */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                4. Vos Droits
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-primary/5 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Droit d&apos;accès
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Vous pouvez demander une copie de toutes
                                        les données que nous détenons sur vous.
                                    </p>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Droit de rectification
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Vous pouvez corriger ou mettre à jour
                                        vos informations personnelles.
                                    </p>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Droit d&apos;effacement
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Vous pouvez demander la suppression de
                                        vos données personnelles.
                                    </p>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Droit d&apos;opposition
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Vous pouvez vous opposer au traitement
                                        de vos données.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Cookies */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                5. Cookies et Technologies Similaires
                            </h2>

                            <div className="bg-card border rounded-lg p-6">
                                <p className="text-muted-foreground mb-4">
                                    Notre site utilise des cookies pour
                                    améliorer votre expérience de navigation.
                                    Vous pouvez contrôler l&apos;utilisation des
                                    cookies via les paramètres de votre
                                    navigateur.
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-sm">
                                            <strong>
                                                Cookies essentiels :
                                            </strong>{" "}
                                            Nécessaires au fonctionnement du
                                            site
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                                        <span className="text-sm">
                                            <strong>
                                                Cookies analytiques :
                                            </strong>{" "}
                                            Pour comprendre l&apos;utilisation
                                            du site
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                                        <span className="text-sm">
                                            <strong>
                                                Cookies de préférences :
                                            </strong>{" "}
                                            Pour mémoriser vos choix
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                6. Contact et Questions
                            </h2>

                            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8">
                                <p className="text-muted-foreground mb-6">
                                    Pour toute question concernant cette
                                    politique de confidentialité ou pour exercer
                                    vos droits, contactez notre délégué à la
                                    protection des données :
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-sm text-muted-foreground">
                                                privacy@tibuce-africa.org
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="font-medium">
                                                Téléphone
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                +229 XX XX XX XX XX
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Button asChild>
                                        <Link href="/#contact">
                                            Nous contacter
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </section>

                        {/* Modifications */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                7. Modifications de cette Politique
                            </h2>

                            <div className="bg-card border rounded-lg p-6">
                                <p className="text-muted-foreground">
                                    Nous nous réservons le droit de modifier
                                    cette politique de confidentialité à tout
                                    moment. Toute modification sera publiée sur
                                    cette page avec une nouvelle date de mise à
                                    jour. Nous vous encourageons à consulter
                                    régulièrement cette page pour rester informé
                                    de nos pratiques.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
