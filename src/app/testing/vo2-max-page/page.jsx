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
      'Get a scientific measure of your cardiorespiratory fitness and understand how your body responds to intense exercise through lactate levels. These insights help you optimize your training and performance, whether you’re running a marathon or playing cricket.',
    image: '/images/vo2max.jpg',
    link: '#vo2MaxServices', // Updated to link to the services section
  },
];

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-5"
          >
            VO₂ Max & Lactate Threshold Testing
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed mb-10 text-gray-200 mt-3"
          >
            Our advanced physiological tests give you a clear benchmark of your fitness levels and provide 
            <span className='text-lime-400'>
              data-driven insights based on your unique physiology
            </span>. Whether you're training for a marathon in Mumbai or aiming to improve your cricket stamina, our tests are tailored to help you achieve your goals
            <span className="text-lime-400">*</span>.
          </motion.p>
        </motion.div>
      </section>

      {/* Test Card Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
  

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

      {/* VO₂ Max Definition Section */}
      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-4 text-center"
          >
            What is VO₂ Max?
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-lg text-center max-w-3xl mx-auto"
          >
            VO₂ Max is the maximum amount of oxygen your body can take in and use during intense exercise. It’s a key indicator of your cardiovascular fitness and aerobic endurance capacity—vital for excelling in sports like cricket, running, or even a local kabaddi match.
          </motion.p>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.blockquote
            variants={itemVariants}
            className="text-lg sm:text-xl italic text-gray-200 max-w-3xl mx-auto"
          >
            "I was a bit nervous about pushing myself to that level, but the team ensured everything was closely monitored and gave me constant encouragement. It felt like training with friends!"
          </motion.blockquote>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lime-400 font-semibold"
          >

          </motion.p>
        </motion.div>
      </section>

      {/* VO₂ Max Services Section */}
      <section id="vo2MaxServices" className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          >
            Our VO₂ Max & Lactate Threshold Services
          </motion.h3>

          {/* VO₂ Max Test */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
          >
            <h4 className="text-2xl font-semibold text-lime-400 mb-3">VO₂ Max Test</h4>
            <p className="text-gray-200 mb-4">
              Get a scientifically accurate measure of your aerobic capacity. A VO₂ Max test is the gold-standard measure for assessing your endurance potential—perfect for marathon runners or cricket players looking to up their game.
            </p>
            <p className="text-gray-200 mb-2">
              A high VO₂ Max is essential for top performance in endurance activities, whether you're running in a local race or playing a long cricket match.
            </p>
            <ul className="space-y-2 text-gray-200 mb-4">
              <li className="flex">
                <span className="text-lime-400 w-32">Price:</span>
                <span>₹9,975</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Duration:</span>
                <span>Approximately 45 minutes</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Details:</span>
                <span className="flex-1">
                  Performed on a treadmill, WattBike, or your own bike on our Wahoo Kickr turbo trainer, your VO₂ Max test will identify:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Accurate VO₂ Max value</li>
                    <li>Running Economy (if you choose treadmill test)</li>
                    <li>Training zones and pacing guidelines (predicted from maximum heart rate during test)</li>
                  </ul>
                  All data is analyzed and provided in a detailed physiological report sent to you after the test.
                </span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Ideal for:</span>
                <span className="flex-1">
                  Anyone looking to boost their aerobic capacity and training effectiveness—whether you're a runner in Delhi or a cyclist in Chennai.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-lime-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-lime-500 transition-colors"
            >
              BOOK ONLINE
            </a>
          </motion.div>

          {/* Combined VO₂ Max & Lactate Threshold Test */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
          >
            <h4 className="text-2xl font-semibold text-lime-400 mb-3">
              Combined VO₂ Max & Lactate Threshold Test
            </h4>
            <p className="text-gray-200 mb-4">
              Combine these two tests to get a complete picture of your endurance performance and capacity—ideal for serious athletes aiming for peak performance.
            </p>
            <ul className="space-y-2 text-gray-200 mb-4">
              <li className="flex">
                <span className="text-lime-400 w-32">Price:</span>
                <span>₹23,625</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Duration:</span>
                <span>Approximately 90 minutes</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Protocol:</span>
                <span className="flex-1">
                  On arrival, you’ll have a consultation with our sports scientists to discuss your training goals—whether it’s preparing for a marathon or improving your cricket stamina. We’ll measure your height, weight, and take a resting fingerprick blood lactate sample.
                  <br /><br />
                  The test is conducted in two parts:
                  <ul className="list-disc pl-5 mt-2">
                    <li>After a 10-minute warm-up, the lactate threshold test begins at a pre-determined intensity (based on your recent training or race times). Intensity increases every 4-5 minutes, with heart rate, VO₂ (optional), RPE, and blood lactate measured at each interval. The test stops when LT2 is reached.</li>
                    <li>After a short cool-down and 10-minute rest, the VO₂ Max test starts at the LT2 intensity, increasing every minute until voluntary exhaustion. We measure heart rate and VO₂ throughout.</li>
                  </ul>
                  Tests can be done on a treadmill, WattBike, or your own bike using our Wahoo Kickr turbo trainer.
                </span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Data Obtained:</span>
                <span className="flex-1">
                  <strong>Lactate Threshold:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Detailed lactate profile</li>
                    <li>LT1 and LT2</li>
                    <li>Heart rate training zones</li>
                    <li>Running economy (if on treadmill) - VO₂ cost at sub-maximal intensities</li>
                  </ul>
                  <strong>VO₂ Max:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>VO₂ Max measure (mL/kg/min and L/min)</li>
                    <li>Max heart rate</li>
                  </ul>
                  All data is included in a physiological report sent to you post-test.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-lime-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-lime-500 transition-colors"
            >
              BOOK ONLINE
            </a>
          </motion.div>

          {/* VO₂ Re-test Package */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
          >
            <h4 className="text-2xl font-semibold text-lime-400 mb-3">
              VO₂ Re-test Package
            </h4>
            <p className="text-gray-200 mb-4">
              Track your progress by testing your VO₂ Max before and after a training block to measure improvements and readiness for competition—like a marathon in Hyderabad or a cricket tournament.
            </p>
            <ul className="space-y-2 text-gray-200 mb-4">
              <li className="flex">
                <span className="text-lime-400 w-32">Price:</span>
                <span>₹17,955 (10% saving)</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Valid:</span>
                <span>12 months following initial test</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Details:</span>
                <span className="flex-1">
                  Includes two full VO₂ Max tests to be used within our working hours over a 12-month period. Get a detailed report comparing both tests to see your progress.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-lime-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-lime-500 transition-colors"
            >
              BOOK ONLINE
            </a>
          </motion.div>

          {/* Combined Re-test Package */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
          >
            <h4 className="text-2xl font-semibold text-lime-400 mb-3">
              Combined Re-test Package
            </h4>
            <p className="text-gray-200 mb-4">
              Assess your VO₂ Max and Lactate Threshold before and after a training block to measure physiological improvements and fine-tune your training for peak performance.
            </p>
            <ul className="space-y-2 text-gray-200 mb-4">
              <li className="flex">
                <span className="text-lime-400 w-32">Price:</span>
                <span>₹42,525 (10% saving)</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Valid:</span>
                <span>12 months following initial test</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Details:</span>
                <span className="flex-1">
                  Includes two full VO₂ Max and Lactate Threshold tests to be used within our working hours over a 12-month period. Receive a detailed report comparing both tests.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-lime-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-lime-500 transition-colors"
            >
              BOOK ONLINE
            </a>
          </motion.div>

          {/* Complete Endurance Package */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
          >
            <h4 className="text-2xl font-semibold text-lime-400 mb-3">
              Complete Endurance Package
            </h4>
            <p className="text-gray-200 mb-4">
              Designed for triathletes, cyclists, and runners across India, this package offers a comprehensive physiological profile to identify your strengths and areas for improvement. Ask us about re-testing offers.
            </p>
            <ul className="space-y-2 text-gray-200 mb-4">
              <li className="flex">
                <span className="text-lime-400 w-32">Price:</span>
                <span>₹30,975</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Duration:</span>
                <span>Approximately 150 minutes</span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Tests:</span>
                <span className="flex-1">
                  <ul className="list-disc pl-5">
                    <li>Body composition assessment</li>
                    <li>Lower limb explosive power, reactivity, and strength assessment (force plates)</li>
                    <li>Lactate Threshold and VO₂ Max (for cyclists - both available on turbo trainer)</li>
                  </ul>
                </span>
              </li>
              <li className="flex">
                <span className="text-lime-400 w-32">Data Obtained:</span>
                <span className="flex-1">
                  <strong>Body Composition Assessment:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Body fat %</li>
                    <li>Sum of skinfolds</li>
                  </ul>
                  <strong>Lower Limb Assessment:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Jump height, force output, eccentric utilisation ratio, dynamic strength index</li>
                    <li>Reactive strength index (for more efficient running)</li>
                    <li>Asymmetry assessment - identify weaknesses and instability</li>
                    <li>Maximal strength</li>
                  </ul>
                  <strong>Lactate Threshold and VO₂ Max:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Detailed lactate profile, identifying LT1 and LT2</li>
                    <li>Heart rate training zones</li>
                    <li>Running economy (if on treadmill) - VO₂ cost at sub-maximal intensities</li>
                    <li>VO₂ Max (mL/kg/min and L/min)</li>
                    <li>Max heart rate</li>
                  </ul>
                  You’ll receive a detailed report with test explanations, data analysis, comparisons with elite athletes, training recommendations, and heart rate training zones.
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-lime-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-lime-500 transition-colors"
            >
              BOOK ONLINE
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Lactate Threshold Section */}
      <section className="bg-gradient-to-b from-gray-950 to-black py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          >
            Lactate Threshold Testing
          </motion.h3>

          {/* Lactate Threshold Definition */}
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              The Lactate Threshold is the point during intense exercise where lactate accumulates faster than your body can clear it. It’s a critical marker for performance, helping you set accurate training zones to boost your endurance—whether you're running on Marine Drive or cycling in the Aravallis.
            </p>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <blockquote className="text-lg sm:text-xl italic text-gray-200 max-w-3xl mx-auto">
              "As someone who loves data, I was amazed by the detailed report and scientific insights. It really helped me plan my training better!"
            </blockquote>
           
          </motion.div>

          {/* Lactate Threshold Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Lactate Threshold Test */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <h4 className="text-2xl font-semibold text-lime-400 mb-3">
                Lactate Threshold Test
              </h4>
              <p className="text-gray-200 mb-4">
                A test for individuals aiming to optimize their training efficiency. Your Lactate Threshold determines your endurance performance in activities like long-distance running or cycling.
              </p>
              <ul className="space-y-2 text-gray-200 mb-4">
                <li className="flex">
                  <span className="text-lime-400 w-32">Price:</span>
                  <span>₹17,325</span>
                </li>
                <li className="flex">
                  <span className="text-lime-400 w-32">Duration:</span>
                  <span>Approximately 60 minutes</span>
                </li>
                <li className="flex">
                  <span className="text-lime-400 w-32">Details:</span>
                  <span className="flex-1">
                    You’ll start with a consultation with our sports scientists to discuss your goals—whether it’s a marathon or a triathlon. We’ll measure your height, weight, and take a resting fingerprick blood lactate sample.
                    <br /><br />
                    After a 10-minute warm-up, the test begins at a pre-determined intensity (based on your training or race times). Intensity increases every 4-5 minutes, with heart rate, RPE, and blood lactate measured at each interval. The test stops when LT2 is reached.
                    <br /><br />
                    All data is analyzed in a detailed report sent to you, with recommendations to optimize your training. Tests can be done on a treadmill, WattBike, or your own bike using our Wahoo Kickr turbo trainer.
                  </span>
                </li>
                <li className="flex">
                  <span className="text-lime-400 w-32">Data Obtained:</span>
                  <span className="flex-1">
                    <ul className="list-disc pl-5">
                      <li>Detailed lactate profile</li>
                      <li>LT1 and LT2</li>
                      <li>Heart rate training zones</li>
                    </ul>
                  </span>
                </li>
                <li className="flex">
                  <span className="text-lime-400 w-32">Ideal for:</span>
                  <span className="flex-1">
                    Endurance athletes looking to understand their performance limits and maximize training effectiveness—perfect for setting your ideal race pace and breaking through training plateaus.
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-lime-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-lime-500 transition-colors"
              >
                BOOK ONLINE
              </a>
            </motion.div>

            {/* Combined Lactate Threshold & VO₂ Max Test */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-b from-[#001f1f] to-black border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <h4 className="text-2xl font-semibold text-lime-400 mb-3">
                Combined Lactate Threshold & VO₂ Max Test
              </h4>
              <p className="text-gray-200 mb-4">
                Combine these two tests for a comprehensive understanding of your endurance performance—already included above for your convenience.
              </p>
              <p className="text-gray-200 mb-4">
                <a href="#vo2MaxServices" className="text-lime-400 hover:underline">
                  Scroll up to find out more about our Combined VO₂ Max & Lactate Threshold testing.
                </a>
              </p>
            </motion.div>

            {/* Lactate Threshold Re-test Package */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <h4 className="text-2xl font-semibold text-lime-400 mb-3">
                Lactate Threshold Re-test Package
              </h4>
              <p className="text-gray-200 mb-4">
                We recommend a follow-up Lactate Threshold test after a training block to measure improvements and adjust your training zones for continued progress.
              </p>
              <ul className="space-y-2 text-gray-200 mb-4">
                <li className="flex">
                  <span className="text-lime-400 w-32">Price:</span>
                  <span>₹31,185 (10% saving)</span>
                </li>
                <li className="flex">
                  <span className="text-lime-400 w-32">Valid:</span>
                  <span>12 months following initial test</span>
                </li>
                <li className="flex">
                  <span className="text-lime-400 w-32">Details:</span>
                  <span className="flex-1">
                    Includes two Lactate Threshold tests to be used within our working hours over a 12-month period. Receive a detailed report comparing both tests to track your progress.
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-lime-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-lime-500 transition-colors"
              >
                BOOK ONLINE
              </a>
            </motion.div>

            {/* Combined Lactate Threshold & VO₂ Max Re-test Package */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <h4 className="text-2xl font-semibold text-lime-400 mb-3">
                Combined Lactate Threshold & VO₂ Max Re-test Package
              </h4>
              <p className="text-gray-200 mb-4">
                Track improvements in both VO₂ Max and Lactate Threshold with this comprehensive re-test package—already included above for your convenience.
              </p>
              <p className="text-gray-200 mb-4">
                <a href="#vo2MaxServices" className="text-lime-400 hover:underline">
                  Scroll up to find out more about our Combined Re-test Package.
                </a>
              </p>
            </motion.div>

            {/* Complete Endurance Package */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-b from-black to-[#001f1f] border border-lime-400 rounded-xl shadow-lg hover:shadow-lime-400/20 transition-shadow duration-300"
            >
              <h4 className="text-2xl font-semibold text-lime-400 mb-3">
                Complete Endurance Package
              </h4>
              <p className="text-gray-200 mb-4">
                Already included above for your convenience—perfect for triathletes, cyclists, and runners across India.
              </p>
              <p className="text-gray-200 mb-4">
                <a href="#vo2MaxServices" className="text-lime-400 hover:underline">
                  Scroll up to find out more about our Complete Endurance Package.
                </a>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default page;