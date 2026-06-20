import { Companys } from "@/components/Home/Companys";
import DistinctOffering from "@/components/Home/DistinctOffering";
import HeroSection from "@/components/Home/HeroSection";
import RecentPosts from "@/components/Home/RecentPosts";
import Testimonials from "@/components/Home/Testimonials";
import WellcomeToGrennHill from "@/components/Home/WellcomeToGrennHill";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pt-34">
        <HeroSection/>
        <WellcomeToGrennHill/>
        <DistinctOffering/>
        <Testimonials/>
        <RecentPosts/>
        <Companys/>
      </div>
    </>
  );
}
