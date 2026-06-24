"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import AboutDropDown from "./NavbarSubComponents/LargeScreen/AboutDropDown";
import EntertainmentDropDown from "./NavbarSubComponents/LargeScreen/EntertainmentDropDown";
import MobileBarDropDown from "./NavbarSubComponents/LargeScreen/MobileBarDropDown";
import AboutAccordion from "./NavbarSubComponents/SmallScreen/AboutAccordion";
import EntertainmentAccordian from "./NavbarSubComponents/SmallScreen/EntertainmentAccordian";
import MobileBarAccordian from "./NavbarSubComponents/SmallScreen/MobileBarAccordian";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = (path: string) =>
    pathname === path
      ? "text-[rgba(201,172,140,1)]"
      : "hover:text-gray-400 transition";

  return (
    <header
      className={`fixed border-b border-[#88868466] font-['Poppins'] top-0 left-0 w-full  z-50 transition-all duration-300 
      ${ scrolled ? "bg-black/95 shadow-md  h-17" : "bg-transparent py-7" }`}>
      <nav className="flex items-center justify-between mx-16.25 px-6.75">
        {/* Logo */}
        <div>
          <Image src="/greenhill.jpg" alt="logo" width={400} height={400}
            className="h-17 w-auto transition-all duration-300" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-20 font-['Poppins'] tracking-[0.08em] text-xs">
            <li>
              <Link href="/" className={navClass("/")}>
                HOME
              </Link>
            </li>

            <li className="relative group">
              <AboutDropDown/>
            </li>

            <li className="relative group">
              <EntertainmentDropDown/>
            </li>

            <li className="relative group">
              <MobileBarDropDown/>
            </li>

            <li>
              <Link href="/events" className={navClass("/events")}>
                EVENTS
              </Link>
            </li>

            <li>
              <Link href="/blog" className={navClass("/blog")}>
                BLOG
              </Link>
            </li>

            <li>
              <Link href="/contact-us" className={navClass("/contact-us")}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden flex items-center gap-2" onClick={() => setOpen(!open)} >
          <span className="font-semibold tracking-widest">MENU</span>

          {open ? <X size={32} /> : <Menu size={32} strokeWidth={2.5} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black text-white border-t border-gray-800">
          <ul className="flex flex-col">
            <li>
              <Link href="/" onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${navClass("/")}`}>
                HOME
              </Link>
            </li>

            <li>
              <AboutAccordion/>
            </li>

            <li>
              <EntertainmentAccordian/>
            </li>

            <li>
              <MobileBarAccordian/>
            </li>

            <li>
              <Link href="/events" onClick={() => setOpen(false)} 
                className={`block px-6 py-4 ${navClass("/events")}`}>
                EVENTS
              </Link>
            </li>

            <li>
              <Link href="/blog" onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${navClass("/blog")}`}>
                BLOG
              </Link>
            </li>

            <li>
              <Link href="/contact-us" onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${navClass("/contact-us")}`}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;