



import AboutUsSection from "@/components/Home/AboutSection";
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


    </div>
  );
}
