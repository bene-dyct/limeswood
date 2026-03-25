import SectionLabel from "@/app/components/SectionLabel";

const steps = [
  {
    num: "01",
    title: "Feasibility Study",
    desc: "Technical assessment and project scoping.",
  },
  {
    num: "02",
    title: "System Architecture",
    desc: "Development of system architecture.",
  },
  {
    num: "03",
    title: "Detailed Engineering",
    desc: "Preparation of engineering documentation.",
  },
  {
    num: "04",
    title: "Fabrication & Dev",
    desc: "Manufacturing, assembly, and development.",
  },
  {
    num: "05",
    title: "Factory Acceptance",
    desc: "Structured testing procedures.",
  },
  {
    num: "06",
    title: "Site Installation",
    desc: "Professional installation and commissioning.",
  },
  {
    num: "07",
    title: "Ongoing Support",
    desc: "Continuous monitoring, optimization, and support.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative z-10 px-[3vw] xl:px-[6vw] py-[90px] bg-[#f0f4f8] border-t border-b border-[#229bb3]/10 max-sm:hidden">
      <div className="mb-16">
        <SectionLabel>Our Methodology</SectionLabel>
        <h2 className="font-display font-bold text-[clamp(32px,4vw,52px)] leading-[1.1] text-[#357c8f]">
          Structured Project Lifecycle
        </h2>
      </div>

      {/* Steps — horizontal on desktop */}
      <div className="relative process-line hidden lg:grid grid-cols-7 gap-0">
        {steps.map((s, i) => (
          <div key={i} className="px-3 text-center relative">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 font-display font-bold text-[14px] border transition-colors duration-300
                ${
                  i === 0
                    ? "bg-[#229bb3] text-white border-[#229bb3]"
                    : "bg-white border-[#229bb3]/40 hover:border-[#229bb3] hover:bg-[#229bb3]/10 text-[#229bb3]"
                }`}
            >
              {s.num}
            </div>
            <div className="font-display font-semibold text-[12px] tracking-[0.06em] uppercase text-[#357c8f] mb-2">
              {s.title}
            </div>
            <div className="font-body whitespace-break-spaces text-[11.5px] text-[#3a5c6a]  leading-[1.6]">
              {s.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Tablet / mobile grid */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-2 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div
              className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-display font-bold text-[13px] border
                ${i === 0 ? "bg-[#229bb3] text-white border-[#229bb3]" : "bg-white border-[#229bb3]/40 text-[#229bb3]"}`}
            >
              {s.num}
            </div>
            <div>
              <div className="font-display font-semibold text-[12px] uppercase tracking-wide text-[#357c8f] mb-1">
                {s.title}
              </div>
              <div className="font-body text-[12px] text-[#3a5c6a] leading-relaxed">
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
