"use client";

import Link from "next/link";
import React, { useState } from "react";
import "@/app/globals.css";

const DistinctOffering = () => {
  const offerings = [
    {
      title: "ENTERTAINMENT",
      description:
        "Greenhill Entertainment was born out of London's West End. We have built a solid reputation for providing world class entertainment in over 50 countries worldwide.",
    },
    {
      title: "MOBILE BARS",
      description:
        "Our bars bring elegance to any wedding or party and create a talking point to a corporate or sporting event, making your event more memorable.",
    },
    {
      title: "EVENTS",
      description:
        "Exceptional creative & bespoke luxury parties & events to delight and wow your guests.",
    },
    {
      title: "BESPOKE",
      description:
        "If you can imagine it – we can do it! Creativity is our thing! We take your idea, consult, create and deliver!",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="bg-[#1a1919] mx-16.25 px-6.75 py-28 text-center">
        <p className="text-[4.125rem] font-['Playfair_Display']">
          DISTINCT OFFERINGS
        </p>

        <hr className="w-[15%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-2 mt-6 mb-2">
          {offerings.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 rounded-sm transition-all duration-300 ${
                activeTab === index
                  ? "bg-white text-black"
                  : "text-white border-[#f68a59] bg-[#f79468] hover:bg-[#f47e4c]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-2.5 border-2 border-white bg-black box-content px-5 py-1 overflow-hidden transition-all duration-200 ease-in-out">
          <p className="text-3xl text-[#C9AC8C] italic font-normal font-['Old_Standard_TT']">
            {offerings[activeTab].description}
          </p>

          <Link href="">
            <button
              className="mt-12 mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3 text-[#C9AC8C]
              animate-[bounce-x_0.49s_ease-in-out_infinite]
              hover:bg-[#C9AC8C] hover:text-black transition duration-300"
            >
              FIND OUT MORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DistinctOffering;