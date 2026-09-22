"use client";

import Link from "next/link";
import React, { useState } from "react";

interface MobileBarAccordianProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const mobileBarMenu = [
  {
    name: "BAR",
    href: "/bar",
    children: [
      {
        name: "DRY HIRE",
        href: "/dry-hire",
      },
      {
        name: "STANDARD BAR",
        href: "/standard-bar",
      },
      {
        name: "COMPLIMENTARY BAR",
        href: "/complimentary-bar",
      },
      {
        name: "SPORTING & FESTIVAL BAR",
        href: "/sporting-festival-bar",
      },
      {
        name: "OUR BAR",
        href: "/our-bars",
      },
    ],
  },
];

const MobileBarAccordian = ({ setOpen }: MobileBarAccordianProps) => {
  const [mobileBarsOpen, setMobileBarsOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(false);

  return (
    <>
      {/* MOBILE BARS */}
      <div className="w-full flex justify-between items-center px-6 py-4">
        {/* MOBILE BARS → OPEN PAGE */}
        <Link
          href="/mobile-bar"
          onClick={() => {
            setBarOpen(false);
            setMobileBarsOpen(false);
            setOpen(false);
          }}
        >
          MOBILE BARS
        </Link>

        {/* ARROW → OPEN/CLOSE BAR */}
        <button
          onClick={() => {
            setMobileBarsOpen(!mobileBarsOpen);

            // Close BAR submenu when MOBILE BARS is closed
            if (mobileBarsOpen) {
              setBarOpen(false);
            }
          }}
          className="px-2"
          aria-label="Toggle Mobile Bars menu"
        >
          <span className="text-2xl">{mobileBarsOpen ? "̭" : "̬"}</span>
        </button>
      </div>

      {/* MOBILE BARS DROPDOWN */}
      {mobileBarsOpen && (
        <ul className="bg-[#111]">
          {mobileBarMenu.map((item) => (
            <li key={item.href}>
              {/* BAR */}
              <div className="w-full flex justify-between items-center pl-8 pr-6 py-3">
                {/* BAR → OPEN PAGE */}
                <Link
                  href={item.href}
                  onClick={() => {
                    setBarOpen(false);
                    setMobileBarsOpen(false);
                    setOpen(false);
                  }}
                  className="flex-1"
                >
                  {item.name}
                </Link>

                {/* BAR ARROW → OPEN/CLOSE CHILDREN */}
                <button
                  onClick={() => setBarOpen(!barOpen)}
                  className="px-2"
                  aria-label={`Toggle ${item.name} menu`}
                >
                  <span className="text-2xl">{barOpen ? "̭" : "̬"}</span>
                </button>
              </div>

              {/* BAR CHILDREN */}
              {barOpen && (
                <ul className="pl-12 bg-[#1a1a1a]">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => {
                          setBarOpen(false);
                          setMobileBarsOpen(false);
                          setOpen(false);
                        }}
                        className="block py-3"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileBarAccordian;
