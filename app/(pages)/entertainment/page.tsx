import ContactForm from '@/components/ContactForm'
import EntertaimentEvents from '@/components/Entertainment/EntertaimentEvents'
import Text from '@/components/Entertainment/Text'
import SectionHeading from '@/components/SectionHeading'
import React from 'react'

const page = () => {
  return (
    <>
      <div style={{
          backgroundImage: "url('/Entertainment/room.jpg')",
        }}
        className="pt-26 bg-cover bg-center bg-no-repeat">
        <SectionHeading title="Entertainment" />
        <Text />
        <EntertaimentEvents />
        <ContactForm/>
      </div>
    </>
  )
}

export default page