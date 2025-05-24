import React from 'react';

const FacilitySection = () => {
  const images = [
   '/c1.jpg',
    '/c2.jpg',
    '/c3.jpg',
    '/c4.jpg',
  ];

  return (
    <div className="py-12 px-4">
      {/* Heading and Line */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold uppercase text-gray-100">Our Facilities</h2>
        <hr className="border-gray-300 w-16 mx-auto mt-2" />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="w-full h-48 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Facility Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Button and Carousel Indicator */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button className="bg-red-700 text-white font-semibold py-3 px-6 rounded-full flex items-center hover:bg-red-800 transition">
          Learn More About Our Facilities
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-700 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FacilitySection;