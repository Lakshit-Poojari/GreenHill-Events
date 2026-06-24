import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div className='pt-26 mx-16.25 px-6.75 text-[#C9AC8C]'>
            <SectionHeading title='Dry Hire'/>
            <div className='py-6'>
                <div className="text-lg items-start italic text-justify space-y-1.5 my-6 py-3 font-['Old Standard TT']">
                    <p>Simply hire just the horsebox, fully equipped ready for service. We will deliver, set-up and collect. 
                       This is ideal for venues that already have a bar team, to compliment an existing bar, provide additional
                       refrigeration facilities, for caterers providing drinks, or for those who simply wish to throw their own 
                       party and provide the drink. We have also worked with various brands who wish to wrap our horse box with 
                       their branding and serve their products.</p>
                       <p>A refundable damage deposit is required.</p>
                       <p>Bar Staff optional.</p>
                       <p>Prices start from £550</p>
                </div>
                <div className='flex justify-center'>
                    <Link href={""}>
                        <button className="mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3
                                        text-[#C9AC8C] animate-[bounce-x_0.49s_ease-in-out_infinite]
                                        hover:bg-[#C9AC8C] hover:text-black transition duration-300">ENQUIRE TODAY</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default page