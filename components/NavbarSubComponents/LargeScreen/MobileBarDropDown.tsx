"use client"

import Link from 'next/link';
import React from 'react'
import { usePathname } from "next/navigation";

export const mobileBarsMenu = [
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

const MobileBarDropDown = () => {
    const pathname = usePathname();

    const navClass = (path: string) =>
        pathname === path ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400 transition";
  return (
    <>
        
        <Link
            href="/mobile-bar"
            className={`flex items-center gap-2 ${navClass("/mobile-bars")}`}
        >
            MOBILE BARS
            <span className="text-3xl mb-7.5">ˬ</span>
        </Link>

        <ul className="absolute top-full left-0 invisible group-hover:visible bg-[#111111d0] min-w-56 z-50">
            {mobileBarsMenu.map((item) => (
            <li key={item.href} className="relative group/sub">
                <Link
                href={item.href}
                className="flex justify-between px-5 py-3 hover:text-[#C9AC8C]"
                >
                {item.name}
                <span>›</span>
                </Link>

                {/* Second Level */}
                <ul className="absolute left-full top-0 invisible group-hover/sub:visible bg-[#111111d0] min-w-64">
                {item.children?.map((child) => (
                    <li key={child.href}>
                    <Link
                        href={child.href}
                        className="block px-5 py-3 hover:text-[#C9AC8C]"
                    >
                        {child.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </li>
            ))}
        </ul>
        
    </>
  )
}

export default MobileBarDropDown