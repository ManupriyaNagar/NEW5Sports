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

const Orthobiologicals = () => {
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
      className={`relative overflow-hidden py-24 bg-black text-white ${spaceGrotesk.variable}`}
    >
      <div className="container mx-auto  relative z-10">
     







        <section className="flex  w-full text-black  max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
        <div
          className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />
        {/* Right notch */}
        <div
          className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />

        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
        Orthopedics & Surgery
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center">
  <p className="max-w-3xl">
  At the forefront of movement and recovery, our Orthopedics & Surgery department delivers expert care for bone, joint, and muscle conditions—restoring mobility, alleviating pain, and improving quality of life.
  </p>
</div>

      </article>
    </section>
      </div>
    </section>
  );
};

export default Orthobiologicals;