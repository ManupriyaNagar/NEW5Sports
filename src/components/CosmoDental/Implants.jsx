import Image from "next/image";

export default function Implant() {
  return (
    <section className="bg-black text-white px-4 py-16 relative">
      <div className="max-w-7xl mx-auto space-y-20 border border-2 border-blue-500 border-t-0 border-rounded-b-xl p-6 px-10 rounded-b-xl overflow-hidden">

        {/* Top Block */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-left">
              Revitalize Your Smile <br />
              with COSMODENTAL's Advanced <br />
              Dental Implants Treatment <br />
              at 5 Sports Hospital

            </h2>
            <p className="text-gray-300 text-sm md:text-base text-left" >
              At <span className="text-lime-500"> COSMODENTAL </span>, we understand the impact of missing teeth on your confidence and daily life. Our <span className="text-lime-500"> Dental Implants Treatment </span> provides a revolutionary solution to restore both the look and functionality of your smile. Designed to feel, look, and perform like natural teeth, dental implants offer a permanent, reliable solution that allows you to eat, smile, and speak freely, all while preserving your natural facial contours.
            </p>
            <br />
            <p className="text-gray-300 text-sm md:text-base text-left">
              Dental implants not only restore your ability to chew and smile with confidence but also enhance the overall health and stability of your mouth. With our state-of-the-art technology and expert care, you can enjoy a lifetime of restored functionality and aesthetics.
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
              What Are Dental Implants?
            </h2>
            <p className="text-gray-300 text-sm md:text-base text-left">
              Dental implants are small, titanium posts surgically placed beneath the gums to replace missing tooth roots. Made from medical-grade titanium, these implants fuse naturally with your jawbone in a process called <span className="text-lime-400">osseointegration</span>, creating a stable foundation for replacement teeth. The fusion process ensures that the implant becomes a permanent part of your mouth, providing unmatched support and stability.
            </p>
            <br />
            <p className="text-gray-300 text-sm md:text-base text-left">
             Once the implant has fully integrated with your jawbone, custom restorations such as crowns, bridges, or hybrids are crafted and securely attached, giving you a seamless and natural-looking smile. These restorations are customized to match your existing teeth in both appearance and function.

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

           {/* Third Block */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-left">
              Why Choose COSMODENTAL <br />
              at 5 Sports Hospital for <br />
               Your Dental Implants?

            </h2>
            <p className="text-gray-300 text-sm md:text-base text-left" >
              At <span className="text-lime-500"> COSMODENTAL </span>, we bring together advanced technology and expert care to ensure that your dental implant procedure is smooth, effective, and comfortable. Whether you're replacing one tooth or several, our experienced team will provide a tailored treatment plan to meet your needs. Our dental implants are designed to last a lifetime, helping you regain not just your smile but your self-confidence.
            </p>
            <br />
            <p className="text-gray-300 text-sm md:text-base text-left">
              Join the hundreds of satisfied patients who have transformed their smiles with our dental implants. At <span className="text-lime-400"> 5 Sports Hospital</span>, we’re committed to providing you with top-tier dental care in a professional, compassionate environment.<span className="text-lime-400"> Smile with confidence</span> again—contact us today for your dental implant consultation!
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
      </div>
    </section>
  );
}
