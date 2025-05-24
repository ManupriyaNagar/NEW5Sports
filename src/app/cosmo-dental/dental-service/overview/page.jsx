import React from 'react';
import DentalServiceGrid from './../../../../components/CosmoDental/DentalServicesGrid' // Import the DentalServicesGrid component
const data = [
  {
    category: "General Dentistry",
    services: [
      "Comprehensive Oral Exams",
      "Routine Teeth Cleaning",
      "Deep Cleaning for Teeth & Gums",
      "Composite Fillings",
      "Dental Inlays & Onlays",
      "Periodical (Gum) Care",
      "Preventive Dentistry",
      "Orthodontic Treatment (Braces)",
      "Pediatric Dentistry Care",
      "Root Canal Treatment",
      "Tooth Extractions",
      "Wisdom Tooth (3rd Molar) Removal"
    ]
  },
  {
    category: "Cosmetic Dentistry",
    services: [
      "Invisalign Clear Aligners",
      "Complete Smile Makeovers",
      "Ceramic Veneers",
      "Laser Teeth Whitening",
      "Enamel Reshaping",
      "Dental Bonding",
      "Gummy Smile Correction"
    ]
  },
  {
    category: "Restorative Dentistry",
    services: [
      "Dental Crowns & Bridges",
      "Dental Implants",
      "Implant-Supported Crowns & Bridges",
      "Removable Dentures",
      "Snap-On Dentures",
      "Fixed Dentures",
      "Full Mouth Rehabilitation",
      "All-On-Four Dental Implants"
    ]
  }
];


export default function Services() {
  return (
    <div className="container mx-auto py-10 px-4 ">
         <section className="flex w-full text-black max-md:flex-col mb-8 px-2 sm:px-3">
            <article className="relative flex flex-col w-full bg-lime-400 border border-white rounded-[32px] overflow-visible py-8 sm:py-10">
              <div className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-r-full transform -translate-y-1/2 left-0 hidden md:block" />
              <div className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-l-full transform -translate-y-1/2 right-0 hidden md:block" />
              <h2 className="self-center text-4xl sm:text-5xl md:text-6xl font-bold">
                Our Services
              </h2>
              <p className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-4 hidden md:block">
                Dedicated to Delivering Outstanding Dental Care
              </p>
            </article>
          </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 boder border-2 border-blue-500 border-t-0 border-rounded-b-xl p-6 rounded-b-xl overflow-hidden">
        {data.map((section, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {index === 0 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                )}
                {index === 1 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                )}
                {index === 2 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                )}
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-200 mb-4">{section.category.toUpperCase()}</h2>
            <ul className="space-y-2 text-gray-100">
              {section.services.map((service, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-red-500 mr-2">✔</span> {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <DentalServiceGrid/>
     
    </div>
    
  );
}