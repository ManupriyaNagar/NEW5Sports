'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import programsData from '../../../../lib/programmes.json';

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

export default function ProgramDetailPage({ params }) {
  const { id } = params;
  const program = programsData.consultations.find((p) => p.id === id);

  if (!program) {
    return (
      <div className={`min-h-screen ${spaceGrotesk.variable} flex items-center justify-center bg-black p-4`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md bg-[#001f1f] border border-green-400 p-8 rounded-2xl"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Program Not Found</h1>
          <p className="text-gray-200 mb-6">Sorry, we couldn't find the program you're looking for.</p>
          <Link
            href="/atheletes/programmes"
            className="inline-block px-6 py-3 bg-lime-400 text-black font-semibold rounded-md hover:bg-lime-500 transition-transform transform hover:scale-105"
          >
            Back to Programs
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${spaceGrotesk.variable} bg-black`}>
      <section className="py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 "
        >
          <motion.div variants={item} className="space-y-8">
            {/* Program Title with Green Slashes */}
            <div className="flex items-center justify-start space-x-2">
              <span className="text-lime-400 text-2xl font-bold">//</span>
              <h1 className="text-3xl md:text-4xl font-bold uppercase text-white">
                {program.title}
              </h1>
            </div>

            {/* Program Description */}
            <p className="text-lg text-gray-200 leading-relaxed">{program.description}</p>

            {program.consultations && program.consultations.length > 0 && (
              <div className="space-y-10 bg-gradient-to-b from-black to-[#001f1f] border border-green-400 rounded-2xl p-8">
                {program.consultations.map((consultation) => (
                  <div key={consultation.id} className="space-y-6">
                    {/* Price Section */}
                    {consultation.price && (
                      <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-white uppercase">Price</h2>
                        <p className="text-2xl font-bold text-lime-400">{consultation.price}</p>
                      </div>
                    )}

                    {/* Details Section */}
                    {consultation.features && (
                      <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-white uppercase">Details</h2>
                        <ul className="space-y-2 text-gray-200">
                          {consultation.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-lime-400">–</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Ideal For Section */}
                    {consultation.idealFor && (
                      <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-white uppercase">Ideal For</h2>
                        <p className="text-gray-200 leading-relaxed">{consultation.idealFor}</p>
                      </div>
                    )}

                    {/* Podcast Section */}
                    {consultation.podcastText && (
                      <div className="space-y-2">
                        <p className="text-gray-200 leading-relaxed">{consultation.podcastText}</p>
                      </div>
                    )}

                    {consultation.podcastEmbed && (
                      <div className="mt-4 rounded-lg shadow-md overflow-hidden border border-green-400">
                        <div
                          dangerouslySetInnerHTML={{ __html: consultation.podcastEmbed }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
          
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}