"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { resources } from "../components/data"; // adjust path if needed

export default function Corevalues() {
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
          Core
          <span className="text-[#3a5c6a]"> Values</span>
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
          className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resources.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#f0f4f8] p-6 max-md:p-4 rounded-lg shadow-md gap-4"
            >
              <Image
                src={slide.icon}
                alt={slide.title}
                width={30}
                height={30}
                className="object-contain"
              />

              <h2 className="text-xl max-md:text-base font-semibold text-gray-600">
                {slide.title}
              </h2>

              <p className="max-md:text-sm leading-relaxed text-gray-600">
                {slide.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
