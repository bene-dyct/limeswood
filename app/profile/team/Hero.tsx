"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const startOffset = 80;

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const handleMouseEnter = () => {
      const distance = section.offsetWidth - image.offsetWidth;

      controls.start({
        x: distance,
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    };

    const handleMouseLeave = () => {
      controls.start({
        x: startOffset,
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    };

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[40svh] overflow-hidden mt-30"
    >
      <Image
        src="/back1.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        ref={imageRef}
        initial={{ x: startOffset }}
        animate={controls}
        className="absolute top-0 left-0 h-full w-1/3 md:w-[14vw]"
      >
        <Image
          src="/Colors.png"
          alt="Overlay"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-20 flex items-center justify-center text-white pointer-events-none">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet{" "} <br className="max-md:hidden"/>
            <em className="font-serif font-normal italic text-[#f0f4f8]">
              Our Team
            </em>
          </h2>
          <p className="mt-4 text-base md:text-lg">
            Limeswood International is supported by a multidisciplinary team of engineers, technical specialists, and project professionals with extensive industry experience.
          </p>
        </div>
      </div>
    </section>
  );
}