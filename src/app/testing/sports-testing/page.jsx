"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

const testingData = [
  {
    title: 'VO₂ MAX & LACTATE THRESHOLD',
    description:
      'Receive an accurate measure of your cardiorespiratory fitness and assess your body’s lactate response to exercise. These insights help you understand and optimize your physiological capacity for training and performance.',
    image: '/images/vo2max.jpg',
    link: 'Vo2MaxTestSection',
  },
  {
    title: 'RESTING METABOLIC RATE & BODY COMPOSITION',
    description:
      'Understand your resting calorie requirement and assess your body composition to support your weight loss or muscle gain goals.',
    image: '/images/bodycomp.jpg',
    link: 'Vo2MaxTestSection',
  },
  {
    title: 'MUSCLE OXYGEN MONITORING',
    description:
      'Track muscle oxygen levels in real time to identify fatigue thresholds and optimize strength and conditioning workouts.',
    image: '/images/muscle-oxygen.jpg',
    link: 'test-page',
  },
];

const page = () => {
  return (
    <>
      <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-200"
          >
            Testing
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed mb-10 text-gray-200"
          >
            Our range of physiological performance tests provide you with a benchmark of current fitness and equip you with 
            <span className='text-lime-400'>
              scientific data based on your individual physiology
            </span> to direct your training programme and maximise your performance. All testing is specifically tailored to the needs of each individual
            <span className="text-lime-400">*</span>.
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Performance Testing
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto text-lg">
              Our range of physiological performance tests equip you with data-driven insights to tailor your training and enhance your overall performance.
            </p>
          </div>

          {/* Test Cards */}
          <div className="space-y-16">
            {testingData.map((test, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div className="md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {test.title} <span className="text-lime-400">→</span>
                  </h3>
                  <p className="text-gray-200 mb-3">{test.description}</p>
                  <a
                    href={test.link}
                    className="text-lime-400 font-semibold hover:underline"
                  >
                    FIND OUT MORE
                  </a>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-md border border-lime-400">
                    <Image
                      src={test.image}
                      alt={test.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;