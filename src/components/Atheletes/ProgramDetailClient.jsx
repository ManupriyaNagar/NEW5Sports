'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';

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
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProgramDetailClient({ program }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  return (
    <section
      className={`py-16 px-4 md:px-12 bg-gray-900 min-h-screen text-white ${spaceGrotesk.variable}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-12"
      >
        {/* Hero */}
        <motion.div variants={itemVariants} className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-lime-400">
            {program.title}
          </h1>
          <p className="text-xl text-gray-300">{program.description}</p>
          <div className="mx-auto w-64 h-64 relative mb-6">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-contain rounded-xl shadow-lg"
              priority
            />
          </div>
          <Link
            href={program.buttonLink}
            className="bg-lime-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-600 transition"
          >
            {program.buttonText}
          </Link>
        </motion.div>

        {/* Consultations */}
        {program.consultations && program.consultations.length > 0 && (
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-semibold text-lime-300 text-center">
              Consultation Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {program.consultations.map((opt) => (
                <div
                  key={opt.id}
                  className="border border-lime-500 bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-lime-400 mb-2">
                    {opt.title || opt.pageTitle}
                  </h3>
                  {opt.price && (
                    <p className="text-gray-300 mb-1">
                      <strong>Price:</strong> {opt.price}
                    </p>
                  )}
                  {opt.intro && (
                    <p className="text-gray-300 mb-1 italic">{opt.intro}</p>
                  )}
                  {opt.details && (
                    <p className="text-gray-300 mb-2">
                      <strong>Details:</strong> {opt.details}
                    </p>
                  )}
                  {opt.description && (
                    <p className="text-gray-300 mb-2">{opt.description}</p>
                  )}
                  {opt.idealFor && (
                    <p className="text-gray-300 mb-4">
                      <strong>Ideal for:</strong> {opt.idealFor}
                    </p>
                  )}
                  {opt.podcastText && (
                    <p className="text-gray-300 mb-4">{opt.podcastText}</p>
                  )}
                  {opt.podcastEmbed && (
                    <div className="mt-4 rounded-lg shadow-md overflow-hidden border border-lime-500">
                      <div
                        dangerouslySetInnerHTML={{ __html: opt.podcastEmbed }}
                      />
                    </div>
                  )}
                  {opt.features && (
                    <p className="text-gray-300 mb-4">
                      <strong>Features:</strong>
                      <ul className="list-disc pl-6">
                        {opt.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </p>
                  )}
                  <div className="flex flex-col gap-2">
                    {opt.bookings?.map((txt, i) => (
                      <button
                        key={i}
                        onClick={() => openModal(txt)}
                        className="text-lime-400 hover:text-lime-300 text-left"
                      >
                        {txt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Sticky Quick Book */}
        <div className="fixed bottom-6 right-6">
          <Link
            href={program.buttonLink}
            className="bg-lime-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-lime-600 transition"
          >
            Quick Book
          </Link>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-xl max-w-md w-full space-y-4">
              <h3 className="text-xl font-semibold text-lime-400">
                Confirm Booking
              </h3>
              <p className="text-gray-300">
                You are about to book: <strong>{selectedBooking}</strong>
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-300"
                >
                  Cancel
                </button>
                <Link
                  href="#"
                  className="bg-lime-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-lime-600"
                >
                  Confirm
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}