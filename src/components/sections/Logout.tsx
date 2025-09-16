"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card";
import { Alert, AlertDescription } from "@/src/components/ui/alert";
import { Loader2, LogOut, User, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function Logout() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { user, logOut } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        setError("");
        setLoading(true);

        try {
            await logOut();
            toast.success("Déconnexion réussie !");
            router.push("/");
        } catch (err: any) {
            const errorMessage = err.message || "Une erreur est survenue";
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold font-rakiby text-primary">
                        Déconnexion
                    </CardTitle>
                    <CardDescription>
                        Vous êtes connecté en tant que{" "}
                        <span className="font-semibold text-primary">
                            {user?.email}
                        </span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <div className="space-y-3">
                        <Button
                            onClick={handleLogout}
                            variant="destructive"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Déconnexion en cours...
                                </>
                            ) : (
                                <>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Se déconnecter
                                </>
                            )}
                        </Button>

                        <Button
                            onClick={handleGoBack}
                            variant="outline"
                            className="w-full"
                            disabled={loading}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour
                        </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                        <p>
                            En vous déconnectant, vous perdrez l&apos;accès à
                            votre session actuelle.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
