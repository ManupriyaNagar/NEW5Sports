'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProgrammeDetailClient({ programme }) {
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
    <section className="py-16 px-4 md:px-12 bg-gray-900 min-h-screen text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-lime-400">
            {programme.title}
          </h1>
          <p className="text-xl text-gray-300">{programme.description}</p>
          <div className="mx-auto w-64 h-64 relative mb-6">
            <Image
              src={programme.image}
              alt={programme.title}
              fill
              className="object-contain rounded-xl shadow-lg"
              priority
            />
          </div>
          <Link
            href={programme.buttonLink}
            className="bg-lime-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-600 transition"
          >
            {programme.buttonText}
          </Link>
        </div>

        {/* Consultations */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-lime-300 text-center">
            Consultation Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programme.consultations.map((opt) => (
              <div
                key={opt.id}
                className="border border-lime-500 bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-lime-400 mb-2">
                  {opt.title}
                </h3>
                <p className="text-gray-300 mb-1">
                  <strong>Price:</strong> {opt.price}
                </p>
                <p className="text-gray-300 mb-1">
                  <strong>Duration:</strong> {opt.duration}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Details:</strong> {opt.details}
                </p>
                <p className="text-gray-300 mb-4">
                  <strong>Ideal for:</strong> {opt.idealFor}
                </p>
                <div className="flex flex-col gap-2">
                  {opt.bookings.map((txt, i) => (
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
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/Atheletes/injury"
            className="text-lime-400 hover:text-lime-300 underline"
          >
            ← Back to programmes
          </Link>
        </div>

        {/* Sticky Quick Book */}
        <div className="fixed bottom-6 right-6">
          <Link
            href={programme.buttonLink}
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
      </div>
    </section>
  );
}
