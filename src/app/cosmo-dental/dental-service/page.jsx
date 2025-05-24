'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';
import cosmodental from '../../../lib/cosmodental.json'; // Import the cosmodental data
import ServiceCards from '../../../components/CosmoDental/ServiceCards'; // Import the ServiceCards
//  component
import { Icon } from 'lucide-react';
import FacultySection from '../../../components/CosmoDental/FacultySection'; // Import the FacultySection component

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ServiceCard({ id, title, description, image, reverse }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`
        p-4 sm:p-6 flex flex-col
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
        items-center gap-4
      `}
    >
      <div className="w-full md:w-1/2 p-4 sm:p-6">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
          {title}
        </h3>
        <p className="mt-4 text-sm sm:text-lg md:text-xl font-medium text-gray-100">
          {description}
        </p>
       
      </div>
      <div className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority // Add priority for faster loading on mobile
        />
      </div>
    </motion.div>
  );
}

export default function InjuryPage() {
  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      <section className="relative py-12 sm:py-16 bg-black">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6"
        >
          {/* “Injury” Header with half-circle notches */}
          <section className="flex w-full text-black max-md:flex-col mb-8 px-2 sm:px-3">
            <article className="relative flex flex-col w-full bg-lime-400 border border-white rounded-[32px] overflow-visible py-8 sm:py-10">
              <div className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-r-full transform -translate-y-1/2 left-0 hidden md:block" />
              <div className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-l-full transform -translate-y-1/2 right-0 hidden md:block" />
              <h2 className="self-center text-4xl sm:text-5xl md:text-6xl font-bold">
                Dental Services
              </h2>
              <p className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl text-center max-w-xl sm:max-w-2xl md:max-w-7xl mx-auto px-4 hidden md:block">
                At COSMODENTAL, we offer a comprehensive range of Dental Services designed to keep your smile healthy, bright, and beautiful. Whether you need a routine check-up, cosmetic enhancements, or advanced treatments, we provide expert care tailored to your unique needs. Whatever your dental goals, we are committed to making every visit a comfortable and rewarding experience.
              </p>
            </article>
          </section>

          <ServiceCards />

          {/* Services Grid */}
          <div className="grid gap-6 sm:gap-8">
            <div className="rounded-b-xl overflow-hidden border border-t-0 border-blue-400 -mt-5 p-1 sm:p-2">
              {cosmodental.map((svc, idx) => (
                <ServiceCard
                  title={svc.title}
                  image={svc.image}
                  reverse={idx % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <FacultySection/>
    </div>
  );
}