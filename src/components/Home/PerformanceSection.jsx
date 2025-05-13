'use client';
import Image from 'next/image';
import WavyBackground from '@/components/global/Background/WavyBackground';

const performanceCards = [
  {
    title: "It’s Not Just About Skills",
    description:
      "Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.",
    bgColor: "#009e60",
  },
  {
    title: "It’s Not Just About Skills",
    description:
      "Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.",
    bgColor: "#d4ff00",
  },
  {
    title: "It’s Not Just About Skills",
    description:
      "Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.",
    bgColor: "#4cd2ff",
  },
];

export default function PerformanceSection() {
  return (
    <section className="relative text-white pt-16 pb-48 px-4"> {/* extra bottom padding */}
      {/* Cards Above Wave */}
      <div className="text-center relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elevate Your Performance
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Empower your game with insights provided
        </p>
      </div>

      <div className="container mx-auto text-center relative z-20">
        <div className="grid gap-32 grid-cols-1 md:grid-cols-3">
          {performanceCards.map((card, index) => (
            <div
              key={index}
              className="text-black rounded-xl px-6 py-8  flex flex-col justify-between relative"
              style={{ backgroundColor: card.bgColor }}
            >
              <div>
                <h3 className="text-4xl  font-light text-left mb-2">{card.title}</h3>
                <p className="text-sm  text-left">{card.description}</p>
              </div>
              <button className="mt-44 absolute -z-10 bg-lime-300 font-bold text-black py-2 px-10 rounded-md hover:bg-lime-400 ml-18 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

   
    </section>
  );
}
