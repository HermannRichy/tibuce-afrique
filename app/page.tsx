import { ContactSection } from "@/src/components/sections/Contact";
import { Hero } from "@/src/components/sections/Hero";
import { Footer } from "@/src/components/sections/Footer";
import { AboutSection } from "@/src/components/sections/About";
import { ComingSoonSection } from "@/src/components/sections/ComingSoon";
import { ProcessSection } from "@/src/components/sections/Process";
import { PartnersSection } from "@/src/components/sections/Partners";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ComingSoonSection />
            <ProcessSection />
            <PartnersSection />
            <ContactSection />
            <Footer />
        </>
    );
}
