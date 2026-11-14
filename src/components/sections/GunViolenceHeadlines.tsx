import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { headlines } from "@/content/shared";

export default function GunViolenceHeadlines() {
  return (
    <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why it matters"
          title="Headlines on gun violence"
          lead="Every one of these stories is a reminder that seconds count. Early detection and fast, verified alerts change outcomes."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {headlines.map((h) => (
            <a
              key={h.href}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-white/10 bg-navy-900 p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_44px_-14px_rgb(45_212_255/0.55)]"
            >
              <span className="badge badge-outline badge-primary self-start text-sm font-semibold uppercase tracking-wider">
                {h.outlet}
              </span>
              <h3 className="mt-4 flex-1 text-base font-semibold leading-snug text-white group-hover:text-accent">
                {h.title}
              </h3>
              <span className="mt-5 text-base font-semibold text-accent">
                Read article ↗
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
