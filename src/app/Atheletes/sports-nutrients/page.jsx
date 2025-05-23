'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsNutritionData from './../../../../public/sports-nutrition.json';

// Font setup
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Data for the Key Benefits section
const keyBenefits = [
  {
    number: "01",
    heading: "Fueling isn’t just eating—it’s strategic.",
    description: "Random diets won’t cut it for peak performance. Without a tailored nutrition plan, you’re leaving gains on the table. We optimize your fuel for training, game days, and recovery.",
  },
  {
    number: "02",
    heading: "Recovery starts with what you eat.",
    description: "Training hard means nothing if you can’t recover. Poor nutrition delays healing and saps energy. Our plans ensure your body rebuilds faster and stronger after every session.",
  },
  {
    number: "03",
    heading: "Supplements aren’t a shortcut—they’re science.",
    description: "Guesswork with supplements can harm more than help. Without proper guidance, you’re wasting money and risking health. We use evidence-based strategies to boost performance safely.",
  },
];

export default function SportsNutritionPage() {
  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      {/* Sports Nutrition Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h-2V4h-4V2h4V-2h2v2h4v2h-4z' fill='%239CA3AF' fill-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto "
        >
          {/* Breadcrumb Navigation */}
         






          <section className="flex  w-full text-black max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
   {/* Left half-circle notch (right side visible) */}
<div
  className="absolute top-1/2 w-[30px] h-[60px] bg-black rounded-r-full transform -translate-y-1/2"
/>

{/* Right half-circle notch (left side visible) */}
<div
  className="absolute -right-[0px] top-1/2 w-[30px] h-[60px] bg-black rounded-l-full transform -translate-y-1/2"
/>


        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
        SPORTS NUTRITION
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-5 w-full text-2xl text-center">
  <p className="max-w-3xl">
  Fuel your body for peak performance. Our Sports Nutrition program provides customized plans to optimize muscle gain, endurance, and recovery.

  </p>
</div>

      </article>
    </section>





          <div className="rounded-xl overflow-hidden border  border-blue-400 p-1  -mt-5">


          {/* Sports Nutrition Program Showcase */}
          {sportsNutritionData.map((service, index) => (
  <motion.div
    key={service.title}
    variants={itemVariants}
    className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 py-8 sm:py-12 px-4 sm:px-6 "
  >
    <div className="md:w-1/2">
      <h3 className="text-2xl sm:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200 mb-4">
        {service.title}
      </h3>
      <p className="text-base sm:text-xl font-medium text-gray-700 dark:text-gray-300">
        {service.description}
      </p>

      {/* Pricing Section */}
      {service.pricing && service.pricing.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-3">Pricing Packages</h4>
          <ul className="space-y-2 text-gray-800 dark:text-gray-300">
            {service.pricing.map((pkg, idx) => (
              <li key={idx} className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
                <span>{pkg.duration}</span>
                <span>
                  {pkg.offerPrice ? (
                    <>
                      <span className="line-through mr-2 text-red-500">{pkg.price}</span>
                      <span className="font-bold text-green-600">{pkg.offerPrice}</span>
                    </>
                  ) : (
                    <span>{pkg.price}</span>
                  )}
                </span>
                {pkg.note && (
                  <span className="ml-4 text-sm font-semibold text-green-700">{pkg.note}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <div className="md:w-1/2 relative h-64 sm:h-80">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
    </div>
  </motion.div>
))}

   </div>
          {/* Key Benefits Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200"
            >
              Key Benefits of Sports Nutrition
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  variants={itemVariants}
                  className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <span className="inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-2xl sm:text-3xl font-bold">
                      {benefit.number}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold uppercase text-gray-900 dark:text-gray-100 mb-2 text-center">
                    {benefit.heading}
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}