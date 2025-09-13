"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
    Mail,
    Send,
    Clock,
    Instagram,
    Linkedin,
    ExternalLink,
    Music,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export function ContactSection() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setLoading(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast.success(
                "Message envoyé avec succès ! Nous vous répondrons bientôt."
            );
            reset();
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            toast.error("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    const socialNetworks = [
        {
            name: "Instagram",
            handle: "@tibuce_afrique",
            icon: Instagram,
            description:
                "Suivez nos actualités, découvrez les coulisses des événements et connectez-vous avec la communauté TIBUCE.",
            url: "https://instagram.com/tibuce_afrique",
            color: "from-pink-500 to-purple-600",
        },
        {
            name: "LinkedIn",
            handle: "TIBUCE Afrique",
            icon: Linkedin,
            description:
                "Rejoignez notre réseau professionnel, accédez aux opportunités d'emploi et restez informé des développements du programme.",
            url: "https://linkedin.com/company/tibuce-afrique",
            color: "from-blue-600 to-blue-800",
        },
        {
            name: "TikTok",
            handle: "@tibuce_afrique",
            icon: Music,
            description:
                "Découvrez TIBUCE sous un angle dynamique avec des contenus créatifs, des témoignages participants et des tips entrepreneuriaux.",
            url: "https://tiktok.com/@tibuce_afrique",
            color: "from-black to-gray-800",
        },
    ];

    return (
        <section className="container mx-auto py-16 px-4" id="contact">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 font-rakiby text-primary">
                        Restons Connectés
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Rejoignez notre communauté dynamique et restez informé
                        de toutes les actualités TIBUCE Afrique. Nous sommes là
                        pour vous accompagner dans votre parcours
                        entrepreneurial.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Informations de contact officielles */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 h-full">
                            <h3 className="text-2xl font-bold mb-6 font-rakiby text-primary">
                                Contact Officiel
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">
                                            Email officiel
                                        </p>
                                        <p className="text-primary font-medium">
                                            contact@tibuce-afrique.org
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Réponse garantie sous 48h
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">
                                            Support
                                        </p>
                                        <p className="text-muted-foreground">
                                            Disponible 24/7
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Notre équipe vous accompagne
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-6 font-rakiby text-primary">
                            Rejoignez Notre Communauté
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {socialNetworks.map((network) => {
                                const IconComponent = network.icon;
                                return (
                                    <div
                                        key={network.name}
                                        className="group cursor-pointer"
                                    >
                                        <Link
                                            href={network.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div
                                                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${network.color} flex items-center justify-center`}
                                                    >
                                                        <IconComponent className="h-6 w-6 text-white" />
                                                    </div>
                                                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                </div>
                                                <h4 className="font-bold text-lg mb-1">
                                                    {network.name}
                                                </h4>
                                                <p className="text-primary font-medium text-sm mb-3">
                                                    {network.handle}
                                                </p>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {network.description}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Formulaire de contact */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2 font-rakiby text-primary">
                            Envoyez-nous un Message
                        </h3>
                        <p className="text-muted-foreground">
                            Une question ? Un projet ? Nous sommes là pour vous
                            écouter.
                        </p>
                    </div>

                    <div className="bg-card border rounded-lg p-8 shadow-sm">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                            id="contact-form"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Nom complet
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Votre nom"
                                    {...register("name", {
                                        required: "Le nom est requis",
                                    })}
                                    className={
                                        errors.name ? "border-destructive" : ""
                                    }
                                />
                                {errors.name && (
                                    <p className="text-destructive text-sm mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="votre@email.com"
                                    {...register("email", {
                                        required: "L'email est requis",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email invalide",
                                        },
                                    })}
                                    className={
                                        errors.email ? "border-destructive" : ""
                                    }
                                />
                                {errors.email && (
                                    <p className="text-destructive text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Votre message..."
                                    rows={5}
                                    {...register("message", {
                                        required: "Le message est requis",
                                    })}
                                    className={
                                        errors.message
                                            ? "border-destructive"
                                            : ""
                                    }
                                />
                                {errors.message && (
                                    <p className="text-destructive text-sm mt-1">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full cursor-pointer"
                                disabled={loading}
                                size="lg"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4 mr-2" />
                                        Envoyer le message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
