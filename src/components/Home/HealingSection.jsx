import Image from "next/image";

const therapies = [
  {
    title: "TECAR THERAPY",
    image: "/tecar.jpg", // Replace with actual image path
    description:
      "A revolutionary treatment that enhances tissue repair, reducing pain and accelerating healing through deep heat energy.",
    border: "border-r",
  },
  {
    title: "LASER THERAPY",
    image: "/laser.jpg", // Replace with actual image path
    description:
      "A non-invasive technique that promotes tissue regeneration, reduces inflammation, and speeds up recovery from injuries.",
    border: "border-r",
  },
  {
    title: "SHOCKWAVE THERAPY",
    image: "/shockwave.jpg", // Replace with actual image path
    description:
      "Uses high-energy sound waves to treat musculoskeletal pain, improve blood flow, and stimulate healing in damaged tissues.",
    border: "",
    titleColor: "text-green-400",
  },
];

export default function HealingSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="bg-white text-black rounded-t-2xl px-8 py-6 mb-8 relative">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Healing Being Transformed
          </h2>
          <p className="text-sm md:text-base mt-2 text-gray-700">
            Elite recovery methods are being made accessible to all— enabling
            faster healing and peak performance.
          </p>

          {/* Decorative side notches */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-black rounded-r-full"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-black rounded-l-full"></div>
        </div>

        {/* Therapy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-green-400 bg-gradient-to-b from-black to-[#001f1f] rounded-b-2xl overflow-hidden">
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
                  className="rounded-md w-full object-cover h-[150px]"
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
