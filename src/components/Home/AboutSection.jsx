'use client';
import React from 'react';

const AboutUsSection = () => (
  <section className="flex flex-col md:flex-row w-full bg-black text-white px-4 md:px-20 py-10">
    {/* Main Article with notches */}
    <article className="relative flex flex-col bg-lime-400 border border-white rounded-2xl overflow-visible p-6 md:p-10 w-full">
      {/* Left notch: hidden on mobile */}
      <div
        className="hidden md:block absolute -left-8 top-1/2 w-14 h-14 bg-black rounded-full
                   transform -translate-y-1/2"
      />
      {/* Right notch: hidden on mobile */}
      <div
        className="hidden md:block absolute -right-8 top-1/2 w-14 h-14 bg-black rounded-full
                   transform -translate-y-1/2"
      />

      <h2 className="self-center text-black text-4xl md:text-6xl font-bold leading-none text-center">
        About us
      </h2>

      <p className="mt-4 text-lg text-black md:text-2xl text-center max-w-3xl mx-auto">
        Learn more about our mission to redefine sports medicine and athlete care.
      </p>
    </article>
  </section>
);

export default AboutUsSection;
