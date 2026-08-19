import SectionHeading from "@/components/public/SectionHeading";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Sporting & Festivals - GreenHillEvent",
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
      <div
        className="pt-26 mx-16.25 px-6.75 text-[#C9AC8C] text-[20.4px] items-start italic text-justify space-y-1.5 my-6 py-3 
        font-['Old_Standard_TT']"
      >
        <SectionHeading title="Sporting & Festivals" />
        <div>
          <p>
            We provide high-quality bars to a multitude of events, including
            festivals, concerts, stadiums and sporting venues. We have worked
            with venues and events such as Saracens Rugby, Twickenham, London
            Stadium, Kia Oval, Winter wonderland Hyde Park.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/contact-us">
            <button
              className="mt-12 mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3 text-[#C9AC8C]
                        animate-[shake-horizontal_3.5s_cubic-bezier(.455,.03,.515,.955)_infinite_both] hover:bg-[#C9AC8C] hover:text-black transition 
                        duration-300"
            >
              ENQUIRE TODAY
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
