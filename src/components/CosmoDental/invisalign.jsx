import Image from "next/image";

export default function invisalign() {
  return (
    <section className="bg-black text-white px-4 py-16 relative">
      <div className="max-w-7xl mx-auto space-y-20 border border-2 border-blue-500 border-t-0 border-rounded-b-xl p-6 px-10 rounded-b-xl overflow-hidden">

        {/* Top Block */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-left">
             What is Invisalign Made From?

            </h2>
            <p className="text-gray-300 text-sm md:text-base text-left" >
             Invisalign aligners are crafted from BPA-free plastic, providing a smooth, comfortable fit. Unlike metal braces, these clear aligners are virtually invisible, allowing you to straighten your teeth discreetly while going about your life.
            </p>
            
          </div>

          {/* Image */}
          <div className="flex-1 border border-lime-400 rounded-2xl overflow-hidden p-2">
            <Image
              src="/news1.jpg" // Replace with actual image path
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-left">
              Who Can Wear Invisalign?
            </h2>
            <p className="text-gray-300 text-sm md:text-base text-left">
             Invisalign is suitable for both teenagers and adults. Whether you're dealing with gaps, crooked teeth, overbites, or underbites, Invisalign can address a range of orthodontic issues. After an evaluation, our experts will determine if Invisalign is the right treatment for you.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 border border-green-400 rounded-2xl overflow-hidden p-2">
            <Image
              src="/news2.png" // Replace with actual image path
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
