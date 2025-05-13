



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
        topTitle="Healing Being Transformed"
        topText="Elite recovery methods are being made accessible to all—enabling faster healing and peak performance."
        topImage="/news1.jpg"
        bottomTitle="Advanced Machines for Testing"
        bottomText="Our state-of-the-art testing equipment helps us assess performance, strength, and recovery in real-time, allowing us to deliver the most effective rehab solutions."
      />
      <PartneredSection
              topTitle="Healing Being Transformed"
              topText="Elite recovery methods are being made accessible to all—enabling faster healing and peak performance."
              topImage="/news1.jpg"
              bottomTitle="Advanced Machines for Testing"
              bottomText="Our state-of-the-art testing equipment helps us assess performance, strength, and recovery in real-time, allowing us to deliver the most effective rehab solutions."
      
      />
      <RecoverySection/>
      <WhyChooseUs/>
      <AthletesRecoveryProgram/>
      <MeetOurExperts/>
      <FAQ/>

    </div>
  );
}
