'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './../../components/contex/ThemeContext';
import { Space_Grotesk } from 'next/font/google';

import WavyBackground from './../../components/global/Background/WavyBackground';
import GetInTouch from './../../components/AboutUs/GetInTouch';
import FontLoader from './../../components/global/card/FontLoader';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const foundersData = [
  {
    name: 'Dr. Pooja',
    imageSrc: '/doctor.png',
    heading: 'Dr. Pooja - Consultant Physiotherapist & Sports Medicine',
    subheading: 'Founder & Director, Sports Medicine Specialist',
    description: `BPT, MPT in Orthopaedics, Certified Sports Physiotherapist
Dr. Pooja is a distinguished Consultant Physiotherapist at 5 Sports Hospital, specializing in sports rehabilitation, orthopaedic physiotherapy, and musculoskeletal disorders. With a remarkable academic background and extensive clinical expertise, Dr. Pooja has earned a reputation as one of the most sought-after physiotherapists in the field.
Educational Excellence & Advanced Training:
Dr. Pooja holds a Bachelor of Physiotherapy (BPT) and a Master of Physiotherapy (MPT) in Orthopaedics, which laid the foundation for her deep understanding of musculoskeletal function and rehabilitation. She is also a certified sports physiotherapist, with specialized training in treating sports injuries and enhancing athletic performance through rehabilitation.
Her commitment to ongoing learning and clinical innovation has set her apart as a leader in her field. Dr. Pooja continually updates her skills with advanced training, ensuring she provides the highest standard of care to her patients.
Areas of Expertise:
Sports Rehabilitation: Dr. Pooja is known for her advanced techniques in sports injury recovery, helping athletes at all levels recover quickly and effectively. She excels in treating sprains, strains, fractures, and ligament injuries, tailoring each treatment to the individual’s specific needs.
Orthopaedic Physiotherapy: With a specialization in orthopaedic rehabilitation, Dr. Pooja is expert in managing joint replacement recovery, post-surgical rehabilitation, and chronic pain management, using evidence-based physiotherapy techniques to restore function and mobility.
Manual Therapy: Dr. Pooja employs hands-on techniques such as joint mobilizations, soft tissue manipulation, and myofascial release to relieve pain, improve range of motion, and promote faster recovery.
Prevention & Performance Enhancement: She is a leader in injury prevention, focusing on muscle imbalances, postural corrections, and strengthening programs to prevent re-injury and optimize athletic performance.
Sports Taping and Modalities: Dr. Pooja is highly skilled in Kinesiology Taping, Electrotherapy, and other physical modalities that support healing, reduce pain, and enhance recovery.
Approach to Patient Care:
Dr. Pooja combines her exceptional technical knowledge with a patient-centered approach, ensuring each patient receives a personalized rehabilitation plan. Known for her compassionate care and dedication, Dr. Pooja has earned the trust of her patients, from elite athletes to individuals recovering from injuries or surgery. Her ability to empower patients to take control of their recovery is what sets her apart as a leading physiotherapist in the region.
With a focus on achieving lasting results, Dr. Pooja emphasizes holistic care, educating her patients on self-management techniques and providing them with the tools needed to avoid future injuries and maintain long-term physical health.`,
    position: 'left',
  },
  {
    name: 'Dr. Nataraj',
    imageSrc: '/sirdoc.png',
    heading: 'Dr. Nataraj HM',
    subheading: 'Dr. Nataraj HM - Head of Department Orthopaedics & Sports Surgery',
    description: `MBBS, MS Orthopaedics, MCh Orthopaedics (USAIM)
Fellowship in Knee and Shoulder Surgery (Italy)
Fellowship in Arthroscopy and Sports Medicine (ISAKOS)
Fellowship in Joint Replacement (ISHKS)
Dr. Nataraj HM is a renowned Senior Consultant and Head of the Orthopaedic Department at 5 Sports Hospital. He is a highly skilled and experienced surgeon, widely recognized for his contributions to orthopaedics and sports medicine. Dr. Nataraj’s journey began with a MBBS from KIMS, Bangalore, followed by an MS in Orthopaedics from KSHEMA, Mangalore, and an MCh in Orthopaedics from the University of Seychelles. His passion for the field drove him to pursue advanced fellowships in Knee and Shoulder Surgery in Italy and Arthroscopy & Sports Medicine with the International Society of Arthroscopy (ISAKOS).
Key Achievements:
- First surgeon in Southeast Asia to perform knee arthroscopic meniscal repair using the Zimmer-Biomet meniscal repair device.
- First in India to perform computer navigated total shoulder replacement and arthroscopic ACL reconstruction with ‘button fix’ adjustable loop anchors.
- Recognized for groundbreaking surgeries in rotator cuff repair, shoulder dislocation surgeries, and minimally invasive joint replacements.
- Specializes in robotic knee replacements, PRP injections, and stem cell therapies.
Dr. Nataraj is a member of ISAKOS, the Indian Arthroscopy Society, and other prestigious bodies. His focus on precision, innovation, and patient care makes him a leader in Indian orthopaedics.`,
    position: 'right',
  },
];

const teamMembers = [
  {
    name: 'Dr. Pooja Jhade',
    title: 'Founder | Director  , PHYSIOTHERAPI Specialist in Sports Surgery ',

    subtitle: 'Certified Sports Physiotherapist',
    phone: '+91 9353 555 755 | +91 9353 555 855',
    email: 'dr.pooja@5sportshealth.com',
    address: 'No 40 & 41, Ambedkar Nagar, Mullur, Sarjapur Road, Bangalore 560003',
    website: '5sportshealth.com',
  },
  {
    name: 'Dr. Nataraj H M',
    title: 'HOD - ORTHOPAEDICS, Specialist in Sports Surgery',

    subtitle: 'Senior Consultant Orthopaedics',
    phone: '+91 9353 555 755 | +91 9353 555 855',
    email: 'dr.nataraj@5sportshealth.com',
    address: 'No 40 & 41, Ambedkar Nagar, Mullur, Sarjapur Road, Bangalore 560003',
    website: '5sportshealth.com',
  },
  {
    name: 'Dr. Radhesh R Menon',
    title: 'Consultant Orthopaedic Hand & Upperlimb Surgeon',
      
    subtitle: 'Specialist in Upperlimb Surgery',
    phone: '+91 9353 555 755 | +91 9353 555 855',
    email: 'dr.radhesh@5sportshealth.com',
    address: 'No 40 & 41, Ambedkar Nagar, Mullur, Sarjapur Road, Bangalore 560003',
    website: '5sportshealth.com',
  },
];

const features = [
  {
    title: 'Expert Team',
    desc: 'Led by Dr. Pooja and Dr. Nataraj, our team brings decades of experience in sports medicine.',
  },
  {
    title: 'Personalized Care',
    desc: 'Each athlete receives customized treatment plans for optimized recovery and performance.',
  },
  {
    title: 'Cutting-edge Technology',
    desc: 'We use the latest medical and sports science tools for accurate diagnostics and treatment.',
  },
  {
    title: 'Holistic Approach',
    desc: 'From nutrition to physiotherapy, we address every aspect of athletic well-being.',
  },
];

