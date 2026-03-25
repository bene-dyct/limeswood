"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { items } from "../components/data";

// Helper to get visible items for current slide
function getVisibleItems(index: number, isMobile: boolean) {
  if (isMobile) {
    return [items[index % items.length]];
  } else {
    // Show two items for desktop
    return [items[index % items.length], items[(index + 1) % items.length]];
  }
}

export default function SlidingGrid() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animate slide (fade in/out)
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [index, controls]);

  const visibleItems = getVisibleItems(index, isMobile);

  return (
    <section className="w-full py-10 md:py-20">
      <div className="mx-auto">
        <div className="overflow-hidden">
          <motion.div animate={controls} className={`flex gap-6`}>
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden h-[420px] min-w-[300px] flex-1"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover scale-120 transition-all duration-2000 ease-out group-hover:translate-x-10 group-hover:blur-xs group-hover:brightness-75"
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
                      {item.title}
                    </h2>

                    <p className="mt-4 text-gray-200 max-w-xl max-sm:text-sm">
                      {item.description}
                    </p>

                    <Link
                      href="/services"
                      className="inline-block mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 py-2 rounded-md transition-all duration-300"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
