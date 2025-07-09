"use client";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6 mt-16">
            <div className="container mx-auto text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Richy. Tous droits réservés. —
                <a
                    href="https://hermann-richy.vercel.app"
                    className="text-primary hover:underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hermann Richy
                </a>
            </div>
        </footer>
    );
}
