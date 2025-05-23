// pages/index.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  // State for ElevateProgramme data
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data for ElevateProgramme
  useEffect(() => {
    fetch("/data2.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data2.json");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log("Fetched data:", jsonData);
        setData(jsonData.sections?.programmes || []);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
      });
  }, []);

  // Animation variants for TestingSection
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

  return (
    <div>
      {/* TestingSection (Programmes) */}
      <section
        className={`relative overflow-hidden py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white ${spaceGrotesk.variable}`}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto text-center"
          >
            <section className="flex w-full text-black px-2 max-md:flex-col">
              <article className="relative flex flex-col py-10 w-full bg-lime-400 border border-white border-solid rounded-[32px] overflow-visible">
                <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
                SPORTS PHYSIO PROGRAMS
                </h2>
                <div className="flex flex-wrap gap-5 justify-center mt-2 w-full text-2xl text-center">
                  <p className="max-w-5xl">
                    We have a number of programmes designed to offer high quality
                    physiotherapy and performance support to specific groups and
                    individuals.
                  </p>
                </div>
              </article>
            </section>
          </motion.div>
        </div>
      </section>

      {/* ElevateProgramme */}
      <div className="bg-black py-16">
        {error ? (
          <p className="text-red-500 text-center py-12">Error: {error}</p>
        ) : data.length > 0 ? (
          data.map((item, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={item.id || index}
                className={`flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-12 ${
                  isImageLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`relative w-full md:w-1/2 h-[400px] transform transition-transform duration-500 ${
                    isImageLeft ? "-rotate-3" : "rotate-3"
                  } hover:rotate-0`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={`${item.heading} image`}
                    fill
                    objectFit="cover"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center">
                    {isImageLeft ? (
                      <>
                        <span className="text-green-500 ml-4 text-4xl">←</span>
                        {item.heading}
                      </>
                    ) : (
                      <>
                        {item.heading}
                        <span className="text-green-500 mr-4 text-4xl">→</span>
                      </>
                    )}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.paragraph}
                  </p>
                  <Link
                    href={`/programs/sports-page/${item.id}`}
                    className="text-green-500 font-semibold inline-block transition hover:underline"
                  >
                    {item.linkText}
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white text-center py-12">Loading programmes...</p>
        )}
      </div>
    </div>
  );
}