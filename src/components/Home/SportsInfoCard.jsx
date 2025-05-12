// src/components/SportsInfoCards.jsx
'use client';
import React from 'react';

import CardComponent from '../global/card/CardComponent';
import cardsData from '../../../public/cardsData.json';
import WavyBackground from '../global/Background/WavyBackground';

const SportsInfoCards = () => (
  <section className=" py-10  mb-[200px]">
    {/* Wrapping div becomes the positioning context */}
    <div className="relative h-[600px]">
      {/* Wave background takes full width + custom height */}
      <WavyBackground
        height={600}
        className="rounded-b-3xl max-w-[1350px] mx-auto"
        
      />

      <div
        className="
          absolute 
          items-center justify-center
           left-0 right-0
         bottom-[-200px]
          flex    gap-8
           pb-8
         
        "
      >
        {cardsData.length > 0 ? (
          cardsData.map((card, idx) => (
            <CardComponent
              key={idx}
              title={card.title}
              description={card.description}
              iconType={card.iconType}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No cards available.</p>
        )}
      </div>
    </div>
  </section>
);

export default SportsInfoCards;
