import SectionLabel from "@/app/components/SectionLabel";
import { ServiceCard } from "./ServiceCard";
import { instrumentation } from "../../components/servicesData";

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 md:px-[6vw] py-[90px]">
      {/* Header */}
      <div className="flex items-end justify-between mb-16">
        <div className="max-md:px-[6vw]">
          <SectionLabel>What We Deliver</SectionLabel>
          <h2 className="font-display font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-[#357c8f]">
            Our Instrumentation Services
          </h2>
        </div>
        <span className="hidden lg:block font-display font-black text-[100px] leading-none text-gold/[0.08] select-none">
          07
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#229bb3]/10">
        {instrumentation.map((instrumentation, i) => (
          <ServiceCard key={i} instrumentation={instrumentation} />
        ))}
      </div>
    </section>
  );
}
