

import SectionHeading from "@/components/public/SectionHeading";
import type { Metadata } from "next";
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us - GreenHillEvent",
  // description: "",     ###############################################################
}

const page = () => {
  return (
    <>
        <div className='mx-16.25 px-6.75 pt-26 text-center'>
            <SectionHeading title='Contact Us'/>
            
            <div>
                <p className="text-center font-['Old Standard T'] italic text-[#C9AC8C]  mt-10 text-[1.2rem]">
                    If you would like to get in touch with us to discuss your requirements for any event that you may be organising, then we will be more than happy to help.
With many ways to contact us you can choose which ever method suits you best    
                </p>
            </div>

            <div className='flex flex-row mt-10 gap-5'>
                <div className='w-[50%] text-right text-6xl'>Office</div>
                <div className='w-[50%] text-left'>
                    <p className='text-[#C9AC8C] text-[1.25rem] tracking-[6px] mb-3'>CONTACT</p>
                    <p>Phone / <span className='underline font-extrabold'>44 (0)1483 497213</span></p>
                    <p>Mobile / <span className='underline font-extrabold'>44 (0)7595 219612</span></p>
                    <p>EMAIL / <span className='underline font-extrabold'>hello@simongreenhill.com</span> / <span className='font-extrabold underline'>simon@simongreenhill.com</span></p>
                    <p >IN PERSON / <span className='font-extrabold'>London</span></p>
                    <p>complete our contact us form and we will aim to get back to you</p>
                    
                    <Link href="">
                        <button className="mt-12 mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3 text-[#C9AC8C]
                        animate-[bounce-x_0.49s_ease-in-out_infinite] hover:bg-[#C9AC8C] hover:text-black transition duration-300" >
                        CONTACT US NOW
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default page