'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from './../contex/ThemeContext';

export default function GetInTouch() {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      className={`py-20 px-4   transition-colors duration-500   ${
        darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className=" mx-auto space-y-12"
      >
        {/* Header */}


        <section className="flex  w-full text-black md:px-20 max-md:flex-col"    id="get-in-touch">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-gray-100 border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
        <div
          className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                 hidden md:block        transform -translate-y-1/2"
        />
        {/* Right notch */}
        <div
          className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                  hidden md:block   transform -translate-y-1/2"
        />

        <h2 className="self-center md:text-6xl font-bold leading-none max-md:text-4xl ">
        Get in Touch
        </h2>

        <div className="flex-wrap gap-5 justify-center mt-5 w-full md:text-2xl text-center px-2 hidden md:block">
  <p className="max-w-3xl">
  Have questions? Reach out to us—we’re here to help you.
  </p>
</div>

      </article>
    </section>







        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl  mx-auto">
          {/* Message Form Card */}
          <motion.div
            variants={itemVariants}
            className={`relative bg-lime-400 border border-black rounded-[32px] p-8 shadow-lg transform transition-transform duration-300 hover:scale-105`}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4 ">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg outline-none border border-gray-900 placeholder-black"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg outline-none border border-gray-900 placeholder-black"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message "
                className="w-full p-3 rounded-lg outline-none border border-gray-900 placeholder-black"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 font-bold rounded-lg bg-black text-white hover:bg-gray-900 transition "
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details Card */}
          <motion.div
            variants={itemVariants}
            className={`relative bg-white border border-black rounded-[32px] p-8 shadow-lg transform transition-transform duration-300 hover:scale-105`}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">
              Contact Details
            </h3>
            <div className="space-y-4 text-black">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-black" />
                <span>93535 55855</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-black" />
                <span>fivesportshospital@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-black mt-1" />
                <span>
                  Site No 40 & 41, 1st floor MPS Building,<br />
                  Ambedkar Nagar Mullur, Sarjapur Road,<br />
                  Carmelram, Bangalore 560035
                </span>
              </div>
              <div className="mt-6 h-40 rounded-lg overflow-hidden">
                <iframe
                  title="Location Map"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799132815!2d-74.25986715568886!3d40.69767006778708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18fbbfbd%3A0x8c0b2a7d0b7b3c02!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629289997811!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
