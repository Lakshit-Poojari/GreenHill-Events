// import { Companys } from "@/components/public/Home/Companys";
import { Companys } from "@/components/public/Home/Companys";
import DistinctOffering from "@/components/public/Home/DistinctOffering";
import HeroSection from "@/components/public/Home/HeroSection";
import RecentPosts from "@/components/public/Home/RecentPosts";
import Testimonials from "@/components/public/Home/Testimonials";
import WellcomeToGrennHill from "@/components/public/Home/WellcomeToGrennHill";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pt-26">
        <HeroSection />
        <WellcomeToGrennHill />
        <DistinctOffering />
        <Testimonials />
        <RecentPosts />
        <Companys />
      </div>
    </>
  );
}
