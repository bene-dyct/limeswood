"use client";
import SectionLabel from "../components/SectionLabel";
import { motion } from "framer-motion";

const services = [
  "Oil & Gas",
  "Power Generation",
  "Manufacturing",
  "Petrochemical",
  "Process Industries",
  "Industrial Facilities",
];

const WHY_ITEMS = [
  {
    title: "Free & No-Obligation",
    desc: "Your quote request costs nothing and commits you to nothing.",
  },
  {
    title: "Response Within 24 Hours",
    desc: "A senior engineer reviews every enquiry personally.",
  },
  {
    title: "Tailored to Your Project",
    desc: "We scope each solution to your specific operational context.",
  },
  {
    title: "End-to-End Capability",
    desc: "From feasibility through commissioning and ongoing support.",
  },
];

export default function Whylimeswood() {
  return (
    <section className="p-5 md:p-10 bg-[#f0f4f8]">
      <div className="flex flex-col md:flex-row p-7 lg:px-10 w-full">
        <div className="w-full md:w-1/2">
          <SectionLabel>Why Limeswood</SectionLabel>
          <h3 className="font-display font-bold text-[20px] text-[#357c8f] mb-5">
            What to Expect When You Reach Out
          </h3>
          <ul className="flex flex-col gap-4">
            {WHY_ITEMS.map((w) => (
              <li key={w.title} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-[#229bb3]/15 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#229bb3]" />
                </span>
                <div>
                  <p className="font-body font-semibold  text-[#357c8f]">
                    {w.title}
                  </p>
                  <p className="font-body  text-[#436574] leading-relaxed mt-0.5">
                    {w.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full md:w-1/2 bg-gradient-to-br from-[#229bb3] to-[#357c8f] rounded-xl p-4 min-h-[350px] overflow-hidden">
          <p className="uppercase text-white mb-3">Industries We Serve</p>
          {services.map((services, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 -translate-x-1/2 px-2 xl:px-16 py-2 rounded-full bg-white text-[#229bb3] text-sm md:text-[15px] shadow-md"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: [0, 280], opacity: [0, 1, 1] }}
              transition={{
                delay: index * 1.3, // staggered falling effect
                duration: 9,
                repeat: Infinity,
                repeatDelay: -1.3,
              }}
            >
              {services}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Certifications note */}
      <div className="bg-[#f0f4f8] rounded-xl p-6 border border-[#229bb3]/10 text-center">
        <p className="font-display font-bold text-[15px] text-[#357c8f] mb-1.5">
          Engineering You Can Trust
        </p>
        <p className="font-body  text-[#436574] leading-relaxed">
          Our solutions comply with IEC, ISA, API, NFPA, and relevant
          international standards. Every project is backed by qualified
          engineers with hands-on industrial experience.
        </p>
      </div>
    </section>
  );
}
