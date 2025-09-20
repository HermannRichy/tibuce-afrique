"use client";

import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Loader2, Shield, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface ProtectedRouteProps {
    children: ReactNode;
    fallback?: ReactNode;
    redirectTo?: string;
    requireAuth?: boolean;
}

export default function ProtectedRoute({
    children,
    fallback,
    redirectTo = "/login",
    requireAuth = true,
}: ProtectedRouteProps) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (requireAuth && !user) {
                toast.error("Accès non autorisé. Veuillez vous connecter.");
                router.push(redirectTo);
            } else if (!requireAuth && user) {
                toast.info("Vous êtes déjà connecté.");
                router.push("/");
            }
        }
    }, [user, loading, requireAuth, redirectTo, router]);

    // Afficher le loader pendant la vérification
    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <Card className="w-full max-w-md">
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center space-y-4">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            <p className="text-sm text-muted-foreground">
                                Vérification de l&apos;authentification...
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Si l'authentification est requise et l'utilisateur n'est pas connecté
    if (requireAuth && !user) {
        return (
            fallback || (
                <div className="min-h-screen bg-background flex items-center justify-center p-4">
                    <Card className="w-full max-w-md">
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-4 w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                                <Shield className="h-8 w-8 text-destructive" />
                            </div>
                            <CardTitle className="text-2xl font-bold font-rakiby text-destructive">
                                Accès Refusé
                            </CardTitle>
                            <CardDescription>
                                Vous devez être connecté pour accéder à cette
                                page.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <Button
                                    onClick={() => router.push("/login")}
                                    className="w-full"
                                >
                                    Se connecter
                                </Button>

                                <Button
                                    onClick={() => router.back()}
                                    variant="outline"
                                    className="w-full"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Retour
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )
        );
    }

    // Si l'authentification n'est pas requise et l'utilisateur est connecté
    if (!requireAuth && user) {
        return (
            fallback || (
                <div className="min-h-screen bg-background flex items-center justify-center p-4">
                    <Card className="w-full max-w-md">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold font-rakiby text-primary">
                                Déjà Connecté
                            </CardTitle>
                            <CardDescription>
                                Vous êtes déjà connecté. Redirection en cours...
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            )
        );
    }

    // Afficher le contenu protégé
    return <>{children}</>;
}
