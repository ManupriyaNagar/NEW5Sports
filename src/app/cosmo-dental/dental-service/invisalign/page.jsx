



import React from 'react';
import invisalign from '../../../../components/CosmoDental/invisalign';

export default function DentalImplantsSection() {
  return (
    <div className="container mx-auto py-10 px-4 text-center">
         <section className="flex w-full text-black max-md:flex-col mb-8 px-2 sm:px-3">
            <article className="relative flex flex-col w-full bg-lime-400 border border-white rounded-[32px] overflow-visible py-8 sm:py-10">
              <div className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-r-full transform -translate-y-1/2 left-0 hidden md:block" />
              <div className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-l-full transform -translate-y-1/2 right-0 hidden md:block" />
              <h2 className="self-center text-3xl sm:text-4xl md:text-5xl font-bold">
                Invisalign
              </h2>
              <p className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl text-center max-w-2xl sm:max-w-2xl md:max-w-6xl mx-auto px-4 hidden md:block">
                Invisalign offers a discreet and comfortable way to straighten your teeth. Using clear, custom-made aligners, this treatment is perfect for those seeking an alternative to traditional braces without compromising aesthetics.
              </p>
            </article>
          </section>
      <h2 className="text-3xl md:text-4xl font-bold text-[#FF0080] mb-6 leading-tight mt-14">
        Invisalign: The Clear Path to a Perfect Smile
      </h2>
      <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto">
        Invisalign is a modern orthodontic treatment that straightens your teeth without the use of metal braces. Using a series of custom-made clear aligners, Invisalign gently moves your teeth into place, giving you a comfortable and discreet alternative to traditional braces. The best part? You can remove them anytime you eat, brush, or floss—making it easier to maintain your daily routine and oral health.
      </p>
        <invisalign />
    </div>
  );
}