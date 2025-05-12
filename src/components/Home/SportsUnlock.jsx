'use client';
import React from 'react';

const Card = () => (
  <div className="bg-white text-black p-6 rounded-3xl shadow-lg w-full max-w-[350px]">
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

const InfoGrid = () => {
  return (
    <section className="relative flex justify-center items-center min-h-[80vh] bg-black px-4 py-16">
      <div className="absolute top-10 left-10">
        <Card />
      </div>
      <div className="absolute top-10 right-10">
        <Card />
      </div>
      <div className="absolute bottom-10 left-10">
        <Card />
      </div>
      <div className="absolute bottom-10 right-10">
        <Card />
      </div>

      {/* Optional background grid or effect */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-lime-400 via-sky-400 to-black z-0 rounded-xl pointer-events-none" />
    </section>
  );
};

export default InfoGrid;
