import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectTimeline } from "@/components/sections/ProjectTimeline";
import { FleetShowcase } from "@/components/sections/FleetShowcase";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <Hero />
        <ServicesGrid />
        <AboutSection />
        <ProjectTimeline />
        <FleetShowcase />
        <ServiceArea />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
