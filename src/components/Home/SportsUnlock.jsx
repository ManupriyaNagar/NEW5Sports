// src/components/Home/InfoGrid.jsx
'use client';
import React from 'react';
import WavyBackground from '@/components/global/Background/WavyBackground';

const cardData = [
  {
    id: 1,
    // title: "It’s Not Just About Skills",
    description:
      "360 facilities of orthopedics & physiotherapy covered under one roof.",
  },
  {
    id: 2,
    // title: "Train for Longevity",
    description:
      "State-of-the-art performance lab & diagnostics.",
  },
  {
    id: 3,
    // title: "Smart Recovery Matters",
    description:
      "Personalized treatment plans designed for athletes at all levels (beginners,semipro-atheletes and pro-atheletes).",
  },
  {
    id: 4,
    // title: "Beyond the Game",
    description:
      "Performance enhancement for agr group ranging from 5 to 80.",
  },
];

const Card = ({ title, description, className }) => (
  <div
    className={`bg-white text-black p-6 rounded-3xl shadow-lg w-full max-w-[320px] ${className}`}
  >
    <h3 className="text-2xl font-bold mb-3 leading-snug">
      {title}
    </h3>
    <p className="text-base leading-relaxed">{description}</p>
  </div>
);

const InfoGrid = () => (
  <section className="relative bg-black text-white overflow-hidden py-20">
    {/* Optional: Wave background */}
    {/* <WavyBackground /> */}

    {/* Heading */}
    <div className="relative z-10 text-center mb-40">
      <h2 className="text-5xl font-bold">Unlock Your Potential</h2>
      <p className="mt-2 text-lg text-gray-200">
        Empower your game with insights provided
      </p>
    </div>

    {/* Central “5” & athlete */}
    <div className="relative z-10 flex justify-center items-center mb-12">
      <span className="absolute text-[20rem] font-extrabold text-black/10 select-none pointer-events-none">
        5
      </span>
      <img
        src="/3.png"
        alt="Athlete"
        className="relative h-[380px] object-contain"
      />
    </div>

    {/* Cards Grid */}
    <div className="z-10 max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 absolute top-0 left-0 right-0 bottom-0">
      <div className="self-end justify-self-start">
        <Card {...cardData[0]} />
      </div>
      <div className="self-end justify-self-end">
        <Card {...cardData[1]} />
      </div>
      <div className="self-start justify-self-start">
        <Card {...cardData[2]} />
      </div>
      <div className="self-start justify-self-end">
        <Card {...cardData[3]} />
      </div>
    </div>
  </section>
);

export default InfoGrid;
