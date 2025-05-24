'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/orthobiology.json';

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
    heading: "Harness your body’s own healing power.",
    description:
      "Orthobiologic treatments like PRP and stem cells amplify your body’s natural ability to repair tissue—promoting true healing without the trauma of surgery.",
  },
  {
    number: "02",
    heading: "Less downtime, more recovery.",
    description:
      "Regenerative therapies are minimally invasive and outpatient-friendly, helping you recover faster, with less pain, and get back to the activities you love sooner.",
  },
  {
    number: "03",
    heading: "Science meets performance.",
    description:
      "From athletes to active individuals, regenerative medicine delivers long-term relief by addressing the root cause—not just the symptoms—with clinically backed, cutting-edge care.",
  },
];

// Updated Data for Orthobiologics Cards
const orthobiologics = [
  {
    title: "Platelet Rich Plasma (PRP)",
    duration: "1 to 1.5 hours",
    injections: "Usually 3 injections in 3-week intervals",
    originalCost: "₹21,000", // Original price to be shown with strikethrough
    offerCost: "₹15,000", // Offer price to be highlighted
    procedureCharge: "₹4,000",
  },
  {
    title: "Growth Factor Concentrate",
    duration: "1 to 1.5 hours",
    injections: "Usually 3 injections in 3-week intervals",
    originalCost: "₹21,000", // Original price to be shown with strikethrough
    offerCost: "₹15,000", // Offer price to be highlighted
    procedureCharge: "₹4,000",
  },
  {
    title: "Bone Marrow Concentrate (BMAC)",
    duration: "2 to 2.5 hours",
    cost: "₹55,000", // No offer, so use the original cost field
    procedureCharge: "₹20,000",
  },
  {
    title: "Stem Cells",
    duration: "1 hour",
    cost: "₹1,50,000", // No offer, so use the original cost field
    procedureCharge: "₹10,000",
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
          className=""
        >
          {/* Breadcrumb Navigation */}
          <section className="flex w-full text-black px-20 max-md:flex-col">
            <article className="relative flex flex-col py-10 w-full bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible">
              <div
                className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2"
              />
              <div
                className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2"
              />
              <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
                Orthobiologicals & Regenerative Therapy
              </h2>
              <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center">
                <p className="max-w-3xl">
                  Harness the power of your body to heal naturally. Our Orthobiologicals & Regenerative Therapies use cutting-edge science to stimulate tissue repair—delivering faster recovery and lasting results.
                </p>
              </div>
            </article>
          </section>

          {/* Sports Psychology Program Showcase */}
          {sportsPsychologyData.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 py-8 sm:py-12 px-4 sm:px-6 transition-shadow duration-300 container mx-auto"
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
              Key Benefits of Orthobiologicals & Regenerative Therapy
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

          {/* Orthobiologics Cards Section */}
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
              Types of Orthobiologics
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {orthobiologics.map((ortho, index) => (
                <motion.div
                  key={ortho.title}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
                >
                  <h4 className="text-xl sm:text-2xl font-bold uppercase text-white mb-4 text-center">
                    {ortho.title}
                  </h4>
                  <ul className="space-y-3 text-gray-200 text-sm sm:text-base font-medium">
                    <li className="flex items-center justify-between">
                      <span className="text-lime-400">Duration:</span>
                      <span>{ortho.duration}</span>
                    </li>
                    {ortho.injections && (
                      <li className="flex items-center justify-between">
                        <span className="text-lime-400">Injections:</span>
                        <span>{ortho.injections}</span>
                      </li>
                    )}
                    <li className="flex items-center justify-between">
                      <span className="text-lime-400">Cost:</span>
                      <div className="flex items-center gap-2">
                        {ortho.originalCost && ortho.offerCost ? (
                          <>
                            <span className="text-gray-400 line-through">{ortho.originalCost}</span>
                            <span className="text-green-400 font-bold">{ortho.offerCost}</span>
                            <span className="text-green-400 text-xs">(Offer)</span>
                          </>
                        ) : (
                          <span>{ortho.cost}</span>
                        )}
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-lime-400">Procedure Charge:</span>
                      <span>{ortho.procedureCharge}</span>
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Content Section */}
          <div className="text-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="bg-[#001f1f] border-l-4 border-lime-400 px-6 py-4 rounded-lg">
                <h4 className="text-xl text-lime-400 font-semibold">When to Consider This?</h4>
                <p className="text-lg text-gray-200 mt-2">
                  If you're facing recurring tendonitis, mild arthritis, or joint pain that hasn't improved with physiotherapy—this could be your next step.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}