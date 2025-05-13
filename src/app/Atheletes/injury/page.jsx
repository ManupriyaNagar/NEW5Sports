// src/app/Athelets/injury/page.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';
import physiotherapyData from '../../../lib/physiotherapy.json';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300','400','500','600','700'],
});

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function ServiceCard({ id, title, description, image, reverse }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`
        p-6 sm:p-8 flex flex-col
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
        items-center
      `}
    >
      <div className="md:w-1/2 p-4 sm:p-6">
        <h3 className="text-2xl sm:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
          {title}
        </h3>
        <p className="mt-4 text-base sm:text-xl font-medium text-gray-100">
          {description}
        </p>
        <Link
          href={`/atheletes/injury/${id}`}
          className="mt-6 inline-block px-6 py-2 text-lime-400 rounded-full transition hover:bg-green-500"
        >
          Learn More
        </Link>
      </div>
      <div className="md:w-1/2 relative h-64 sm:h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}

export default function InjuryPage() {
  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      <section className="relative py-16 bg-black">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          {/* “Injury” Header with half-circle notches */}
          <section className="flex w-full text-black max-md:flex-col mb-8">
            <article className="relative flex flex-col w-full bg-lime-400 border border-white rounded-[32px] overflow-visible py-10">
              <div
                className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-r-full transform -translate-y-1/2 left-0"
              />
              <div
                className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-l-full transform -translate-y-1/2 right-0"
              />
              <h2 className="self-center text-6xl font-bold max-md:text-4xl">
                Injury
              </h2>
              <p className="mt-5 text-2xl text-center max-w-3xl mx-auto">
                Our expert physiotherapy services focus on restoring movement,  
                treating sports injuries, and supporting comprehensive rehabilitation.
              </p>
            </article>
          </section>

          {/* Services Grid */}
          <div className="grid gap-8 sm:gap-10">
            <div className="rounded-b-xl overflow-hidden border border-t-0 border-blue-400 -mt-5 p-1">
              {physiotherapyData.map((svc, idx) => (
                <ServiceCard
                  key={svc.id}
                  id={svc.id}
                  title={svc.title}
                  description={svc.description}
                  image={svc.image}
                  reverse={idx % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
