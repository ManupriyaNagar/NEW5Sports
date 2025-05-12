
/* src/global/card/CardComponent.jsx */
'use client';
import React, { useState } from 'react';
import SportIcon from './SportIcon';

const CardComponent = ({ title = [], description, iconType }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [lineOne = '', lineTwo = ''] = title;

  return (
    <article
      className={`relative bg-lime-400 border border-white h-[283px] rounded-[32px] w-[420px] transform transition-transform duration-300 $
        {isHovered ? 'scale-105' : 'scale-100'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-[47px] top-[34px]">
        <h2 className="text-4xl font-bold text-black leading-[55.6px] max-w-[248px]">
          <span>{lineOne}</span>
          <br />
          <span>{lineTwo}</span>
        </h2>
        <p className="mt-6 text-xl leading-7 text-black max-w-[380px]">
          {description}
        </p>
      </div>
      <div className="absolute top-0 right-0 bg-black h-[75px] w-[92px] overflow-hidden rounded-tr-[32px] rounded-bl-[32px]">
        <SportIcon type={iconType} />
      </div>
    </article>
  );
};

export default CardComponent;
