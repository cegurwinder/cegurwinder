import { Reveal, SectionHeading } from "./primitives";

const MILESTONES = [
  { year: "2012", label: "BCA — Computer Applications" },
  { year: "2015", label: "MSc Computer Science" },
  { year: "2017", label: "Started Desktop Support Engineering career" },
  { year: "2020", label: "MBA — Leeds Beckett University" },
  { year: "2023", label: "Senior IT Support Engineer — Intuited Ltd / GSK" },
  { year: "Present", label: "Enterprise EUC & Senior IT Support" },
];

export function CareerTimeline() {
  return (
    <section id="timeline" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Journey" title="Career Timeline" />

        <ol className="relative mt-14 grid gap-5 md:grid-cols-3">
          {MILESTONES.map((item, i) => (
            <Reveal
              as="li"
              key={item.year}
              delay={i * 60}
              className="card-hover relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6"
            >
              <span aria-hidden="true" className="accent-bar absolute inset-y-0 left-0 w-px" />
              <p className="text-2xl font-semibold text-gradient">{item.year}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
