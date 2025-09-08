import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/src/components/ui/theme-provider";
import { rakiby, poppins } from "./fonts";

export const metadata: Metadata = {
    title: {
        default: "TIBUCE AFRIQUE",
        template: "%s | TIBUCE AFRIQUE",
    },
    description:
        "TIBUCE, c’est un terrain de jeu pour ceux qui rêve de l’Afrique autrement , une Afrique connectée, préparée et conquérante.",
    /*keywords: [
        "Next.js",
        "Landing Page",
        "Boilerplate",
        "React",
        "EmailJS",
        "Formulaire de contact",
        "UI",
        "TailwindCSS",
    ],
    authors: [{ name: "Richy", url: "https://www.exemple.com" }],
    creator: "Richy",
    openGraph: {
        title: "Richy Landing Boilerplate",
        description:
            "Un boilerplate Next.js moderne pour landing page, avec UI réactive, formulaire de contact, et intégration EmailJS.",
        url: "https://www.exemple.com",
        siteName: "Richy Landing Boilerplate",
        images: [
            {
                url: "/globe.svg",
                width: 1200,
                height: 630,
                alt: "Richy Landing Boilerplate",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Richy Landing Boilerplate",
        description:
            "Un boilerplate Next.js moderne pour landing page, avec UI réactive, formulaire de contact, et intégration EmailJS.",
        creator: "@richy",
        images: ["/globe.svg"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    manifest: "/site.webmanifest", */
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${rakiby.variable} ${poppins.variable} antialiased font-poppins`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
