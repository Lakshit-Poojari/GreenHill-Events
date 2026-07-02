import Image from 'next/image'
import React from 'react'

const MobileBarCompany = () => {
  return (
    <>
        <div className='text-center mx-16.25 px-6.75 py-6  text-[#C9AC8C]'>
            <div>
                <p className="font-['Cormorant_Garamond'] italic font-bold text-[27.2px] tracking-[4.08px]">Companies we work with.</p>      
                <p className="text-left italic text-[20.4px] leading-6 tracking-[0.6px] font-['Cormorant_Garamond']">We work with a hand-picked selection of drinks and catering companies. We look for independent UK-based companies that provide something a little different for our clients. Whatever your taste, we have the contacts to make sure the bar is stocked just the way you want it.</p>
            </div>
            <div className="px-6 py-6 flex justify-center items-center">
                <Image src="/MobileBar/Company/footer-logo.png" alt="Companys" width={400} height={400} 
                    className="w-full h-auto"/>
            </div>
        </div>
    </>
  )
}

export default MobileBarCompany