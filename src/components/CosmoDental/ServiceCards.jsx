import React from 'react';

const ServiceCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 rounded-b-xl overflow-hidden border border-t-0 border-b-0 border-blue-400">
      {/* Card 1 */}
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg transform -rotate-3 w-full md:w-126 min-h-[400px] flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-4">
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V5m0 14v-3m-7-7h3m12 0h-3"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center uppercase mb-2">World Class Care</h2>
          <hr className="border-gray-600 w-16 mx-auto mb-4" />
          <p className="text-center text-gray-300">
            With years of experience in providing exceptional dental care, our team at COSMODENTAL, 5 Sports Hospital is committed to delivering world-class dental treatments in a comfortable and relaxed environment. Our goal is to ensure that every patient receives the best possible care while feeling at ease throughout their visit.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg transform rotate-3 w-full md:w-126 min-h-[400px] flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-4">
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.243l-4.243-4.243m0 0L9.172 7.757M13.414 11.5h-6m6 0v6"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center uppercase mb-2">State-of-the-Art Technology</h2>
          <hr className="border-gray-600 w-16 mx-auto mb-4" />
          <p className="text-center text-gray-300">
            We pride ourselves on using the latest and most advanced dental equipment and technology to offer individualized care. By combining cutting-edge tools with thorough diagnostics, we provide high-quality, precise treatments that cater to your unique needs. At COSMODENTAL, we ensure that every procedure is as effective and efficient as possible, giving you the best results with the highest level of care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;