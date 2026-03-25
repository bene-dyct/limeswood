import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const stats = [
  { number: "20+", label: "Years of Engineering Excellence" },
  { number: "6", label: "Core Automation Disciplines" },
  { number: "500+", label: "Industrial Projects Delivered" },
  { number: "99.9%", label: "System Uptime Guarantee" },
];

export default function HeroSection() {
  return (
    <header className="relative z-10 px-[6vw] bg-gradient-to-br from-[#229bb3] via-[#357c8f] to-[#436574] border-b border-white/20 overflow-hidden">
      {/* decorative circle */}
      <div className="absolute -top-16 -right-16 w-[520px] h-[520px] border-[80px] border-white/[0.08] rounded-full pointer-events-none" />

      <Navbar />

      {/* Hero copy */}
      <div className="max-w-3xl py-24 md:py-28">
        <div className="flex items-center gap-2.5 font-display text-[12px] tracking-[0.25em] uppercase text-[#79bfd8] mb-6 animate-fade-up delay-100">
          <span className="block w-8 h-px bg-[#79bfd8]" />
          Automation & Control Systems
        </div>

        <h1 className="font-display font-bold text-[clamp(46px,7vw,80px)] leading-[1.0] tracking-tight text-white mb-6 animate-fade-up delay-250">
          Engineering{" "}
          <em className="font-serif font-normal italic text-[#f0f4f8]">
            Intelligent
          </em>
          <br />
          Industrial Automation
        </h1>

        <p className="font-body text-base text-[#f0f4f8]/80 leading-relaxed max-w-xl mb-9 animate-fade-up delay-400">
          We engineer robust automation systems that enhance operational
          reliability, improve safety standards, and optimize industrial
          performance — built for oil & gas, power generation, manufacturing,
          and process industries.
        </p>

        <Link
          href="#services"
          className="inline-flex items-center gap-3 bg-white text-[#229bb3] font-display font-bold text-[14px] tracking-[0.15em] uppercase px-8 py-[14px] transition-all duration-200 hover:bg-[#f0f4f8] hover:gap-5 animate-fade-up delay-550"
        >
          Explore Our Services
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/[0.15]">
        {stats.map((s, i) => (
          <div
            key={i}
            className="px-8 py-7 border-r border-white/[0.15] last:border-r-0"
          >
            <div className="font-display font-black text-[38px] leading-none text-white">
              {s.number}
            </div>
            <div className="font-body text-[11px] tracking-[0.1em] uppercase text-[#f0f4f8]/70 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
