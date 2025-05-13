// src/components/Home/FeatureCard.jsx
'use client';
import React from 'react';

const PartneredSection = ({
  topTitle,
  topText,
  topImage,
  bottomTitle,
  bottomText,
}) => (
  <div className="max-w-[1350px] mx-auto border border-green-500 rounded-3xl overflow-hidden mt-10">
    {/* ───── Top Section ───── */}
    <div className="bg-black text-white p-8 flex flex-col lg:flex-row items-center gap-6">
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
    <div className="bg-green-500 p-8 text-white text-center">
      <h3 className="text-2xl lg:text-3xl font-bold">{bottomTitle}</h3>
      <p className="mt-2 text-base lg:text-lg max-w-2xl mx-auto">
        {bottomText}
      </p>
    </div>
  </div>
);

export default PartneredSection;
