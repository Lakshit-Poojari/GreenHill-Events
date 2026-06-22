import BottlePhotos from '@/components/MobileBar/BottlePhotos'
import ClientReview from '@/components/MobileBar/ClientReview'
import ContactForm from '@/components/MobileBar/ContactForm'
import DryHire from '@/components/MobileBar/DryHire'
import Events from '@/components/MobileBar/Events'
import MobileBarCompany from '@/components/MobileBar/MobileBarCompany'
import MobileBarIntro from '@/components/MobileBar/MobileBarIntro'
import PartyPhotos from '@/components/MobileBar/PartyPhotos'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="pt-26 ">

      <SectionHeading title='The Greenhill Mobile Bar'/>

      <MobileBarIntro/>

      <Events/>

      <BottlePhotos/>

      <DryHire/>

      <MobileBarCompany/>

      <div className='mx-16.25 px-6.75'>
        <p className="font-['Poppins'] text-[4.5rem] py-70 font-light text-center text-white">We're more than just refreshments...</p>
        <p className="text-left italic text-[20.4px] leading-6 tracking-[0.6px] text-[#C9AC8C] font-['Cormorant_Garamond']">As well as offering the Greenhill Bar, our sister company, Greenhill Entertainment, are specialists in providing bespoke event entertainment solutions. From weddings and parties to corporate events, Greenhill Entertainment will create a truly memorable experience, whatever the event.</p>
        <div>
          <Link href="/">
              <button className="mt-12 mb-5 text-[1.25rem] border-3 border-white rounded-4xl px-10 py-3 text-[#C9AC8C]
                animate-[bounce-x_0.49s_ease-in-out_infinite] hover:bg-[#C9AC8C] hover:text-black transition duration-300" >
                  VISIT SIMONGREENHILL.COM
              </button>
          </Link>
        </div>
      </div>

      <PartyPhotos/>

      <ClientReview/>

      <div>
        <p className="font-['Poppins'] text-[4.5rem] py-70 font-light text-center text-white">Make yours an event to remember!</p>
      </div>

      <ServiceCard/>

      <ContactForm/>
      
    </div>
  )
}

export default page