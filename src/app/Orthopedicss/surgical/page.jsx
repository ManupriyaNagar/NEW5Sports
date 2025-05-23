'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/surgical.json';

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

// Data for What We Offer and Why Consider a Second Opinion
const whatWeOffer = [
  "Thorough Review of existing medical reports, MRIs, X-rays, and prior consultations",
  "In-Person or Virtual Evaluations based on your convenience",
  "Cross-Specialist Insights from joint surgeons, sports orthopedists, and regenerative therapy experts",
  "Conservative Care First – exploring non-surgical paths like physiotherapy, orthobiologics, or targeted rehabilitation before surgery",
  "Personalized Treatment Roadmap tailored to your lifestyle, goals, and activity level",
];

const whyConsider = [
  "You've been told surgery is the only option—but you want to explore alternatives",
  "You're uncertain about the risks, recovery time, or results of a recommended procedure",
  "You’ve had surgery in the past that didn’t deliver the results you expected",
  "You're looking for advanced techniques like robotic surgery, arthroscopy, or regenerative therapy",
  "You want reassurance that you're making the best decision for your long-term health",
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
                Surgical Second Opinion
              </h2>
              <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center max-md:text-xl">
                <p className="max-w-6xl">
                  Surgery is a big decision—make it the right one. A second opinion isn’t about doubt; it’s about confidence. At our center, we offer unbiased, expert surgical reviews to ensure you fully understand your condition, explore all treatment options, and choose the path that truly serves your long-term health.
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
              className="flex flex-col md:flex-row container mx-auto items-center gap-8 sm:gap-12 py-8 sm:py-12  transition-shadow duration-300"
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
              Key Benefits of Surgical Second Opinion
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

        {/* Surgical Second Opinion Details Section */}
        <section className="bg-black py-16 px-6 ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Notched Heading */}
            <div className="relative flex flex-col py-10 w-full  text-center">
              <div
                className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <div
                className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <h2 className="text-4xl font-bold text-white mb-4">
                Surgical Second Opinion
              </h2>
              <h3 className="text-2xl font-semibold text-white">
                Not Sure What to Do Next? We’ll Help You Decide.
              </h3>
            </div>

            {/* Introduction */}
            <motion.div
              variants={itemVariants}
              className="text-lg text-gray-200 mt-8 mb-12"
            >
              <p>
                Surgery can change your life—so let’s make sure it changes it for the better. At{' '}
                <span className="font-bold text-lime-400">5 Sports Hospital</span>, we believe every patient deserves clarity
                before committing to the operating table. That’s why we offer comprehensive, unbiased second opinions for
                those who have been advised surgery elsewhere. No pressure, no hidden agendas—just expert insights from a
                panel of leading orthopedic, sports medicine, and joint preservation specialists.
              </p>
            </motion.div>

            {/* What We Offer Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 mb-12"
            >
              <h4 className="text-2xl font-semibold text-white">What We Offer:</h4>
              <ul className="space-y-4 text-lg text-gray-200">
                {whatWeOffer.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="text-lime-400">✅</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Why Consider a Second Opinion Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 mb-12"
            >
              <h4 className="text-2xl font-semibold text-white">Why Consider a Second Opinion?</h4>
              <ul className="space-y-4 text-lg text-gray-200">
                {whyConsider.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="text-lime-400">✅</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Our Promise to You Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-b from-black to-[#001f1f] border-l-4 border-lime-400 px-6 py-4 rounded-lg mb-12"
            >
              <p className="text-2xl text-white font-bold">Our Promise to You:</p>
              <p className="text-lg text-gray-200 mt-2">
                We’re not here to rush you into surgery. We’re here to guide you through your options—with honesty, compassion,
                and experience. Whether you proceed with us or not, our goal is to empower you with confidence in your next step.
              </p>
            </motion.div>

            {/* Consultation Time and Cost Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <ul className="space-y-3 text-gray-200 text-base font-medium">
                <li className="flex">
                  <span className="text-lime-400 w-32">Duration:</span>
                  <span>15 minutes consultation (online or offline)</span>
                </li>
                <li className="flex">
                  <span className="text-lime-400 w-32">Cost:</span>
                  <span>₹700</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>
      </section>
    </div>
  );
}