'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const TestingSection = () => {
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

  return (
    <section
      className={`relative overflow-hidden py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white ${spaceGrotesk.variable}`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          {/* Breadcrumb */}
         

          {/* Title */}
   




          <section className="flex  w-full  text-black px-2 max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
    

        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
                PROGRAMS
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center">
  <p className="max-w-3xl">
              We have a number of programmes designed to offer high quality physiotherapy and performance support to specific groups and individuals.
  </p>
</div>

      </article>
    </section>

          {/* Video CTA */}
        
        </motion.div>
      </div>
    </section>
  );
};

export default TestingSection;


