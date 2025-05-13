import Image from "next/image";

export default function PartneredSection() {
  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-green-400">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6 bg-black">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Partnered with a <br /> Leading Firm
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Elite recovery methods are being made accessible to all— enabling
              faster healing and peak performance.
            </p>
          </div>
          <div className="w-full md:w-52 h-28 flex-shrink-0">
            <Image
              src="/flag-building.jpg" // Replace with your actual image path
              alt="Flag and building"
              width={208}
              height={112}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-lime-400 text-black px-6 py-6">
          <h4 className="text-lg md:text-xl font-bold mb-1">
            Advanced Machines for Testing
          </h4>
          <p className="text-sm md:text-base max-w-3xl">
            Our state-of-the-art testing equipment helps us assess performance,
            strength, and recovery in real-time, allowing us to deliver the most
            effective rehab solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
