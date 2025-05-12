// src/components/Home/InfoGrid.jsx
'use client';
import React from 'react';
import WavyBackground from '@/components/global/Background/WavyBackground';

const Card = ({ className }) => (
  <div
    className={`
      bg-white text-black p-6 rounded-3xl shadow-lg
      w-full max-w-[320px]
      ${className}
    `}
  >
    <h3 className="text-2xl font-bold mb-3 leading-snug">
      It’s Not Just <br />
      About Skills
    </h3>
    <p className="text-base leading-relaxed">
      Modern sports are demanding. <br />
      Without building strength, speed, <br />
      and resilience, you risk falling behind.
    </p>
  </div>
);

const InfoGrid = () => (
  <section className="relative bg-black text-white overflow-hidden py-20">
    {/* Wave background */}


    {/* Heading */}
    <div className="relative z-10 text-center  mb-40">
      <h2 className="text-5xl font-bold">Unlock Your Potential</h2>
      <p className="mt-2 text-lg text-gray-200">
        Empower your game with insights provided
      </p>
    </div>

    {/* Central “5” & athlete */}
    <div className="relative z-10 flex justify-center items-center mb-12">
      {/* Big translucent “5” */}
      <span
        className="
          absolute 
          text-[20rem] font-extrabold 
          text-black/10 
          select-none 
          pointer-events-none
        "
      >
        5
      </span>
      {/* Athlete image */}
      <img
        src="/3.png"
        alt="Athlete"
        className="relative h-[380px] object-contain"
      />
    </div>

    {/* Four cards */}
    <div className=" z-10 max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 absolute top-0 left-0 right-0 bottom-0">
      {/* top-left */}
      <div className="self-end justify-self-start">
        <Card />
      </div>

      {/* top-right */}
      <div className="self-end justify-self-end">
        <Card />
      </div>

      {/* bottom-left */}
      <div className="self-start justify-self-start">
        <Card />
      </div>

      {/* bottom-right */}
      <div className="self-start justify-self-end">
        <Card />
      </div>
    </div>
  </section>
);

export default InfoGrid;
