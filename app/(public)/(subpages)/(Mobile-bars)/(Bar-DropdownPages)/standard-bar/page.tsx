import SectionHeading from '@/components/public/SectionHeading'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div className="pt-26 mx-16.25 px-6.75 text-[#C9AC8C] text-lg items-start italic text-justify space-y-1.5 my-6 py-3 font-['Old Standard TT']">
            <SectionHeading title='Standard Bar'/>
            <div>
                <div>
                    <p>We attend your event with our experienced team of bar staff and a full range of mouth-watering drinks 
                        designed by us or chosen by you.<br/>
                        We are personal license holders, we will formally take care of the TENS application if one is required.<br/>
                        Cash and payments are taken. We use izettle or sumup.<br/>
                        A hire fee (from £250) is payable with an agreed minimum spend.<br/>
                        A cash bar is a very simple option. Your guests simply pay for their own drinks (wines, beers, spirits, 
                        soft drinks) by cash or by card.
                    </p>
                </div>
                <div >
                    <ul className='list-disc'>
                        <p>Included in our package:</p>
                        <div className='mx-4'>
                            <li>Hire of one of our horsebox or pop up bar for the duration of your event</li>
                            <li>Minimum of 2 friendly bar staff</li>
                            <li>Bio degradable plastic cups with paper straws</li>
                            <li>Ice and fruit</li>
                            <li>Travel costs included</li>
                            <li>Set up time and set down time</li>
                            <li>TENS – Temporary Events Notice applied for by us</li>
                            <li>Personalised chalk boards with your menu</li>
                        </div>
                    </ul>
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
        </div>
    </>
  )
}

export default page