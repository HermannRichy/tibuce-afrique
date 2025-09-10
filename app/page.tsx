import { ContactSection } from "@/src/components/sections/Contact";
import { Hero } from "@/src/components/sections/Hero";
import { Footer } from "@/src/components/sections/Footer";
import { AboutSection } from "@/src/components/sections/About";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ContactSection />
            <Footer />
        </>
    );
}
