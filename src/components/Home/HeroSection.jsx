"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Koulen } from 'next/font/google';
import { CalendarCheck } from 'lucide-react';

const koulen = Koulen({
  subsets: ['latin'],
  weight: '400',
});

// const images = [
//   '/news1.jpg', '/news1.jpg', '/news1.jpg', '/news1.jpg',
//   '/news1.jpg', '/news1.jpg', '/news1.jpg', '/news1.jpg',
// ];

const HeroSection = () => {
  return (
    <section>
      <section className="text-white bg-black py-10 overflow-hidden  px-4 md:px-16 min-h-screen">
        <div className="relative border-2 border-lime-400 rounded-4xl overflow-visible px-0 h-[80vh]">
          {/* Background Layers */}
    
          {/* Scrolling Images */}
          {/* <div className="relative w-full overflow-hidden py-4 z-10">
            <motion.div
              className="flex min-w-max"
              style={{ width: 'fit-content' }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            >
              {images.concat(images).map((src, idx) => (
                <img
                  key={`scroll-image-${idx}`}
                  src={src}
                  alt={`scroll-img-${idx}`}
                  className="h-24 w-72 rounded-full mr-4"
                />
              ))}
            </motion.div>
          </div> */}

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10 text-center rounded-full mt-5">
            <div className="flex items-center">
              <div className="items-center flex flex-col justify-center w-full rounded-full py-4">
                <h1 className="text-5xl font-extrabold">5 SPORTS</h1>
                <p className="mt-2 text-xl">Where Sports Meets Health Excellence</p>
                <p className={`${koulen.className} text-3xl text-[#D3FA22] font-extrabold mt-4`}>
                  INDIA’S FIRST INTEGRATED SPORTS MEDICINE & REHAB CENTER
                </p>
                <p className="mt-4 text-lg">
                  enhancing performance, speeding recovery, and preventing injuries.
                </p>

             <button
                  onClick={() => window.location.href = 'https://kivihealth.com/clinic/fives-sport-hospital-'}
                  className="md:mt-58 mt-24 border-2 md:px-4 md:py-3 rounded-lg md:text-2xl px-1 py-1 font-semibold transition flex items-center justify-center  bg-[#d3fa22] text-black border-white hover:text-green-800 hover:bg-white  transform  "
                >
                  <CalendarCheck className="w-8 h-8" />
                  Book an Appointment
                </button>
             
              </div>

    
              <div>
               
              </div>
            </div>
          </div>

          {/* Buttons on Border */}
        <div className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2">
  <div className="bottom-0 mt-8 justify-center flex flex-col items-center">
    <p className=" md:text-2xl font-thin">UNLOCK A NEW LEVEL OF</p>
    <h2 className="md:text-5xl font-bold mt-2 mb-5">PERFORMANCE</h2>
  </div>

  <div className="flex justify-center space-x-4">
    <button className="bg-[#D3FA22] text-black px-6 py-2 rounded-full">
      Improve Performance
    </button>
    <button className="bg-[#FFFFFF] text-black px-6 py-2 rounded-full">
      Rehabilitate  Injuries
    </button>
  </div>
</div>

        </div>
      </section>
    </section>
  );
};

export default HeroSection;
