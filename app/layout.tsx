import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
