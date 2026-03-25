import SectionLabel from "@/app/components/SectionLabel";

const pillars = [
  {
    label: "Advanced Control Strategies",
    sub: "PLC, DCS, SIS integration",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Real-Time Data Acquisition",
    sub: "Live monitoring & analytics",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Safety-First Engineering",
    sub: "SIL-rated, HAZOP-compliant",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Performance Optimization",
    sub: "OEE & throughput improvement",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function IntroSection() {
  return (
    <section className="relative z-10 px-[6vw] py-[90px] grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 border-b border-[#229bb3]/10">
      {/* Left */}
      <div>
        <SectionLabel>Why Limeswood</SectionLabel>
        <h2 className="font-display font-bold text-[clamp(32px,4vw,50px)] leading-[1.1] text-[#357c8f]">
          Why Choose Us
          <br />
          for Automation?
        </h2>
      </div>

      {/* Right */}
      <div>
        <p className="font-body text-[#3a5c6a] leading-[1.8] mb-4">
          At Limeswood International, we combine advanced control strategies,
          real-time data acquisition, and integrated monitoring frameworks to
          deliver automation systems that are efficient, resilient, and
          future-ready.
        </p>
        <p className="font-body text-[#3a5c6a] leading-[1.8] mb-8">
          Our solutions are built on robust control architectures, scalable
          system designs, and industry-compliant engineering practices —
          tailored for the world&apos;s most demanding industrial environments.
        </p>

        {/* Pillars grid */}
        <div className="grid grid-cols-2 gap-px bg-[#229bb3]/10 border border-[#229bb3]/10">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white flex items-start gap-3.5 p-5">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#229bb3]/10 text-[#229bb3]">
                {p.icon}
              </div>
              <div>
                <div className="font-body text-[13px] font-medium text-[#357c8f]">
                  {p.label}
                </div>
                <div className="font-body text-[12px] text-[#3a5c6a]/70 mt-0.5">
                  {p.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
