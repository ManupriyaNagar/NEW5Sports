'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WavyBackground from './../../components/global/Background/WavyBackground';
import herobg from './../../../public/herobg.png';

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

const bulletPoints = [
  '360° care for orthopedics and sports athletes all under one roof.',
  'State-of-the-art facilities and advanced diagnostic imaging.',
  'Personalized treatment plans designed for athletes at all levels (beginners, semi-pros, pros).',
  'Age-specific plans from childhood (5+) to peak performance years.',
];

export default function SportsMedicineBanner() {
  return (
    <section className="flex flex-col items-center relative bg-black pt-16 pb-24">


    
<div className="bg-gradient-to-b from-black to-lime-800 w-full max-w-[1350px] rounded-3xl">
  <WavyBackground
    height={400}
    className="w-full max-w-[1350px] z-10"
    backgroundImage={herobg}
  >

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12 pt-8 text-white"
        >
          {/* Athlete image */}
          <motion.div
            variants={itemVariants}
            className="w-28 h-28 sm:w-48 sm:h-48 lg:w-96 lg:h-96 flex-shrink-0"
          >
            <Image
              src="/3.png"
              alt="Athlete running"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>

          {/* Text content */}
          <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left mb-60">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Pioneering Sports Medicine for Athletes
            </h2>
            <ul className="space-y-2 sm:space-y-3 mb-4 list-disc list-inside text-sm sm:text-base md:text-lg text-gray-200 text-justify px-2">
              {bulletPoints.map((txt, i) => (
                <li key={i}>{txt}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </WavyBackground>
      </div>
    </section>
  );
}
