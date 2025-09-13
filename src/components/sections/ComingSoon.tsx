import { MagicCard } from "@/src/components/magicui/magic-card";
import { Button } from "../ui/button";
import { Calendar, MapPin, Users, Award, Clock } from "lucide-react";
import Link from "next/link";
export function ComingSoonSection() {
    const events = [
        {
            id: "tibuce-benin",
            title: "TIBUCE-BÉNIN 1ère Édition",
            dates: "13 - 15 Novembre 2025",
            format: "Événement hybride (présentiel + digital)",
            location: "Cotonou, Bénin",
            description:
                "Lancez votre parcours entrepreneurial avec la première édition béninoise de TIBUCE. Trois jours intensifs de défis business, de workshops avec des experts locaux et internationaux, et de networking avec les futurs leaders économiques du Bénin. Cette édition inaugurale mettra l'accent sur les secteurs porteurs de l'économie béninoise : agriculture moderne, fintech et commerce digital.",
            highlights: [
                "Mentorat par des entrepreneurs béninois reconnus",
                "Challenges adaptés au marché local",
                "Opportunités de stage et d'emploi",
                "Certification officielle TIBUCE",
            ],
            gradientFrom: "#9E7AFF",
            gradientTo: "#bc9128",
        },
        {
            id: "tibuce-togo",
            title: "TIBUCE-TOGO 1ère Édition",
            dates: "18 - 20 Novembre 2025",
            format: "Événement hybride (présentiel + digital)",
            location: "Lomé, Togo",
            description:
                "Découvrez l'écosystème entrepreneurial togolais lors de cette première édition historique. Le programme combine formation intensive, compétitions inter-équipes et rencontres avec l'écosystème business local. Focus particulier sur l'innovation technologique, le développement durable et l'entrepreneuriat social, secteurs clés de la transformation économique togolaise.",
            highlights: [
                "Partenariats avec les incubateurs locaux",
                "Pitch sessions devant des investisseurs",
                "Ateliers de développement personnel",
                "Accès privilégié au réseau TIBUCE Afrique",
            ],
            gradientFrom: "#FE8BBB",
            gradientTo: "#bc9128",
        },
    ];

    return (
        <section className="container mx-auto mt-16 py-16 px-4" id="coming">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 lg:w-3/5 mx-auto">
                    <h2 className="text-4xl font-bold mb-4 font-rakiby text-primary">
                        Nos Prochains Événements : Rejoignez l'Excellence
                    </h2>
                    <p className="text-sm">
                        Découvrez les prochaines éditions de TIBUCE Afrique et
                        participez à la révolution entrepreneuriale qui
                        transforme le continent. Chaque événement est conçu pour
                        vous offrir une expérience unique d'apprentissage, de
                        networking et de développement professionnel.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {events.map((event) => (
                        <MagicCard
                            key={event.id}
                            gradientFrom={event.gradientFrom}
                            gradientTo={event.gradientTo}
                            className="rounded-xl hover:scale-105 transition-transform duration-300"
                        >
                            <div className="p-8">
                                {/* Header avec icône et titre */}
                                <div className="flex items-start gap-4 mb-6">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="size-12 rounded-full flex-shrink-0"
                                    >
                                        <Calendar className="text-primary" />
                                    </Button>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2 text-primary font-rakiby">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                            <Clock className="size-4" />
                                            <span>{event.dates}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                            <MapPin className="size-4" />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Users className="size-4" />
                                            <span>{event.format}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    {event.description}
                                </p>

                                {/* Points forts */}
                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                                        <Award className="size-4 text-primary" />
                                        Points forts :
                                    </h4>
                                    <ul className="space-y-2">
                                        {event.highlights.map(
                                            (highlight, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                                >
                                                    <span className="text-primary font-bold">
                                                        •
                                                    </span>
                                                    <span>{highlight}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* Bouton d'action */}
                                <Button
                                    asChild
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg hover:cursor-pointer transition-colors"
                                    size="lg"
                                >
                                    <Link href="/inscription">
                                        S'INSCRIRE À CETTE ÉDITION
                                    </Link>
                                </Button>
                            </div>
                        </MagicCard>
                    ))}
                </div>

                {/* Section d'appel à l'action globale 
                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground mb-6">
                        Ne manquez pas cette opportunité unique de faire partie
                        de la révolution entrepreneuriale africaine. Choisissez
                        votre édition et commencez votre parcours vers
                        l'excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-3"
                        >
                            En savoir plus sur TIBUCE
                        </Button>
                        <Button size="lg" className="px-8 py-3">
                            Contactez-nous
                        </Button>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
