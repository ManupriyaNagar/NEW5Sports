'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './../contex/ThemeContext';
import Image from 'next/image';


const MeetOurExperts = () => {
  const { darkMode } = useTheme();
  const [flippedCard, setFlippedCard] = useState(null);

  const teamMembers = [
    {
      name: 'Dr Pooja Jhade',
      role: 'Founder and PHD Posture',
      image: '/doctor.png',
      expertise: [
        'PhD in POSTURE (USA)',
        'PhD in Portural Neurology (USA-pursuing)',
        'Masters in Pilates(Canada)',
        'Fellowship in Clinical Pilates (Australia)',
        'B.P.T (India)',
      ],
    
      bio: 'Dr. Pooja Jhade brings over 15 years of experience in posture correction and sports rehabilitation, helping athletes achieve peak performance.',
    },
    {
      name: 'Dr Nataraj H M',
      role: 'Knee & Shoulder Specialist HOD-Orthopaedics',
      image: '/NatarajDP.png',
      expertise: [
        'Robotic Knee Replacement',
        'Robotic Partial Knee Replacement',
        'Computer Assisted Surgeries',
        'Shoulder Dislocation Surgeries',
        'Arthroscopy',
        'ACL Reconstruction',
        'Meniscus Repair Gundam',
        'Rotator Cuff Repair',
        'Fracture Surgeries',
      ],
      collaborations: [],
      bio: 'Dr. Nataraj is a pioneer in robotic knee surgeries, with a passion for restoring mobility through cutting-edge techniques.',
    },
  ];

  const toggleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  // Animation variants for faster and smoother flip
  const cardVariants = {
    front: {
      rotateY: 0,
      opacity: 1,
      transition: {
        rotateY: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
      },
    },
    back: {
      rotateY: 0, // Removed 180-degree rotation to prevent mirror effect
      opacity: 1,
      transition: {
        rotateY: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
  className={`py-24 relative overflow-hidden transition-colors duration-500 ${
    darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
  }`}
>

      {/* Background Pattern */}
      <div
        className={`absolute inset-0 opacity-10 ${
          darkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20zM40 40V20L20 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="px-6 relative z-10">
        {/* Section Title */}
     





        <section className="flex  w-full text-black md:px-20 max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-white border border-white border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
        <div
          className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full hidden md:block 
                     transform -translate-y-1/2"
        />
        {/* Right notch */}
        <div
          className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full hidden md:block 
                     transform -translate-y-1/2"
        />

        <h2 className="self-center md:text-6xl font-bold leading-none max-md:text-4xl">
        Meet Our Experts
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-3 w-full md:text-2xl text-center">
  <p className="max-w-3xl hidden md:block">
  Our highly skilled specialists are here to help you achieve peak performance and recovery.
  </p>
</div>

      </article>
    </section>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto mt-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700'
                  : 'bg-white/90 border border-gray-200'
              }`}
              style={{ perspective: '1000px' }}
            >
              <div className="relative">
                {/* Front Face */}
                <AnimatePresence>
                  {flippedCard !== index && (
                    <motion.div
                      variants={cardVariants}
                      initial="exit"
                      animate="front"
                      exit="exit"
                      className="flex flex-col sm:flex-row"
                    >
                      {/* Image */}
                      <div className="w-full sm:w-1/2 h-[250px]  sm:h-auto relative overflow-hidden group">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={300}
                          className="w-full h-[45vh]  object-cover transition-transform duration-500 group-hover:scale-110"
                          unoptimized
                        />
                      </div>
                      {/* Text */}
                      <div className="p-6 w-full sm:w-1/2 text-left">
                        <h4
                          className={`font-bold text-xl md:text-2xl ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {member.name.toUpperCase()}
                        </h4>
                        <p className="text-green-500 text-base md:text-lg mb-4">
                          {member.role}
                        </p>
                        <div className="mb-4">
                          <h5
                            className={`font-semibold text-base ${
                              darkMode ? 'text-white' : 'text-gray-800'
                            }`}
                          >
                            Expertise:
                          </h5>
                          <ul
                            className={`list-disc pl-5 text-sm space-y-1 ${
                              darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            {member.expertise.slice(0, 4).map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                            {member.expertise.length > 4 && (
                              <li className="text-green-500">+ More</li>
                            )}
                          </ul>
                        </div>
                     
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleFlip(index)}
                          className={`mt-4 px-4 py-2 rounded-lg font-semibold transition-colors ${
                            darkMode
                              ? 'bg-green-500 text-gray-900 hover:bg-yellow-400'
                              : 'bg-green-600 text-white hover:bg-yellow-700'
                          }`}
                          aria-label={`Learn more about ${member.name}`}
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Back Face */}
                <AnimatePresence>
                  {flippedCard === index && (
                    <motion.div
                      variants={cardVariants}
                      initial="exit"
                      animate="back"
                      exit="exit"
                      className="p-6 min-h-[300px] flex flex-col justify-center"
                    >
                      <h4
                        className={`font-bold text-xl md:text-2xl mb-4 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {member.name}
                      </h4>
                      <p
                        className={`text-sm md:text-base mb-4 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {member.bio}
                      </p>
                      <ul
                        className={`list-disc pl-5 text-sm space-y-1 mb-4 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {member.expertise.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleFlip(index)}
                        className={`mt-4 px-4 py-2 rounded-lg font-semibold transition-colors ${
                          darkMode
                            ? 'bg-green-500 text-gray-900 hover:bg-yellow-400'
                            : 'bg-green-600 text-white hover:bg-yellow-700'
                        }`}
                        aria-label={`Close details for ${member.name}`}
                      >
                        Back
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurExperts;