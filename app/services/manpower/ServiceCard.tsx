import type { Manpower } from "../../components/servicesData";

function ServiceIcon({ d }: { d: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

export function ServiceCard({ manpower }: { manpower: Manpower }) {
  if (manpower.wide) {
    return (
      <div className="service-card-border group col-span-1 md:col-span-2 lg:col-span-3 relative bg-[#f0f4f8] p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-10 transition-colors duration-300 hover:bg-[#e4edf3] overflow-hidden">
        {/* Card content */}
        <div className="lg:col-span-1 max-md:-mt-5">
          <div className="font-display text-[11px] tracking-[0.2em] text-[#229bb3]/60 mb-5">
            {manpower.num}
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-[#229bb3]/30 text-[#229bb3] mb-6 transition-all duration-300 group-hover:bg-[#229bb3]/10 group-hover:border-[#229bb3]">
            <ServiceIcon d={manpower.icon} />
          </div>
          <h3 className="font-display font-bold text-[16px] lg:text-[18px] leading-tight tracking-wide text-[#357c8f] mb-3.5">
            {manpower.title}
          </h3>
          <p className="font-body text-sm md:text-[13.5px] text-[#3a5c6a] leading-[1.75]">
            {manpower.desc}
          </p>
        </div>

        {/* Feature chips */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
          {manpower.wideFeatures?.map((f, i) => (
            <div
              key={i}
              className="px-5 py-4 bg-white border border-[#229bb3]/15 border-l-2 border-l-[#229bb3]"
            >
              <strong className="block font-body font-semibold text-[15px] lg:text-[17px] text-[#357c8f] mb-1">
                {f.title}
              </strong>
              <span className="font-body text-sm md:text-[13.5px] text-[#3a5c6a]">
                {f.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="service-card-border group relative bg-[#f0f4f8] p-9 transition-colors duration-300 hover:bg-[#e4edf3] overflow-hidden max-md:-mt-5">
      <div className="font-display text-[11px] tracking-[0.2em] text-[#229bb3]/60 mb-5">
        {manpower.num}
      </div>

      <div className="w-12 h-12 flex items-center justify-center border border-[#229bb3]/30 text-[#229bb3] mb-6 transition-all duration-300 group-hover:bg-[#229bb3]/10 group-hover:border-[#229bb3]">
        <ServiceIcon d={manpower.icon} />
      </div>

      <h3 className="font-display font-bold text-[16px] lg:text-[18px] leading-tight tracking-wide text-[#357c8f] mb-3.5">
        {manpower.title}
      </h3>

      <p className="font-body text-sm md:text-[13.5px] text-[#3a5c6a] leading-[1.75] mb-6">
        {manpower.desc}
      </p>

      <ul className="flex flex-col gap-2">
        {manpower.bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 font-body text-sm md:text-[13.5px] text-[#3a5c6a]"
          >
            <span className="font-display text-[#229bb3] shrink-0 mt-[1px]">
              -
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
