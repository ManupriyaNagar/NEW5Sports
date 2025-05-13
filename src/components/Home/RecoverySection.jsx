import Image from "next/image";

export default function RecoverySection() {
  return (
    <section className="bg-black text-white px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Top Block */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              The Game-Changing <br />
              Recovery System That <br />
              Brings Athletes Back <br />
              Stronger Than Ever
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              For years, the secrets of elite recovery and rehabilitation have
              been confined to professional sports circles. As an athlete, you’ve
              been left with generalized treatments or ineffective solutions. ➔
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 border border-lime-400 rounded-2xl overflow-hidden p-2">
            <Image
              src="/runner-right.png" // Replace with actual image path
              alt="Runner"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom Block */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              Here’s the Real Problem <br />
              with Recovery Today:
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Standard recovery methods don’t work for everyone. Generic programs,
              trendy techniques, and lack of personalized care result in re-injury
              and poor performance. ➔
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 border border-green-400 rounded-2xl overflow-hidden p-2">
            <Image
              src="/runner-left.png" // Replace with actual image path
              alt="Runner"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
