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

// Data for Other Techniques (left side)
const otherTechniques = [
  {
    title: "Viscosupplementation",
    description: "Injections that improve joint lubrication, reduce friction, and enhance shock absorption.",
    details: [
      { label: "Duration", value: "30 to 35 minutes" },
      { label: "Cost of Injection", value: "₹15,000 (was ₹22,000)" },
      { label: "Procedure Charge", value: "₹4,000" },
    ],
  },
  {
    title: "Targeted Physiotherapy",
    description: "Therapies personalized to strengthen muscles and improve joint support and function.",
    details: [
      { label: "Duration", value: "1 hr per session" },
      { label: "Sessions", value: "Multiple sessions needed" },
      { label: "Cost per Session", value: "₹900" },
    ],
  },
  {
    title: "Biomechanics Correction",
    description: "Realigning posture and movement to reduce joint strain and prevent further deterioration.",
    details: [
      { label: "Duration", value: "1 hr per session" },
      { label: "Sessions", value: "Multiple sessions needed" },
      { label: "Cost per Session", value: "₹900" },
    ],
  },
];

// Data for Regenerative Medicine (right side, nested)
const regenerativeMedicine = {
  title: "Regenerative Medicine",
  description: "Harness your body’s healing potential using PRP and stem cells to repair damaged tissues.",
  subItems: [
    {
      title: "Platelet Rich Plasma (PRP)",
      description: "A type of regenerative therapy using your own blood to promote healing.",
      duration: "1 to 1.5 hours",
      injections: "Usually 3 injections in 3-week intervals",
      cost: "₹14,000 - ₹21,000",
      procedureCharge: "₹4,000",
    },
    {
      title: "Growth Factor Concentrate",
      description: "Uses concentrated growth factors to stimulate tissue repair.",
      duration: "1 to 1.5 hours",
      injections: "Usually 3 injections in 3-week intervals",
      cost: "₹14,000 - ₹21,000",
      procedureCharge: "₹4,000",
    },
    {
      title: "Bone Marrow Concentrate (BMAC)",
      description: "Extracts stem cells from bone marrow to aid in tissue regeneration.",
      duration: "2 to 2.5 hours",
      cost: "₹55,000",
      procedureCharge: "₹20,000",
    },
    {
      title: "Stem Cells",
      description: "Utilizes stem cells to repair and regenerate damaged joint tissues.",
      duration: "1 hour",
      cost: "₹1,50,000",
      procedureCharge: "₹10,000", // Fixed the incomplete "Procedu" to "Procedure Charge"
    },
  ],
};

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
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Breadcrumb Navigation */}
        

          {/* Main Heading with Notches */}
          <section className="flex w-full text-black max-md:flex-col">
            <article className="relative flex flex-col py-10 w-full bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible">
              <div
                className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <div
                className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
              />
              <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl text-center">
                Arthritis & Joint Preservation Technique
              </h2>
              <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center max-md:text-xl">
                <p className="max-w-6xl">
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
                <div className="relative w-full h-full overflow-hidden rounded-lg border border-lime-400">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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

          {/* Techniques Section */}
          <div className="max-w-7xl mx-auto space-y-8 mt-10 px-4">
            {/* Notched Heading */}
            <motion.section
              variants={itemVariants}
              className="flex w-full text-black max-md:flex-col"
            >
              <article className="relative flex flex-col py-10 w-full">
                <div
                  className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
                />
                <div
                  className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
                />
                <h2 className="self-center text-4xl md:text-5xl text-white font-bold leading-none max-md:text-3xl text-center">
                  Delay Surgery. Restore Movement.
                </h2>
                <h3 className="text-sm font-semibold uppercase text-white tracking-widest mt-4 text-center">
                  Arthritis & Joint Preservation Techniques
                </h3>
                <div className="flex flex-wrap gap-5 justify-center text-white mt-4 w-full text-lg text-center">
                  <p className="max-w-6xl">
                    Joint pain doesn’t always mean surgery. Our Joint Preservation Program focuses on early intervention strategies that can delay or even eliminate the need for joint replacement. We use a mix of viscosupplementation (joint lubrication injections), <strong className="">regenerative medicine</strong>, <strong className="">targeted physiotherapy</strong>, and <strong className="">biomechanics correction</strong> to restore mobility and reduce pain.
                  </p>
                </div>
              </article>
            </motion.section>

            {/* Techniques Layout: Left (Other Techniques) and Right (Regenerative Medicine) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2"
            >
              {/* Left: Other Techniques */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {otherTechniques.map((technique, index) => (
                  <motion.div
                    key={technique.title}
                    variants={itemVariants}
                    className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
                  >
                    <h4 className="text-xl font-semibold text-lime-400 mb-2">{technique.title}</h4>
                    <p className="text-gray-200 mb-3">{technique.description}</p>
                    <ul className="space-y-2 text-gray-200">
                      {technique.details.map((detail, idx) => (
                        <li key={idx} className="flex">
                          <span className="text-lime-400 w-32">{detail.label}:</span>
                          <span>{detail.value}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: Regenerative Medicine */}
              <motion.div
                variants={itemVariants}
                className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-lime-400 mb-2">{regenerativeMedicine.title}</h4>
                <p className="text-gray-200 mb-3">{regenerativeMedicine.description}</p>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {regenerativeMedicine.subItems.map((ortho, index) => (
                    <motion.div
                      key={ortho.title}
                      variants={itemVariants}
                      className="p-4 bg-black border border-gray-700 rounded-lg"
                    >
                      <h5 className="text-lg font-semibold text-lime-400 mb-2">{ortho.title}</h5>
                      <p className="text-gray-200 mb-3">{ortho.description}</p>
                      <ul className="space-y-2 text-gray-200">
                        <li className="flex">
                          <span className="text-lime-400 w-32">Duration:</span>
                          <span>{ortho.duration}</span>
                        </li>
                        {ortho.injections && (
                          <li className="flex">
                            <span className="text-lime-400 w-32">Injections:</span>
                            <span>{ortho.injections}</span>
                          </li>
                        )}
                        <li className="flex">
                          <span className="text-lime-400 w-32">Cost:</span>
                          <span>{ortho.cost}</span>
                        </li>
                        <li className="flex">
                          <span className="text-lime-400 w-32">Procedure Charge:</span>
                          <span>{ortho.procedureCharge}</span>
                        </li>
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}