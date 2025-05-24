import React from 'react';

const IconCardsDentals = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 flex-wrap">
      {/* Card 1 */}
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg transform -rotate-3 w-full md:w-96 min-h-[200px] flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center uppercase mb-2">Discover Who We Are and Why We Stand Out</h2>
        <hr className="border-gray-600 w-16 mx-auto" />
      </div>

      {/* Card 2 */}
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg transform rotate-3 w-full md:w-96 min-h-[200px] flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 7h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2zm-2 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center uppercase mb-2">Receive the Expert Care You Truly Deserve</h2>
        <hr className="border-gray-600 w-16 mx-auto" />
      </div>

      {/* Card 3 */}
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg transform -rotate-3 w-full md:w-96 min-h-[200px] flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-9-6h3m-3 0H6m3 9h3m-3 0H6m6-6v3m0 0v3m0-3H9m3 0h3"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center uppercase mb-2">Experience Our Care: Join Us as a Patient Today</h2>
        <hr className="border-gray-600 w-16 mx-auto" />
      </div>

      {/* Card 4 */}
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg transform rotate-3 w-full md:w-96 min-h-[200px] flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center uppercase mb-2">Find the Perfect Treatment for Your Needs</h2>
        <hr className="border-gray-600 w-16 mx-auto" />
      </div>
    </div>
  );
};

export default IconCardsDentals;