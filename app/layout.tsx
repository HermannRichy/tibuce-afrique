import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/src/components/ui/theme-provider";
import { rakiby, poppins } from "./fonts";

export const metadata: Metadata = {
    title: {
        default: "TIBUCE AFRICA - L'Avenir du Business se Joue Ici",
        template: "%s | TIBUCE AFRICA",
    },
    description:
        "TIBUCE Africa révolutionne la formation entrepreneuriale africaine. Participez au tournoi de business qui prépare la nouvelle génération d'entrepreneurs africains à façonner l'avenir du continent.",
    keywords: [
        "TIBUCE",
        "TIBUCE Africa",
        "entrepreneuriat africain",
        "business game",
        "formation entrepreneuriale",
        "tournoi business",
        "Afrique",
        "jeunes entrepreneurs",
        "leadership",
        "innovation",
        "développement économique",
        "réseautage professionnel",
        "mentorat",
        "challenge business",
        "écosystème entrepreneurial",
        "Cotonou",
        "Lomé",
        "Bénin",
        "Togo",
        "startup",
        "PME",
        "formation pratique",
        "expérience concrète",
        "défis business",
        "compétition",
        "excellence",
        "talent",
        "opportunités",
        "carrière",
        "professionnel",
    ],
    authors: [{ name: "TIBUCE Africa", url: "https://tibuceafrica.com" }],
    creator: "TIBUCE Africa",
    publisher: "TIBUCE Africa",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "TIBUCE AFRICA - L'Avenir du Business se Joue Ici",
        description:
            "Rejoignez la révolution entrepreneuriale africaine. TIBUCE Africa prépare la nouvelle génération de leaders économiques du continent à travers des défis business concrets et un réseau professionnel solide.",
        url: "https://tibuceafrica.com",
        siteName: "TIBUCE Africa",
        images: [
            {
                url: "/logo-tibuce.jpeg",
                width: 600,
                height: 600,
                alt: "TIBUCE Africa - L'Avenir du Business se Joue Ici",
            },
        ],
        locale: "fr_FR",
        type: "website",
        countryName: "Bénin",
    },
    twitter: {
        card: "summary_large_image",
        title: "TIBUCE AFRICA - L'Avenir du Business se Joue Ici",
        description:
            "Rejoignez la révolution entrepreneuriale africaine. Défis business, mentorat et réseautage pour forger les leaders de demain.",
        creator: "@tibuce_africa",
        site: "@tibuce_africa",
        images: ["/logo-tibuce.jpeg"],
    },
    alternates: {
        canonical: "https://tibuceafrica.com",
        languages: {
            "fr-FR": "https://tibuceafrica.com",
            "en-US": "https://tibuceafrica.com/en",
        },
    },
    category: "Éducation et Formation",
    classification: "Formation Entrepreneuriale",
    other: {
        "contact:email": "contact@tibuce-africa.org",
        "contact:phone_number": "+229 XX XX XX XX",
        "geo.region": "BJ",
        "geo.placename": "Cotonou",
        "geo.position": "6.3654;2.4183",
        ICBM: "6.3654, 2.4183",
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon.svg", type: "image/svg+xml" },
        ],
        shortcut: "/favicon.ico",
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#667eea",
            },
        ],
    },
    manifest: "/site.webmanifest",
    verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
    },
    appLinks: {
        web: {
            url: "https://tibuceafrica.com",
            should_fallback: true,
        },
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
