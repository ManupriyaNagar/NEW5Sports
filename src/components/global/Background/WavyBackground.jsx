// src/components/global/Background/WavyBackground.jsx
'use client';
import React from 'react';
import defaultBackgroundImage from './../../../../public/herobg.png';

const WavyBackground = ({
  height = 400,
  lines = 30,
  maxAmplitude = 20,
  className = '',
  backgroundImage = null,
  children,
}) => {
  const yPositions = Array.from({ length: lines }, (_, i) =>
    (i * height) / (lines - 1)
  );

  // Use passed backgroundImage or fallback to default
  const bgImageUrl =
    backgroundImage?.src || (typeof backgroundImage === 'string' && backgroundImage) || defaultBackgroundImage.src;

  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        bg-cover bg-center bg-no-repeat
        ${className}
      `}
      style={{
        height,
        backgroundImage: `linear-gradient(to bottom, rgba(0, 4, 0, 0.5), rgba(4, 0, 0, 0.7)), url(${bgImageUrl})`,
      }}
    >
      {/* SVG waves */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {yPositions.map((y, idx) => {
          const amp = maxAmplitude * (idx / (lines - 1));
          const d = `M0,${y} Q50,${y + amp} 100,${y}`;
          return (
            <path
              key={idx}
              d={d}
              stroke="rgba(0,0,0,0.6)"
              strokeWidth="0.5"
              fill="none"
            />
          );
        })}
      </svg>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;
