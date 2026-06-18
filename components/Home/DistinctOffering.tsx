import Link from 'next/link'
import React from 'react'
import "@/app/globals.css";

const DistinctOffering = () => {
  return (
    <>
        <div className="bg-[#1a1919] mx-16.25 px-6.75 py-28 text-center">
            <p className="text-[4.125rem] font-['Playfair_Display']">
                DISTINCT OFFERINGS
            </p>

            <hr className="w-[15%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-2 mt-6 mb-2">
                <button className="text-white px-5 py-3 rounded-sm  border-[#f68a59] bg-[#f79468] hover:bg-[#f47e4c] ">
                ENTERTAINMENT
                </button>

                <button className="text-white px-5 py-3 rounded-sm  border-[#f68a59] bg-[#f79468] hover:bg-[#f47e4c] ">
                MOBILE BARS
                </button>

                <button className="text-white px-5 py-3 rounded-sm  border-[#f68a59] bg-[#f79468] hover:bg-[#f47e4c] ">
                EVENTS
                </button>

                <button className="text-white px-5 py-3 rounded-sm  border-[#f68a59] bg-[#f79468] hover:bg-[#f47e4c] ">
                BESPOKE
                </button>
            </div>

            {/* Content */}
            <div className="min-h-2.5 border-2 border-white bg-black box-content px-5 py-1 overflow-hidden transition-all duration-200 ease-in-out">
                <p className=" text-3xl text-[#C9AC8C] italic font-normal font-['Old_Standard_TT']">
                Greenhill Entertainment was born out of London's West End.
                We have built a solid reputation for providing world class
                entertainment in over 50 countries worldwide.
                </p>

                <Link href="">
                <button className="mt-12 mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3 text-[#C9AC8C] 
                        animate-[bounce-x_0.49s_ease-in-out_infinite]

                        hover:bg-[#C9AC8C] hover:text-back transition duration-300">
                    FIND OUT MORE
                </button>
                </Link>
            </div>
        </div>
    </>
    
  )
}

export default DistinctOffering