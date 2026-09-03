import {
  Activity,
  BookOpenCheck,
  Crown,
  KeyRound,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const PROJECTS = [
  {
    Icon: Rocket,
    title: "Windows 11 Migration & Autopilot Rollout",
    tag: "300+ Devices",
    text: "Planned and delivered zero-touch device provisioning with Microsoft Intune Autopilot, replacing manual imaging with policy-driven enrolment, driver packs and app assignments across multiple London sites.",
    metricLabel: "Impact",
    metric: "40% faster build & deployment, near-zero re-image tickets",
  },
  {
    Icon: Activity,
    title: "Proactive Endpoint Health with Nexthink",
    tag: "Endpoint Analytics",
    text: "Built dashboards and alerting around device health, boot performance, crash patterns and software conflicts, so degradations were remediated before users raised incidents.",
    metricLabel: "Impact",
    metric: "85%+ first-time-fix rate, fewer P2/P3 escalations",
  },
  {
    Icon: ShieldCheck,
    title: "Endpoint Security & Patch Compliance",
    tag: "BitLocker • EDR • Patching",
    text: "Drove BitLocker encryption coverage, EDR agent health and monthly patch compliance across the managed estate, chasing exceptions and remediating vulnerable builds.",
    metricLabel: "Impact",
    metric: "Sustained 95%+ patch & encryption compliance",
  },
  {
    Icon: KeyRound,
    title: "Identity & Access Standardisation",
    tag: "Entra ID • Active Directory",
    text: "Streamlined joiner/mover/leaver handling with group-based access, MFA enrolment support and cleanup of stale accounts and permissions in Active Directory and Entra ID.",
    metricLabel: "Impact",
    metric: "Faster onboarding, tighter least-privilege access",
  },
  {
    Icon: BookOpenCheck,
    title: "Knowledge Base & SOP Programme",
    tag: "30+ Technical Articles",
    text: "Authored and maintained SOPs, troubleshooting runbooks and self-service guides, then coached 1st-line colleagues to resolve at first contact.",
    metricLabel: "Impact",
    metric: "25% reduction in repeat incidents",
  },
  {
    Icon: Crown,
    title: "VIP & Executive IT Support",
    tag: "Enterprise Environment",
    text: "Delivered discreet white-glove support for senior stakeholders and C-suite users, covering travel readiness, conferencing, mobile devices and priority incident handling.",
    metricLabel: "Focus",
    metric: "Reliability • Security • Speed • Experience",
  },
];


export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-24">
      <div aria-hidden="true" className="hero-aura absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiatives"
          title="Selected IT Projects & Initiatives"
          description="Real workplace initiatives that improved endpoint operations and support performance."
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-2">
          {PROJECTS.map(({ Icon, title, tag, text, metric, metricLabel }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 70}
              className="glass-panel card-hover flex h-full flex-col rounded-2xl p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface-elevated/70">
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                </span>
                <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-cyan">
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
              <div className="mt-6 rounded-xl border border-border bg-surface/60 p-4">
                <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {metricLabel}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-foreground">{metric}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
