"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#E9ECEF] text-[#3E5C6D]">
      <div className="w-full mx-auto px-6 md:px-15 lg:px-18 xl:px-20 py-10">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {/* Column 1 */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <Image
                          src="/small-logo.png"
                          alt="Company logo"
                          width={30}
                          height={40}
                          className="object-contain"
                        />
              <h3 className="text-xl font-semibold mb-4">
                About Limeswood Int&apos;l.
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-[#5F7C8A]">
              Limeswood International Company Ltd, delivers integrated Mechanical, Electrical, Automation, and Instrumentation engineering solutions for complex industrial environments. As an EPIC partner providing Engineering, Procurement, Installation, and Commissioning services, the company supports critical infrastructure projects across oil and gas, power, energy, petrochemical, and manufacturing sectors.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Menu</h3>
            <ul className="space-y-4 text-sm">
              <li className="border-b border-[#D3D8DC] pb-2">
                <Link href="/">Home</Link>
              </li>
              <li className="border-b border-[#D3D8DC] pb-2">
                <Link href="/about">About</Link>
              </li>
              <li className="border-b border-[#D3D8DC] pb-2">
                <Link href="/services">Services</Link>
              </li>
              <li className="border-b border-[#D3D8DC] pb-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Menu</h3>
            <ul className="space-y-4 text-sm">
              <li className="border-b border-[#D3D8DC] pb-2">
                <Link href="/privacy">Privacy</Link>
              </li>
              <li className="border-b border-[#D3D8DC] pb-2">
                <Link href="/cookie-policy">Cookie policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms & condition</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#6c757b]" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#3E5C6D] flex items-center justify-center text-white">
              <FaInstagram size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#3E5C6D] flex items-center justify-center text-white">
              <FaLinkedin size={18} />
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#5F7C8A]">
            © Limeswood International
          </p>
        </div>
      </div>
    </footer>
  );
}