"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/src/components/ui/resizable-navbar";
import HeroVideoDialog from "@/src/components/magicui/hero-video-dialog";

import { useState } from "react";
import Link from "next/link";

export function Hero() {
    const navItems = [
        {
            name: "A propos",
            link: "#about",
        },
        {
            name: "A venir",
            link: "#coming",
        },
        {
            name: "Comment participer ?",
            link: "#process",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton href="#contact" variant="secondary">
                            Contact
                        </NavbarButton>
                        <NavbarButton href="/inscription" variant="primary">
                            Participer
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                href="#contact"
                                variant="primary"
                                className="w-full"
                            >
                                Contact
                            </NavbarButton>
                            <NavbarButton
                                href="/inscription"
                                variant="primary"
                                className="w-full"
                            >
                                Participer
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            <DummyContent />

            {/* Navbar */}
        </div>
    );
}

const DummyContent = () => {
    return (
        <div className="container mx-auto p-8 pt-24">
            <div className="lg:w-3/5 mx-auto">
                <h1 className="mb-4 text-center text-2xl md:text-4xl lg:text-6xl text-primary font-rakiby">
                    TIBUCE AFRICA : L&apos;AVENIR DU BUSINESS SE JOUE ICI
                </h1>
                <p className="mb-10 text-center text-sm">
                    Participez au tournoi de business qui prépare la nouvelle
                    génération d&apos;entrepreneurs africains à façonner
                    l&apos;avenir du continent.
                </p>
            </div>
            <div className="relative">
                <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="top-in-bottom-out"
                    videoSrc="/Tibuce.mp4"
                    thumbnailSrc="/tibuce-thumbnail.png"
                    thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                    className="hidden dark:block"
                    animationStyle="top-in-bottom-out"
                    videoSrc="/Tibuce.mp4"
                    thumbnailSrc="/tibuce-thumbnail.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    );
};
