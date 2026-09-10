import BottlePhotos from "@/components/public/MobileBar/BottlePhotos";
import ClientReview from "@/components/public/MobileBar/ClientReview";
import ContactForm from "@/components/public/ContactForm";
import DryHire from "@/components/public/MobileBar/DryHire";
import Events from "@/components/public/MobileBar/Events";
import MobileBarCompany from "@/components/public/MobileBar/MobileBarCompany";
import MobileBarIntro from "@/components/public/MobileBar/MobileBarIntro";
import PartyPhotos from "@/components/public/MobileBar/PartyPhotos";
import SectionHeading from "@/components/public/SectionHeading";
import ServiceCard from "@/components/public/ServiceCard";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Bar - GreenHillEvent",
  // description: "",     ###############################################################
  icons: {
    icon: "/faviconV2.png",
    shortcut: "/faviconV2.png",
    apple: "/faviconV2.png",
  },
};

const page = () => {
  return (
    <div className="pt-26 ">
      <SectionHeading title="The Greenhill Mobile Bar" />

      <MobileBarIntro />

      <Events />

      <BottlePhotos />

      <DryHire />

      <MobileBarCompany />

      <div className="mx-16.25 flex  flex-col items-center justify-center">
        <p className="py-4 text-center font-['Poppins'] text-2xl font-light leading-tight text-white sm:py-7 sm:text-3xl md:text-4xl lg:text-[4rem] xl:text-[4.5rem]">
          We're more than just refreshments...
        </p>
        <p className="text-left italic text-[20.4px] pt-4 leading-6 tracking-[0.6px] text-[#C9AC8C] font-['Cormorant_Garamond']">
          As well as offering the Greenhill Bar, our sister company, Greenhill
          Entertainment, are specialists in providing bespoke event
          entertainment solutions. From weddings and parties to corporate
          events, Greenhill Entertainment will create a truly memorable
          experience, whatever the event.
        </p>
        <div>
          <Link href="/">
            <button
              className="mt-8 mb-5 w-full sm:w-auto rounded-4xl border-2 sm:border-3 border-white px-5 py-3 sm:px-8 md:px-10 text-sm sm:text-base 
              md:text-lg lg:text-[1.25rem] leading-tight text-[#C9AC8C] transition duration-300 animate-[shake-horizontal_3.5s_cubic-bezier(.455,.03,.515,.955)_infinite_both]
              hover:bg-[#C9AC8C] hover:text-black "
            >
              VISIT SIMONGREENHILL.COM
            </button>
          </Link>
        </div>
      </div>

      <PartyPhotos />

      <ClientReview />

      <div>
        <p className="py-4 text-center font-['Poppins'] text-2xl font-light leading-tight text-white sm:py-7 sm:text-3xl md:text-4xl lg:text-[4rem] xl:text-[4.5rem]">
          Make yours an event to remember!
        </p>
      </div>

      <ServiceCard />

      <ContactForm bgClass="bg-[#1a1919]" />
    </div>
  );
};

export default page;
