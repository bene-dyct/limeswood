import Link from "next/link";
import Image from "next/image";

export default function CTABanner() {
  return (
    <div className="relative z-10 mx-[6vw] mb-20 bg-gradient-to-r from-[#229bb3] to-[#357c8f] border border-[#229bb3]/30 px-10 md:px-16 py-16 flex flex-col lg:flex-row items-start md:items-center justify-between gap-10 overflow-hidden">
      {/* decorative circle */}
      <Image
                    src="/small-logo.png"
                    alt="Limeswood International"
                    width={150}
                    height={150}
                    priority
                    className="absolute right-0 top-15 w-[200px] h-[200px] object-contain"
                  />
      <div className="absolute -left-20 -top-20 w-[300px] h-[300px] border-[50px] border-white/[0.08] rounded-full pointer-events-none hidden md:block" />

      <div className="relative z-10">
        <h3 className="font-display font-bold text-[clamp(28px,3vw,42px)] leading-[1.1] text-white">
          Ready to Realize Your{" "}
          <em className="font-serif font-normal italic text-[#f0f4f8]">
            Dream Project?
          </em>
        </h3>
        <p className="font-body text-[14px] text-white/80 mt-3">
          Speak with our engineers to discuss your project
          requirements and discover how Limeswood can deliver.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
        <Link
          href="/quote"
          className="inline-flex items-center gap-2 bg-white text-[#229bb3] font-display font-bold text-[13px] tracking-[0.12em] uppercase px-4 md:px-8 py-3.5 transition-colors duration-200 hover:bg-[#f0f4f8] "
        >
          Request a Consultation
        </Link>
        <a
          href="/Limeswood_Int'l_Co.LTD_Capability_Statement.pdf"
          download
          className="inline-flex items-center gap-2 border border-white/50 text-white font-display font-bold text-[13px] tracking-[0.12em] uppercase px-4 md:px-8 py-3.5 transition-all duration-200 hover:border-white hover:bg-white/10"
        >
          Download Capabilities
        </a>
      </div>
    </div>
  );
}
