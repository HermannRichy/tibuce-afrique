"use client";
import Image from "next/image";
import { Badge } from "@/src/components/ui/badge";

export function PartnersSection() {
    // Données des partenaires - vous pouvez les modifier selon vos besoins
    const partners = [
        {
            name: "Digital Innovation",
            logo: "/partners/digital-innovation.png",
            website: "https://digitalinnovation.bj",
            category: "Technologie"
        },
        {
            name: "AFRONEX QUANTUM ",
            logo: "/partners/logo AFRONEX QUANTUM.png",
            website: "#",
            category: "Entrepreneuriat"
        },
        {
            name: "ONG DAFA",
            logo: "/partners/logo ONG DAFA.png",
            website: "#",
            category: "Innovation"
        },
    ];

    return (
        <section className="container mx-auto py-16 px-4" id="partners">
            <div className="max-w-6xl mx-auto">
                {/* En-tête de la section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 font-rakiby text-primary">
                        Nos Partenaires
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Nous sommes fiers de collaborer avec des organisations qui partagent notre vision
                        de l&apos;excellence entrepreneuriale en Afrique.
                    </p>
                </div>

                {/* Grille des partenaires */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-lg bg-white p-4 shadow-sm">
                                <Image
                                    src={partner.logo}
                                    alt={`Logo ${partner.name}`}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                        // Fallback en cas d'image manquante
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `
                                                <div class="w-full h-full flex items-center justify-center bg-muted text-muted-foreground text-xs font-medium">
                                                    ${partner.name}
                                                </div>
                                            `;
                                        }
                                    }}
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-center mb-2 group-hover:text-primary transition-colors">
                                {partner.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                                {partner.category}
                            </Badge>
                        </div>
                    ))}
                </div>

                {/* Section CTA pour devenir partenaire */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 font-rakiby text-primary">
                            Rejoignez-nous
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Vous souhaitez devenir partenaire de TIBUCE Africa et contribuer
                            à forger les leaders de demain ?
                        </p>
                        <a
                            href="mailto:partenaires@tibuceafrica.com"
                            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                            Devenir Partenaire
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
