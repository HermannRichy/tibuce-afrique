"use client";
import Image from "next/image";
import { Badge } from "@/src/components/ui/badge";
import Link from "next/link";
import { MagicCard } from "@/src/components/magicui/magic-card";

export function PartnersSection() {
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
        <section
            className="container mx-auto py-16 px-4 relative"
            id="partners"
        >
            {/* Arrière-plan décoratif pour l'effet glassmorphisme */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl -z-10"></div>
            <div className="max-w-6xl mx-auto">
                {/* En-tête de la section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 font-rakiby text-primary">
                        Nos Partenaires
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        Nous sommes fiers de collaborer avec des organisations
                        qui partagent notre vision de l&apos;excellence
                        entrepreneuriale en Afrique.
                    </p>
                </div>

                {/* Slider infini des partenaires */}
                <div className="relative overflow-hidden">
                    <div className="flex items-center gap-6 lg:gap-8 track will-change-transform">
                        {[...partners, ...partners].map((partner, index) => (
                            <MagicCard
                                key={index}
                                className="rounded-xl shrink-0"
                                gradientFrom="#9E7AFF"
                                gradientTo="#bc9128"
                            >
                                <Link
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 w-60 sm:w-64 h-56 sm:h-64 relative overflow-hidden cursor-pointer"
                                >
                                    {/* Effet de reflet brillant au survol */}
                                    <div className="absolute inset-0 -top-1 -left-1 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
                                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 p-4 sm:p-6 shadow-lg group-hover:shadow-2xl group-hover:bg-white/30 transition-all duration-300">
                                        <Image
                                            src={partner.logo}
                                            alt={`Logo ${partner.name}`}
                                            fill
                                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                const target =
                                                    e.target as HTMLImageElement;
                                                target.style.display = "none";
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
                                    <h3 className="text-base sm:text-lg font-bold text-center mb-2 group-hover:text-primary transition-colors font-rakiby">
                                        {partner.name}
                                    </h3>
                                    <Badge
                                        variant="secondary"
                                        className="text-xs sm:text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                                    >
                                        {partner.category}
                                    </Badge>
                                </Link>
                            </MagicCard>
                        ))}
                    </div>
                    <style jsx>{`
                        .track {
                            animation: scroll 30s linear infinite;
                        }
                        .track:hover {
                            animation-play-state: paused;
                        }
                        @keyframes scroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                    `}</style>
                </div>

                {/* Section CTA pour devenir partenaire */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/15 rounded-3xl p-10 max-w-3xl mx-auto border border-primary/20 shadow-lg">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold mb-4 font-rakiby text-primary">
                                Rejoignez notre Écosystème
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Vous souhaitez devenir partenaire de TIBUCE
                                Africa et contribuer à forger les leaders de
                                demain ? Ensemble, construisons l&apos;avenir
                                entrepreneurial de l&apos;Afrique.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="mailto:partenaires@tibuceafrica.com"
                                className="inline-flex items-center px-8 py-2 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Devenir Partenaire
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center px-8 py-2 text-xs border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg"
                            >
                                En savoir plus
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
