"use client"

import Link from 'next/link';
import React from 'react'
import { usePathname } from "next/navigation";

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
    href: "/entertainment/bands",
  },
  {
    name: "DJ'S & MUSICIANS",
    href: "/entertainment/djs-musicians",
  },
  {
    name: "SHOWS",
    href: "/entertainment/shows",
  },
  {
    name: "WEIRD STUFF",
    href: "/entertainment/weird-stuff",
  },
  {
    name: "BESPOKE",
    href: "/entertainment/bespoke",
  },
];

const EntertainmentDropDown = () => {
    const pathname = usePathname();

    const navClass = (path: string) =>
        pathname === path ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400 transition";

  return (
    <>
        <li className="relative group">
            <Link href="/entertainment" className={`flex items-center gap-2 ${navClass("/entertainment")}`}>
                ENTERTAINMENT
                <span className="text-3xl mb-7.5">ˬ</span>
            </Link>

            <ul className=" absolute top-full left-0 invisible
                group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-[#111111d0] min-w-50 z-50 " >
                {entertainmentMenu.map((item, index) => (
                    <li key={item.href}>
                        <Link href={item.href} className={` block px-5 pb-3 pt-1 hover:text-[#C9AC8C] `} >
                            {item.name}
                            <hr className='border-[#88868466]'/>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    </>
  )
}

export default EntertainmentDropDown