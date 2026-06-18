"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header>
      <nav className='container mx-auto flex items-center justify-between px-23 py-7 border border-gray-800 '>

        <div>
          <Image src={"/greenhill.jpg"} alt='logo' width={300} height={80}/>
        </div>
        <div>
          <ul className="flex items-center justify-between gap-18">

            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? "text-amber-200" : "hover:text-gray-400"}`}
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`${pathname === "/about" ? "text-amber-200" : "hover:text-gray-400"}`}
              >
                ABOUT US
              </Link>
            </li>

            <li>
              <Link
                href="/entertainment"
                className={`${pathname === "/entertainment" ? "text-amber-200" : "hover:text-gray-400"}`}
              >
                ENTERTAINMENT
              </Link>
            </li>

            <li>
              <Link
                href="/mobile-bars"
                className={`${pathname === "/mobile-bars" ? "text-amber-200" : "hover:text-gray-400"}`}
              >
                MOBILE BARS
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className={`${pathname === "/events" ? "text-amber-200" : "hover:text-gray-400"}`}
              >
                EVENTS
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={`${pathname === "/blog" ? "text-amber-200" : "hover:text-gray-400"}`}
              >
                BLOG
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`${pathname === "/contact" ? "text-amber-200" : "hover:text-gray-400"}`}
              >
                CONTACT US
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar