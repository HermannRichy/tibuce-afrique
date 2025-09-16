"use client";

import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/src/components/ui/table";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/src/components/ui/alert-dialog";
import {
    MoreHorizontal,
    Edit,
    Trash2,
    Eye,
    Calendar,
    MapPin,
    Users,
    Phone,
    Mail,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Inscription {
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

interface InscriptionsTableProps {
    onEdit: (inscription: Inscription) => void;
    onView: (inscription: Inscription) => void;
}

export default function InscriptionsTable({
    onEdit,
    onView,
}: InscriptionsTableProps) {
    const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    useEffect(() => {
        fetchInscriptions();
    }, []);

    const fetchInscriptions = async () => {
        try {
            const response = await fetch("/api/inscription");
            const data = await response.json();

            if (data.success) {
                setInscriptions(data.data);
            } else {
                toast.error("Erreur lors du chargement des inscriptions");
            }
        } catch (error) {
            console.error("Erreur:", error);
            toast.error("Erreur lors du chargement des inscriptions");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/inscription/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Inscription supprimée avec succès");
                setInscriptions(inscriptions.filter((ins) => ins.id !== id));
            } else {
                toast.error(data.error || "Erreur lors de la suppression");
            }
        } catch (error) {
            console.error("Erreur:", error);
            toast.error("Erreur lors de la suppression");
        } finally {
            setDeleteId(null);
        }
    };

    const formatDate = (dateString: string) => {
        try {
            return format(new Date(dateString), "dd/MM/yyyy HH:mm", {
                locale: fr,
            });
        } catch (error) {
            console.error("Erreur de formatage de date:", error);
            return "Date invalide";
        }
    };

    const getStatusBadge = (createdAt: string) => {
        const now = new Date();
        const created = new Date(createdAt);
        const diffDays = Math.floor(
            (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (diffDays <= 1) {
            return <Badge variant="default">Nouveau</Badge>;
        } else if (diffDays <= 7) {
            return <Badge variant="secondary">Récent</Badge>;
        } else {
            return <Badge variant="outline">Ancien</Badge>;
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">
                        Chargement des inscriptions...
                    </p>
                </div>
            </div>
        );
    }

    if (inscriptions.length === 0) {
        return (
            <div className="text-center py-8">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                    Aucune inscription
                </h3>
                <p className="text-muted-foreground">
                    Aucune inscription n&apos;a été trouvée.
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Équipe</TableHead>
                            <TableHead>Pays</TableHead>
                            <TableHead>Édition</TableHead>
                            <TableHead>Participants</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="w-[50px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {inscriptions.map((inscription) => (
                            <TableRow key={inscription.id}>
                                <TableCell className="font-medium">
                                    {inscription.teamName}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        {inscription.country}
                                    </div>
                                </TableCell>
                                <TableCell>{inscription.edition}</TableCell>
                                <TableCell>
                                    <div className="space-y-1">
                                        <div className="text-sm font-medium">
                                            {inscription.participant1Name}
                                        </div>
                                        <div className="text-sm font-medium">
                                            {inscription.participant2Name}
                                        </div>
                                        {inscription.participant3Name && (
                                            <div className="text-sm font-medium">
                                                {inscription.participant3Name}
                                            </div>
                                        )}
                                        <div className="text-xs text-muted-foreground">
                                            {inscription.numberOfMembers}{" "}
                                            membre(s)
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Mail className="h-3 w-3 text-muted-foreground" />
                                            {inscription.participant1Email}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Phone className="h-3 w-3 text-muted-foreground" />
                                            {inscription.participant1Phone}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">
                                            {formatDate(inscription.createdAt)}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {getStatusBadge(inscription.createdAt)}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="sm">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    onView(inscription)
                                                }
                                            >
                                                <Eye className="mr-2 h-4 w-4" />
                                                Voir
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    onEdit(inscription)
                                                }
                                            >
                                                <Edit className="mr-2 h-4 w-4" />
                                                Modifier
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    setDeleteId(inscription.id)
                                                }
                                                className="text-destructive"
                                            >
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Supprimer
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Dialog de confirmation de suppression */}
            <AlertDialog
                open={deleteId !== null}
                onOpenChange={() => setDeleteId(null)}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Confirmer la suppression
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Êtes-vous sûr de vouloir supprimer cette inscription
                            ? Cette action est irréversible.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => deleteId && handleDelete(deleteId)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Supprimer
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
