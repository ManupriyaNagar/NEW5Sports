import Header from "@/components/global/header";
import AboutUsSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import SportsInfoCards from "@/components/Home/SportsInfoCard";
import InfoGrid from "@/components/Home/SportsUnlock";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <HeroSection/>
     <SportsInfoCards/>
     <InfoGrid/>
     <AboutUsSection/>
    </div>
  );
}
