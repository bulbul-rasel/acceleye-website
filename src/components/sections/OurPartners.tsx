import Container from "@/components/ui/Container";
import MarqueeRow from "@/components/ui/MarqueeRow";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/content/shared";

export default function OurPartners({
  title = "Our partners",
  lead,
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section id="partners" className="scroll-mt-24 border-y border-white/10 bg-navy-950 py-16">
      <Container>
        <SectionHeading eyebrow="Trusted integrations" title={title} lead={lead} />
      </Container>
      <div className="mt-10">
        <MarqueeRow speed={35}>
          {partners.map((p) => (
            <span
              key={p}
              className="mx-10 text-2xl font-semibold tracking-wide text-foreground/40 transition hover:text-white sm:mx-14"
            >
              {p}
            </span>
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}
