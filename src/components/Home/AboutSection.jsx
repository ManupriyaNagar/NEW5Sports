'use client';
import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="flex mt-32 ml-3.5 w-full text-black max-w-[1494px] max-md:mt-10 max-md:max-w-full">
      {/* Main Article */}
      <article className="flex flex-col grow shrink-0 py-16 pr-20 bg-lime-400 border border-white border-solid basis-0 rounded-[32px] w-fit max-md:max-w-full">
        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
          About us
        </h2>
        <div className="flex flex-wrap gap-5 justify-between mt-12 w-full text-4xl text-center leading-[56px] max-w-[1153px] max-md:mt-10 max-md:max-w-full">
          <div className="flex shrink-0 self-start bg-black rounded-full h-[60px] w-[60px]" />
          <p className="max-md:max-w-full">
            Learn more about our mission to redefine sports
            medicine and athlete care.
          </p>
        </div>
      </article>

      {/* Decorative Dot */}
      <div className="flex shrink-0 self-start mt-40 bg-black rounded-full h-[60px] w-[60px] max-md:mt-10" />
    </section>
  );
};

export default AboutUsSection;
