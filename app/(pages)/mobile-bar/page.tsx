import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import React from 'react'

const page = () => {
  return (
    <div className="pt-26 text-center">
      <SectionHeading title='The Greenhill Mobile Bar'/>
      <ServiceCard/>
    </div>
  )
}

export default page