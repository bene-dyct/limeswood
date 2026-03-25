"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    <section className="relative h-[100vh] overflow-hidden">
      <div ref={ref}>
        <motion.div style={{ y }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/automationfallback.jpg"
            className="w-full h-full object-cover"
          >
            <source src="https://ik.imagekit.io/myownImagekit/limeswood/automation.webm" type="video/webm" />
            <source src="https://ik.imagekit.io/sinamage/limeswood/automation.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Animated Schematic Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[linear-gradient(to_right,#00F0FF_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse" />
        </div>

        <div className="relative h-screen w-full z-10 px-[6vw] bg-black/50  text-white">
          {/* Hero copy */}
          <div className="max-w-3xl py-24 md:py-28">
            <div className="flex items-center gap-2.5 font-display text-[10px] md:text-[12px] tracking-[0.25em] uppercase mb-6 animate-fade-up delay-100">
              <span className="block w-8 h-px bg-white" />
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
              performance — built for oil & gas, power generation,
              manufacturing, and process industries.
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
        </div>
      </div>
    </section>
  );
}
