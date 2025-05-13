'use client';
import React from "react";

export default function OrthopedicCareSection() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 space-y-24">
      {/* Section Wrapper */}
      {[
       {
          title: "// SURGICAL SECOND OPINION",
          subtitle: "Not Sure What to Do Next? We’ll Help You Decide.",
          content: `Surgery is a big decision—make it an informed one. Our experts provide honest, independent reviews of your case to explore all options.`,
          note: `We’re not here to sell surgery—we’re here to guide you toward your best outcome.`,
          expertPanel: [
            "Dr. [Name Placeholder] – Orthopedic Surgeon (Joint replacement & trauma)",
            "Dr. [Name Placeholder] – Sports Orthopedist (ACL, PCL, ligament recon)",
            "Dr. [Name Placeholder] – Arthroscopy & Shoulder Specialist (Keyhole surgeries)",
            "Dr. [Name Placeholder] – Spine & Neuro-Ortho Consultant (Disc and motion surgery)",
            "Dr. [Name Placeholder] – Joint Replacement Surgeon (Robotic & personalized implants)"
          ]
        }
      ].map((section, idx) => (
        <section key={idx} className="space-y-6">
          <h2 className="text-lime-400 text-4xl font-bold border-b border-green-400 pb-2 tracking-wider">
            {section.title}
          </h2>
          <h3 className="text-3xl font-semibold text-white">{section.subtitle}</h3>
          {section.content && (
            <p className="text-2xl text-gray-200">{section.content}</p>
          )}
          {section.bullets && (
            <ul className="list-disc pl-6 text-2xl text-gray-200 space-y-2">
              {section.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && (
            <p className={`text-2xl ${section.italic ? "italic" : ""} text-gray-400`}>
              {section.note}
            </p>
          )}
          {section.callout && (
            <div className="bg-[#001f1f] border-l-4 border-lime-400 px-4 py-3 rounded-lg">
              <p className="text-lime-400 font-bold text-2xl">{section.callout.heading}</p>
              <p className="text-2xl text-gray-200 mt-1">{section.callout.text}</p>
            </div>
          )}
          {section.expertPanel && (
            <div className="bg-gradient-to-b from-black to-[#001f1f] border border-green-400 rounded-xl p-6 space-y-4 mt-4">
              <p className="text-lime-400 font-bold text-2xl">OUR EXPERT PANEL</p>
              <ul className="list-disc pl-6 text-2xl text-gray-200 space-y-2">
                {section.expertPanel.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}