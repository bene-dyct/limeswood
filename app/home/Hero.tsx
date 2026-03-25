"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from 'next/image';

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    return (
        <>
    <div ref={ref}>
      <Swiper
      effect={"fade"}
      speed={2000}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <section ref={ref} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
<motion.div
        style={{ y }}
      />
      <Image
      src="/homeheroone.webp"
      alt='home'
      fill
      priority
      className='absolute inset-0 bg-cover object-cover bg-center object-center'/>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-light tracking-wide leading-tight"
        >
          Intelligent Industrial Automation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-lg  max-w-2xl mx-auto"
        >
          Engineering high-performance control systems, robotics integration,
          and IIoT infrastructures for mission-critical industries.
        </motion.p>   
        </div>  
        </section>   
              </SwiperSlide>
        <SwiperSlide>
          <section ref={ref} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
<motion.div
        style={{ y }}
      />
      <Image
      src="/homeherotwo.webp"
      alt='home'
      fill
      priority
      className='absolute inset-0 bg-cover object-cover bg-center object-center'/>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-light tracking-wide leading-tight"
        >Integrated Engineering Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-lg  max-w-2xl mx-auto"
        >Delivering multidisciplinary engineering solutions across automation, electrical, mechanical, and instrumentation systems.
        </motion.p>   
        </div>  
        </section>   
              </SwiperSlide>
        <SwiperSlide>
          <section ref={ref} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
<motion.div
        style={{ y }}
      />
      <Image
      src="/homeherothree.webp"
      alt='home'
      fill
      priority
      className='absolute inset-0 bg-cover object-cover bg-center object-center'/>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-light tracking-wide leading-tight"
        > Engineering Expertise For Modern Industry
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-lg   max-w-2xl mx-auto"
        >Providing technical engineering services, project execution, and skilled manpower for industrial development.

        </motion.p>   
        </div>  
        </section>   
              </SwiperSlide>
      </Swiper>
      </div>
    </>
    )
}