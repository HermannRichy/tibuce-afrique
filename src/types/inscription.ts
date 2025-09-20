export interface Inscription {
    id: number;
    teamName: string;
    country: string;
    edition: string;
    organization: string;
    organizationOther?: string;
    numberOfMembers: number;
    projectTitle?: string;
    projectDescription?: string;
    paymentMethod: string;
    paymentMethodOther?: string;
    paymentReference: string;
    teamRepresentative: string;
    selectedTrack?: string[];
    participant1Name: string;
    participant1Phone: string;
    participant1Email: string;
    participant1BirthDate: string;
    participant1Gender: string;
    participant1Education: string;
    participant1Status?: string[];
    participant1StatusOther?: string;
    participant2Name: string;
    participant2Phone: string;
    participant2Email: string;
    participant2BirthDate: string;
    participant2Gender: string;
    participant2Education: string;
    participant2Status?: string[];
    participant2StatusOther?: string;
    participant3Name?: string;
    participant3Phone?: string;
    participant3Email?: string;
    participant3BirthDate?: string;
    participant3Gender?: string;
    participant3Education?: string;
    participant3Status?: string[];
    participant3StatusOther?: string;
    createdAt: string;
    updatedAt: string;
}

// Interface simplifiée pour le tableau
export interface InscriptionSummary {
    id: number;
    teamName: string;
    country: string;
    edition: string;
    organization: string;
    numberOfMembers: number;
    participant1Name: string;
    participant1Email: string;
    participant1Phone: string;
    participant2Name: string;
    participant2Email: string;
    participant2Phone: string;
    participant3Name?: string;
    participant3Email?: string;
    participant3Phone?: string;
    selectedTrack?: string[];
    participant1Status?: string[];
    participant2Status?: string[];
    participant3Status?: string[];
    createdAt: string;
    updatedAt: string;
}
