"use client";

import Image from "next/image";
import { servicesinfo } from "../components/data";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import SlidingGrid from "./SlidingGrid";

export default function Aboutserviceinfo() {
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
      setIndex((prev) =>
        prev >= servicesinfo.length - (isMobile ? 1 : 2) ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Animate when index changes
  useEffect(() => {
    const slideWidth = isMobile ? 100 : 50;

    controls.start({
      x: `-${index * slideWidth}%`,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [index, isMobile, controls]);
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
          We provide solutions that transcend all areas of your business
        </h1>
        <p className="lg:w-2/3 text-2xl md:text-4xl  font-bold leading-tight text-[#229bb3] mb-6">
          <span className="text-[#3a5c6a]">Unlock Data Potential </span>
          Confidence in cable testing results is paramount. Limeswood&apos;s
          solutions streamline data management and predictive analysis,{" "}
          <span className="text-[#3a5c6a]">
            empowering informed decision-making.
          </span>
        </p>

        <SlidingGrid />
      </div>
    </section>
  );
}