// Mock Card Component (since actual Card component code isn't provided)
const Card = ({ title,  title2, subtitle, description, iconType }) => {
  const [name, role] = title; // Extract name and role from title array
  return (
    <div className="relative bg-white dark:bg-gray-800  rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      {/* Decorative Sport Icon */}
     
      <div className="text-center mt-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-green-600 dark:text-green-400 mt-1">{role}</p>
        {title2 && (
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">{title2}</p>
        )}
        {subtitle && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">{subtitle}</p>
        )}
        {description && (
          <p className="mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default function AboutUs() {
  const { darkMode } = useTheme();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const handleImageClick = (content) => {
    setPopupContent(content);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`min-h-screen font-space-grotesk transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      } ${spaceGrotesk.variable}`}
    >
      {/* Hero Section */}
      <section className="flex w-full text-black md:px-20 px-4 py-12 md:py-20 max-md:flex-col">
        {/* Main Article with notches */}
        <article className="relative flex flex-col py-8 md:py-6 w-full bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible">
          {/* Left notch */}
          <div
            className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full hidden md:block transform -translate-y-1/2"
          />
          {/* Right notch */}
          <div
            className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full hidden md:block transform -translate-y-1/2"
          />

          <h2 className="self-center text-4xl md:text-6xl font-bold leading-none">
            About us
          </h2>

          <div className="flex flex-wrap gap-4 justify-center mt-3 w-full text-lg md:text-2xl text-center">
            <p className="max-w-6xl px-4">
              At 5 Sports, we unlock athletic potential through cutting-edge diagnostics, rapid recovery, and tailored injury-prevention—backed by 18 years of expertise.
            </p>
          </div>
        </article>
      </section>

      {/* Why Choose 5 Sports Section */}
      <section className="md:px-20 px-4">
        <WavyBackground height="auto" className="py-12 md:py-16 lg:px-0">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 md:p-8"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-lime-400 uppercase"
              >
                Why Choose 5 Sports?
              </motion.h2>

              <motion.ul variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className={`flex items-start space-x-3 p-4 rounded-lg hover:bg-opacity-10 transition-colors duration-200 ${
                      darkMode ? '' : 'hover:bg-green-50'
                    }`}
                  >
                    <span className="text-lime-400 text-xl md:text-2xl">●</span>
                    <div>
                      <strong className="text-lime-400 dark:text-lime-400 text-base sm:text-lg md:text-xl">
                        {item.title}
                      </strong>
                      <p className="text-gray-100 dark:text-white text-sm sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                variants={itemVariants}
                className="mt-6 md:mt-8 text-base md:text-lg text-gray-100 text-center dark:text-gray-50"
              >
                Partner with us to achieve peak performance through world-class care.
              </motion.p>
            </motion.div>
          </div>
        </WavyBackground>
      </section>

      {/* Founders Popup Section */}
      <div className="p-4 md:p-8 md:px-20" id="x">
        <section className="flex w-full text-black max-md:flex-col mb-10 mt-12 md:mt-20">
          {/* Main Article with notches */}
          <article className="relative flex flex-col py-8 md:py-10 w-full bg-white border border-white border-solid rounded-[32px] overflow-visible">
            {/* Left notch */}
            <div className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full hidden md:block transform -translate-y-1/2" />
            {/* Right notch */}
            <div className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full hidden md:block transform -translate-y-1/2" />

            <h2 className="self-center text-4xl md:text-6xl font-bold leading-none">
              Our Founders
            </h2>
          </article>
        </section>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          {foundersData.map((founder, index) => (
            <div key={index} className="w-full text-center">
              <h1 className="text-2xl md:text-3xl font-bold p-4 uppercase">{founder.name}</h1>
              <img
                src={founder.imageSrc}
                alt={founder.name}
                className="cursor-pointer w-full max-w-xs mx-auto md:max-w-sm object-cover rounded-lg"
                onClick={() => handleImageClick(founder)}
              />
            </div>
          ))}
        </div>

        {isPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <motion.div
              initial={{ x: popupContent.position === 'left' ? '-100%' : '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
            >
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-lg"
              >
                ✕
              </button>
              <img
                src={popupContent.imageSrc}
                alt={popupContent.name}
                className="w-full max-h-60 sm:max-h-80 object-contain rounded-md mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold mb-1">{popupContent.heading}</h2>
              <h3 className="text-base sm:text-lg font-medium text-green-600 dark:text-green-400 mb-4">
                {popupContent.subheading}
              </h3>

              {/* Render the description with proper formatting */}
              <div className="text-gray-700 dark:text-gray-300 space-y-3 text-sm sm:text-base">
                {popupContent.description.split('\n').map((line, index) => {
                  if (line.trim() === '') {
                    return null; // Skip empty lines
                  } else if (line.trim().endsWith(':')) {
                    // Render as subheading
                    return (
                      <h4 key={index} className="text-base sm:text-lg font-semibold mt-4">
                        {line.trim()}
                      </h4>
                    );
                  } else if (line.trim().startsWith('-')) {
                    // Render as list item
                    return (
                      <ul key={index} className="list-disc list-inside">
                        <li>{line.trim().substring(1).trim()}</li>
                      </ul>
                    );
                  } else {
                    return <p key={index}>{line.trim()}</p>;
                  }
                })}
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Team Section */}
      <FontLoader />
      <section className="py-12 px-4 md:px-6 bg-black">
        <section className="flex w-full text-black md:px-20 px-4 max-md:flex-col mb-10">
          {/* Main Article with notches */}
          <article className="relative flex flex-col py-8 md:py-10 w-full bg-green-500 border border-white border-solid rounded-[32px] overflow-visible">
            {/* Left notch */}
            <div className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full hidden md:block transform -translate-y-1/2" />
            {/* Right notch */}
            <div className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full hidden md:block transform -translate-y-1/2" />

            <h2  className="self-center text-4xl md:text-6xl font-bold leading-none">
              Meet Our Team
            </h2>
          </article>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-items-center">
          {teamMembers.map((m, i) => (
            <div key={i} className="w-full max-w-sm px-9">
              <Card
                title={[m.name, m.title ]}

                subtitle={m.subtitle}
                title2={m.title2} // Pass subtitle as a separate prop
                description={`
                  📞 ${m.phone}
                  📧 ${m.email}
                  📍 ${m.address}
                  🌐 ${m.website}
                `}
                iconType="sport"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="px-4 md:px-0">
        <GetInTouch />
      </section>
    </div>
  );
}