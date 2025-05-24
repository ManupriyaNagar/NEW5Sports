






// src/components/Home/InfoGrid.jsx
'use client';
import React from 'react';
import bgimg from '../../../public/herobg.png';
import SportIcon from './../../components/global/card/SportIcon';

const cardData = [
  {
    id: 1,
    title: "It’s Not Just Skills",
    description:
      "Comprehensive orthopedics and physiotherapy facilities all under one roof, providing holistic care for athletes.",
  },
  {
    id: 2,
    title: "Train for Longevity",
    description:
      "Access state-of-the-art performance labs and advanced diagnostics to ensure sustainable athletic health and peak performance.",
  },
  {
    id: 3,
    title: "Smart Recovery ",
    description:
      "Personalized treatment plans designed to optimize recovery and enhance performance for athletes at every level.",
  },
  {
    id: 4,
    title: "Beyond the Game",
    description:
      "Performance enhancement programs tailored for all age groups, from youth athletes to elite seasoned professionals.",
  },
];
;

const Card = ({ title, description, className }) => (
  <div
    className={`bg-white text-black p-6 rounded-3xl shadow-lg w-full max-w-[320px] max-h-[240px] ${className}`}

  >
  
 
    <h3 className="text-2xl font-bold mb-3 leading-snug">
      {title}
    </h3>
    <p className="text-base leading-relaxed">{description}</p>
  </div>
);

const InfoGrid = () => (

  <>
   <div className="relative z-10 text-center  bg-black py-10">
      <h2 className="text-5xl font-bold">Unlock Your Potential</h2>
      <p className="mt-2 text-lg text-gray-200">
        Empower your game with insights provided
      </p>
    </div>
  

  <section className="relative bg-black text-white  py-20  px-16" >


        <div className=" relative border-2 border-lime-400 rounded-4xl h-[25rem] overflow-visible  bg-blue-950 "
         style={{
             backgroundImage: `linear-gradient(to top, rgba(0, 4, 0, 0.5), rgba(4, 0, 0, 0.9)), url(${bgimg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
             </div>

   


    {/* Cards Grid */}
    <div className="z-10 max-w-[1300px]  mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 absolute top-0 left-0 right-0 bottom-0">
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

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
  <img
    src="/hero1.png"
    alt="Athlete Left"
    className="h-[580px] object-contain absolute"
  />
  <img
    src="/5icon.png"
    alt="Athlete Right"
    className="h-[480px] object-contain ml-[-200px]" // adjust overlap as needed
  />
</div>

    </div>

 
  </section>
    </>
);

export default InfoGrid;
