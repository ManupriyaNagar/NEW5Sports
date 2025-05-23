'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from "lucide-react";
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/arthology.json';

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
    heading: "Precision from the inside out.",
    description: "Arthroscopy gives our specialists a clear, magnified view of your joint—allowing for accurate diagnosis and targeted treatment that open surgery can’t match.",
  },
  {
    number: "02",
    heading: "Less trauma, faster comeback.",
    description: "With smaller incisions and minimal tissue disruption, arthroscopy means significantly less pain, lower risk of complications, and a speedier return to peak activity.",
  },
  {
    number: "03",
    heading: "Smarter healing for stronger performance.",
    description: "From athletes to active individuals, arthroscopy ensures lasting results—helping you recover smarter, move better, and get back to doing what you love, sooner.",
  },
];

export default function SportsPsychologyPage() {
  const procedures = [
    "Knee and shoulder injuries",
    "Loose cartilage or bone fragments",
    "Ligament reconstructions",
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
              <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
                Arthroscopy
              </h2>
              <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center max-md:text-xl">
                <p className="max-w-6xl">
                  Why open up when a keyhole can do the job? Arthroscopy uses tiny incisions and a camera to diagnose and treat joint problems with minimal disruption. Faster healing, less pain, and a quicker return to movement—it’s surgery, reinvented.
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
              className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 py-8 sm:py-12 container mx-auto transition-shadow duration-300"
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
              Key Benefits of Arthroscopy
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

        {/* Arthroscopy Details Section */}
        <section className="bg-black py-12 container mx-auto">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Arthroscopy
            </h2>
            <p className="text-xl text-lime-400 font-semibold mb-4">
              Small Incisions. Big Impact.
            </p>
            <p className="text-gray-200 text-lg mb-8">
              Arthroscopy allows us to diagnose and treat joint issues using a camera and tiny instruments.
            </p>

            <div className="grid gap-4 md:grid-cols-2 text-left mb-8">
              {procedures.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-lime-400 mt-1" size={22} />
                  <p className="text-gray-200 text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* Cost, Duration, Injection Cost, and Tagline Card */}
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
                <li className="flex">
                  <span className="text-lime-400 w-32">Cost of Injection:</span>
                  <span>
                    <s className="text-gray-500">₹22,000</s>{' '}
                    <span className="text-lime-400">₹15,000</span>
                  </span>
                </li>
              </ul>
             
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
}