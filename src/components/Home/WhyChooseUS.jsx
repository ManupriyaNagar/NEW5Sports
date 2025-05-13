import { CircleAlert } from "lucide-react";


const cardData = [
  {
    title: "It’s Not Just About Skills",
    description:
      "Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.",
  },
  {
    title: "It’s Not Just About Skills",
    description:
      "Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.",
  },
  {
    title: "It’s Not Just About Skills",
    description:
      "Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white rounded-t-3xl px-4 py-12 text-center text-black relative">
      <div className="absolute top-1/2 -left-2 w-4 h-10 bg-black rounded-full -translate-y-1/2" />
      <div className="absolute top-1/2 -right-2 w-4 h-10 bg-black rounded-full -translate-y-1/2" />

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose Us?</h2>
        <p className="text-gray-600 mb-10 text-base md:text-lg">
          Discover what makes us the{" "}
          <span className="text-green-500 font-medium">
            #1 Sports Medicine & Rehab Center in India.
          </span>
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-lime-300 text-left rounded-xl p-6 relative flex-1 max-w-sm mx-auto shadow-lg"
            >
              <div className="absolute top-0 right-0 bg-black w-10 h-10 rounded-bl-xl flex items-center justify-center">
                <CircleAlert className="text-lime-300 text-xs" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-black">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
