import Link from 'next/link'
import React from 'react'
import SectionHeading from '../SectionHeading'

const Heading = () => {
  return (
    <>
        <div className='mx-16.25 px-6.75'>
            <SectionHeading title='Events'/>
            
            <div>
                <p className="text-center font-['Old Standard T'] italic text-[rgba(201,172,140,1)]  mt-10 text-[1.2rem]">
                    With over 20 years in the entertainment industry, Simon has vast experience across a wide range of events, together with a large network of entertainers to call upon. This means he is well placed to help you organise your own event, however big or small.
    Why not ask Simon to help with the organisation of your event? From weddings and birthday celebrations, anniversaries and Christmas parties, to charity, sporting and corporate events, Simon has managed and successfully delivered them all. His meticulous attention to detail will give you the reassurance that the planning of your event is in safe hands. 
                </p>
            </div>
            <div>
                <Link href="/contact-us">
                    <button className="mt-12 mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3 text-[#C9AC8C]
                    animate-[bounce-x_0.49s_ease-in-out_infinite] hover:bg-[#C9AC8C] hover:text-black transition duration-300" >
                    CONTACT US FOR MORE INFORMATION
                    </button>
                </Link>
            </div>

        </div>
    </>
  )
}

export default Heading