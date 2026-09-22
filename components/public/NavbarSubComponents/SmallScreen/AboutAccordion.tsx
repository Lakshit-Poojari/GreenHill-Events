"use client";

import Link from "next/link";
import React, { useState } from "react";

interface AboutAccordionProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const AboutAccordion = ({ setOpen }: AboutAccordionProps) => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      {/* ABOUT US */}
      <div className="w-full flex justify-between items-center px-6 py-4">
        {/* ABOUT US → OPEN PAGE */}
        <Link
          href="/about-us"
          onClick={() => {
            setAboutOpen(false);
            setOpen(false);
          }}
        >
          ABOUT US
        </Link>

        {/* ARROW → OPEN/CLOSE OPTIONS */}
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          className="px-2"
          aria-label="Toggle About Us menu"
        >
          <span className="text-2xl">{aboutOpen ? "̭" : "̬"}</span>
        </button>
      </div>

      {/* ABOUT US DROPDOWN */}
      {aboutOpen && (
        <ul className="bg-[#111] pl-8">
          {aboutMenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => {
                  setAboutOpen(false);
                  setOpen(false);
                }}
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
