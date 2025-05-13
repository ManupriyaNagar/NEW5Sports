import Image from "next/image";

export default function PerformanceSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elevate Your Performance
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Empower your game with insights provided
        </p>

        <div className="relative p-6 bg-gradient-to-b from-black to-[#011e1c] rounded-2xl border border-[#00ff94]">
          <div className="absolute inset-0 z-0 bg-[url('/wave-pattern.svg')] bg-cover opacity-20 rounded-2xl" />
          
          <div className="relative z-10 grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-[#009e60] text-black rounded-xl px-6 py-8 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">It’s Not Just About Skills</h3>
                <p className="text-sm">
                  Modern sports are demanding. Without building strength, speed,
                  and resilience, you risk falling behind.
                </p>
              </div>
              <button className="mt-6 bg-lime-300 font-bold text-black py-2 rounded-md hover:bg-lime-400 transition">
                Read More
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#d4ff00] text-black rounded-xl px-6 py-8 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">It’s Not Just About Skills</h3>
                <p className="text-sm">
                  Modern sports are demanding. Without building strength, speed,
                  and resilience, you risk falling behind.
                </p>
              </div>
              <button className="mt-6 bg-lime-300 font-bold text-black py-2 rounded-md hover:bg-lime-400 transition">
                Read More
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#4cd2ff] text-black rounded-xl px-6 py-8 shadow-lg flex flex-col justify-between relative">
              <div className="absolute -top-5 right-5">
                <Image src="/badge-icon.png" alt="Team Badge" width={40} height={40} className="rounded-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black">It’s Not Just About Skills</h3>
                <p className="text-sm text-black">
                  Modern sports are demanding. Without building strength, speed,
                  and resilience, you risk falling behind.
                </p>
              </div>
              <button className="mt-6 bg-lime-300 font-bold text-black py-2 rounded-md hover:bg-lime-400 transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
