import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { hasImage } from "@/lib/imageFiles";
import SiteImage from "@/components/ui/SiteImage";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import SplitFeature from "@/components/blocks/SplitFeature";
import OurPartners from "@/components/sections/OurPartners";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { about } from "@/content/company";

export const metadata: Metadata = {
  title: "About us",
  description:
    "AccelEye is a social enterprise run by technologist parents from Intel, AMD, NVIDIA and Microsoft, on a mission to reverse mass shootings and suicides in the U.S.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Technologists and parents building"
        highlight="safer communities"
        lead="AI-assisted weapon and violence detection with 24/7 human monitoring and verification, built so every child can learn and grow without fear."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "See our solutions", href: "/services/ai-weapon-detector" }}
        stats={[
          { value: "25+", label: "Years of collaboration" },
          { value: "~20", label: "Years of the trend we aim to reverse" },
          { value: "24/7", label: "Human monitoring" },
        ]}
      />

      <SplitFeature
        eyebrow="Who we are"
        title="Technologist parents giving back"
        lead={about.story}
        badges={about.backgrounds.map((b) => `Formerly ${b}`)}
        cta={{ label: "Meet our partners", href: "/partners" }}
        visual={hasImage("mission") ? <SiteImage name="mission" aspect="aspect-[6/5]" glow /> : undefined}
      />

      <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-32">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Our mission</p>
            <p className="mt-5 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              {about.mission}
            </p>
          </article>
          <article className="rounded-3xl border border-accent/30 bg-gradient-to-br from-navy-700 to-navy-900 p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Our vision</p>
            <p className="mt-5 text-3xl font-extrabold leading-snug text-white sm:text-4xl">
              {about.vision}
            </p>
          </article>
        </Container>
      </section>

      <FeatureGrid
        image="aboutCommitments"
        eyebrow="Our commitments"
        title="Our commitments"
        columns={4}
        items={about.commitments}
      />

      <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Our core values" title="Values that shape our innovations, products and relationships" />
          <SiteImage
            name="coreValues"
            aspect="aspect-[21/9]"
            className="mx-auto mt-14 max-w-5xl"
            sizes="(min-width: 1024px) 64rem, 95vw"
            glow
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {about.values.map((v, i) => (
              <article
                key={v.title}
                className="rounded-3xl border border-white/10 bg-navy-900 p-7 transition hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="font-mono text-sm font-bold text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white">{v.title}</h3>
                <p className="mt-1 text-base font-semibold text-accent">{v.sub}</p>
                <p className="mt-3 text-lg leading-relaxed text-foreground/80">{v.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Call us to discuss your security requirements"
        lead="Call to talk through your security requirements, or email for a free estimate. We usually reply within 48 hours."
        primaryLabel="Let us show you a demo"
      />
      <OurPartners />
      <ContactSection />
    </>
  );
}
