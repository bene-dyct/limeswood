"use client";

import Image from "next/image";
import Heromarquee from "../components/Heromarquee";

export default function Partners() {
  return (
    <section className="p-5 md:p-10">
      <div className="w-full lg:px-10">
        <div className="flex items-center gap-1 mb-2">
          {/* Blue Wing Logo */}
          <Image
            src="/small-logo.png"
            alt="Company logo"
            width={30}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[#229bb3] mb-2">
          Our
          <span className="text-[#3a5c6a]"> Partners</span>
        </h1>
        <section className="mt-7 lg:mt-10">
          <Heromarquee />
        </section>
      </div>
    </section>
  );
}
