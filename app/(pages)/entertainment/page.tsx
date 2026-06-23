import ContactForm from '@/components/ContactForm'
import EntertaimentEvents from '@/components/Entertainment/EntertaimentEvents'
import Text from '@/components/Entertainment/Text'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/Entertainment/room.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="relative pt-26"
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <SectionHeading title="Entertainment" />
          <Text />
          <div className='py-6 text-center'>
            <p className='text-3xl'>We can arrange entertainment for a wide range of events:</p>
            <hr className="w-[12%] mt-2 border-2 mx-auto rounded-full border-[#C9AC8C]" />
          </div>
          <EntertaimentEvents />
          <ContactForm />
        </div>
      </div>
    </>
  )
}
export default page