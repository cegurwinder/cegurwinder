import { Briefcase, CalendarDays, MapPin, TrendingUp } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const ROLES = [
  {
    title: "Senior IT Support Engineer",
    company: "Intuited Ltd — On-site at GSK plc",
    period: "May 2023 – Present",
    location: "London, UK",
    current: true,
    summary:
      "Senior EUC specialist providing on-site field and deskside support within GSK's London campus and a highly regulated pharmaceutical environment supporting 8,000+ users.",
    responsibilities: [
      "First- and second-line EUC support",
      "VIP and C-suite support",
      "ServiceNow incident and request management",
      "95%+ SLA compliance",
      "Microsoft Intune / Endpoint Manager",
      "Intune Autopilot",
      "Active Directory",
      "Microsoft Entra ID",
      "Microsoft 365",
      "Windows 10/11",
      "Nexthink endpoint analytics",
      "LAN / Wi-Fi / VPN troubleshooting",
      "DNS / DHCP / TCP/IP",
      "SCCM / MDT",
      "Endpoint security",
      "BitLocker",
      "Patch management",
      "Onboarding and offboarding",
      "IT asset management",
      "PowerShell automation",
      "Technical documentation",
      "Cross-functional escalation management",
    ],
    impact: [
      "8,000+ users supported",
      "300+ devices managed through Autopilot",
      "95%+ SLA compliance",
      "85%+ first-time-fix",
      "40% faster deployment",
    ],
  },
  {
    title: "Desktop Support Engineer",
    company: "Steg Infotech",
    period: "June 2017 – August 2020",
    location: "Chandigarh, India",
    current: false,
    summary:
      "Provided comprehensive desktop and IT support across a multi-client managed services environment supporting 500+ end users across finance, manufacturing and professional services.",
    responsibilities: [
      "First- and second-line desktop support",
      "Windows 7/8/10 support",
      "Active Directory administration",
      "Group Policy",
      "Microsoft Office / Microsoft 365",
      "Exchange and Outlook troubleshooting",
      "SCCM / MDT deployment",
      "Network troubleshooting",
      "LAN / Wi-Fi / VPN",
      "TCP/IP",
      "Antivirus and endpoint protection",
      "ServiceNow / Remedy",
      "Hardware troubleshooting",
      "Printer and scanner support",
      "Technical documentation",
      "End-user training",
      "Infrastructure projects",
    ],
    impact: ["500+ Users Supported"],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="Six years of enterprise support engineering across the UK and India."
        />

        <ol className="relative mt-14 space-y-8 sm:pl-10">
          <span
            aria-hidden="true"
            className="accent-bar absolute top-2 bottom-2 left-[3px] hidden w-px opacity-50 sm:block"
          />
          {ROLES.map((role, i) => (
            <Reveal
              as="li"
              key={role.company}
              delay={i * 90}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute top-8 -left-[calc(2.5rem-1px)] hidden size-2.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_0_5px_color-mix(in_oklab,var(--cyan)_18%,transparent)] sm:block"
              />
              <article className="glass-panel card-hover rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-primary">
                      <Briefcase aria-hidden="true" className="size-4" />
                      {role.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs text-muted-foreground sm:items-end">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays aria-hidden="true" className="size-3.5" />
                      {role.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin aria-hidden="true" className="size-3.5" />
                      {role.location}
                    </span>
                    {role.current ? (
                      <span className="rounded-full border border-border bg-secondary/70 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wider text-cyan uppercase">
                        Current Role
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>

                <h4 className="mt-6 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Responsibilities
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {role.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface/70 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-border bg-surface-elevated/50 p-5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <TrendingUp aria-hidden="true" className="size-4 text-cyan" />
                    Key Impact
                  </h4>
                  <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {role.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
