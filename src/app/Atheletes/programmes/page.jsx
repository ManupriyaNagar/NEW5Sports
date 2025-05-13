'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import programsData from '../../../lib/programmes.json';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProgramCard({ id, title, description, image, reverse }) {
  return (
    <motion.div
      variants={item}
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
        <p className="mt-4 text-base sm:text-lg text-gray-700">{description}</p>
        <Link
          href={`/atheletes/programmes/${id}`} // Updated to new program route
          className="mt-6 inline-block px-6 py-2 bg-lime-500 text-black rounded-full hover:bg-lime-600 transition"
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
          sizes="(max-width:768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}

export default function ProgramsPage() {
  const programs = programsData.consultations || [];

  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto grid gap-8 sm:gap-10"
        >
          {programs.map((p, i) => (
            <ProgramCard
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              image={p.image}
              reverse={i % 2 !== 0}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}