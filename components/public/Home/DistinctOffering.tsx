"use client";

import Link from "next/link";
import React, { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";

const DistinctOffering = () => {
  const offerings = [
    {
      title: "ENTERTAINMENT",
      description:
        "Greenhill Entertainment was born out of London's West End. We have built a solid reputation for providing world class entertainment in over 50 countries worldwide.",
      link: "/entertainment",
      images: [
        "/Home/DistinctOffering/Entertainment/entertainment-1.jpg",
        "/Home/DistinctOffering/Entertainment/Metropolis.png",
        "/Home/DistinctOffering/Entertainment/Rollercoaster.png",
      ],
    },
    {
      title: "MOBILE BARS",
      description:
        "Our bars bring elegance to any wedding or party and create a talking point to a corporate or sporting event, making your event more memorable.",
      link: "/mobile-bar",
      images: [
        "/Home/DistinctOffering/Mobile/BARHP1_400.jpg",
        "/Home/DistinctOffering/Mobile/BARHP2_400.jpg",
        "/Home/DistinctOffering/Mobile/BARHP3_400.jpg",
      ],
    },
    {
      title: "EVENTS",
      description:
        "Exceptional creative & bespoke luxury parties & events to delight and wow your guests.",
      link: "/events",
      images: [
        "/Home/DistinctOffering/Event/event-1.jpg",
        "/Home/DistinctOffering/Event/event_2.jpg",
        "/Home/DistinctOffering/Event/event-3.jpg",
      ],
    },
    {
      title: "BESPOKE",
      description:
        "If you can imagine it – we can do it! Creativity is our thing! We take your idea, consult, create and deliver!",
      link: "/bespoke",
      images: [
        "/Home/DistinctOffering/Bespoke/bespoke1.jpg",
        "/Home/DistinctOffering/Bespoke/bespoke2.jpg",
        "/Home/DistinctOffering/Bespoke/bespoke3.jpg",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="bg-[#1a1919] mx-16.25 px-6.75 py-17 text-center">
        <p className="text-[4.125rem] font-['Playfair_Display']">
          DISTINCT OFFERINGS
        </p>

        <hr className="w-[15%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />

        {/* Navigation Buttons */}
        <div className="mt-6 mb-5 flex flex-wrap justify-center gap-2 sm:gap-3">
          {offerings.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-sm px-3 py-2 text-sm transition-all duration-300 sm:px-5 sm:py-3 sm:text-base ${
                activeTab === index
                  ? "bg-white text-black"
                  : "bg-[#f79468] text-white hover:bg-[#f47e4c]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="h-170 overflow-hidden border-2 border-white bg-black px-5 py-6">
          <div key={activeTab} className="slide-in-bottom">
            <p className="font-['Old_Standard_TT'] text-3xl font-normal italic text-[#C9AC8C]">
              {offerings[activeTab].description}
            </p>
            <div className="image-gallery mt-8 flex justify-center gap-1">
              {offerings[activeTab].images.map((image, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="gallery-item slide-in-left w-1/3"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={image}
                    alt={`${offerings[activeTab].title} ${index + 1}`}
                    width={150}
                    height={120}
                    className={`gallery-image rounded-2xl h-110 w-full  object-contain transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#C9AC8C]/20 ${
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "brightness-[0.45]"
                        : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <Link href={offerings[activeTab].link}>
              <button
                className=" my-5 rounded-4xl border border-[#C9AC8C] px-10 py-3 text-[1.25rem] text-[#C9AC8C]
        animate-[shake-horizontal_3.5s_cubic-bezier(.455,.03,.515,.955)_infinite_both]
        transition duration-300 hover:bg-[#C9AC8C] hover:text-black"
              >
                FIND OUT MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DistinctOffering;
