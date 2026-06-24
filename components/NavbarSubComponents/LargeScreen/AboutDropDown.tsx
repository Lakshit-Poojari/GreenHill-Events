"use client"

import Link from 'next/link';
import React from 'react'
import { usePathname } from "next/navigation";

const aboutMenu = [
  {
    name: "OUR FOUNDER",
    href: "/about-us/our-founder",
  },
  {
    name: "VISION & VALUES",
    href: "/about-us/vision-and-values",
  },
  {
    name: "CASE STUDIES",
    href: "/about-us/case-studies",
  },
  {
    name: "CAREERS",
    href: "/about-us/careers",
  },
];

const AboutDropDown = () => {
    const pathname = usePathname();
    
    const navClass = (path: string) =>
        pathname === path ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400 transition";
  return (
    <>
        
            <Link href="/about-us" className={`flex items-center gap-2 ${navClass("/about-us")}`}>
                ABOUT US
                <span className="text-3xl mb-7.5">ˬ</span>
            </Link>

            <ul className=" absolute top-full left-0 invisible group-hover:visible bg-[#111111d0] min-w-56 z-50 ">
                {aboutMenu.map((item) => (
                <li key={item.href}>
                    <Link href={item.href} className="block px-5 py-3 hover:text-[#C9AC8C]" >
                        {item.name}
                        <hr className='border-[#88868466]'/>
                    </Link>
                </li>
                ))}
            </ul>
        
    </>
  )
}

export default AboutDropDown