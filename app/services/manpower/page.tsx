"use client";

import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import ProcessSection from "../../components/ProcessSection";
import AdvantageSection from "../../components/AdvantageSection";
import CTABanner from "../../components/CTABanner";

export default function MechanicalPage() {
  return (
    <section className="automation">
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <AdvantageSection />
      <CTABanner />
    </section>
  );
}
