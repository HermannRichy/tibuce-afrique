"use client";
import { MagicCard } from "@/src/components/magicui/magic-card";
import {
    Plus,
    Layout,
    Rocket,
    ArrowLeft,
    ArrowRight,
    Target,
} from "lucide-react";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

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
                        génération de leaders économiques du continent.
                    </p>
                </div>
                <div>
                    <div className="mb-4 flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="about-swiper-prev size-9 rounded-md"
                            aria-label="Précédent"
                        >
                            <ArrowLeft className="size-5 text-primary" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="about-swiper-next size-9 rounded-md"
                            aria-label="Suivant"
                        >
                            <ArrowRight className="size-5 text-primary" />
                        </Button>
                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop
                        speed={600}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".about-swiper-prev",
                            nextEl: ".about-swiper-next",
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className=""
                    >
                        <SwiperSlide>
                            <MagicCard
                                gradientFrom="#9E7AFF"
                                gradientTo="#bc9128"
                                className="rounded-xl"
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
                                        entrepreneuriale africaine. Nous
                                        identifions et développons la prochaine
                                        génération de leaders économiques du
                                        continent à travers une plateforme
                                        d&apos;excellence unique.
                                    </p>
                                </div>
                            </MagicCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MagicCard
                                gradientFrom="#FE8BBB"
                                gradientTo="#bc9128"
                                className="rounded-xl"
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
                                        l&apos;apprentissage en expérience
                                        concrète. Les participants relèvent des
                                        défis business réels dans un
                                        environnement simulant l&apos;écosystème
                                        entrepreneurial africain.
                                    </p>
                                </div>
                            </MagicCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MagicCard
                                gradientFrom="#9E7AFF"
                                gradientTo="#bc9128"
                                className="rounded-xl"
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
                                        Nous croyons au potentiel extraordinaire
                                        de l&apos;Afrique et sa jeunesse. Notre
                                        approche combine formation intensive,
                                        mentorat et réseautage pour créer un
                                        écosystème d&apos;excellence
                                        entrepreneuriale.
                                    </p>
                                </div>
                            </MagicCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MagicCard
                                gradientFrom="#9E7AFF"
                                gradientTo="#bc9128"
                                className="rounded-xl"
                            >
                                <div className="p-6">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="size-10 rounded-full mb-8"
                                    >
                                        <Target className="text-primary" />
                                    </Button>
                                    <h3 className="text-xl font-bold mb-2">
                                        Notre Objectif
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        Offrir un cadre d&apos;excellence pour
                                        transformer des idées en projets
                                        viables, développer des compétences clés
                                        et catalyser l&apos;impact économique à
                                        l&apos;échelle du continent. C&apos;est
                                        ça l&apos;objectif de Tibuce Afirca
                                    </p>
                                </div>
                            </MagicCard>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
