import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectTimeline } from "@/components/sections/ProjectTimeline";
import { FleetShowcase } from "@/components/sections/FleetShowcase";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MotionSection } from "@/components/motion/MotionSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <MotionSection delay={0.02}>
          <Hero />
        </MotionSection>
        <MotionSection delay={0.05}>
          <ServicesGrid />
        </MotionSection>
        <MotionSection direction="left" delay={0.06}>
          <AboutSection />
        </MotionSection>
        <MotionSection direction="right" delay={0.07}>
          <ProjectTimeline />
        </MotionSection>
        <MotionSection delay={0.08}>
          <FleetShowcase />
        </MotionSection>
        <MotionSection direction="left" delay={0.09}>
          <ServiceArea />
        </MotionSection>
        <MotionSection direction="up" delay={0.1}>
          <ContactCTA />
        </MotionSection>
      </main>
      <SiteFooter />
    </>
  );
}
