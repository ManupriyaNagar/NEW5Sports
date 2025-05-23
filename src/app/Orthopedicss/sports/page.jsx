'use client';

import React from 'react';
import { CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/sports.json';

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
    heading: "Precision matters in every cut, stitch, and step.",
    description:
      "Our ligament surgeries use advanced arthroscopic techniques to ensure minimal disruption and maximum recovery. You don’t just heal—you return stronger, with restored confidence in every movement.",
  },
  {
    number: "02",
    heading: "Comebacks are built on science and strategy.",
    description:
      "From diagnosis to rehab, every step is optimized. Our expert team blends cutting-edge surgical methods with athlete-centric recovery plans to get you back in the game faster—and safer.",
  },
  {
    number: "03",
    heading: "Your injury doesn’t define you—your recovery does.",
    description:
      "We believe setbacks are setups for a stronger return. Our tailored approach empowers athletes to overcome physical and mental barriers, transforming injury into an opportunity for peak performance.",
  },
];

export default function SportsPsychologyPage() {
  const treatments = [
    "ACL, PCL, and meniscus surgeries",
    "Rotator cuff and shoulder dislocations",
    "Achilles and ankle ligament repairs",
  ];

  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      {/* Sports Psychology Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Breadcrumb Navigation */}
         

          {/* Header Section with Notches */}
          <section className="flex w-full text-black max-md:flex-col">
            <article className="relative flex flex-col py-10 w-full bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible">
              {/* Left notch */}
              <div
                className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
              />
              {/* Right notch */}
              <div
                className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl text-center">
                Sports Injury & Ligament Surgery
              </h2>
              <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center max-md:text-xl">
                <p className="max-w-6xl">
                  Injuries may sideline you—but they don’t define you. Our expert-led surgeries for ACL tears, ligament damage, and joint trauma are designed not just to heal, but to rebuild strength and performance. From diagnosis to rehab, we help athletes return stronger, faster, and smarter.
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
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg border border-lime-400"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
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
              Key Benefits of Sports Injury & Ligament Surgery
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  variants={itemVariants}
                  className="p-6 sm:p-8 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
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

          {/* Treatments Section */}
          <section className="bg-black py-12 px-6 md:px-16 lg:px-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto text-center"
            >
              {/* Notched Heading */}
              <div className="relative flex flex-col py-10 w-full">
                <div
                  className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
                />
                <div
                  className="absolute -right-8 top-1/2 w-[60px] h-[60px]  rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
                />
                <h2 className="self-center text-3xl md:text-4xl font-bold text-white leading-none max-md:text-2xl">
                  Sports Injuries & Ligament Surgery
                </h2>
                <p className="text-xl text-white font-semibold mt-2">
                  From ACL Tears to Muscle Repairs – We’ve Got You
                </p>
                <p className="text-lg text-white mt-1 max-w-5xl mx-auto">
                  Specialized care tailored for athletes—our experts ensure you don’t just heal, you come back stronger.
                </p>
              </div>

              {/* Treatments List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 md:grid-cols-2 text-left mb-8 mt-8"
              >
                {treatments.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-lime-400 mt-1" size={22} />
                    <p className="text-gray-200 text-base">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Cost, Duration, and Tagline Card */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
              >
                <ul className="space-y-3 text-gray-200 text-base font-medium mb-4">
                  <li className="flex">
                    <span className="text-lime-400 w-32">Cost:</span>
                    <span>₹1,50,000 - ₹3,00,000</span>
                  </li>
                  <li className="flex">
                    <span className="text-lime-400 w-32">Duration:</span>
                    <span>1 to 2 days in hospital</span>
                  </li>
                </ul>
                <p className="text-lg font-medium text-gray-100">
                  Every plan is personalized for your sport, timeline, and performance goals.
                </p>
              </motion.div>
            </motion.div>
          </section>
        </motion.div>
      </section>
    </div>
  );
}