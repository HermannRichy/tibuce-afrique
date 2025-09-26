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
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/src/components/ui/badge";
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
                <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 lg:gap-6">
                    {/* Swiper des partenaires */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="partners-swiper-prev size-9 rounded-md"
                                aria-label="Précédent"
                            >
                                <ArrowLeft className="size-5 text-primary" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="partners-swiper-next size-9 rounded-md"
                                aria-label="Suivant"
                            >
                                <ArrowRight className="size-5 text-primary" />
                            </Button>
                        </div>
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
                                delay: 3000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".partners-swiper-prev",
                                nextEl: ".partners-swiper-next",
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
                                                        <div class=\"w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 text-primary text-sm font-medium text-center px-2\">${partner.name}</div>
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

                    {/* Section Actualités */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="news-swiper-prev size-9 rounded-md"
                                aria-label="Précédent"
                            >
                                <ArrowLeft className="size-5 text-primary" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="news-swiper-next size-9 rounded-md"
                                aria-label="Suivant"
                            >
                                <ArrowRight className="size-5 text-primary" />
                            </Button>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-rakiby text-primary">
                            Actualités
                        </h3>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop
                            speed={600}
                            autoplay={{
                                delay: 4000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".news-swiper-prev",
                                nextEl: ".news-swiper-next",
                            }}
                        >
                            {news.map((article) => (
                                <SwiperSlide key={article.id}>
                                    <MagicCard
                                        className="rounded-xl"
                                        gradientFrom="#9E7AFF"
                                        gradientTo="#bc9128"
                                    >
                                        <div className="p-6 h-64 sm:h-72 flex flex-col">
                                            <div className="relative w-full h-32 mb-4 overflow-hidden rounded-lg">
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 text-primary text-sm font-medium text-center px-2">
                                                    {article.title}
                                                </div>
                                            </div>
                                            <div className="flex-1 flex flex-col">
                                                <div className="flex items-center justify-between mb-2">
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {article.category}
                                                    </Badge>
                                                    <span className="text-xs text-muted-foreground">
                                                        {article.date}
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-bold mb-2 line-clamp-2">
                                                    {article.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                                                    {article.description}
                                                </p>
                                            </div>
                                        </div>
                                    </MagicCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Section Qui sommes-nous */}
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
                                delay: 3000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".about-swiper-prev",
                                nextEl: ".about-swiper-next",
                            }}
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
                                            TIBUCE Africa révolutionne la
                                            formation entrepreneuriale
                                            africaine. Nous identifions et
                                            développons la prochaine génération
                                            de leaders économiques du continent
                                            à travers une plateforme
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
                                            concrète. Les participants relèvent
                                            des défis business réels dans un
                                            environnement simulant
                                            l&apos;écosystème entrepreneurial
                                            africain.
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
                                            Nous croyons au potentiel
                                            extraordinaire de l&apos;Afrique et
                                            sa jeunesse. Notre approche combine
                                            formation intensive, mentorat et
                                            réseautage pour créer un écosystème
                                            d&apos;excellence entrepreneuriale.
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
                                            Offrir un cadre d&apos;excellence
                                            pour transformer des idées en
                                            projets viables, développer des
                                            compétences clés et catalyser
                                            l&apos;impact économique à
                                            l&apos;échelle du continent.
                                            C&apos;est ça l&apos;objectif de
                                            Tibuce Afirca
                                        </p>
                                    </div>
                                </MagicCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </aside>
            </div>
        </section>
    );
}
