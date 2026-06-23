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
        className="mx-16.25 px-6.75 pt-26 text-center bg-cover bg-center bg-no-repeat">
        <SectionHeading title="Entertainment" />
        <Text />
        <EntertaimentEvents />
      </div>
    </>
  )
}

export default page