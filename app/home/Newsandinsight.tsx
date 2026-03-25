"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { newsandinsights } from "../components/data";

export default function Newsandinsight() {
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
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[#229bb3] mb-6">
          News &<span className="text-[#3a5c6a]"> Insight</span>
        </h1>

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
          className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-6"
        >
          {newsandinsights.map((slide, index) => (
            <div key={index} className="overflow-hidden ">
              {/* Background Image */}
              <div className="rounded-xl relative w-full md:w-[280px] h-[300px] md:h-[400px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="
          rounded-xl
          object-cover
          transition-all duration-2000 ease-out
          hover:translate-x-5
          hover:blur-[0.5px]
          hover:brightness-75
        "
                />
              </div>

              <h2 className="md:text-lg font-semibold leading-tight text-gray-700 mt-4">
                {slide.title}
              </h2>

              <p className="mt-4 text-gray-600 max-w-xl max-sm:text-sm">
                {slide.description && slide.description.length > 150
                  ? slide.description.slice(0, 150) + "..."
                  : slide.description}
              </p>

              <Link
                href="/blog"
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
