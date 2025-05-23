// src/components/Home/FounderSection.jsx
'use client';
import React from 'react';
import bgimg from '../../../public/herobg.png';

export default function FounderSection() {
  return ( 
    <section className="relative  px-5  md:px-20">

<div className='bg-green-500 py-20 rounded-2xl'> 
<div className="relative z-10 max-w-6xl mx-auto px-6 text-justify text-white space-y-4 bg-green-500  text-justify">
        <h2 className="text-3xl font-bold">
          Founded in 2024, 5 Sports Hospital has become a beacon of excellence
          in sports medicine and orthopedic care.
        </h2>
        <p className="text-lg">
          Our visionary founders, Dr. Pooja Jhade and Dr. Nataraj H M, established 
          a center that combines cutting-edge medical technology with personalized 
          care—dedicated to helping athletes achieve peak performance.
        </p>
      </div>
</div>

    </section>
  );
}
