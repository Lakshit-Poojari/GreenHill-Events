import BottlePhotos from '@/components/MobileBar/BottlePhotos'
import Events from '@/components/MobileBar/Events'
import MobileBarIntro from '@/components/MobileBar/MobileBarIntro'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="pt-26 text-center">

      <SectionHeading title='The Greenhill Mobile Bar'/>
      <MobileBarIntro/>
      <Events/>
      <BottlePhotos/>
      <ServiceCard/>
    </div>
  )
}

export default page