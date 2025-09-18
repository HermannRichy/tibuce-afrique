"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/src/components/ui/dialog";
import { Separator } from "@/src/components/ui/separator";
import BadgeList from "./BadgeList";
import {
    Calendar,
    MapPin,
    Users,
    Phone,
    Mail,
    Building,
    User,
    GraduationCap,
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { InscriptionSummary } from "@/src/types/inscription";

interface InscriptionDetailsProps {
    inscription: InscriptionSummary | null;
    open: boolean;
    onClose: () => void;
}

export default function InscriptionDetails({
    inscription,
    open,
    onClose,
}: InscriptionDetailsProps) {
    if (!inscription) return null;

    const formatDate = (dateString: string | null | undefined) => {
        if (!dateString) return "Non renseigné";
        try {
            return format(new Date(dateString), "dd/MM/yyyy", { locale: fr });
        } catch (error) {
            console.error("Erreur de formatage de date:", error);
            return "Date invalide";
        }
    };

    const formatDateTime = (dateString: string | null | undefined) => {
        if (!dateString) return "Non renseigné";
        try {
            return format(new Date(dateString), "dd/MM/yyyy HH:mm", {
                locale: fr,
            });
        } catch (error) {
            console.error("Erreur de formatage de date:", error);
            return "Date invalide";
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-rakiby text-primary">
                        Détails de l&apos;inscription
                    </DialogTitle>
                    <DialogDescription>
                        Équipe : {inscription.teamName}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Informations générales */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Building className="h-5 w-5 text-primary" />
                            Informations Générales
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Nom de l&apos;équipe
                                </label>
                                <p className="text-sm">
                                    {inscription.teamName}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Pays de représentation
                                </label>
                                <p className="text-sm flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    {inscription.country}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Édition concernée
                                </label>
                                <p className="text-sm">{inscription.edition}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Organisation
                                </label>
                                <p className="text-sm">
                                    {inscription.organization}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Nombre de membres
                                </label>
                                <p className="text-sm flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    {inscription.numberOfMembers}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Participants */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            Participants
                        </h3>

                        {/* Participant 1 */}
                        <div className="space-y-3 p-4 border rounded-lg">
                            <h4 className="font-medium text-primary">
                                Participant 1 (Représentant)
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Nom complet
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        {inscription.participant1Name}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Email
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        {inscription.participant1Email}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Téléphone
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        {inscription.participant1Phone}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Date de naissance
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        {formatDate(
                                            inscription.participant1BirthDate
                                        )}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Sexe
                                    </label>
                                    <p className="text-sm">
                                        {inscription.participant1Gender}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Niveau d&apos;études
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4" />
                                        {inscription.participant1Education}
                                    </p>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Statut actuel
                                    </label>
                                    <div className="mt-1">
                                        <BadgeList
                                            items={
                                                inscription.participant1Status
                                            }
                                            variant="outline"
                                            emptyMessage="Aucun statut renseigné"
                                        />
                                    </div>
                                    {inscription.participant1StatusOther && (
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Précision :{" "}
                                            {
                                                inscription.participant1StatusOther
                                            }
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Participant 2 */}
                        <div className="space-y-3 p-4 border rounded-lg">
                            <h4 className="font-medium text-primary">
                                Participant 2
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Nom complet
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        {inscription.participant2Name}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Email
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        {inscription.participant2Email}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Téléphone
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        {inscription.participant2Phone}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Date de naissance
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        {formatDate(
                                            inscription.participant2BirthDate
                                        )}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Sexe
                                    </label>
                                    <p className="text-sm">
                                        {inscription.participant2Gender}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Niveau d&apos;études
                                    </label>
                                    <p className="text-sm flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4" />
                                        {inscription.participant2Education}
                                    </p>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Statut actuel
                                    </label>
                                    <div className="mt-1">
                                        <BadgeList
                                            items={
                                                inscription.participant2Status
                                            }
                                            variant="outline"
                                            emptyMessage="Aucun statut renseigné"
                                        />
                                    </div>
                                    {inscription.participant2StatusOther && (
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Précision :{" "}
                                            {
                                                inscription.participant2StatusOther
                                            }
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Participant 3 (si présent) */}
                        {inscription.participant3Name && (
                            <div className="space-y-3 p-4 border rounded-lg">
                                <h4 className="font-medium text-primary">
                                    Participant 3
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">
                                            Nom complet
                                        </label>
                                        <p className="text-sm flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            {inscription.participant3Name}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">
                                            Email
                                        </label>
                                        <p className="text-sm flex items-center gap-2">
                                            <Mail className="h-4 w-4" />
                                            {inscription.participant3Email}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">
                                            Téléphone
                                        </label>
                                        <p className="text-sm flex items-center gap-2">
                                            <Phone className="h-4 w-4" />
                                            {inscription.participant3Phone}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">
                                            Date de naissance
                                        </label>
                                        <p className="text-sm flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            {inscription.participant3BirthDate &&
                                                formatDate(
                                                    inscription.participant3BirthDate
                                                )}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">
                                            Sexe
                                        </label>
                                        <p className="text-sm">
                                            {inscription.participant3Gender}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">
                                            Niveau d&apos;études
                                        </label>
                                        <p className="text-sm flex items-center gap-2">
                                            <GraduationCap className="h-4 w-4" />
                                            {inscription.participant3Education}
                                        </p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-sm font-medium text-muted-foreground">
                                            Statut actuel
                                        </label>
                                        <div className="mt-1">
                                            <BadgeList
                                                items={
                                                    inscription.participant3Status
                                                }
                                                variant="outline"
                                                emptyMessage="Aucun statut renseigné"
                                            />
                                        </div>
                                        {inscription.participant3StatusOther && (
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Précision :{" "}
                                                {
                                                    inscription.participant3StatusOther
                                                }
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Separator />

                    {/* Informations de validation */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            Informations de Validation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Date de création
                                </label>
                                <p className="text-sm">
                                    {formatDateTime(inscription.createdAt)}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Dernière modification
                                </label>
                                <p className="text-sm">
                                    {formatDateTime(inscription.updatedAt)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
