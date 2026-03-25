"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whychooseus } from "../components/data";

export default function Whychooseus() {
  return (
    <section className="p-5 md:p-10">
      <div className="lg:px-10">
        {/* Heading */}
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
        <h1 className="text-2xl md:text-4xl  font-bold leading-tight text-[#229bb3] mb-6">
          Why Choose
          <span className="text-[#3a5c6a]"> Us</span>
        </h1>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
            damping: 20,
          }}
        >
          {whychooseus.map((slide, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-3 rounded-lg p-6 max-md:p-4 gap-6 mt-10 text-[#3a5c6a]">
                <div>
                  <span className="rounded-full p-4 bg-[#f0f4f8] font-extrabold text-lg ">
                    {slide.number}
                  </span>
                </div>
                <div className="md:text-2xl font-extrabold">{slide.title}</div>
                <div className="md:text-lg">{slide.description}</div>
              </div>
              <div className={slide.style}></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
