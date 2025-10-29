"use client";
import { MagicCard } from "@/src/components/magicui/magic-card";
import { useEffect } from "react";
import { toast } from "sonner";
import {
    Plus,
    Layout,
    Rocket,
    ArrowLeft,
    ArrowRight,
    Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export function AboutSection() {
    // Données des actualités - vous pouvez les modifier selon vos besoins
    const news = [
        {
            id: 1,
            title: "Lancement officiel de TIBUCE Africa 2025",
            description:
                "Découvrez les détails de cette édition exceptionnelle qui promet de révolutionner l'entrepreneuriat africain.",
            date: "15 Septembre 2025",
            category: "Événement",
        },
        {
            id: 2,
            title: "Nouveaux partenaires stratégiques",
            description:
                "Nous sommes fiers d'annoncer l'arrivée de nouveaux partenaires qui renforcent notre écosystème.",
            date: "25 Septembre 2025",
            category: "Partenariat",
        },
        /*{
            id: 3,
            title: "Formation des mentors certifiés",
            description:
                "Nos mentors suivent une formation intensive pour accompagner au mieux les participants.",
            date: "5 Janvier 2024",
            category: "Formation",
        },*/
        {
            id: 4,
            title: "Inscriptions ouvertes pour Tibuce Benin",
            description:
                "Les candidatures sont maintenant ouvertes pour la première édition de TIBUCE Africa Bénin.",
            date: "20 Septembre 2024",
            category: "Inscription",
        },
    ];

    // Données des partenaires - vous pouvez les modifier selon vos besoins
    const partners = [
        {
            name: "SCIADO Partenaires",
            logo: "/partners/Sciado partenaires.png",
            website: "https://sciado.fr/",
            category: "Formation",
        },
        {
            name: "AFRONEX QUANTUM ",
            logo: "/partners/logo AFRONEX QUANTUM.png",
            website: "#",
            category: "Entrepreneuriat",
        },
        {
            name: "ONG DAFA",
            logo: "/partners/logo ONG DAFA.png",
            website: "#",
            category: "Innovation",
        },
        {
            name: "FARAJ & CIE",
            logo: "/partners/logo FARAJ & CIE.png",
            website: "https://www.facebook.com/FarajCie/",
            category: "Finance",
        },
        {
            name: "KABOWD",
            logo: "/partners/logo KABOWD.png",
            website: "#",
            category: "Technologie",
        },
    ];

    // Données "Qui sommes-nous"
    const aboutSlides = [
        {
            icon: Plus,
            title: "Notre Mission",
            description:
                "TIBUCE Africa révolutionne la formation entrepreneuriale africaine. Nous identifions et développons la prochaine génération de leaders économiques du continent à travers une plateforme d'excellence unique.",
            gradientFrom: "#9E7AFF",
            gradientTo: "#bc9128",
        },
        {
            icon: Layout,
            title: "Le Concept",
            description:
                "Un tournoi innovant qui transforme l'apprentissage en expérience concrète. Les participants relèvent des défis business réels dans un environnement simulant l'écosystème entrepreneurial africain.",
            gradientFrom: "#FE8BBB",
            gradientTo: "#bc9128",
        },
        {
            icon: Rocket,
            title: "Notre Vision",
            description:
                "Nous croyons au potentiel extraordinaire de l'Afrique et sa jeunesse. Notre approche combine formation intensive, mentorat et réseautage pour créer un écosystème d'excellence entrepreneuriale.",
            gradientFrom: "#9E7AFF",
            gradientTo: "#bc9128",
        },
        {
            icon: Target,
            title: "Notre Objectif",
            description:
                "Offrir un cadre d'excellence pour transformer des idées en projets viables, développer des compétences clés et catalyser l'impact économique à l'échelle du continent. C'est ça l'objectif de Tibuce Afirca",
            gradientFrom: "#9E7AFF",
            gradientTo: "#bc9128",
        },
    ];

    /* Trouver le nombre maximum de slides pour synchroniser toutes les sections
    const maxSlides = Math.max(
        partners.length,
        news.length,
        aboutSlides.length
    ); */

    useEffect(() => {
        if (!news.length) return;
        let currentIndex = 0;
        const showNext = () => {
            const item = news[currentIndex];
            toast(item.title, {
                description: item.description,
            });
            currentIndex = (currentIndex + 1) % news.length;
        };

        const initialTimeout: ReturnType<typeof setTimeout> = setTimeout(
            showNext,
            800
        );
        const intervalId: ReturnType<typeof setInterval> = setInterval(
            showNext,
            6000
        );

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(intervalId);
        };
    }, []);

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

                {/* Contrôles de navigation centralisés */}
                <div className="mb-8 flex items-center gap-2 justify-center">
                    <Button
                        variant="outline"
                        size="icon"
                        className="unified-swiper-prev size-9 rounded-md"
                        aria-label="Précédent"
                    >
                        <ArrowLeft className="size-5 text-primary" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="unified-swiper-next size-9 rounded-md"
                        aria-label="Suivant"
                    >
                        <ArrowRight className="size-5 text-primary" />
                    </Button>
                </div>

                <aside className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 lg:gap-6 ">
                    {/* Section Partenaires */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-rakiby text-primary">
                            Sponsors & Partenaires
                        </h3>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop
                            speed={600}
                            autoplay={{
                                delay: 3500,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".unified-swiper-prev",
                                nextEl: ".unified-swiper-next",
                            }}
                        >
                            {partners.map((partner, index) => (
                                <SwiperSlide key={index}>
                                    <MagicCard
                                        className="rounded-xl"
                                        gradientFrom="#9E7AFF"
                                        gradientTo="#bc9128"
                                    >
                                        <Link
                                            href={partner.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-56 sm:h-64 cursor-pointer"
                                        >
                                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 rounded-2xl border border-white/30 p-4 sm:p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                                <Image
                                                    src={partner.logo}
                                                    alt={`Logo ${partner.name}`}
                                                    fill
                                                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => {
                                                        const target =
                                                            e.target as HTMLImageElement;
                                                        target.style.display =
                                                            "none";
                                                        const parent =
                                                            target.parentElement;
                                                        if (parent) {
                                                            parent.innerHTML = `
                                                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 text-primary text-sm font-medium text-center px-2">${partner.name}</div>
                                                    `;
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <h3 className="text-base sm:text-lg font-bold text-center group-hover:text-primary transition-colors">
                                                {partner.name}
                                            </h3>
                                        </Link>
                                    </MagicCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Section Actualités retirée (notifications via Sonner désormais) */}

                    {/* Section Qui sommes-nous */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-rakiby text-primary">
                            Qui sommes nous?
                        </h3>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop
                            speed={600}
                            autoplay={{
                                delay: 3500,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".unified-swiper-prev",
                                nextEl: ".unified-swiper-next",
                            }}
                        >
                            {aboutSlides.map((slide, index) => {
                                const IconComponent = slide.icon;
                                return (
                                    <SwiperSlide key={index}>
                                        <MagicCard
                                            gradientFrom={slide.gradientFrom}
                                            gradientTo={slide.gradientTo}
                                            className="rounded-xl"
                                        >
                                            <div className="p-6 h-64">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="size-10 rounded-full mb-8"
                                                >
                                                    <IconComponent className="text-primary" />
                                                </Button>
                                                <h3 className="text-xl font-bold mb-2">
                                                    {slide.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </MagicCard>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </aside>
            </div>
        </section>
    );
}
