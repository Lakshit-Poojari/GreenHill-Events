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
      <div className="bg-[#1a1919] mx-12.25 px-4.75 py-17 text-center">
        <p className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
          DISTINCT OFFERINGS
        </p>

        <hr className="w-20 sm:w-[18%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />

        {/* Navigation Buttons */}
        <div className="mt-6 mb-5 flex flex-wrap  justify-center gap-2 sm:gap-3">
          {offerings.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-sm px-2 py-2 text-sm transition-all  duration-300 sm:px-5 sm:py-3 sm:text-base ${
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
        <div
          className="
            h-auto
            min-h-125
            sm:min-h-137.5
            md:min-h-150
            lg:h-170
            overflow-hidden
            border-2
            border-white
            bg-black
            px-4
            sm:px-3
            md:px-4
            py-5
            sm:py-6
          "
        >
          <div key={activeTab} className="slide-in-bottom">
            <p
              className="
                font-['Old_Standard_TT']
                text-xl
                sm:text-2xl
                md:text-3xl
                font-normal
                italic
                text-[#C9AC8C]
                leading-relaxed
              "
            >
              {offerings[activeTab].description}
            </p>

            <div
              className="
                image-gallery
                mt-6
                sm:mt-8
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-3
                sm:gap-1
              "
            >
              {offerings[activeTab].images.map((image, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="
                    gallery-item
                    slide-in-left
                    w-full
                    sm:w-1/3
                  "
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={image}
                    alt={`${offerings[activeTab].title} ${index + 1}`}
                    width={150}
                    height={120}
                    className={`
                      gallery-image
                      h-55
                      sm:h-75
                      md:h-95
                      lg:h-110
                      w-full
                      rounded-2xl
                      object-contain
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-lg
                      hover:shadow-[#C9AC8C]/20
                      ${
                        hoveredIndex !== null && hoveredIndex !== index
                          ? "brightness-[0.45]"
                          : ""
                      }
                    `}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DistinctOffering;
