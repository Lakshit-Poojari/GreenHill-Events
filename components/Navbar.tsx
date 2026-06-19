"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="  flex items-center justify-between mx-16.25 px-6.75 ">

        {/* Logo */}
        <div>
          <Image
            src="/greenhill.jpg"
            alt="logo"
            width={300}
            height={80}
            className="w-40 md:w-52 lg:w-72 h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-22 font-['Poppins'] tracking-[0.08em] text-[0.75rem] text-xs">

            <li>
              <Link
                href="/"
                className={pathname === "/" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"}
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"}
              >
                ABOUT US
              </Link>
            </li>

            <li>
              <Link
                href="/entertainment"
                className={pathname === "/entertainment" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"}
              >
                ENTERTAINMENT
              </Link>
            </li>

            <li>
              <Link
                href="/mobile-bars"
                className={pathname === "/mobile-bars" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"}
              >
                MOBILE BARS
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className={pathname === "/events" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"}
              >
                EVENTS
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={pathname === "/blog" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"}
              >
                BLOG
              </Link>
            </li>

            <li>
              <Link
                href={"/contact-us"}
                className={pathname === "/contact-us" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"}
              >
                CONTACT US
              </Link>
            </li>

          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <span className="font-semibold tracking-widest">
            MENU
          </span>

          {open ? (
            <X size={32} />
          ) : (
            <Menu size={32} strokeWidth={2.5} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black text-white border-t border-gray-800">
          <ul className="flex flex-col">

            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${
                  pathname === "/" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"
                }`}
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${
                  pathname === "/about" ? "text-[rgba(201,172,140,1)]" : "hover:text-gray-400"
                }`}
              >
                ABOUT US
              </Link>
            </li>

            <li>
              <Link
                href="/entertainment"
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${
                  pathname === "/entertainment"
                    ? "text-[rgba(201,172,140,1)]"
                    : "hover:text-gray-400"
                }`}
              >
                ENTERTAINMENT
              </Link>
            </li>

            <li>
              <Link
                href="/mobile-bars"
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${
                  pathname === "/mobile-bars"
                    ? "text-[rgba(201,172,140,1)]"
                    : "hover:text-gray-400"
                }`}
              >
                MOBILE BARS
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${
                  pathname === "/events"
                    ? "text-[rgba(201,172,140,1)]"
                    : "hover:text-gray-400"
                }`}
              >
                EVENTS
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${
                  pathname === "/blog"
                    ? "text-[rgba(201,172,140,1)]"
                    : "hover:text-gray-400"
                }`}
              >
                BLOG
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`block px-6 py-4 ${
                  pathname === "/contact"
                    ? "text-[rgba(201,172,140,1)]"
                    : "hover:text-gray-400"
                }`}
              >
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