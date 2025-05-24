



import React from 'react';
import Implant from './../../../../components/CosmoDental/Implants'
export default function DentalImplantsSection() {
  return (
    <div className="container mx-auto py-10 px-4 text-center">
         <section className="flex w-full text-black max-md:flex-col mb-8 px-2 sm:px-3">
            <article className="relative flex flex-col w-full bg-lime-400 border border-white rounded-[32px] overflow-visible py-8 sm:py-10">
              <div className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-r-full transform -translate-y-1/2 left-0 hidden md:block" />
              <div className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-l-full transform -translate-y-1/2 right-0 hidden md:block" />
              <h2 className="self-center text-3xl sm:text-4xl md:text-5xl font-bold">
                Replacement teeth that look, feel, 
                <br />and function like natural teeth
              </h2>
              <p className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-4 hidden md:block">
               Chew & Smile With Confidence With Our Dental Implants Treatment
              </p>
            </article>
          </section>
      <h2 className="text-3xl md:text-4xl font-bold text-[#FF0080] mb-6 leading-tight mt-14">
        DISCOVER OUR REVOLUTIONARY DENTAL IMPLANTS TREATMENT THAT HAS HELPED CHANGE THE LIVES OF HUNDREDS OF PATIENTS
      </h2>
      <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto">
        Dental implants are changing the way people live, particularly when provided by an experienced dentist Bangalore patients trust. They are designed to provide a foundation for replacement teeth that look, feel, and function like natural teeth. A person who has lost teeth regains the ability to eat efficiently, knowing that teeth appear natural and that facial contours will be preserved. Patients with dental implants can chew and smile with confidence.
      </p>
<Implant/>
    </div>
  );
}