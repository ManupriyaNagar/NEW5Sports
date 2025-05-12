



import AboutUsSection from "@/components/Home/AboutSection";
import FeatureCard from "@/components/Home/FeatureCard";
import FounderSection from "@/components/Home/FounderSection";
import HeroSection from "@/components/Home/HeroSection";
import SportsInfoCards from "@/components/Home/SportsInfoCard";
import SportsMedicineBanner from "@/components/Home/SportsMedicineBanner";
import InfoGrid from "@/components/Home/SportsUnlock";


import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <HeroSection/>
     <SportsInfoCards/>
     <InfoGrid/>
     <AboutUsSection/>
     <SportsMedicineBanner />
  
      <FounderSection />
      <FeatureCard
        topTitle="Healing Being Transformed"
        topText="Elite recovery methods are being made accessible to all—enabling faster healing and peak performance."
        topImage="/news1.jpg"
        bottomTitle="Advanced Machines for Testing"
        bottomText="Our state-of-the-art testing equipment helps us assess performance, strength, and recovery in real-time, allowing us to deliver the most effective rehab solutions."
      />

    </div>
  );
}
