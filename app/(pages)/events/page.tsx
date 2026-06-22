import Heading from '@/components/Event/Heading'
import Photos from '@/components/Event/Photos'
import ServiceCard from '@/components/ServiceCard'
import React from 'react'

const page = () => {
  return (
    <>
        <div className="pt-26 text-center">
          <Heading/>
          <Photos/>
          <ServiceCard/>
        </div>
    </>
  )
}

export default page