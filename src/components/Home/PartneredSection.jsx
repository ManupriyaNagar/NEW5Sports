// src/components/Home/FeatureCard.jsx
'use client';
import React from 'react';
import bgimg from '../../../public/herobg.png';
const PartneredSection = ({
  topTitle,
  topText,
  topImage,
  bottomTitle,
  bottomText,
}) => (
  <section className=' bg-black'>
  <div className="max-w-[1350px] mx-auto border border-green-500 rounded-3xl overflow-hidden  relative ">
    {/* ───── Top Section ───── */}
    <div className="bg-black text-white p-8 flex flex-col lg:flex-row items-center gap-6 ">
      <div className="flex-1 space-y-4">
        <h3 className="text-3xl lg:text-4xl font-bold">{topTitle}</h3>
        <p className="text-lg">{topText}</p>
      </div>
      <img
        src={topImage}
        alt={topTitle}
        className="w-full lg:w-1/3 object-cover rounded-xl"
      />
    </div>

    {/* ───── Bottom Section (Flat Green) ───── */}
    <div className=" relative border-2 border-green-900 rounded-3xl h-[15rem] overflow-visible  bg-lime-900 "
         style={{
             backgroundImage: `linear-gradient(to top, rgba(0, 4, 0, 0.5), rgba(4, 0, 0, 0.9)), url(${bgimg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
      <h3 className="text-2xl lg:text-3xl font-bold mt-6 px-2">{bottomTitle}</h3>
      <p className="mt-2 text-base lg:text-lg  mx-auto px-2">
        {bottomText}
      </p>
    </div>
  </div>
  </section>
);

export default PartneredSection;
