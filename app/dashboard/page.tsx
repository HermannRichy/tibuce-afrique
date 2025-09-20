"use client";

import { Footer } from "@/src/components/sections/Footer";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";
import InscriptionsTable from "@/src/components/dashboard/InscriptionsTable";
import InscriptionSummaryDetails from "@/src/components/dashboard/InscriptionSummaryDetails";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/src/components/ui/tabs";
import { User, Settings, BarChart3, LogOut, List, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { InscriptionSummary } from "@/src/types/inscription";

export default function DashboardPage() {
    const [selectedInscription, setSelectedInscription] =
        useState<InscriptionSummary | null>(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleViewInscription = (inscription: InscriptionSummary) => {
        setSelectedInscription(inscription);
        setShowDetails(true);
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-background">
                {/* Header */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-b">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-4xl lg:text-5xl font-bold font-rakiby text-primary mb-4">
                                Tableau de Bord
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Gérez votre compte et vos inscriptions TIBUCE
                                Africa
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="overview" className="space-y-6">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger
                                    value="overview"
                                    className="flex items-center gap-2"
                                >
                                    <BarChart3 className="h-4 w-4" />
                                    Vue d&apos;ensemble
                                </TabsTrigger>
                                <TabsTrigger
                                    value="inscriptions"
                                    className="flex items-center gap-2"
                                >
                                    <List className="h-4 w-4" />
                                    Inscriptions
                                </TabsTrigger>
                            </TabsList>

                            {/* Vue d'ensemble */}
                            <TabsContent value="overview" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Profile Card */}
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center space-x-2">
                                                <User className="h-5 w-5 text-primary" />
                                                <CardTitle>Profil</CardTitle>
                                            </div>
                                            <CardDescription>
                                                Gérez vos informations
                                                personnelles
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button
                                                variant="outline"
                                                className="w-full"
                                            >
                                                Modifier le profil
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    {/* Inscriptions Card */}
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center space-x-2">
                                                <BarChart3 className="h-5 w-5 text-primary" />
                                                <CardTitle>
                                                    Inscriptions
                                                </CardTitle>
                                            </div>
                                            <CardDescription>
                                                Consultez vos inscriptions aux
                                                événements
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button
                                                variant="outline"
                                                className="w-full"
                                            >
                                                Voir les inscriptions
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    {/* Settings Card */}
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-center space-x-2">
                                                <Settings className="h-5 w-5 text-primary" />
                                                <CardTitle>
                                                    Paramètres
                                                </CardTitle>
                                            </div>
                                            <CardDescription>
                                                Configurez vos préférences
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button
                                                variant="outline"
                                                className="w-full"
                                            >
                                                Ouvrir les paramètres
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Quick Actions */}
                                <div className="mt-12">
                                    <h2 className="text-2xl font-bold font-rakiby text-primary mb-6">
                                        Actions Rapides
                                    </h2>
                                    <div className="flex flex-wrap gap-4">
                                        <Button asChild>
                                            <Link href="/inscription">
                                                <Plus className="mr-2 h-4 w-4" />
                                                Nouvelle inscription
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link href="/logout">
                                                <LogOut className="mr-2 h-4 w-4" />
                                                Se déconnecter
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Inscriptions */}
                            <TabsContent
                                value="inscriptions"
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold font-rakiby text-primary">
                                            Gestion des Inscriptions
                                        </h2>
                                        <p className="text-muted-foreground">
                                            Consultez, modifiez et supprimez les
                                            inscriptions
                                        </p>
                                    </div>
                                    <Button asChild>
                                        <Link href="/inscription">
                                            <Plus className="mr-2 h-4 w-4" />
                                            Nouvelle inscription
                                        </Link>
                                    </Button>
                                </div>

                                <InscriptionsTable
                                    onView={handleViewInscription}
                                />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Modal de détails */}
            <InscriptionSummaryDetails
                inscription={selectedInscription}
                open={showDetails}
                onClose={() => setShowDetails(false)}
            />
        </ProtectedRoute>
    );
}
