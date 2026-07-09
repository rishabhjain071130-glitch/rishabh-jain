import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProofBar } from "@/components/proof/ProofBar";
import { About } from "@/components/about/About";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { CertificatesSection } from "@/components/proof/CertificatesSection";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import dynamic from "next/dynamic";

const CommandPalette = dynamic(() => import("@/components/ui/CommandPalette").then((mod) => mod.CommandPalette));

const Terminal = dynamic(() => import("@/components/ui/Terminal").then((mod) => mod.Terminal), {
  loading: () => (
    <div className="w-full bg-[#05070a] border border-border-subtle rounded-md h-80 flex flex-col items-center justify-center font-mono text-xs text-text-muted select-none text-left">
      <div className="animate-pulse">Loading Terminal Console...</div>
    </div>
  ),
});

const AskRishabhAI = dynamic(() => import("@/components/ai/AskRishabhAI").then((mod) => mod.AskRishabhAI), {
  loading: () => (
    <div className="bg-card border border-border-subtle rounded-md h-[400px] flex flex-col items-center justify-center font-mono text-xs text-text-muted select-none text-left">
      <div className="animate-pulse">Initializing Offline AI Agent...</div>
    </div>
  ),
});

const ContactForm = dynamic(() => import("@/components/contact/ContactForm").then((mod) => mod.ContactForm), {
  loading: () => (
    <div className="bg-card/25 border border-border-subtle/60 rounded-lg p-6 md:p-8 h-[500px] flex items-center justify-center text-xs text-text-muted font-mono select-none text-left">
      <div className="animate-pulse">Loading Dispatch Console...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      {/* Structured Schema Data for SEO */}
      <JsonLd />

      {/* Global Command Palette */}
      <CommandPalette />

      {/* Sticky Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Area */}
        <Hero />

        {/* Verification Stats */}
        <ProofBar />

        {/* Philosophy & Values */}
        <ScrollReveal yOffset={24}>
          <Section
            id="about"
            eyebrow="Introduction"
            title="Who is Rishabh?"
            description="A student builder pursuing secure implementations and intelligent workflow models."
          >
            <About />
          </Section>
        </ScrollReveal>

        {/* Learning Chronology */}
        <ScrollReveal yOffset={24}>
          <Section
            id="journey"
            eyebrow="Timeline"
            title="Educational Journey"
            description="The evolution of technical skills and real-world internship completions."
          >
            <JourneyTimeline />
          </Section>
        </ScrollReveal>

        {/* Featured Case Studies */}
        <ScrollReveal yOffset={24}>
          <Section
            id="projects"
            eyebrow="Case Studies"
            title="Featured Engineering"
            description="Detailed breakdown of practical software applications engineered to solve problems."
          >
            <ProjectsGrid />
          </Section>
        </ScrollReveal>

        {/* Technical Competency Matrix */}
        <ScrollReveal yOffset={24}>
          <Section
            id="skills"
            eyebrow="Matrix"
            title="Professional Skills"
            description="A filterable index of programming languages, tools, and technical domain depth."
          >
            <SkillsGrid />
          </Section>
        </ScrollReveal>

        {/* Credentials / Trust Certifications: Placed between Skills and Contact */}
        <ScrollReveal yOffset={24}>
          <Section
            id="certificates"
            eyebrow="Credentials"
            title="Trust & Verification"
            description="Professional internship completions and active technical credentials."
          >
            <CertificatesSection />
          </Section>
        </ScrollReveal>

        {/* Interactive CLI Console & Mentoring AI */}
        <ScrollReveal yOffset={24}>
          <Section
            id="terminal"
            eyebrow="Interactive"
            title="Developer Consoles"
            description="Interact with the system command CLI or request info from the local AI Mentor agent."
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <Terminal />
              <AskRishabhAI />
            </div>
          </Section>
        </ScrollReveal>

        {/* Dispatch Secure Message Box */}
        <ScrollReveal yOffset={24}>
          <Section
            id="contact"
            eyebrow="Connection"
            title="Dispatch Message"
            description="Send a secure query or internship offer. Form submission is rate-limited and audit-guarded."
          >
            <ContactForm />
          </Section>
        </ScrollReveal>
      </main>

      {/* Footer bar */}
      <Footer />
    </>
  );
}
