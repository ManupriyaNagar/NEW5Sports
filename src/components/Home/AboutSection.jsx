'use client';
import React from 'react';


const AboutUsSection = () => {
  return (
    <section className="flex  w-full text-black px-20 max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
        <div
          className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />
        {/* Right notch */}
        <div
          className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />

        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
          About us
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-12 w-full text-2xl text-center">
  <p className="max-w-3xl">
    Learn more about our mission to redefine sports medicine and athlete care.
  </p>
</div>

      </article>
    </section>
  );
};

export default AboutUsSection;
