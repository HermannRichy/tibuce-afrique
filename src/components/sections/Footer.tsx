"use client";
import Link from "next/link";
import {
    Instagram,
    Linkedin,
    Music,
    Mail,
    MapPin,
    Phone,
    Globe,
    Heart,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { name: "À propos", href: "#about" },
        { name: "Événements", href: "#coming" },
        { name: "Processus", href: "#process" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        {
            name: "Instagram",
            href: "https://instagram.com/tibuce_afrique",
            icon: Instagram,
            color: "hover:text-pink-500",
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/company/tibuce-afrique",
            icon: Linkedin,
            color: "hover:text-blue-600",
        },
        {
            name: "TikTok",
            href: "https://tiktok.com/@tibuce_afrique",
            icon: Music,
            color: "hover:text-black dark:hover:text-white",
        },
    ];

    const quickLinks = [
        { name: "Inscription", href: "/inscription" },
        { name: "Politique de confidentialité", href: "/privacy" },
        { name: "Conditions d'utilisation", href: "/terms" },
    ];

    return (
        <footer className="w-full bg-gradient-to-br from-background to-muted/20 border-t mt-16">
            {/* Section principale */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo et description */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold font-rakiby text-primary mb-4">
                                TIBUCE AFRIQUE
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Forger les leaders de demain à travers
                                l'excellence entrepreneuriale. Rejoignez la
                                révolution qui transforme l'Afrique une idée à
                                la fois.
                            </p>
                        </div>

                        {/* Contact rapide */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">
                                    contact@tibuce-afrique.org
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Globe className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">
                                    www.tibuce-afrique.org
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-foreground">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-foreground">
                            Liens rapides
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Réseaux sociaux et newsletter */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-foreground">
                            Suivez-nous
                        </h4>
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA Newsletter */}
                        <div className="bg-primary/5 rounded-lg p-4">
                            <p className="text-sm font-medium mb-2">
                                Restez informé
                            </p>
                            <p className="text-xs text-muted-foreground mb-3">
                                Recevez nos actualités et opportunités
                            </p>
                            <Button asChild size="sm" className="w-full">
                                <Link href="/newsletter">S'abonner</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section inférieure */}
            <div className="border-t bg-muted/30">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-muted-foreground text-center md:text-left">
                            © {currentYear} TIBUCE Afrique. Tous droits
                            réservés.
                        </div>

                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>Fait avec</span>
                            <Heart className="h-4 w-4 text-red-500" />
                            <span>pour l'Afrique</span>
                        </div>

                        <div className="text-sm text-muted-foreground">
                            <span>Développé par </span>
                            <a
                                href="https://digitalinnovation.bj"
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Digital Innovation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
