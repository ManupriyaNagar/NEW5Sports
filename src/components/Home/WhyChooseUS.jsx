import React from 'react';
import CardComponent from '@/components/global/card/CardComponent';

const whyChooseUsCards = [
  {
    title: ['It’s Not Just', 'About Skills'],
    description:
      'Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.',
    iconType: 'down',
  },
  {
    title: ['It’s Not Just', 'About Skills'],
    description:
      'Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.',
    iconType: 'down',
  },
  {
    title: ['It’s Not Just', 'About Skills'],
    description:
      'Modern sports are demanding. Without building strength, speed, and resilience, you risk falling behind.',
    iconType: 'down',
  },
];

const WhyChooseUS = () => {
  return (
    <section className="px-4 md:px-20 relative">
      {/* Cards floating above */}


      {/* Notched Header */}
      <section className="flex w-full text-black max-md:flex-col mt-40 mb-10 z-10 relative">
        <article className="relative flex flex-col py-20 w-full bg-white border border-lime-400 rounded-[32px] overflow-visible">
          {/* Left notch */}
          <div className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2" />
          {/* Right notch */}
          <div className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full transform -translate-y-1/2" />

          <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl mb-2">
            Why Choose Us?
          </h2>
          <div className="flex flex-wrap justify-center mt-3 text-2xl text-center mb-2">
            <p className="max-w-4xl">
              Discover what makes us the{' '}
              <span className="text-green-600 font-bold">#1 Sports Medicine & Rehab Center in India.</span>
            </p>
          </div>
        </article>
      </section>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20  mt-[22rem] w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-6">
          {whyChooseUsCards.map((item, idx) => (
            <CardComponent
              key={idx}
              title={item.title}
              description={item.description}
              iconType={item.iconType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;
