



import AboutUsSection from "@/components/Home/AboutSection";
import AthletesRecoveryProgram from "@/components/Home/AtheleteRecoveryProgram";
import FAQ from "@/components/Home/Faq";
import FeatureCard from "@/components/Home/FeatureCard";
import FounderSection from "@/components/Home/FounderSection";
import HealingSection from "@/components/Home/HealingSection";
import HeroSection from "@/components/Home/HeroSection";
import MeetOurExperts from "@/components/Home/MeetOurExperts";
import PartneredSection from "@/components/Home/PartneredSection";
import PerformanceSection from "@/components/Home/PerformanceSection";
import RecoverySection from "@/components/Home/RecoverySection";
import SportsInfoCards from "@/components/Home/SportsInfoCard";
import SportsMedicineBanner from "@/components/Home/SportsMedicineBanner";
import InfoGrid from "@/components/Home/SportsUnlock";
import WhyChooseUs from "@/components/Home/WhyChooseUS";


import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <HeroSection/>
     <SportsInfoCards/>
  
     <InfoGrid/>
       <PerformanceSection/>
     <AboutUsSection/>
     <SportsMedicineBanner />
     <FounderSection />
     <HealingSection/>
  
    
      <FeatureCard
        topTitle="Proud Partners with Vald Test"
        topText="At 5 Sports Hospital, we use advanced testing technologies from Vald Test, ensuring precise diagnostics and optimized treatment plans for every athlete."
        topImage="/vald.jpg"
        bottomTitle="Advanced Machines for Testing"
        bottomText="Our state-of-the-art testing equipment helps us assess performance, strength, and recovery in real-time, allowing us to deliver the most effective rehab solutions."
      />
      <PartneredSection
              topTitle="Partnered with a Leading Firm"
              topText="5 Sports Hospital proudly uses machines and recovery technology from a renowned US-based firm, ensuring world-class treatment for all athletess."
              topImage="/test1.png"
              bottomTitle="By combining cutting-edge technology with expert care, we empower athletes to reach their fullest potential in record time."
          
      
      />
      <RecoverySection/>
      <WhyChooseUs/>
      <AthletesRecoveryProgram/>
      <MeetOurExperts/>
      <FAQ/>

    </div>
  );
}
