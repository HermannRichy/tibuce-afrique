import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

// GET - Récupérer une inscription par ID
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const inscription = await prisma.inscription.findUnique({
            where: { id: parseInt(params.id) },
        });

        if (!inscription) {
            return NextResponse.json(
                { error: "Inscription non trouvée" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: inscription,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération:", error);
        return NextResponse.json(
            { error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}

// PUT - Modifier une inscription
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const data = await request.json();
        const inscriptionId = parseInt(params.id);

        // Vérifier si l'inscription existe
        const existingInscription = await prisma.inscription.findUnique({
            where: { id: inscriptionId },
        });

        if (!existingInscription) {
            return NextResponse.json(
                { error: "Inscription non trouvée" },
                { status: 404 }
            );
        }

        // Validation des données requises
        const requiredFields = [
            "teamName",
            "country",
            "edition",
            "organization",
            "numberOfMembers",
            "teamRepresentative",
            "paymentMethod",
            "paymentReference",
            "participant1Name",
            "participant1Phone",
            "participant1Email",
            "participant1BirthDate",
            "participant1Gender",
            "participant1Education",
            "participant2Name",
            "participant2Phone",
            "participant2Email",
            "participant2BirthDate",
            "participant2Gender",
            "participant2Education",
            "acceptTerms",
        ];

        for (const field of requiredFields) {
            if (!data[field]) {
                return NextResponse.json(
                    { error: `Le champ ${field} est requis` },
                    { status: 400 }
                );
            }
        }

        // Validation des emails
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const emails = [data.participant1Email, data.participant2Email];
        if (data.participant3Email) emails.push(data.participant3Email);

        for (const email of emails) {
            if (email && !emailRegex.test(email)) {
                return NextResponse.json(
                    { error: `Email invalide: ${email}` },
                    { status: 400 }
                );
            }
        }

        // Validation des téléphones
        const phoneRegex = /^\+229[0-9]{8,10}$/;
        const phones = [data.participant1Phone, data.participant2Phone];
        if (data.participant3Phone) phones.push(data.participant3Phone);

        for (const phone of phones) {
            if (phone && !phoneRegex.test(phone)) {
                return NextResponse.json(
                    {
                        error: `Numéro de téléphone invalide: ${phone}. Format attendu: +229XXXXXXXX`,
                    },
                    { status: 400 }
                );
            }
        }

        // Vérifier si l'équipe existe déjà (sauf pour l'inscription actuelle)
        if (data.teamName !== existingInscription.teamName) {
            const existingTeam = await prisma.inscription.findUnique({
                where: { teamName: data.teamName },
            });

            if (existingTeam) {
                return NextResponse.json(
                    { error: "Une équipe avec ce nom existe déjà" },
                    { status: 409 }
                );
            }
        }

        // Mettre à jour l'inscription
        const updatedInscription = await prisma.inscription.update({
            where: { id: inscriptionId },
            data: {
                teamName: data.teamName,
                country: data.country,
                edition: data.edition,
                organization: data.organization,
                organizationOther: data.organizationOther || null,
                numberOfMembers: parseInt(data.numberOfMembers),
                projectTitle: data.projectTitle || null,
                projectDescription: data.projectDescription || null,
                paymentMethod: data.paymentMethod,
                paymentMethodOther: data.paymentMethodOther || null,
                paymentReference: data.paymentReference,
                teamRepresentative: data.teamRepresentative,
                selectedTrack: data.selectedTrack || [],
                participant1Name: data.participant1Name,
                participant1Phone: data.participant1Phone,
                participant1Email: data.participant1Email,
                participant1BirthDate: new Date(data.participant1BirthDate),
                participant1Gender: data.participant1Gender,
                participant1Education: data.participant1Education,
                participant1Status: data.participant1Status || [],
                participant1StatusOther: data.participant1StatusOther || null,
                participant2Name: data.participant2Name,
                participant2Phone: data.participant2Phone,
                participant2Email: data.participant2Email,
                participant2BirthDate: new Date(data.participant2BirthDate),
                participant2Gender: data.participant2Gender,
                participant2Education: data.participant2Education,
                participant2Status: data.participant2Status || [],
                participant2StatusOther: data.participant2StatusOther || null,
                participant3Name: data.participant3Name || null,
                participant3Phone: data.participant3Phone || null,
                participant3Email: data.participant3Email || null,
                participant3BirthDate: data.participant3BirthDate
                    ? new Date(data.participant3BirthDate)
                    : null,
                participant3Gender: data.participant3Gender || null,
                participant3Education: data.participant3Education || null,
                participant3Status: data.participant3Status || [],
                participant3StatusOther: data.participant3StatusOther || null,
                acceptTerms: data.acceptTerms,
            },
        });

        return NextResponse.json({
            success: true,
            data: updatedInscription,
            message: "Inscription modifiée avec succès",
        });
    } catch (error) {
        console.error("Erreur lors de la modification:", error);
        return NextResponse.json(
            { error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}

// DELETE - Supprimer une inscription
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const inscriptionId = parseInt(params.id);

        // Vérifier si l'inscription existe
        const existingInscription = await prisma.inscription.findUnique({
            where: { id: inscriptionId },
        });

        if (!existingInscription) {
            return NextResponse.json(
                { error: "Inscription non trouvée" },
                { status: 404 }
            );
        }

        // Supprimer l'inscription
        await prisma.inscription.delete({
            where: { id: inscriptionId },
        });

        return NextResponse.json({
            success: true,
            message: "Inscription supprimée avec succès",
        });
    } catch (error) {
        console.error("Erreur lors de la suppression:", error);
        return NextResponse.json(
            { error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}
