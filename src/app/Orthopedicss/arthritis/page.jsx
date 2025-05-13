'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/arthritis.json';

// Font setup
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Data for the new Key Benefits section
const keyBenefits = [
  {
    number: "01",
    heading: "Treat early. Move longer.",
    description:
      "Joint preservation techniques work best when started early. By addressing arthritis before it progresses, we help you maintain mobility and avoid future surgical interventions.",
  },
  {
    number: "02",
    heading: "Restore without replacement.",
    description:
      "Through innovative methods like cartilage restoration, viscosupplementation, and regenerative therapy, we repair and rejuvenate joints without the need for joint replacement.",
  },
  {
    number: "03",
    heading: "Live pain-free, without downtime.",
    description:
      "Our non-invasive and minimally invasive solutions reduce pain and inflammation, allowing you to stay active and independent—without the extended recovery of surgery.",
  },
];

export default function SportsPsychologyPage() {
  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      {/* Sports Psychology Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto "
        >





          <section className="flex  w-full text-black  max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
        <div
          className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />
        {/* Right notch */}
        <div
          className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />

        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl text-center"> Arthritis & Joint Preservation Technique
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center">
  <p className="max-w-3xl">
  Arthritis doesn’t have to mean surgery. Our joint preservation techniques restore mobility, reduce pain, and slow degeneration—helping you stay active, naturally. Early intervention today can save your joints for the future.
  </p>
</div>

      </article>
    </section>
          {/* Sports Psychology Program Showcase */}
          {sportsPsychologyData.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 py-8 sm:py-12 px-4 sm:px-6 transition-shadow duration-300"
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl sm:text-5xl font-bold uppercase text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-base sm:text-xl font-medium text-gray-200">
                  {service.description}
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 sm:h-80">
                {/* Wrapper for parallelogram border effect */}
                <div className="relative w-full h-full overflow-hidden ">
                  {/* Pseudo-element for the border */}
                  <div
                    className="absolute   "
        
                    
                  />
                
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover "
                    sizes=""
                    priority={false}
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Key Benefits Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center text-white"
            >
              Key Benefits of Arthritis & Joint Preservation
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  variants={itemVariants}
                  className="p-6 sm:p-8 bg-gradient-to-b from-black to-[#001f1f] border border-green-400 rounded-xl shadow-lg hover:shadow-green-400/20 transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <span className="inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-lime-400 text-black text-2xl sm:text-3xl font-bold">
                      {benefit.number}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold uppercase text-white mb-2 text-center">
                    {benefit.heading}
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-gray-200 text-center">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Content Section */}
        <div className="max-w-7xl mx-auto space-y-8 mt-10 px-4 ">
          {/* Title */}
          <div>
            <h2 className="text-lime-400 text-sm font-semibold uppercase tracking-widest">
              Arthritis & Joint Preservation Techniques
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mt-2 text-white">
              Delay Surgery. Restore Movement.
            </h3>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Joint pain doesn’t always mean surgery. Our Joint Preservation Program focuses on early intervention strategies that can delay or even eliminate the need for joint replacement. We use a mix of <strong className="text-white">viscosupplementation</strong> (joint lubrication injections), <strong className="text-white">regenerative medicine</strong>, <strong className="text-white">targeted physiotherapy</strong>, and <strong className="text-white">biomechanics correction</strong> to restore mobility and reduce pain.
          </p>

          {/* Benefits List */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-b from-black to-[#001f1f] border border-green-400 rounded-lg shadow p-6">
              <h4 className="text-xl font-semibold text-lime-400 mb-2">Viscosupplementation</h4>
              <p className="text-gray-200">Injections that improve joint lubrication, reduce friction, and enhance shock absorption.</p>
            </div>
            <div className="bg-gradient-to-b from-black to-[#001f1f] border border-green-400 rounded-lg shadow p-6">
              <h4 className="text-xl font-semibold text-lime-400 mb-2">Regenerative Medicine</h4>
              <p className="text-gray-200">Harness your body’s healing potential using PRP and stem cells to repair damaged tissues.</p>
            </div>
            <div className="bg-gradient-to-b from-black to-[#001f1f] border border-green-400 rounded-lg shadow p-6">
              <h4 className="text-xl font-semibold text-lime-400 mb-2">Targeted Physiotherapy</h4>
              <p className="text-gray-200">Therapies personalized to strengthen muscles and improve joint support and function.</p>
            </div>
            <div className="bg-gradient-to-b from-black to-[#001f1f] border border-green-400 rounded-lg shadow p-6">
              <h4 className="text-xl font-semibold text-lime-400 mb-2">Biomechanics Correction</h4>
              <p className="text-gray-200">Realigning posture and movement to reduce joint strain and prevent further deterioration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}