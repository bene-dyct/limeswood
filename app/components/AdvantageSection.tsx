import SectionLabel from "@/app/components/SectionLabel";

const advantages = [
  {
    title: "Industry-Compliant Standards",
    desc: "All systems engineered to relevant international standards including IEC, ISA, API, and NFPA frameworks.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Scalable & Modular Design",
    desc: "Architectures engineered for growth — systems that scale seamlessly as operational demands evolve.",
    icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
  },
  {
    title: "Seamless Infrastructure Integration",
    desc: "New systems integrate cleanly with existing infrastructure, minimizing disruption and protecting prior investment.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Reduced Operational Downtime",
    desc: "Robust redundancy design, predictive maintenance strategies, and rapid-response support minimize costly downtime.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Enhanced Asset Lifecycle Management",
    desc: "Data-driven visibility into asset performance extends equipment life and improves maintenance planning.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Dedicated Post-Implementation Support",
    desc: "Ongoing technical support, system health monitoring, and continuous performance optimization after go-live.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
  },
];

export default function AdvantageSection() {
  return (
    <section className="relative z-10 px-[6vw] py-[90px] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-center">
      {/* Left */}
      <div>
        <SectionLabel>The Limeswood Advantage</SectionLabel>
        <h2 className="font-display font-bold text-[clamp(32px,4vw,52px)] leading-[1.1] text-[#357c8f] mb-5">
          Built for Long-Term Industrial Success
        </h2>
        <p className="font-body text-[13.5px] text-[#3a5c6a] leading-[1.8]">
          Every engagement is backed by our commitment to precision delivery,
          risk mitigation, and sustained system performance — from first
          engineering to ongoing operations support.
        </p>
      </div>

      {/* Right grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#229bb3]/10">
        {advantages.map((adv, i) => (
          <div
            key={i}
            className="group bg-[#f0f4f8] p-8 transition-colors duration-300 hover:bg-[#e4edf3]"
          >
            <svg
              className="w-9 h-9 text-[#229bb3] mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={adv.icon} />
            </svg>
            <div className="font-display font-bold text-[16px] lg:text-[18px] text-[#357c8f] mb-2">
              {adv.title}
            </div>
            <div className="font-body text-[13.5px] text-[#3a5c6a] leading-[1.7]">
              {adv.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
