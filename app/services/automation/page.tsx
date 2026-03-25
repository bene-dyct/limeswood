"use client";

import Hero from "./Hero";
// import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "../../components/ProcessSection";
import AdvantageSection from "../../components/AdvantageSection";
import CTABanner from "../../components/CTABanner";

export default function AutomationPage() {
  return (
    <section className="automation">
      <Hero />
      {/* <HeroSection/> */}
      <ServicesSection />
      <ProcessSection />
      <AdvantageSection />
      <CTABanner />
    </section>
  );
}
