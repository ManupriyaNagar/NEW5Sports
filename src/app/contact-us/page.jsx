'use client';

import React from 'react';
import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from 'framer-motion';

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

function ContactUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/pain.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Notched Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full container mx-auto z-10 px-4"
        >
          <div className="relative flex flex-col py-10 w-full bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible">
            {/* Left notch */}
            <div
              className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-left-4 max-md:w-[40px] max-md:h-[40px]"
            />
            {/* Right notch */}
            <div
              className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2 max-md:-right-4 max-md:w-[40px] max-md:h-[40px]"
            />
            <h1 className="self-center text-4xl md:text-6xl font-extrabold uppercase text-black">
              Get In Touch With Us
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-black text-white py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center">
            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <div className="bg-lime-400 p-3 rounded">
                <MapPin className="h-10 w-10 text-black" />
              </div>
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide text-white">Location</h4>
                <p className="text-gray-200 text-xs">MPS Building, Mullur Sarjapur Road</p>
                <a
                  href="https://maps.app.goo.gl/cE8hKHAtN4VsGYSX8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 text-xs underline"
                >
                  View Location
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <div className="bg-lime-400 p-3 rounded">
                <Phone className="h-10 w-10 text-black" />
              </div>
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide text-white">Phone</h4>
                <p className="text-gray-200">9353555755, 9353555855</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <div className="bg-lime-400 p-3 rounded">
                <Mail className="h-10 w-10 text-black" />
              </div>
              <div>
                <h4 className="uppercase text-sm font-bold tracking-wide text-white">Email</h4>
                <p className="text-gray-200">care@5sportshealth.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black text-white py-16 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col items-center justify-center"
        >
          {/* Form Section */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-gradient-to-b from-black to-[#001f1f] p-8 rounded-lg shadow-xl border border-lime-400"
          >
            <div className="space-y-4 mb-10">
              <h3 className="text-lime-400 uppercase font-bold tracking-wide text-sm">
                Contact Us
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">ASK US ANYTHING.</h2>
              <p className="text-gray-200 leading-relaxed">
                We are here to assist you with your inquiries. Fill out the form below, and we’ll get back to you soon!
              </p>
            </div>
            <div className="space-y-6">
              {/* Name & Phone Number */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-lg"
                />
              </div>

              {/* City & State */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="City"
                 
                  className="flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="flex-1 p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-lg"
                />
              </div>

              {/* Email Address */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-lg"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-lg"
              />

              {/* Submit Button */}
              <button
                type="button"
                className="bg-lime-400 text-black font-bold py-3 px-6 uppercase hover:bg-lime-500 transition-colors w-full rounded-lg"
              >
                Send Message
              </button>

              {/* Note about Form Submission */}
              <p className="text-gray-200 text-sm text-center">
                Note: Form submission is not supported in this sandboxed environment. Please use the phone or email above to contact us.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default ContactUsPage;