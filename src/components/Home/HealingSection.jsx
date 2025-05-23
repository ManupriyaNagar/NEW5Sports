import Image from "next/image";

const therapies = [
  {
    title: "TECAR THERAPY",
    image: "/qqq3.jpeg", // Replace with actual image path
    description:
      "A revolutionary treatment that enhances tissue repair, reducing pain and accelerating healing through deep heat energy.",
    border: "border-r",
  },
  {
    title: "LASER THERAPY",
    image: "/qqq1.jpeg", // Replace with actual image path
    description:
      "A non-invasive technique that promotes tissue regeneration, reduces inflammation, and speeds up recovery from injuries.",
    border: "border-r",
  },
  {
    title: "SHOCKWAVE THERAPY",
    image: "/qqq2.jpeg", // Replace with actual image path
    description:
      "Uses high-energy sound waves to treat musculoskeletal pain, improve blood flow, and stimulate healing in damaged tissues.",
    border: "",
    titleColor: "text-green-400",
  },
];

export default function HealingSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className=" text-center">
        {/* Header */}
        <section className="flex  w-full text-black px-16 max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
        <div
          className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />
        {/* Right notch */}
        <div
          className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />

        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
        Healing Being Transformed
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-4 w-full text-2xl text-center">
  <p className="max-w-3xl">
  Elite recovery methods are being made accessible to all— enabling faster healing and peak performance.
  </p>
</div>

      </article>
    </section>

        {/* Therapy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-green-400 bg-gradient-to-b from-black to-[#001f1f] rounded-b-2xl overflow-hidden container mx-auto">
          {therapies.map((therapy, idx) => (
            <div
              key={idx}
              className={`px-6 py-8 ${therapy.border} border-green-400`}
            >
              <div className="mb-4">
                <Image
                  src={therapy.image}
                  alt={therapy.title}
                  width={400}
                  height={200}
                  className="rounded-md w-full object-cover h-[230px]"
                />
              </div>
              <h3
                className={`text-base font-bold mb-2 ${
                  therapy.titleColor || "text-white"
                }`}
              >
                {therapy.title}
              </h3>
              <p className="text-sm text-gray-200">{therapy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
