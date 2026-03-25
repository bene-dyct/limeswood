import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="p-5 md:p-10 mt-10">
      <div className="max-sm:flex-col w-full mx-auto lg:px-10 flex gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="sm:w-1/2">
          {/* ISO + Company Mini Logos */}
          <div className="flex items-center gap-1 mb-2">
            {/* Blue Wing Logo */}
            <Image
              src="/small-logo.png"
              alt="Company logo"
              width={30}
              height={40}
              className="object-contain"
            />

            {/* ISO Badge */}
            <Image
              src="/iso.png"
              alt="ISO 9001 certification badge"
              width={30}
              height={40}
              className="object-contain"
            />

            <p className="text-sm text-gray-600 font-medium">
              ISO Certified 9001
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#3a5c6a] mb-6">
            <span className="text-[#229bb3]">Limeswood</span> International{" "}
            <br />
            Company Ltd
          </h1>

          {/* Description */}
          <p className="text-gray-600 md:text-lg mb-6 leading-relaxed text-justify">
            No matter your business phase, Limeswood equips you with tools to
            excel, evolve, and conquer. Reach out today for tailored solutions
            and unparalleled support.
          </p>

          <p className="text-gray-600 md:text-lg mb-5 leading-relaxed text-justify">
            Limeswood International Company Ltd, situated in Nigeria, stands as
            a respected entity specializing in Mechanical, Electrical, and
            Instrumentation services. We serve oil & gas, power, energy,
            petrochemicals, and manufacturing industries.
          </p>

          {/* Learn More */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
          >
            Learn more
            <span>↗</span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full sm:w-1/2 h-[300px] sm:h-[500px] rounded-xl overflow-hidden shadow-lg relative">
          <Image
            src="/limeswoodbusiness.jpg"
            alt="Industrial plant"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
