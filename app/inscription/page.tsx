"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Footer } from "@/src/components/sections/Footer";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
    ArrowLeft,
    Send,
    User,
    Building,
    CreditCard,
    FileText,
    Shield,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface FormData {
    // Informations générales
    teamName: string;
    country: string;
    edition: string;
    organization: string;
    organizationOther?: string;
    numberOfMembers: "2" | "3";
    projectTitle?: string;
    projectDescription?: string;
    paymentReference?: string;
    paymentMethod?: string;
    paymentMethodOther?: string;
    teamRepresentative: string;
    selectedTrack: string[];

    // Participant 1
    participant1Name: string;
    participant1Phone: string;
    participant1Email: string;
    participant1BirthDate: string;
    participant1Gender: "H" | "F";
    participant1Education: string;
    participant1Status: string[];

    // Participant 2
    participant2Name: string;
    participant2Phone: string;
    participant2Email: string;
    participant2BirthDate: string;
    participant2Gender: "H" | "F";
    participant2Education: string;
    participant2Status: string[];

    // Participant 3 (optionnel)
    participant3Name?: string;
    participant3Phone?: string;
    participant3Email?: string;
    participant3BirthDate?: string;
    participant3Gender?: "H" | "F";
    participant3Education?: string;
    participant3Status?: string[];

    // Validation
    acceptTerms: boolean;

    // Statut "Autre" pour chaque participant
    participant1StatusOther?: string;
    participant2StatusOther?: string;
    participant3StatusOther?: string;
}

