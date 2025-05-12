'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Koulen } from 'next/font/google';
const koulen = Koulen({
  subsets: ['latin'],
  weight: '400', // Only one weight available for Koulen
});

const images = [
  '/news1.jpg', '/news1.jpg', '/news1.jpg', '/news1.jpg',
  '/news1.jpg', '/news1.jpg', '/news1.jpg', '/news1.jpg',
];

const HeroSection = () => {
  return (
    <section className=" text-white py-10 overflow-hidden px-16 min-h-screen">
      {/* Parent Container with Rounded Lime Border */}
      <div className="relative border-2 border-lime-400 rounded-4xl overflow-visible px-0 h-[80vh]">

        {/* Background Layers */}
        <div className="absolute inset-0 z-0 py-10">
          {/* Curved line texture */}
          <div
            className="absolute inset-0 bg-repeat opacity-90 mix-blend-overlay p-2"
          />
          {/* Animated green-black gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-gray-900 opacity-90  rounded-4xl
                       bg-[length:200%_200%] animate-gradient-slide"
          />
        </div>

        {/* Scrolling Images */}
        <div className="relative w-full overflow-hidden py-4 z-10">
          <motion.div
            className="flex min-w-max"
            style={{ width: 'fit-content' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: 'linear',
            }}
          >
            {images.concat(images).map((src, idx) => (
              <img
                key={`scroll-image-${idx}`}
                src={src}
                alt={`scroll-img-${idx}`}
                className="h-24 w-72  rounded-full mr-4"
                onError={() => console.error(`Image failed to load: ${src}`)}
              />
            ))}
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10 text-center rounded-full">
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

            
            </div>

            {/* Scroll Down Arrow */}
            <div>
              <button className="flex flex-col items-center space-y-2 text-white">
                <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l7 7 7-7" />
                  </svg>
                </div>
                <span className="text-sm tracking-widest [writing-mode:vertical-rl] rotate-180">
                  SCROLL DOWN
                </span>
              </button>
            </div>




            
          </div>
         
        </div>

        {/* Buttons on Border */}
        <div className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 z-40">
        <div className="bottom-0 mt-8 justify-center flex flex-col items-center">


                <p className="text-2xl font-thin">UNLOCK A NEW LEVEL OF</p>
                <h2 className="text-5xl font-bold mt-2 mb-5">PERFORMANCE</h2>
              </div>


          <div className="flex justify-center space-x-4">
            <button className="bg-[#D3FA22] text-black px-6 py-2 rounded-full">
              Improve Your Performance
            </button>
            <button className="bg-[#FFFFFF] text-black px-6 py-2 rounded-full">
              Rehabilitate Your Injury
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
