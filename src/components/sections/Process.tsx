import { MagicCard } from "@/src/components/magicui/magic-card";
import { Button } from "../ui/button";
import {
    UserPlus,
    CheckCircle,
    BookOpen,
    Users,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function ProcessSection() {
    const steps = [
        {
            id: "inscription",
            number: "01",
            title: "Inscription en ligne",
            icon: UserPlus,
            description:
                "Complétez votre profil participant en renseignant vos informations personnelles, votre parcours académique et professionnel, ainsi que vos motivations. La sélection du pays est cruciale car elle détermine votre éligibilité aux différentes éditions et vous connecte avec l'écosystème entrepreneurial local.",
            gradientFrom: "#9E7AFF",
            gradientTo: "#bc9128",
            features: [
                "Profil détaillé participant",
                "Sélection du pays d'édition",
                "Motivations et objectifs",
                "Parcours académique et professionnel",
            ],
        },
        {
            id: "selection",
            number: "02",
            title: "Sélection et validation",
            icon: CheckCircle,
            description:
                "Notre équipe examine chaque candidature selon des critères de motivation, de potentiel entrepreneurial et d'adéquation avec les valeurs TIBUCE. Les candidats retenus reçoivent leur confirmation d'inscription ainsi que le kit de préparation complet.",
            gradientFrom: "#FE8BBB",
            gradientTo: "#bc9128",
            features: [
                "Évaluation de la motivation",
                "Analyse du potentiel entrepreneurial",
                "Adéquation avec les valeurs TIBUCE",
                "Kit de préparation complet",
            ],
        },
        {
            id: "preparation",
            number: "03",
            title: "Préparation pré-événement",
            icon: BookOpen,
            description:
                "Accédez à notre plateforme de formation en ligne avec des modules préparatoires, des ressources exclusives et des sessions de networking virtuel avec les autres participants de votre édition.",
            gradientFrom: "#9E7AFF",
            gradientTo: "#bc9128",
            features: [
                "Modules de formation en ligne",
                "Ressources exclusives",
                "Networking virtuel",
                "Préparation intensive",
            ],
        },
        {
            id: "participation",
            number: "04",
            title: "Participation active",
            icon: Users,
            description:
                "Immergez-vous dans l'expérience TIBUCE : challenges, workshops, mentorat, networking et compétitions. Chaque moment est conçu pour maximiser votre apprentissage et votre développement professionnel.",
            gradientFrom: "#FE8BBB",
            gradientTo: "#bc9128",
            features: [
                "Challenges business réels",
                "Workshops avec experts",
                "Mentorat personnalisé",
                "Compétitions inter-équipes",
            ],
        },
    ];

    return (
        <section className="container mx-auto mt-16 py-16 px-4" id="process">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 lg:w-3/5 mx-auto">
                    <h2 className="text-4xl font-bold mb-4 font-rakiby text-primary">
                        Comment Rejoindre l&apos;Aventure TIBUCE ?
                    </h2>
                    <p className="text-sm">
                        Découvrez le processus simple et structuré qui vous
                        mènera vers une expérience entrepreneuriale
                        transformatrice. Chaque étape est conçue pour vous
                        préparer au mieux à l&apos;excellence et au succès.
                    </p>
                </div>

                {/* Timeline des étapes */}
                <div className="relative">
                    {/* Ligne de connexion verticale */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block"></div>

                    <div className="space-y-12 lg:space-y-16">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={step.id}
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                                        isEven
                                            ? "lg:flex-row"
                                            : "lg:flex-row-reverse"
                                    }`}
                                >
                                    {/* Carte d&apos;étape */}
                                    <div className="w-full lg:w-5/12">
                                        <MagicCard
                                            gradientFrom={step.gradientFrom}
                                            gradientTo={step.gradientTo}
                                            className="rounded-xl hover:scale-105 transition-transform duration-300"
                                        >
                                            <div className="p-8">
                                                {/* Header avec numéro et icône */}
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20">
                                                        <span className="text-2xl font-bold text-primary font-rakiby">
                                                            {step.number}
                                                        </span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-primary font-rakiby mb-2">
                                                            {step.title}
                                                        </h3>
                                                        <div className="flex items-center gap-2">
                                                            <IconComponent className="size-5 text-primary" />
                                                            <span className="text-sm text-muted-foreground">
                                                                Étape{" "}
                                                                {step.number}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                                    {step.description}
                                                </p>

                                                {/* Features */}
                                                <div className="mb-6">
                                                    <h4 className="font-semibold mb-3 text-sm text-primary">
                                                        Points clés :
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {step.features.map(
                                                            (
                                                                feature,
                                                                featureIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        featureIndex
                                                                    }
                                                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                                                >
                                                                    <span className="text-primary font-bold text-xs mt-1">
                                                                        •
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            feature
                                                                        }
                                                                    </span>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </MagicCard>
                                    </div>

                                    {/* Espaceur pour la ligne de connexion */}
                                    <div className="hidden lg:flex w-2/12 justify-center">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center">
                                            <ArrowRight className="size-4 text-primary" />
                                        </div>
                                    </div>

                                    {/* Espace vide pour l&apos;alignement */}
                                    <div className="hidden lg:block w-5/12"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Section d&apos;appel à l&apos;action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-2xl lg:text-4xl font-bold mb-4 font-rakiby text-primary">
                            Prêt à Commencer Votre Aventure ?
                        </h3>
                        <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Rejoignez des milliers de jeunes entrepreneurs
                            africains qui transforment leurs idées en succès. Le
                            processus d&apos;inscription est simple, rapide et
                            vous mène directement vers l&apos;excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold"
                            >
                                <Link href="/inscription">
                                    <UserPlus className="size-5 mr-2" />
                                    Commencer l&apos;Inscription
                                </Link>
                            </Button>
                            {/* 
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-3"
                            >
                                <FileText className="size-5 mr-2" />
                                Télécharger le Guide
                            </Button>
                            */}
                        </div>

                        {/* Statistiques rapides */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary/10">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary font-rakiby">
                                    04
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Étapes simples
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary font-rakiby">
                                    48h
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Délai de validation
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary font-rakiby">
                                    24/7
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
