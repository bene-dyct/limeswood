"use client";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

const CONTACT_CARDS = [
  {
    icon: MdPhone,
    label: "Call Us",
    value: "+234 800 000 0000",
    sub: "Mon – Fri, 9 am – 5 pm WAT",
    href: "tel:+2348000000000",
  },
  {
    icon: MdEmail,
    label: "Email Us",
    value: "info@limeswood.com.ng",
    sub: "We respond within 24 hours",
    href: "mailto:info@limeswood.com.ng",
  },
  {
    icon: MdLocationOn,
    label: "Head Office",
    value: "12 Churchgate, Victoria Island",
    sub: "Lagos State, Nigeria",
    href: "#",
  },
  {
    icon: MdAccessTime,
    label: "Working Hours",
    value: "Mon – Fri  ·  9 am – 5 pm",
    sub: "West Africa Time (WAT)",
    href: "#",
  },
];

export default function ContactCards() {
  return (
    <section className="px-[6vw] py-16 bg-white">
      <div className="w-full mx-auto grid grid-cols-1 text-center md:grid-cols-4 gap-px bg-[#229bb3]/10 border border-[#229bb3]/10 rounded-xl overflow-hidden">
        {CONTACT_CARDS.map((card) => {
          const Icon = card.icon;
          const isLink = card.href !== "#";
          const inner = (
            <>
              <div className="w-10 h-10 flex items-center justify-center bg-[#229bb3]/10 mx-auto text-[#229bb3] rounded-lg mb-4">
                <Icon className="text-xl" />
              </div>
              <p className="font-display  tracking-[0.2em] uppercase text-[#229bb3]/70 mb-1">
                {card.label}
              </p>
              <p className="font-body font-semibold text-[#357c8f]  leading-snug">
                {card.value}
              </p>
              <p className="font-body  text-[#436574]/70 mt-1">{card.sub}</p>
            </>
          );

          return isLink ? (
            <a
              key={card.label}
              href={card.href}
              className="bg-[#f0f4f8] p-6 hover:bg-[#e4edf3] transition-colors duration-200 group"
            >
              {inner}
            </a>
          ) : (
            <div key={card.label} className="bg-[#f0f4f8] p-6">
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
