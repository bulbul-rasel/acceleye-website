import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { workflow } from "@/content/weaponDetector";

export default function Workflow() {
  return (
    <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Response"
          title="Maximize every second"
          lead="From the first frame or sound to a verified response, the path is short and nothing is left to chance."
        />

        {/* daisyUI steps */}
        <ul className="steps steps-vertical mt-14 w-full lg:steps-horizontal">
          {workflow.map((w, i) => (
            <li key={w.title} data-content={i + 1} className="step step-primary">
              <span className="px-2 text-base font-semibold text-white">
                {w.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-white/10 bg-navy-900 p-6 text-base leading-relaxed text-foreground/80"
            >
              {w.body}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
