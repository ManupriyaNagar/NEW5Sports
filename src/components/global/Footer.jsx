'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

import { useTheme } from './../contex/ThemeContext'; // Import Theme Hook

const Footer = () => {
  const { darkMode } = useTheme(); // Retrieve Dark Mode State
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`transition-colors duration-500 py-10 relative border-t ${
        darkMode
          ? 'bg-white text-gray-900 border-gray-700'
          : 'bg-gradient-to-b from-white via-gray-200 to-gray-300 text-gray-900 border-gray-300'
      }`}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo5.png" alt="5 Sports Health Logo" className="h-20 w-40" />
          <p className="mt-4 max-w-md text-justify">
            A peak multidisciplinary excellence center for sports medicine, orthopedics,
            posture correction, and injury rehabilitation, including 11 sub-specialties of advanced sports science.
          </p>
          <div className="flex space-x-4 mt-4 text-green-500 text-xl">
            <a href="https://www.facebook.com/share/1BM9NaA5Th/" className="hover:text-yellow-600 transition-all">
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/5-sports-health/"
              className="hover:text-yellow-600 transition-all"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/5sportshealth?igsh=Y2R3NnZqcnVqdDlx" className="hover:text-yellow-600 transition-all">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@5SportsHospital" className="hover:text-yellow-600 transition-all">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-700 font-bold text-lg">QUICK LINKS</h3>
          <div className="h-1 w-16 bg-green-800 mt-2 mb-4 mx-auto md:mx-0"></div>
          <ul className={`space-y-2 ${darkMode ? 'text-gray-900' : 'text-gray-800'}`}>
            <FooterLink href="/" label="Home" />
            <FooterLink href="/about-page" label="About Us" />
            <FooterLink href="/athelethes/injury" label="Services" />
            <FooterLink href="/programmes" label="Programmes" />
            <FooterLink href="/Orthopedicss/orthobiological" label="Orthobiology" />
            <FooterLink href="/contact-us" label="Contact Us" />
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-green-700 font-bold text-lg">PROGRAMS</h3>
          <div className="h-1 w-16 bg-green-800 mt-2 mb-4 mx-auto md:mx-0"></div>
          <ul className={`space-y-2 ${darkMode ? 'text-gray-900' : 'text-gray-800'}`}>
            <FooterLink href="/atheletes/sports-pychology" label="Basic Exercise" />
            <FooterLink href="/programs/sports-page" label="Advanced Exercises" />
            <FooterLink href="/atheletes/sports-nutrients" label="Sports Nutrients" />
            <FooterLink href="/Orthopedicss/arthroscopy" label="Arthroscopy" />
            <FooterLink href="/Orthopedicss/fracture" label="Fracture Management" />
            <FooterLink href="/Orthopedicss/robotic" label="Robotics Knee" />
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-green-700 font-bold text-lg">CONTACT US</h3>
    
          <ul className='space-y-4 max-w-m text-gray-900' >
            <ContactItem
              icon={<MdLocationOn />}
              text="Site No 40 & 41, 1st floor MPS Building, Ambedkar Nagar Mullur Sarjapur Road, Carmelram Bangalore, Karnataka - 560035 IN"
              type="location"
       
            />
            <ContactItem
              icon={<MdEmail />}
              text="care@5sportshealth.com"
              type="email"
            />
            <ContactItem
              icon={<MdPhone />}
              phoneNumbers={['9353555755', '9353555855']}
              type="phone"
            />
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-green-800 mb-2 md:mb-0">5 Sports Health. All Rights Reserved.</p>
        <p className={`${darkMode ? 'text-gray-900' : 'text-gray-900'}`}>
          Copyright © {currentYear}
        </p>
        <a href="https://rbshstudio.com/" target="_blank" rel="noopener noreferrer">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 md:mb-0`}>
            Powered by <span className={`${darkMode ? 'text-gray-900 font-bold' : 'text-gray-900 font-bold'}`}>RBSH STUDIO</span>
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLink = ({ href, label }) => {
  const { darkMode } = useTheme();
  return (
    <li>
      <Link href={href} className={`hover:text-green-500 transition-all ${darkMode ? 'text-gray-900' : 'text-gray-800'}`}>
        {label}
      </Link>
    </li>
  );
};

const ContactItem = ({ icon, text, phoneNumbers, type, className }) => {
  const { darkMode } = useTheme();
  let content;

  if (type === 'email') {
    content = (
      <a href={`mailto:${text}`} className={`${darkMode ? 'text-gray-900 hover:text-green-500' : 'text-gray-800 hover:text-green-600'}`}>
        {text}
      </a>
    );
  } else if (type === 'phone' && phoneNumbers) {
    content = (
      <div className="flex space-x-2">
        {phoneNumbers.map((number, index) => (
          <a
            key={index}
            href={`tel:${number}`}
            className={`${darkMode ? 'text-gray-900 hover:text-green-500' : 'text-gray-800 hover:text-green-600'}`}
          >
            {number}
          </a>
        ))}
      </div>
    );
  } else if (type === 'location') {
    content = (
      <a
        href={`https://maps.app.goo.gl/cE8hKHAtN4VsGYSX8`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${darkMode ? 'text-gray-900 hover:text-green-500' : 'text-gray-800 hover:text-green-600'} break-words`}
      >
        {text}
      </a>
    );
  } else {
    content = <span className={`${darkMode ? 'text-gray-900' : 'text-gray-800'}`}>{text}</span>;
  }

  return (
    <li className="flex items-start justify-center md:justify-start space-x-2">
      <span className={`text-green-800 hover:text-yellow-500 text-xl ${className}`}>{icon}</span>
      <span>{content}</span>
    </li>
  );
};