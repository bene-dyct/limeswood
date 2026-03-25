"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesinfo } from "../components/data";
import { motion } from "framer-motion";

export default function Serviceinfo() {
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
        <h1 className="text-sm font-medium text-[#229bb3] mb-6">
          Achieve more in less time
        </h1>
        <p className="lg:w-2/3 text-2xl md:text-4xl  font-bold leading-tight text-[#229bb3] mb-6">
          <span className="text-[#3a5c6a]">Our solutions </span>are incredibly
          user-friendly, helping you save valuable time and enhancing
          productivity,{" "}
          <span className="text-[#3a5c6a]">
            allowing you to focus on other essential tasks.
          </span>
        </p>

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
          {servicesinfo.map((slide, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl h-[420px]"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="
          object-cover
          scale-120
          transition-all duration-2000 ease-out
          group-hover:translate-x-10
          group-hover:blur-xs
          group-hover:brightness-75
        "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-700" />

              {/* Ribbon */}
              <div className="absolute top-0 right-0 z-20">
                <div className="relative">
                  <div className="absolute right-[-45px] top-[25px] rotate-45 bg-[#8de6a0] text-black text-xs font-semibold tracking-widest px-16 py-2 shadow-md">
                    SERVICE
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col px-10 text-white">
                <div className="transition-transform duration-500 group-hover:scale-105 absolute bottom-10 left-0 px-5">
                  <h2 className="md:text-lg font-semibold leading-tight">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-gray-200 max-w-xl max-sm:text-sm">
                    {slide.description}
                  </p>

                  <Link
                    href="/services"
                    className="
              inline-block mt-6
              bg-cyan-600 hover:bg-cyan-700
              text-white font-medium
              px-6 py-2 rounded-md
              transition-all duration-300
            "
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
