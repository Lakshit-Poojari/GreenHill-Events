import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className='container mx-auto flex items-center justify-between px-4 py-4 border border-gray-800 '>
        <div>
          <Image src={"/greenhill.jpg"} alt='logo' width={300} height={80}/>
        </div>
        <div>
          <ul className='flex items-center justify-between gap-3'>
            <li>
              option 1
            </li>
            <li>
              option 2
            </li>
            <li>
              option 3
            </li>
            <li>
              option 4
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar