"use client";

import Link from "next/link";
import React, { useState } from "react";

const entertainmentMenu = [
  {
    name: "CABARET & SINGING WAITERS",
    href: "/entertainment/cabaret-singing-waiters",
  },
  {
    name: "SINGERS",
    href: "/entertainment/singers",
  },
  {
    name: "MUSICIANS",
    href: "/entertainment/musicians",
  },
  {
    name: "DANCERS",
    href: "/entertainment/dancers",
  },
  {
    name: "MAGIC",
    href: "/entertainment/magic",
  },
  {
    name: "PARTY BANDS",
    href: "/entertainment/party-bands",
  },
  {
    name: "DJ'S & MUSICIANS",
    href: "/entertainment/djs",
  },
  {
    name: "SHOWS",
    href: "/entertainment/shows",
  },
  {
    name: "WEIRD STUFF",
    href: "/entertainment/crazy-weird",
  },
  {
    name: "BESPOKE",
    href: "/entertainment/bespoke",
  },
];

const EntertainmentAccordian = () => {
  const [entertainmentOpen, setEntertainmentOpen] = useState(false);

  return (
    <>
        <Link href="/entertainment">
      <button
        onClick={() => setEntertainmentOpen(!entertainmentOpen)}
        className="w-full flex justify-between px-6 py-4"
      >
        ENTERTAINMENT
        <span className="text-2xl">{entertainmentOpen ? "̭" : "̬"}</span>
      </button>
      </Link>

      {entertainmentOpen && (
        <ul className="bg-[#111] pl-8">
          {entertainmentMenu.map((item) => (
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


export default EntertainmentAccordian