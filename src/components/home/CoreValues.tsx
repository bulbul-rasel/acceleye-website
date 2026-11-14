import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { coreValues } from "@/content/home";

export default function CoreValues() {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Our culture" title="Five core values shape our culture" />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((v, i) => (
            <li key={v} className="rounded-2xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-7 text-center">
              <span className="text-4xl font-extrabold text-accent">{i + 1}</span>
              <p className="mt-4 text-xl font-bold text-white">{v}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
