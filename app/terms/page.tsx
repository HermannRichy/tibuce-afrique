import { Footer } from "@/src/components/sections/Footer";
import { Button } from "@/src/components/ui/button";
import {
    ArrowLeft,
    FileText,
    Users,
    Shield,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Clock,
    Mail,
    Phone,
} from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
                                    Retour à l'accueil
                                </Link>
                            </Button>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold font-rakiby text-primary mb-4">
                            Conditions d'Utilisation
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
                                    <FileText className="h-8 w-8 text-primary" />
                                    <h2 className="text-2xl font-bold text-primary font-rakiby">
                                        Acceptation des Conditions
                                    </h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    En accédant et en utilisant le site web de
                                    TIBUCE Afrique, vous acceptez d'être lié par
                                    ces conditions d'utilisation. Si vous
                                    n'acceptez pas ces conditions, veuillez ne
                                    pas utiliser notre site ou nos services.
                                </p>
                            </div>
                        </section>

                        {/* Définitions */}
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">
                                    1. Définitions
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Termes clés
                                    </h3>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    "TIBUCE Afrique"
                                                </strong>{" "}
                                                désigne l'organisation
                                                organisatrice des événements
                                                entrepreneuriaux
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>"Participant"</strong>{" "}
                                                désigne toute personne inscrite
                                                aux événements TIBUCE
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>"Services"</strong>{" "}
                                                désigne tous les programmes,
                                                événements et contenus proposés
                                                par TIBUCE Afrique
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>"Site"</strong> désigne
                                                le site web
                                                www.tibuce-afrique.org
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Utilisation du site */}
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">
                                    2. Utilisation du Site
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Utilisations autorisées
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>
                                                Consulter les informations sur
                                                nos événements
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>
                                                S'inscrire aux programmes TIBUCE
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>
                                                Télécharger les ressources mises
                                                à disposition
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>
                                                Nous contacter via les
                                                formulaires
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Utilisations interdites
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>
                                                Utilisation à des fins illégales
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>
                                                Transmission de contenus
                                                malveillants
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>
                                                Tentative de piratage ou
                                                d'intrusion
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>
                                                Reproduction non autorisée du
                                                contenu
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Inscription et participation */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                3. Inscription et Participation
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Processus d'inscription
                                    </h3>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                1.
                                            </span>
                                            <span>
                                                Remplissage complet du
                                                formulaire d'inscription
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                2.
                                            </span>
                                            <span>
                                                Validation des informations par
                                                notre équipe
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                3.
                                            </span>
                                            <span>
                                                Confirmation d'inscription par
                                                email
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary font-bold">
                                                4.
                                            </span>
                                            <span>
                                                Accès aux ressources de
                                                préparation
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Critères d'éligibilité
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Être âgé de 18 à 35 ans</li>
                                        <li>
                                            • Avoir un projet entrepreneurial ou
                                            une idée d'entreprise
                                        </li>
                                        <li>
                                            • Être résident d'un pays africain
                                        </li>
                                        <li>
                                            • S'engager à participer activement
                                            aux événements
                                        </li>
                                        <li>
                                            • Respecter les valeurs et l'éthique
                                            de TIBUCE Afrique
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Propriété intellectuelle */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                4. Propriété Intellectuelle
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Contenu de TIBUCE Afrique
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Tous les contenus présents sur ce site
                                        (textes, images, vidéos, logos, marques)
                                        sont la propriété exclusive de TIBUCE
                                        Afrique ou de ses partenaires et sont
                                        protégés par les lois sur la propriété
                                        intellectuelle.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • Toute reproduction est interdite
                                            sans autorisation écrite
                                        </li>
                                        <li>
                                            • L'utilisation commerciale est
                                            strictement interdite
                                        </li>
                                        <li>
                                            • Les marques et logos ne peuvent
                                            être utilisés sans permission
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Contenu des participants
                                    </h3>
                                    <p className="text-muted-foreground">
                                        En participant aux événements TIBUCE,
                                        vous conservez la propriété de vos
                                        projets et idées. Toutefois, vous
                                        accordez à TIBUCE Afrique le droit
                                        d'utiliser vos contributions pour la
                                        promotion de nos programmes, dans le
                                        respect de votre confidentialité.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Responsabilités */}
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">
                                    5. Responsabilités et Limitations
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Nos responsabilités
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • Fournir des services de qualité
                                        </li>
                                        <li>
                                            • Respecter la confidentialité des
                                            données
                                        </li>
                                        <li>• Maintenir la sécurité du site</li>
                                        <li>
                                            • Communiquer clairement sur nos
                                            programmes
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Limitations de responsabilité
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • Aucune garantie de succès
                                            entrepreneurial
                                        </li>
                                        <li>
                                            • Non-responsabilité des dommages
                                            indirects
                                        </li>
                                        <li>
                                            • Limitation aux montants payés pour
                                            nos services
                                        </li>
                                        <li>
                                            • Exclusion en cas de force majeure
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Modifications */}
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-foreground">
                                    6. Modifications des Conditions
                                </h2>
                            </div>

                            <div className="bg-card border rounded-lg p-6">
                                <p className="text-muted-foreground mb-4">
                                    TIBUCE Afrique se réserve le droit de
                                    modifier ces conditions d'utilisation à tout
                                    moment. Les modifications prendront effet
                                    dès leur publication sur cette page.
                                </p>
                                <div className="bg-primary/5 rounded-lg p-4">
                                    <p className="text-sm font-medium text-primary mb-2">
                                        Notification des changements
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Nous vous informerons des modifications
                                        importantes par email ou via une
                                        notification sur notre site. Votre
                                        utilisation continue de nos services
                                        après modification constitue votre
                                        acceptation des nouvelles conditions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Résiliation */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                7. Résiliation
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Résiliation par le participant
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Vous pouvez mettre fin à votre
                                        participation à tout moment en nous
                                        contactant par email. Aucun
                                        remboursement ne sera effectué pour les
                                        services déjà fournis.
                                    </p>
                                </div>

                                <div className="bg-card border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3 text-primary">
                                        Résiliation par TIBUCE Afrique
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Nous nous réservons le droit de
                                        suspendre ou résilier votre
                                        participation en cas de :
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • Violation de ces conditions
                                            d'utilisation
                                        </li>
                                        <li>
                                            • Comportement inapproprié lors des
                                            événements
                                        </li>
                                        <li>
                                            • Non-respect des valeurs de TIBUCE
                                            Afrique
                                        </li>
                                        <li>
                                            • Fausses informations lors de
                                            l'inscription
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Droit applicable */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                8. Droit Applicable et Juridiction
                            </h2>

                            <div className="bg-card border rounded-lg p-6">
                                <p className="text-muted-foreground mb-4">
                                    Ces conditions d'utilisation sont régies par
                                    le droit béninois. Tout litige sera soumis à
                                    la compétence exclusive des tribunaux de
                                    Cotonou, Bénin.
                                </p>
                                <div className="bg-primary/5 rounded-lg p-4">
                                    <p className="text-sm font-medium text-primary mb-2">
                                        Règlement amiable
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        En cas de litige, nous privilégions
                                        toujours le règlement amiable.
                                        Contactez-nous en premier lieu pour
                                        toute réclamation ou question.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                9. Contact et Questions
                            </h2>

                            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8">
                                <p className="text-muted-foreground mb-6">
                                    Pour toute question concernant ces
                                    conditions d'utilisation ou nos services,
                                    n'hésitez pas à nous contacter :
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-sm text-muted-foreground">
                                                contact@tibuce-afrique.org
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
                                                +229 XX XX XX XX
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
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
