import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

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
            "validationDate",
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
        const phoneRegex = /^(\+229|229)[0-9]{8}$/;
        const phones = [data.participant1Phone, data.participant2Phone];
        if (data.participant3Phone) phones.push(data.participant3Phone);

        for (const phone of phones) {
            if (phone && !phoneRegex.test(phone)) {
                return NextResponse.json(
                    { error: `Numéro de téléphone invalide: ${phone}` },
                    { status: 400 }
                );
            }
        }

        // Vérifier si l'équipe existe déjà
        const existingTeam = await prisma.inscription.findUnique({
            where: { teamName: data.teamName },
        });

        if (existingTeam) {
            return NextResponse.json(
                { error: "Une équipe avec ce nom existe déjà" },
                { status: 409 }
            );
        }

        // Vérifier si un participant existe déjà
        const existingParticipant = await prisma.inscription.findFirst({
            where: {
                OR: [
                    { participant1Email: data.participant1Email },
                    { participant2Email: data.participant1Email },
                    { participant3Email: data.participant1Email },
                ],
            },
        });

        if (existingParticipant) {
            return NextResponse.json(
                { error: "Un participant avec cet email est déjà inscrit" },
                { status: 409 }
            );
        }

        // Insérer les données en base avec Prisma
        const inscription = await prisma.inscription.create({
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
                participant2Name: data.participant2Name,
                participant2Phone: data.participant2Phone,
                participant2Email: data.participant2Email,
                participant2BirthDate: new Date(data.participant2BirthDate),
                participant2Gender: data.participant2Gender,
                participant2Education: data.participant2Education,
                participant2Status: data.participant2Status || [],
                participant3Name: data.participant3Name || null,
                participant3Phone: data.participant3Phone || null,
                participant3Email: data.participant3Email || null,
                participant3BirthDate: data.participant3BirthDate
                    ? new Date(data.participant3BirthDate)
                    : null,
                participant3Gender: data.participant3Gender || null,
                participant3Education: data.participant3Education || null,
                participant3Status: data.participant3Status || [],
                validationDate: new Date(data.validationDate),
                acceptTerms: data.acceptTerms,
            },
        });

        const inscriptionId = inscription.id;

        return NextResponse.json({
            success: true,
            id: inscriptionId,
            message: "Inscription enregistrée avec succès",
        });
    } catch (error) {
        console.error("Erreur lors de l'enregistrement:", error);
        return NextResponse.json(
            { error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const inscriptions = await prisma.inscription.findMany({
            select: {
                id: true,
                teamName: true,
                country: true,
                edition: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 10,
        });

        return NextResponse.json({
            success: true,
            data: inscriptions,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération:", error);
        return NextResponse.json(
            { error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}
