"use client";

import Image from "next/image"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"
import { teamMembers } from "../components/data"


export default function Meetourexecutives() {
    return(
        <>
        <section className="w-full p-5 md:p-10">
              <div className="lg:px-10 mx-auto items-center">
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
                <h1 className="text-2xl md:text-4xl  font-bold leading-tight text-[#229bb3] mb-6">
                  Meet Our
                  <span className="text-[#3a5c6a]"> Executives</span>
                </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
            initial={{ opacity:0, x:-50 }}
                    whileInView={{ opacity:1, x:0}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.2,
                      damping: 20,
                    }}
              key={idx}
              className=" flex flex-col items-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={160}
                height={160}
                className="w-40 h-48 md:w-60 md:h-68 object-cover rounded-lg mb-4"
              />
              <div className="md:max-lg:text-sm font-semibold mb-1">{member.name}</div>
              <div className="text-[#69726C] text-xs xl:text-sm mb-3 text-center">{member.role} <br/>{member.role1}</div>
              <div className="flex space-x-5">
                <a href="#" className="text-[#3a5c6a] text-2xl">
                  <FaFacebook/>
                </a>
                <a href="#" className="text-[#3a5c6a] text-2xl">
                  <FaSquareXTwitter/>
                </a>
                <a href="#" className="text-[#3a5c6a] text-2xl">
                  <FaInstagramSquare/>
                </a>
                <a href="#" className="text-[#3a5c6a] text-2xl">
                  <FaLinkedinIn/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
                </section>


        </>
    ) 
}