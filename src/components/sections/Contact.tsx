"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { toast } from "sonner";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        setStatus("idle");

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

            setStatus("success");
            toast.success(
                "Message envoyé avec succès ! Nous vous répondrons bientôt."
            );
            reset();
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            setStatus("error");
            toast.error("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container mx-auto py-16 px-4" id="contact">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 font-rakiby text-primary">
                        Contactez-nous
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Nous sommes là pour vous aider. Envoyez-nous un message
                        !
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Informations de contact */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">
                                Informations
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-muted-foreground">
                                            contact@exemple.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                                    <User className="h-6 w-6 text-primary" />
                                    <div>
                                        <p className="font-medium">Support</p>
                                        <p className="text-muted-foreground">
                                            24/7 disponible
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                    <div>
                                        <p className="font-medium">Réponse</p>
                                        <p className="text-muted-foreground">
                                            Sous 24h
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="bg-card border rounded-lg p-8 shadow-sm">
                        <h3 className="text-2xl font-semibold mb-6">
                            Envoyez un message
                        </h3>

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
                                className="w-full"
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