export default function InscriptionPage() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            numberOfMembers: "2",
            selectedTrack: [],
            participant1Status: [],
            participant2Status: [],
            participant3Status: [],
            acceptTerms: false,
        },
    });

    const watchedNumberOfMembers = watch("numberOfMembers");

    const educationLevels = [
        "Baccalauréat",
        "Bac+2 (DUT, BTS, etc.)",
        "Bac+3 (Licence)",
        "Bac+4 (Maîtrise)",
        "Bac+5 (Master)",
        "Bac+8 (Doctorat)",
        "Autre",
    ];

    const organizations = [
        "Entreprise",
        "Association",
        "Administration publique",
        "Établissement d'enseignement / Université",
        "Autre",
    ];

    const statusOptions = [
        "Étudiant",
        "Entrepreneur",
        "Jeune professionnel",
        "Autre",
    ];

    const paymentMethods = [
        "Mobile Money",
        "Virement bancaire",
        "Espèces",
        "Autre",
    ];

    const trackOptions = ["Business Game", "Challenge"];

    const countries = [
        "Bénin",
        "Burkina Faso",
        "Côte d'Ivoire",
        "Guinée",
        "Mali",
        "Niger",
        "Sénégal",
        "Togo",
        "Cameroun",
        "Gabon",
        "République du Congo",
        "République démocratique du Congo",
        "Kenya",
        "Tanzanie",
        "Ouganda",
        "Rwanda",
        "Burundi",
        "Autre",
    ];

    const editions = [
        "2025 / Cotonou",
        "2025 / Lomé",
        "2026 / Cotonou",
        "2026 / Lomé",
        "Autre",
    ];

    const onSubmit = async (data: FormData) => {
        setLoading(true);

        try {
            // Sauvegarder en base de données d'abord
            const response = await fetch("/api/inscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de la sauvegarde");
            }

            const result = await response.json();
            const inscriptionId = result.id;

            // Préparer les données pour les emails - format simple pour EmailJS
            const emailData = {
                teamName: data.teamName,
                country: data.country,
                edition: data.edition,
                organization: data.organization,
                organizationOther: data.organizationOther || "",
                numberOfMembers: data.numberOfMembers,
                teamRepresentative: data.teamRepresentative,
                projectTitle: data.projectTitle || "",
                projectDescription: data.projectDescription || "",
                selectedTrack: Array.isArray(data.selectedTrack)
                    ? data.selectedTrack.join(", ")
                    : data.selectedTrack,
                paymentMethod: data.paymentMethod || "Non renseigné",
                paymentMethodOther: data.paymentMethodOther || "",
                paymentReference: data.paymentReference || "Non renseigné",
                participant1Name: data.participant1Name,
                participant1Email: data.participant1Email,
                participant1Phone: data.participant1Phone,
                participant1BirthDate: data.participant1BirthDate,
                participant1Gender: data.participant1Gender,
                participant1Education: data.participant1Education,
                participant1Status: Array.isArray(data.participant1Status)
                    ? data.participant1Status.join(", ")
                    : data.participant1Status,
                participant1StatusOther: data.participant1StatusOther || "",
                participant2Name: data.participant2Name,
                participant2Email: data.participant2Email,
                participant2Phone: data.participant2Phone,
                participant2BirthDate: data.participant2BirthDate,
                participant2Gender: data.participant2Gender,
                participant2Education: data.participant2Education,
                participant2Status: Array.isArray(data.participant2Status)
                    ? data.participant2Status.join(", ")
                    : data.participant2Status,
                participant3Name: data.participant3Name || "",
                participant3Email: data.participant3Email || "",
                participant3Phone: data.participant3Phone || "",
                participant3BirthDate: data.participant3BirthDate || "",
                participant3Gender: data.participant3Gender || "",
                participant3Education: data.participant3Education || "",
                participant3Status:
                    data.participant3Status &&
                    Array.isArray(data.participant3Status)
                        ? data.participant3Status.join(", ")
                        : data.participant3Status || "",
                validationDate: new Date().toLocaleString("fr-FR"),
                acceptTerms: data.acceptTerms ? "Oui" : "Non",
                timestamp: new Date().toLocaleString("fr-FR"),
                inscriptionId: inscriptionId,
            };

            // Envoyer la notification à l'équipe TIBUCE
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NOTIFICATION!,
                emailData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast.success(
                "Inscription envoyée avec succès ! Vous recevrez une confirmation par email."
            );
            reset();
        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            toast.error("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    const handleCheckboxChange = (
        field: keyof FormData,
        value: string,
        checked: boolean
    ) => {
        const currentValues = (watch(field) as string[]) || [];
        if (checked) {
            setValue(field, [...currentValues, value] as unknown as string[]);
        } else {
            setValue(
                field,
                currentValues.filter(
                    (item) => item !== value
                ) as unknown as string[]
            );
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-b">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Retour à l&apos;accueil
                                </Link>
                            </Button>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold font-rakiby text-primary mb-4">
                            Inscription TIBUCE Africa
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Rejoignez la révolution entrepreneuriale africaine
                        </p>
                    </div>
                </div>
            </div>

            {/* Formulaire principal */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-12"
                    >
                        {/* Section 1: Informations générales */}
                        <section className="bg-card border rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Building className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-primary font-rakiby">
                                    Informations Générales
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Nom de l&apos;équipe *
                                    </label>
                                    <Input
                                        {...register("teamName", {
                                            required:
                                                "Le nom de l'équipe est requis",
                                        })}
                                        placeholder="Nom de votre équipe"
                                        className={
                                            errors.teamName
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.teamName && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.teamName.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Pays de représentation *
                                    </label>
                                    <select
                                        {...register("country", {
                                            required: "Le pays est requis",
                                        })}
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                    >
                                        <option value="">
                                            Sélectionnez un pays
                                        </option>
                                        {countries.map((country) => (
                                            <option
                                                key={country}
                                                value={country}
                                            >
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.country && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.country.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Édition concernée *
                                    </label>
                                    <select
                                        {...register("edition", {
                                            required: "L'édition est requise",
                                        })}
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                    >
                                        <option value="">
                                            Sélectionnez une édition
                                        </option>
                                        {editions.map((edition) => (
                                            <option
                                                key={edition}
                                                value={edition}
                                            >
                                                {edition}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.edition && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.edition.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Organisation représentée *
                                    </label>
                                    <select
                                        {...register("organization", {
                                            required:
                                                "L'organisation est requise",
                                        })}
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                    >
                                        <option value="">
                                            Sélectionnez une organisation
                                        </option>
                                        {organizations.map((org) => (
                                            <option key={org} value={org}>
                                                {org}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.organization && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.organization.message}
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2">
                                        Précisez l&apos;organisation représentée
                                        (si &quot;Autre&quot;)
                                    </label>
                                    <Input
                                        {...register("organizationOther")}
                                        placeholder="Nom de votre organisation"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Nombre de membres *
                                    </label>
                                    <div className="flex gap-4">
                                        {["2", "3"].map((num) => (
                                            <label
                                                key={num}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="radio"
                                                    value={num}
                                                    {...register(
                                                        "numberOfMembers"
                                                    )}
                                                    className="text-primary"
                                                />
                                                <span>{num} membres</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Nom et prénom du représentant *
                                    </label>
                                    <Input
                                        {...register("teamRepresentative", {
                                            required:
                                                "Le représentant est requis",
                                        })}
                                        placeholder="Nom complet du représentant"
                                        className={
                                            errors.teamRepresentative
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.teamRepresentative && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.teamRepresentative.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Informations du projet */}
                        <section className="bg-card border rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-primary font-rakiby">
                                    Informations du Projet
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Titre du projet innovant
                                    </label>
                                    <Input
                                        {...register("projectTitle")}
                                        placeholder="Titre de votre projet"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Brève description du projet (5 lignes
                                        max)
                                    </label>
                                    <Textarea
                                        {...register("projectDescription")}
                                        placeholder="Décrivez votre projet en quelques lignes..."
                                        rows={5}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Volet choisi *
                                    </label>
                                    <div className="space-y-2">
                                        {trackOptions.map((track) => (
                                            <label
                                                key={track}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={watch(
                                                        "selectedTrack"
                                                    ).includes(track)}
                                                    onChange={(e) =>
                                                        handleCheckboxChange(
                                                            "selectedTrack",
                                                            track,
                                                            e.target.checked
                                                        )
                                                    }
                                                    className="text-primary"
                                                />
                                                <span>{track}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Informations de paiement */}
                        <section className="bg-card border rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <CreditCard className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-primary font-rakiby">
                                    Informations de Paiement (Optionnel)
                                </h2>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-medium text-primary">
                                        Note :
                                    </span>{" "}
                                    Vous pouvez soumettre votre inscription et
                                    effectuer le paiement ultérieurement. Si
                                    vous avez déjà payé, veuillez renseigner les
                                    informations ci-dessous.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Mode de paiement
                                    </label>
                                    <select
                                        {...register("paymentMethod")}
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                    >
                                        <option value="">
                                            Sélectionnez un mode
                                        </option>
                                        {paymentMethods.map((method) => (
                                            <option key={method} value={method}>
                                                {method}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Référence / reçu de paiement
                                    </label>
                                    <Input
                                        {...register("paymentReference")}
                                        placeholder="Numéro de référence"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2">
                                        Précisez le mode de paiement (si
                                        &quot;Autre&quot;)
                                    </label>
                                    <Input
                                        {...register("paymentMethodOther")}
                                        placeholder="Détails du mode de paiement"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Participant 1 */}
                        <section className="bg-card border rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <User className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-primary font-rakiby">
                                    Participant 1 (Représentant)
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Nom & Prénom(s) *
                                    </label>
                                    <Input
                                        {...register("participant1Name", {
                                            required: "Le nom est requis",
                                        })}
                                        placeholder="Nom complet"
                                        className={
                                            errors.participant1Name
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.participant1Name && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.participant1Name.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Téléphone (WhatsApp) *
                                    </label>
                                    <Input
                                        {...register("participant1Phone", {
                                            required: "Le téléphone est requis",
                                            pattern: {
                                                value: /^\+229[0-9]{8,10}$/,
                                                message:
                                                    "Format: +229XXXXXXXX (8 à 10 chiffres)",
                                            },
                                        })}
                                        placeholder="+229XXXXXXXX"
                                        className={
                                            errors.participant1Phone
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.participant1Phone && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.participant1Phone.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Courriel *
                                    </label>
                                    <Input
                                        type="email"
                                        {...register("participant1Email", {
                                            required: "L'email est requis",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Email invalide",
                                            },
                                        })}
                                        placeholder="email@exemple.com"
                                        className={
                                            errors.participant1Email
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.participant1Email && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.participant1Email.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Date de naissance *
                                    </label>
                                    <Input
                                        type="date"
                                        {...register("participant1BirthDate", {
                                            required:
                                                "La date de naissance est requise",
                                        })}
                                        className={
                                            errors.participant1BirthDate
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.participant1BirthDate && (
                                        <p className="text-destructive text-sm mt-1">
                                            {
                                                errors.participant1BirthDate
                                                    .message
                                            }
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Sexe *
                                    </label>
                                    <div className="flex gap-4">
                                        {["H", "F"].map((gender) => (
                                            <label
                                                key={gender}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="radio"
                                                    value={gender}
                                                    {...register(
                                                        "participant1Gender"
                                                    )}
                                                    className="text-primary"
                                                />
                                                <span>{gender}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Niveau d&apos;études *
                                    </label>
                                    <select
                                        {...register("participant1Education", {
                                            required:
                                                "Le niveau d'études est requis",
                                        })}
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                    >
                                        <option value="">
                                            Sélectionnez un niveau
                                        </option>
                                        {educationLevels.map((level) => (
                                            <option key={level} value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.participant1Education && (
                                        <p className="text-destructive text-sm mt-1">
                                            {
                                                errors.participant1Education
                                                    .message
                                            }
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2">
                                        Statut actuel *
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {statusOptions.map((status) => (
                                            <label
                                                key={status}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={watch(
                                                        "participant1Status"
                                                    ).includes(status)}
                                                    onChange={(e) =>
                                                        handleCheckboxChange(
                                                            "participant1Status",
                                                            status,
                                                            e.target.checked
                                                        )
                                                    }
                                                    className="text-primary"
                                                />
                                                <span className="text-sm">
                                                    {status}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                    {watch("participant1Status").includes(
                                        "Autre"
                                    ) && (
                                        <div className="mt-3">
                                            <Input
                                                {...register(
                                                    "participant1StatusOther"
                                                )}
                                                placeholder="Précisez votre statut"
                                                className="w-full"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Participant 2 */}
                        <section className="bg-card border rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <User className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-primary font-rakiby">
                                    Participant 2
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Nom & Prénom(s) *
                                    </label>
                                    <Input
                                        {...register("participant2Name", {
                                            required: "Le nom est requis",
                                        })}
                                        placeholder="Nom complet"
                                        className={
                                            errors.participant2Name
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.participant2Name && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.participant2Name.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Téléphone (WhatsApp) *
                                    </label>
                                    <Input
                                        {...register("participant2Phone", {
                                            required: "Le téléphone est requis",
                                            pattern: {
                                                value: /^\+229[0-9]{8,10}$/,
                                                message:
                                                    "Format: +229XXXXXXXX (8 à 10 chiffres)",
                                            },
                                        })}
                                        placeholder="+229XXXXXXXX"
                                        className={
                                            errors.participant2Phone
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.participant2Phone && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.participant2Phone.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Courriel *
                                    </label>
                                    <Input
                                        type="email"
                                        {...register("participant2Email", {
                                            required: "L'email est requis",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Email invalide",
                                            },
                                        })}
                                        placeholder="email@exemple.com"
                                        className={
                                            errors.participant2Email
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.participant2Email && (
                                        <p className="text-destructive text-sm mt-1">
                                            {errors.participant2Email.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Date de naissance *
                                    </label>
                                    <Input
                                        type="date"
                                        {...register("participant2BirthDate", {
                                            required:
                                                "La date de naissance est requise",
                                        })}
                                        className={
                                            errors.participant2BirthDate
                                                ? "border-destructive"
                                                : ""
                                        }
                                    />
                                    {errors.participant2BirthDate && (
                                        <p className="text-destructive text-sm mt-1">
                                            {
                                                errors.participant2BirthDate
                                                    .message
                                            }
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Sexe *
                                    </label>
                                    <div className="flex gap-4">
                                        {["H", "F"].map((gender) => (
                                            <label
                                                key={gender}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="radio"
                                                    value={gender}
                                                    {...register(
                                                        "participant2Gender"
                                                    )}
                                                    className="text-primary"
                                                />
                                                <span>{gender}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Niveau d&apos;études *
                                    </label>
                                    <select
                                        {...register("participant2Education", {
                                            required:
                                                "Le niveau d'études est requis",
                                        })}
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                    >
                                        <option value="">
                                            Sélectionnez un niveau
                                        </option>
                                        {educationLevels.map((level) => (
                                            <option key={level} value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.participant2Education && (
                                        <p className="text-destructive text-sm mt-1">
                                            {
                                                errors.participant2Education
                                                    .message
                                            }
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2">
                                        Statut actuel *
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {statusOptions.map((status) => (
                                            <label
                                                key={status}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={watch(
                                                        "participant2Status"
                                                    ).includes(status)}
                                                    onChange={(e) =>
                                                        handleCheckboxChange(
                                                            "participant2Status",
                                                            status,
                                                            e.target.checked
                                                        )
                                                    }
                                                    className="text-primary"
                                                />
                                                <span className="text-sm">
                                                    {status}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                    {watch("participant2Status").includes(
                                        "Autre"
                                    ) && (
                                        <div className="mt-3">
                                            <Input
                                                {...register(
                                                    "participant2StatusOther"
                                                )}
                                                placeholder="Précisez votre statut"
                                                className="w-full"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Participant 3 (conditionnel) */}
                        {watchedNumberOfMembers === "3" && (
                            <section className="bg-card border rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <User className="h-6 w-6 text-primary" />
                                    <h2 className="text-2xl font-bold text-primary font-rakiby">
                                        Participant 3 (Optionnel)
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Nom & Prénom(s)
                                        </label>
                                        <Input
                                            {...register("participant3Name")}
                                            placeholder="Nom complet"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Téléphone (WhatsApp)
                                        </label>
                                        <Input
                                            {...register("participant3Phone")}
                                            placeholder="+229XXXXXXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Courriel
                                        </label>
                                        <Input
                                            type="email"
                                            {...register("participant3Email")}
                                            placeholder="email@exemple.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Date de naissance
                                        </label>
                                        <Input
                                            type="date"
                                            {...register(
                                                "participant3BirthDate"
                                            )}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Sexe
                                        </label>
                                        <div className="flex gap-4">
                                            {["H", "F"].map((gender) => (
                                                <label
                                                    key={gender}
                                                    className="flex items-center gap-2"
                                                >
                                                    <input
                                                        type="radio"
                                                        value={gender}
                                                        {...register(
                                                            "participant3Gender"
                                                        )}
                                                        className="text-primary"
                                                    />
                                                    <span>{gender}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Niveau d&apos;études
                                        </label>
                                        <select
                                            {...register(
                                                "participant3Education"
                                            )}
                                            className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                        >
                                            <option value="">
                                                Sélectionnez un niveau
                                            </option>
                                            {educationLevels.map((level) => (
                                                <option
                                                    key={level}
                                                    value={level}
                                                >
                                                    {level}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-2">
                                            Statut actuel
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            {statusOptions.map((status) => (
                                                <label
                                                    key={status}
                                                    className="flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            watch(
                                                                "participant3Status"
                                                            )?.includes(
                                                                status
                                                            ) || false
                                                        }
                                                        onChange={(e) =>
                                                            handleCheckboxChange(
                                                                "participant3Status",
                                                                status,
                                                                e.target.checked
                                                            )
                                                        }
                                                        className="text-primary"
                                                    />
                                                    <span className="text-sm">
                                                        {status}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                        {watch("participant3Status")?.includes(
                                            "Autre"
                                        ) && (
                                            <div className="mt-3">
                                                <Input
                                                    {...register(
                                                        "participant3StatusOther"
                                                    )}
                                                    placeholder="Précisez votre statut"
                                                    className="w-full"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Section 7: Validation et acceptation */}
                        <section className="bg-card border rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-primary font-rakiby">
                                    Validation et Acceptation
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        {...register("acceptTerms", {
                                            required:
                                                "Vous devez accepter les conditions",
                                        })}
                                        className="mt-1 text-primary"
                                    />
                                    <div className="text-sm">
                                        <p className="font-medium">
                                            J&apos;accepte les conditions et la
                                            politique de protection des données
                                            *
                                        </p>
                                        <p className="text-muted-foreground mt-1">
                                            En cochant cette case, vous acceptez
                                            nos{" "}
                                            <Link
                                                href="/terms"
                                                className="text-primary hover:underline"
                                            >
                                                conditions d&apos;utilisation
                                            </Link>{" "}
                                            et notre{" "}
                                            <Link
                                                href="/privacy"
                                                className="text-primary hover:underline"
                                            >
                                                politique de confidentialité
                                            </Link>
                                            .
                                        </p>
                                        {errors.acceptTerms && (
                                            <p className="text-destructive text-sm mt-1">
                                                {errors.acceptTerms.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Bouton de soumission */}
                        <div className="text-center">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={loading}
                                className="px-12 py-4 text-lg"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 mr-3" />
                                        Soumettre l&apos;inscription
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}
