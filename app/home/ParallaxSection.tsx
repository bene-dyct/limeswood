"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxSectionProps {
  image: string;
  title: string;
  description: string;
}

export default function ParallaxSection({
  image,
  title,
  description,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move background slower than scroll (parallax depth)
  const y = useTransform(scrollYProgress, [0, 1], ["-35%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);


  return (
    <section
      ref={ref}
      className="relative h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={image}
          alt="Parallax Background"
          fill
          priority
          className="object-cover object-[center_10%] md:object-[center_30%]"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Text Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-semibold">
          {title}
        </h2>

        <p className="mt-6 text-lg text-gray-200 leading-relaxed text-center">
          {description}
        </p>
      </div>
    </section>
  );
}