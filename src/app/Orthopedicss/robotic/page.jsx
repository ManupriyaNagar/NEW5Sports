'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from "lucide-react";
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/robotic.json';

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
    heading: "Unmatched Surgical Precision",
    description: "Robotic assistance allows surgeons to operate with sub-millimeter accuracy, ensuring optimal alignment and placement of your knee implant for better performance and longevity.",
  },
  {
    number: "02",
    heading: "Faster Recovery, Less Pain",
    description: "With smaller incisions and less disruption to surrounding tissues, robotic surgery reduces post-operative pain and accelerates your return to daily activities or peak performance.",
  },
  {
    number: "03",
    heading: "Tailored to Your Anatomy",
    description: "Every procedure is customized using 3D mapping technology, creating a knee replacement plan that's unique to your anatomy—resulting in a more natural feel and improved mobility.",
  },
];

export default function SportsPsychologyPage() {
  const benefits = [
    "Pinpoint accuracy",
    "Less post-operative pain",
    "Faster recovery",
    "Better joint alignment and longevity",
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
          className=" px-4 sm:px-6 lg:px-8"
        >
          {/* Breadcrumb Navigation */}
         
          {/* Notched Heading Section */}
          <motion.section
            variants={itemVariants}
            className="flex w-full text-black px-20 max-md:flex-col max-md:px-4"
          >
            <article className="relative flex flex-col py-10 w-full bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible">
              <div
                className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <div
                className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl text-center">
                Robotic Knee Replacement
              </h2>
              <div className="flex flex-wrap gap-5 justify-center mt-3 w-full text-2xl text-center max-md:text-xl">
                <p className="max-w-6xl">
                  Precision is power—especially when it comes to your knees. Robotic-assisted knee replacement ensures unmatched accuracy, less tissue trauma, and faster recovery. Walk smoother, recover quicker, and enjoy a joint built to last.
                  <span className="text-black">*</span>.
                </p>
              </div>
            </article>
          </motion.section>

          {/* Sports Psychology Program Showcase */}
          {sportsPsychologyData.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 py-8 sm:py-12  transition-shadow duration-300 container mx-auto"
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
                  className="object-cover rounded-lg"
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
            className="mt-12 sm:mt-16 container mx-auto"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center text-white"
            >
              Key Benefits of Robotic Knee Replacement
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
        </motion.div>

        {/* Robotic Knee Replacement Details Section */}
        <section className="bg-black py-12 px-6 md:px-16 lg:px-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto text-center"
          >
            {/* Notched Heading */}
            <div className="relative flex flex-col py-10 w-full ">
              <div
                className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <div
                className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <h2 className="self-center text-3xl md:text-4xl font-bold text-white leading-none max-md:text-2xl">
                Robotic Knee Replacement
              </h2>
              <p className="text-xl text-black font-semibold mt-2 text-white ">
                When Precision Matters Most
              </p>
              <p className="text-lg text-black mt-4 max-w-3xl mx-auto text-white ">
                Using robotic assistance, we achieve millimeter-level accuracy—better joint alignment, less tissue trauma, and smoother recovery.
              </p>
            </div>

            {/* Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2 text-left mb-8 mt-8"
            >
              {benefits.map((item, index) => (
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
                  <span>₹2,50,000 - ₹3,50,000 per knee</span>
                </li>
                <li className="flex">
                  <span className="text-lime-400 w-32">Duration:</span>
                  <span>3 days in hospital</span>
                </li>
              </ul>
              <p className="text-lg font-medium text-gray-100">
                Robotic precision means you walk better, sooner—and for longer.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </section>
    </div>
  );
}