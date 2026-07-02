import SectionHeading from '@/components/public/SectionHeading'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div className="pt-26 mx-16.25 px-6.75 text-[#C9AC8C] text-lg items-start italic text-justify space-y-1.5 my-6 py-3 font-['Old Standard TT']">
            <SectionHeading title='Sporting & Festivals'/>
            <div>
                <p>We provide high-quality bars to a multitude of events, including festivals, concerts, stadiums and sporting 
                    venues. We have worked with venues and events such as Saracens Rugby, Twickenham, London Stadium, Kia Oval,
                     Winter wonderland Hyde Park.</p>
            </div>
            <div className='flex justify-center'>
              <Link href="/contact-us">
                <button className="mt-12 mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3 text-[#C9AC8C]
                        animate-[bounce-x_0.49s_ease-in-out_infinite] hover:bg-[#C9AC8C] hover:text-black transition duration-300" >
                            ENQUIRE TODAY
                </button>
              </Link>                   
            </div>
        </div>
    </>
  )
}

export default page