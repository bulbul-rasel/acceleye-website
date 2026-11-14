import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import ProcessSteps from "@/components/blocks/ProcessSteps";
import Button from "@/components/ui/Button";
import OurPartners from "@/components/sections/OurPartners";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { partnerPage } from "@/content/company";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "AccelEye integrates with top technology providers so AI weapon detection works with your existing security infrastructure. Apply to become a partner.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="Seamless integration with your current"
        highlight="security infrastructure"
        lead="AccelEye integrates with top technology providers to offer comprehensive AI-powered threat detection that seamlessly works with your existing systems."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Become a partner", href: "/partners/register" }}
      />

      <FeatureGrid
        eyebrow="Built for integration"
        title="AccelEye partnerships deliver greater value through seamless integration and joint innovation"
        items={partnerPage.benefits}
      />

      <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our ecosystem"
            title="Technology we integrate with"
            lead="A selection of the platforms named across our integrations, news and blog."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerPage.named.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-white/10 bg-navy-900 p-7 transition hover:-translate-y-1 hover:border-accent/50"
              >
                <p className="text-3xl font-extrabold tracking-tight text-white">{p.name}</p>
                <p className="mt-2 text-lg text-accent">{p.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps
        tinted={false}
        eyebrow="How integration works"
        title="Our streamlined process simplifies integrating AccelEye with your existing technology stack"
        steps={partnerPage.integration}
      />

      <ProcessSteps
        eyebrow="How to join"
        title="Step 1: Submit application. Step 2: Meet & collaborate."
        steps={partnerPage.join}
        footnote="Applicants can expect a response within six weeks."
      />
      <section className="pb-24 text-center">
        <Button href="/partners/register" arrow className="px-8 py-4 text-lg">
          Open the partner application
        </Button>
      </section>

      <OurPartners />
      <CtaBand
        title="Let’s build something safer."
        lead="Questions about a partnership or integration? Call or email us."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
      <ContactSection title="Talk to our partner team" />
    </>
  );
}
