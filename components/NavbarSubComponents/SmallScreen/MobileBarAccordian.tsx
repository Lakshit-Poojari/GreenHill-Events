"use client";

import Link from "next/link";
import React, { useState } from "react";

const mobileBarMenu = [
  {
    name: "BAR",
    href: "/mobile-bars/bar",
    children: [
      {
        name: "DRY HIRE",
        href: "/mobile-bars/bar/dry-hire",
      },
      {
        name: "STANDARD BAR",
        href: "/mobile-bars/bar/standard-bar",
      },
      {
        name: "COMPLIMENTARY BAR",
        href: "/mobile-bars/bar/complimentary-bar",
      },
      {
        name: "SPORTING & FESTIVAL BAR",
        href: "/mobile-bars/bar/sporting-festival-bar",
      },
      {
        name: "OUR BAR",
        href: "/mobile-bars/bar/our-bar",
      },
    ],
  },
];

const MobileBarAccordian = () => {
  const [mobileBarsOpen, setMobileBarsOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(false);

  return (
    <li>
        <Link href="/mobile-bar">
      <button
        onClick={() => setMobileBarsOpen(!mobileBarsOpen)}
        className="w-full flex justify-between px-6 py-4"
      >
        MOBILE BARS
        <span className="text-2xl">{mobileBarsOpen ? "̭" : "̬"}</span>
      </button>
      </Link>

      {mobileBarsOpen && (
        <ul className="bg-[#111]">
          {mobileBarMenu.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => setBarOpen(!barOpen)}
                className="w-full flex justify-between pl-8 pr-6 py-3"
              >
                {item.name}
                <span className="text-2xl">{barOpen ? "̭" : "̬"}</span>
              </button>

              {barOpen && (
                <ul className="pl-12 bg-[#1a1a1a]">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
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
    </li>
  );
};

export default MobileBarAccordian