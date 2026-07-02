"use client";

import Link from "next/link";
import React, { useState } from "react";

const aboutMenu = [
  {
    name: "OUR FOUNDER",
    href: "/our-founder",
  },
  {
    name: "VISION & VALUES",
    href: "/vision-and-values",
  },
  {
    name: "CASE STUDIES",
    href: "/case-studies",
  },
  {
    name: "CAREERS",
    href: "/careers",
  },
];

const AboutAccordion = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
        <Link href="/about-us">
      <button 
        onClick={() => setAboutOpen(!aboutOpen)}
        className="w-full flex justify-between px-6 py-4"
      >
        ABOUT US
        <span className="text-2xl">{aboutOpen ? "̭" : "̬"}</span>
      </button>
      </Link>

      {aboutOpen && (
        <ul className="bg-[#111] pl-8">
          {aboutMenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-3"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    
    </>
  );
};

export default AboutAccordion;