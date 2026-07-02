import SectionHeading from '@/components/public/SectionHeading'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
        <div className='pt-26 mx-16.25 px-6.75'>
            <SectionHeading title='Careers'/>
            <div className='grid grid-cols-2 gap-4 my-6 py-6 '>
                <div className="text-[#C9AC8C] text-lg items-start italic text-justify space-y-1.5 font-['Old Standard TT']">
                    <p>As a rapidly growing business we are constantly in search of new talent: not only when it comes to acts 
                        and artists, but also when it comes to the diverse range of careers within the entertainment, events and 
                        hospitality industry.</p>
                    <p>Our Head Office is in Surrey. We provide entertainment, bar services and event management across the UK 
                        including London, The South West, South East, East Midlands, West Midlands, Home Counties, Cheshire, 
                        Yorkshire & Lancashire. Additionally we work overseas and travel extensively in Europe, America, Africa, 
                        Asia, Dubai, Abu Dhabi, Australia & New Zealand.</p>
                    <p>If you are looking to further your career in the events, bar or hospitality industry and would like to work 
                        at the many events such as large-scale awards ceremonies, intimate conferences, team building, Brand 
                        Activations, Product Launches, Christmas Parties, Summer Parties, Sales Conferences, Weddings, anniversaries, 
                        bar/bat mitzvahs, private parties, music festivals & sporting events at some of the most sought-after 
                        locations and venues then drop us your CV.</p>
                </div>
                <div>
                    <Image src={"/About/Careers.jpg"} alt="our-founder" width={600} height={100}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default page