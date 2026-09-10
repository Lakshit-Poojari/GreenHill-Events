import SectionHeading from "@/components/public/SectionHeading";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Careers - GreenHillEvent",
  // description: "",     ###############################################################
  icons: {
    icon: "/faviconV2.png",
    shortcut: "/faviconV2.png",
    apple: "/faviconV2.png",
  },
};
const page = () => {
  return (
    <>
      <div className="pt-26 mx-16.25 px-6.75">
        <SectionHeading title="Careers" />
        <div className="mt-6 grid grid-cols-1 gap-8 py-3 md:grid-cols-2">
          <div className="text-justify font-['Old_Standard_TT'] text-[20.4px] italic leading-relaxed text-[#C9AC8C]">
            <p>
              As a rapidly growing business we are constantly in search of new
              talent: not only when it comes to acts and artists, but also when
              it comes to the diverse range of careers within the entertainment,
              events and hospitality industry.
            </p>
            <p>
              Our Head Office is in Surrey. We provide entertainment, bar
              services and event management across the UK including London, The
              South West, South East, East Midlands, West Midlands, Home
              Counties, Cheshire, Yorkshire & Lancashire. Additionally we work
              overseas and travel extensively in Europe, America, Africa, Asia,
              Dubai, Abu Dhabi, Australia & New Zealand.
            </p>
            <p>
              If you are looking to further your career in the events, bar or
              hospitality industry and would like to work at the many events
              such as large-scale awards ceremonies, intimate conferences, team
              building, Brand Activations, Product Launches, Christmas Parties,
              Summer Parties, Sales Conferences, Weddings, anniversaries,
              bar/bat mitzvahs, private parties, music festivals & sporting
              events at some of the most sought-after locations and venues then
              drop us your CV.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/About/Careers.jpg"}
              alt="our-founder"
              width={600}
              height={1600}
              className="h-auto w-full max-w-150 object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
