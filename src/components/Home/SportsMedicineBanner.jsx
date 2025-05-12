// src/components/Home/SportsMedicineBanner.jsx
'use client';
import React from 'react';
import WavyBackground from '@/components/global/Background/WavyBackground';

const bulletPoints = [
  '360° care for orthopedics and sports athletes all under one roof.',
  'State-of-the-art facilities and advanced diagnostic imaging.',
  'Personalized treatment plans designed for athletes at all levels (beginners, semi-pros, pros).',
  'Age-specific plans from childhood (5+) to peak performance years.',
];

export default function SportsMedicineBanner() {
  return (
    <section className="mt-16 flex justify-center">
      <WavyBackground height={500} className="w-full max-w-[1350px]">
        {/* Top content: image + text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-6 pt-8 text-white">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/3.png"
              alt="Athlete running"
              className="h-[300px] lg:h-[400px] object-contain"
            />
          </div>

          {/* Text + bullets */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">
              Pioneering Sports Medicine for Athletes
            </h2>
            <ul className="space-y-3 mb-4 list-disc list-inside text-lg">
              {bulletPoints.map((txt, i) => (
                <li key={i}>{txt}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom buttons */}
        <div
  className="
    absolute
    left-1/2 bottom-0
    transform -translate-x-1/2 translate-y-1/2
    flex flex-wrap justify-center gap-6
 
  "
>
  <a
    href="tel:9353555755"
    className="
      bg-gradient-to-r from-lime-400 to-green-400
      text-black font-bold
      rounded-full
      px-8 py-4
      shadow-xl
      hover:from-lime-300 hover:to-green-300
      transform hover:scale-105
      transition
      text-center z-50
    "
  >
    📞 Call Us Anytime<br />
    <span className="block text-2xl">9353555755</span>
  </a>
  <a
    href="#learn-more"
    className="
      bg-white text-black font-bold
      rounded-full
      px-8 py-4
      shadow-xl
      hover:bg-gray-100
      transform hover:scale-105
      transition
      text-center
    "
  >
    Learn More →
  </a>
</div>

      </WavyBackground>
    </section>
  );
}
