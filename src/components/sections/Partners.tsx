"use client";
import Link from "next/link";

export function PartnersSection() {
    return (
        <section
            className="container mx-auto py-16 px-4 relative"
            id="partners"
        >
            {/* Arrière-plan décoratif pour l'effet glassmorphisme */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl -z-10"></div>
            <div className="max-w-6xl mx-auto">
                {/* Section CTA pour devenir partenaire */}
                <div className="text-center">
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
                                className="inline-flex items-center px-8 py-2 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Devenir Partenaire
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center px-8 py-2 text-xs border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
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
