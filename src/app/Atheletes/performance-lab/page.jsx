'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import performanceLabData from './../../../../public/performance-lab.json';

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

// Performance Lab Card Component
const PerformanceLabCard = ({ title, description, image, reverse }) => (
  <motion.div
    variants={itemVariants}
    className={`p-6 sm:p-8  flex flex-col ${
      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-center`}
  >
    <div className="md:w-1/2 p-4 sm:p-6">
      <h3 className="text-2xl sm:text-5xl font-black uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200">
        {title}
      </h3>
      <p className="mt-4 text-base sm:text-2xl font-medium text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
    <div className="md:w-1/2 relative h-4 sm:h-[30rem]">
      <Image
        src={image}
        alt={title}
        fill
        className=" w-auto h-96 "
   
        priority={false}
      />
    </div>
  </motion.div>
);

export default function PerformanceLabPage() {
  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      {/* Performance Lab Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div
          className="absolute inset-0 opacity-5"
         
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto "
        >
     






          <section className="flex  w-full text-black max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
   {/* Left half-circle notch (right side visible) */}
<div
  className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-r-full transform -translate-y-1/2"
/>

{/* Right half-circle notch (left side visible) */}
<div
  className="absolute -right-[0px] top-1/2 w-[30px] h-[60px] bg-black rounded-l-full transform -translate-y-1/2"
/>


        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
        PERFORMANCE LAB
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-5 w-full text-2xl text-center">
  <p className="max-w-3xl">
  Our state-of-the-art Performance Lab offers advanced testing and analysis to optimize your physical performance and health.
  </p>
</div>

      </article>
    </section>






    <div className="grid md:grid-cols-1 gap-8 sm:gap-10 mt-2">
    <div className="rounded-b-xl overflow-hidden border border-t-0 border-blue-400 p-1  -mt-5">
            {performanceLabData.map((service, index) => (
              <PerformanceLabCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}