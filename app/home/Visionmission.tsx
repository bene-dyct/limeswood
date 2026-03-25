"use client";

import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function Visionmission() {
  return (
    <section className="p-5 md:p-10 max-md:-mt-2">
      <div className="w-full max-sm:flex-col mx-auto lg:px-10 flex gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="sm:w-1/2">
          {/* ISO + Company Mini Logos */}
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
          <h1 className="text-2xl md:text-4xl  font-bold leading-tight text-[#229bb3] mb-6">
            Our
            <span className="text-[#3a5c6a]"> Vision</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 md:text-lg mb-10 leading-relaxed text-justify">
            To become the No. 1 Service Partners to our clients by delivering
            the highest value of service delivery to customers, with Respect,
            Friendliness, and Company Spirit.
          </p>

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
          <h1 className="text-2xl md:text-4xl  font-bold leading-tight text-[#229bb3] mb-6">
            Our
            <span className="text-[#3a5c6a]"> Mission</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 md:text-lg mb-1 leading-relaxed">
            <span className="inline-block">
              <GoDotFill size={12} />
            </span>
            To leverage technology to provide the highest service at the most
            affordable cost.
          </p>

          <p className="text-gray-600 md:text-lg mb-1 leading-relaxed">
            <span className="inline-block text-sm">
              <GoDotFill size={12} />
            </span>
            To provide unmatchable customer services to everyone we call
            customers.
          </p>

          <p className="text-gray-600 md:text-lg mb-1 leading-relaxed">
            <span className="inline-block">
              <GoDotFill size={12} />
            </span>
            To display family spirit.
          </p>

          <p className="text-gray-600 md:text-lg  leading-relaxed">
            <span className="inline-block">
              <GoDotFill size={12} />
            </span>
            To maintain the highest level of business ethics.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[300px] sm:w-1/2 sm:h-[500px] rounded-xl overflow-hidden shadow-lg relative">
          <Image
            src="/visionmission.jpg"
            alt="Industrial plant"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
