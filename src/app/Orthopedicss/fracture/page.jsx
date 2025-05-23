'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from "lucide-react";
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/fracture.json';

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
    heading: "Healing Beyond the Bone—Strength Starts from Within.",
    description: "Fractures aren’t just breaks in bones—they disrupt your entire rhythm. Our advanced fracture management combines precise diagnostics, expert orthopedic intervention, and personalized rehabilitation to ensure that your recovery doesn’t just focus on healing the bone but also rebuilding your strength and mobility.",
  },
  {
    number: "02",
    heading: "Personalized Recovery for Every Type of Injury.",
    description: "Whether it’s a complex trauma or a stress fracture, our tailored treatment plans ensure every fracture heals correctly the first time, minimizing future complications. We focus on restoring not just your bone health, but your performance and confidence.",
  },
  {
    number: "03",
    heading: "From Recovery to Performance—Rise Stronger.",
    description: "We don’t just help you recover from injuries; we help you rise back stronger. By integrating rehabilitation with performance-focused training, we ensure you come back ready to not only meet but exceed your previous capabilities.",
  },
];

export default function SportsPsychologyPage() {
  const services = [
    "On-site X-rays and imaging",
    "Emergency stabilization",
    "Surgical or non-surgical repair",
    "Custom splints and casts",
    "Post-fracture rehabilitation",
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
                className="absolute -left-8 top-1/2 w-[80px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <div
                className="absolute -right-8 top-1/2 w-[80px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl text-center">
                Fracture Management
              </h2>
              <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center max-md:text-xl">
                <p className="max-w-6xl">
                  A fracture demands immediate, expert care—because every second counts. From on-site imaging to precision repair and personalized rehab, we ensure your bone heals right the first time. Fast action today prevents lifelong complications tomorrow.
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
              Key Benefits of Fracture Management
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

        {/* Fracture Management Details Section */}
        <section className="bg-black py-12 px-6 md:px-16 lg:px-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Notched Heading */}
            <div className="relative flex flex-col py-10 w-full  ">
              <div
                className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <div
                className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <h2 className="self-center text-3xl md:text-4xl font-bold text-white leading-none max-md:text-2xl">
                Fracture Management
              </h2>
              <p className="text-xl text-white font-semibold mt-2">
                Immediate Care. Expert Hands. Faster Healing.
              </p>
              <p className="text-lg text-white mt-4 max-w-5xl mx-auto">
                Our approach ensures that fractures receive swift, expert attention—from diagnosis to recovery—minimizing complications and maximizing long-term outcomes.
              </p>
            </div>

            {/* Services List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2 text-left mb-8 mt-8"
            >
              {services.map((item, index) => (
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

            {/* Procedure Dependency and Tagline Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <p className="text-gray-200 text-base font-medium mb-4">
                Cost and duration depend on the procedure and treatment performed.
              </p>
              <p className="text-lg font-medium text-gray-100">
                Immediate care = optimal healing. Delay can mean lifelong pain or imbalance.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </section>
    </div>
  );
}