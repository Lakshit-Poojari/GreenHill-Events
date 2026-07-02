import Link from 'next/link'
import React from 'react'

const DryHire = () => {
  return (
    <>
        <div className='text-center mx-16.25 px-6.75 py-6  text-[#C9AC8C]'>
            <p className="font-['Cormorant_Garamond'] italic font-bold text-[27.2px] tracking-[4.08px]">Dry Hire.</p>
            <p className="text-left italic text-[20.4px] leading-6 tracking-[0.6px] font-['Cormorant_Garamond']">Our stylish horse boxes are also available to dry hire. We simply provide the horse box and you or the venue can supply the refreshments. We will deliver it safely and collect it from your desired location.</p>
        <div>
            <Link href="/contact-us">
                <button className="mt-12 mb-5 text-[1.25rem] border-3 border-white rounded-4xl px-10 py-3 text-[#C9AC8C]
                    animate-[bounce-x_0.49s_ease-in-out_infinite] hover:bg-[#C9AC8C] hover:text-black transition duration-300" >
                    CONTACT US FOR MORE INFORMATION
                </button>
            </Link>
            </div>
        </div>
    </>
  )
}

export default DryHire