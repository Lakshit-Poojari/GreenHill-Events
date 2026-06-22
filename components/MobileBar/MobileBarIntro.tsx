import Link from 'next/link'
import React from 'react'

const MobileBarIntro = () => {
  return (
    <div className='text-center mx-16.25 px-6.75 py-6  text-[#C9AC8C]'>
        <p className="font-['Cormorant_Garamond'] italic font-bold text-[27.2px] tracking-[4.08px]">Bring a touch of Mayfair to your event.</p>
        
        <div className="text-left italic text-[20.4px] leading-6 tracking-[0.6px] font-['Cormorant_Garamond']">
          <p>The Greenhill Bar is a fleet of rice horsebox trailers which have been beautifully renovated to create modern, stylish mobile bars.</p>
          <p>Likened to a mobile Mayfair wine bar, our offering is based around an extensive gin, champagne and prosecco menu. We can also provide a wide range of cocktails and bottled beers.</p>
          <p>All of our drinks are beautifully presented in fully recyclable plastics, something we know is a priority to many of our clients.</p>
        </div>
        
        <div>
          <Link href="/contact-us">
              <button className="mt-12 mb-5 text-[1.25rem] border-3 border-white rounded-4xl px-10 py-3 text-[#C9AC8C]
                animate-[bounce-x_0.49s_ease-in-out_infinite] hover:bg-[#C9AC8C] hover:text-black transition duration-300" >
                  CONTACT US FOR MORE INFORMATION
              </button>
          </Link>
        </div>
    </div>

  )
}

export default MobileBarIntro