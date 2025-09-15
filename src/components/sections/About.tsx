import { MagicCard } from "@/src/components/magicui/magic-card";
import { Plus, Layout, Rocket } from "lucide-react";
import { Button } from "../ui/button";

export function AboutSection() {
    return (
        <section className="container mx-auto mt-16 py-16 px-4" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 lg:w-3/5 mx-auto">
                    <h2 className="text-4xl font-bold mb-4 font-rakiby text-primary">
                        TIBUCE AFRICA : Forger les Leaders de Demain
                    </h2>
                    <p className="text-sm">
                        TIBUCE Africa représente bien plus qu&apos;un simple
                        tournoi de business. C&apos;est une révolution dans la
                        formation entrepreneuriale africaine, conçue pour
                        identifier, développer et connecter la prochaine
                        génération de leaders économiques du continent. Notre
                        mission est claire : offrir aux jeunes talents africains
                        une plateforme d&apos;excellence où ils peuvent acquérir
                        une expérience pratique inestimable dans le monde des
                        affaires, tout en construisant un réseau professionnel
                        solide qui les accompagnera tout au long de leur
                        carrière.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <MagicCard
                        gradientFrom="#9E7AFF"
                        gradientTo="#bc9128"
                        className="rounded-xl hover:scale-105 transition-transform"
                    >
                        <div className="p-6">
                            <Button
                                variant="outline"
                                size="icon"
                                className="size-10 rounded-full mb-8"
                            >
                                <Plus className="text-primary" />
                            </Button>
                            <h3 className="text-xl font-bold mb-2">
                                Notre Mission
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                TIBUCE Africa révolutionne la formation
                                entrepreneuriale africaine. Nous identifions et
                                développons la prochaine génération de leaders
                                économiques du continent à travers une
                                plateforme d&apos;excellence unique.
                            </p>
                        </div>
                    </MagicCard>
                    <MagicCard
                        gradientFrom="#FE8BBB"
                        gradientTo="#bc9128"
                        className="rounded-xl hover:scale-105 transition-transform"
                    >
                        <div className="p-6">
                            <Button
                                variant="outline"
                                size="icon"
                                className="size-10 rounded-full mb-8"
                            >
                                <Layout className="text-primary" />
                            </Button>
                            <h3 className="text-xl font-bold mb-2">
                                Le Concept
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Un tournoi innovant qui transforme
                                l&apos;apprentissage en expérience concrète. Les
                                participants relèvent des défis business réels
                                dans un environnement simulant l&apos;écosystème
                                entrepreneurial africain.
                            </p>
                        </div>
                    </MagicCard>
                    <MagicCard
                        gradientFrom="#9E7AFF"
                        gradientTo="#bc9128"
                        className="rounded-xl hover:scale-105 transition-transform"
                    >
                        <div className="p-6">
                            <Button
                                variant="outline"
                                size="icon"
                                className="size-10 rounded-full mb-8"
                            >
                                <Rocket className="text-primary" />
                            </Button>
                            <h3 className="text-xl font-bold mb-2">
                                Notre Vision
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Nous croyons au potentiel extraordinaire de
                                l&apos;Afrique et sa jeunesse. Notre approche
                                combine formation intensive, mentorat et
                                réseautage pour créer un écosystème
                                d&apos;excellence entrepreneuriale.
                            </p>
                        </div>
                    </MagicCard>
                </div>
            </div>
        </section>
    );
}
