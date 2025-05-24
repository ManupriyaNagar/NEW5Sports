// src/global/card/CardComponent.jsx
'use client';
import React, { useState } from 'react';


const Card = ({ title = [], description, iconType }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [lineOne = '', lineTwo = ''] = title;

  return (
    <article
      className={`
        relative bg-lime-400 border border-white
        h-[150px] rounded-[32px] w-[420px]
        transform transition-transform duration-300
        ${isHovered ? 'scale-105' : 'scale-100'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-[24px] top-[24px]">
        <h2 className="text-2xl font-bold text-black leading-tight max-w-[350px]">
          {lineOne}
          <br />
          {lineTwo}
        </h2>
        <p className="mt-4 text-base text-black whitespace-pre-line">
          {description}
        </p>
      </div>

    </article>
  );
};

export default Card;
