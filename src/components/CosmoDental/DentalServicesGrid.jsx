import data from './../../lib/dentalData';

export default function DentalServicesGrid() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((service, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            {/* Placeholder for Image */}
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">[Image Placeholder]</span>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title.toUpperCase()}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <button className="self-start bg-red-800 text-white px-4 py-2 rounded-full flex items-center hover:bg-red-700 transition">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}