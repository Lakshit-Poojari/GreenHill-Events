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

      <div className="mx-16.25 px-6.75">
        <p className="font-['Poppins'] text-[4.5rem] py-20 sm:py-24 md:py-32 lg:py-40 xl:py-50 font-light text-center text-white">
          We're more than just refreshments...
        </p>
        <p className="text-left italic text-[20.4px] leading-6 tracking-[0.6px] text-[#C9AC8C] font-['Cormorant_Garamond']">
          As well as offering the Greenhill Bar, our sister company, Greenhill
          Entertainment, are specialists in providing bespoke event
          entertainment solutions. From weddings and parties to corporate
          events, Greenhill Entertainment will create a truly memorable
          experience, whatever the event.
        </p>
        <div>
          <Link href="/">
            <button
              className="mt-12 mb-5 text-[1.25rem] border-3 border-white rounded-4xl px-10 py-3 text-[#C9AC8C]
                animate-[bounce-x_0.49s_ease-in-out_infinite] hover:bg-[#C9AC8C] hover:text-black transition duration-300"
            >
              VISIT SIMONGREENHILL.COM
            </button>
          </Link>
        </div>
      </div>

      <PartyPhotos />

      <ClientReview />

      <div>
        <p className="font-['Poppins'] text-[4.5rem] py-20 sm:py-24 md:py-32 lg:py-40 xl:py-50 font-light text-center text-white">
          Make yours an event to remember!
        </p>
      </div>

      <ServiceCard />

      <ContactForm bgClass="bg-[#1a1919]" />
    </div>
  );
};

export default page;
