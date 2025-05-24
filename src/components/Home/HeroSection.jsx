"use client";
import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Koulen } from 'next/font/google';
import { CalendarCheck } from 'lucide-react';
import bgimg from '../../../public/herobg.png'; // Ensure this path is correct

const koulen = Koulen({
  subsets: ['latin'],
  weight: '400',
});

const words = ["Diagnose", "Recover", "Elevate"];
const images = [
  '/football.gif', '/rehab.gif', '/cricket.gif', '/tannis.gif',
  '/football.gif', '/rehab.gif', '/cricket.gif', '/tannis.gif',
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500); // Change word every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <section
        className="text-white py-10 overflow-hidden px-4 md:px-16 md:min-h-screen relative"
      >
        <div
          className="z-20 relative border-2 border-lime-400 rounded-3xl overflow-visible px-0 h-[80vh] bg-green-900"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 4, 0, 0.5), rgba(4, 0, 0, 0.9)), url(${bgimg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src="/hero1.png"
            alt="Left Decoration"
            className="absolute bottom-0 -left-12 w-32 h-32 md:w-[30rem] md:h-[30rem] object-contain z-20 hidden md:block"
          />

          <img
            src="/hero2.png"
            alt="Right Decoration"
            className="absolute bottom-0 -right-2 md:w-[25rem] object-contain z-20 hidden md:block"
          />

          <div className=" w-[91vw] -z-50 mx-auto overflow-hidden py-4 relative">
            <motion.div
              className="flex min-w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >
              {images.concat(images).map((src, idx) => (
                <img
                  key={`scroll-image-${idx}`}
                  src={src}
                  alt={`scroll-img-${idx}`}
                  className="md:h-24 md:w-60  w-36 h-16 rounded-full mr-4"
                />
              ))}
            </motion.div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center rounded-full mt-5">
            <div className="flex items-center">
              <div className="items-center flex flex-col justify-center w-full rounded-full py-4">

                <h1 className="md:text-5xl font-extrabold uppercase text-2xl">5 SPORTS Health</h1>
                <p className="text-xl">Where Sports Meets Health Excellence</p>
                <p className={`${koulen.className} text-3xl text-[#D3FA22] font-extrabold mt-7`}>
                  INDIA’S FIRST INTEGRATED SPORTS MEDICINE & REHAB CENTER
                </p>
                <p className="mt text-lg">
                  enhancing performance, speeding recovery, and preventing injuries.
                </p>

                <h1 className="text-5xl uppercase font-black mt-6 h-[3rem]">
                  <span className="inline-block opacity-0 animate-fadeInOut">{words[index]}</span>
                </h1>

                <button
                  onClick={() => window.location.href = 'https://kivihealth.com/clinic/fives-sport-hospital-'}
                  className="md:mt-5 mt-6 md:px-4 md:py-3 rounded-lg md:text-xl px-2 py-2 font-medium transition flex items-center justify-center text-black hover:text-white hover:bg-white transform animate-gradient gap-2 shadow-2xl shadow-gradient"
                >
                  <CalendarCheck className="w-6 h-6" />
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2">
            <div className="bottom-0 mt-8 justify-center flex flex-col items-center">
              <p className="md:text-xl text-[0.8rem]  font-thin">UNLOCK A NEW LEVEL OF</p>
              <h2 className="md:text-5xl font-bold mt-2 mb-5">PERFORMANCE</h2>
              
            </div>

            <div className="flex justify-center space-x-4">
              <button className="bg-[#D3FA22] text-black md:px-6 md:py-2 rounded-full  hidden md:block">
                Improve Performance
              </button>
              <button className="bg-[#FFFFFF] text-black md:px-6 md:py-2 rounded-full  hidden md:block">
                Rehabilitate Injuries
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
