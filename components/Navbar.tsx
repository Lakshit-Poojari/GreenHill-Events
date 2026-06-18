import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className='container mx-auto flex items-center justify-between px-23 py-7 border border-gray-800 '>

        <div>
          <Image src={"/greenhill.jpg"} alt='logo' width={300} height={80}/>
        </div>
        <div>
          <ul className='flex items-center justify-between gap-18 '>

            
            <li className='hover:text-gray-400 '>
              <Link href={"/"}>HOME</Link>
            </li>
            <li className='hover:text-gray-400'>
              <Link href={"/"}>ABOUT US</Link>
            </li>
            <li className='hover:text-gray-400'>
              <Link href={"/"}>ENTERTAINMENT</Link>
            </li>
            <li className='hover:text-gray-400'>
              <Link href={"/"}>MOBILE BARS</Link>
            </li>
            <li className='hover:text-gray-400'>
              <Link href={"/"}>EVENTS</Link>
            </li>
            <li className='hover:text-gray-400'>
              <Link href={"/"}>BLOG</Link>
            </li>
            <li className='hover:text-gray-400'>
              <Link href={"/"}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar