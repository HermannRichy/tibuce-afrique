"use client";

import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

interface AuthGuardProps {
    children: ReactNode;
    fallback?: ReactNode;
}

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
    const { user, loading } = useAuth();

    // Afficher le loader pendant la vérification
    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">
                        Chargement...
                    </p>
                </div>
            </div>
        );
    }

    // Si l'utilisateur n'est pas connecté, afficher le fallback ou rien
    if (!user) {
        return <>{fallback || null}</>;
    }

    // Afficher le contenu si l'utilisateur est connecté
    return <>{children}</>;
}
