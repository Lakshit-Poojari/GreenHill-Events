import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'

const values = [
  {
    title: "Client Focused",
    description:
      "We make it our priority to understand our clients, their brand and their business so we can distil and transcend their objectives, while exceeding their expectations.",
  },
  {
    title: "Passionate",
    description:
      "We love what we do and it shows through our positive and proactive approach. We infuse everything we do with enthusiasm and professionalism and deliver it effortlessly.",
  },
  {
    title: "Collaborative",
    description:
      "A collaborative and supportive approach is a crucial element to our success as a group. Whether it is through sharing ideas, knowledge or a helping hand, we are solution driven with a collective mindset.",
  },
  {
    title: "Inspirational",
    description:
      "With the best minds in the market, we create tailored experiences that resonate well beyond the event itself.",
  },
  {
    title: "Innovate",
    description:
      "We are naturally curious and we are constantly striving to be ahead of the cultural curve. We are conduits for our clients with an energy and through innovation we excel.",
  },
];

const page = () => {
  return (
    <>
        <div className="pt-26 mx-16.25 px-6.75">
            <SectionHeading title='Vision and Values'/>
            <div className=' '>
                <div className='flex items-center my-6 py-3 justify-center'>
                    <Image src={"/About/Vision-Values.jpg"} alt="Vision-Values" width={1000} height={100}/>
                </div>
                
                <div>
                    <div className="space-y-8 text-center my-6 py-3">
                        {values.map((value) => (
                            <div key={value.title}>
                            <h3 className="text-[#C9AC8C] font-['Old Standard TT'] italic text-2xl font-semibold mb-2">
                                {value.title}
                            </h3>

                            <p className="text-[#C9AC8C] text-xl font-['Poppins'] italic leading-relaxed">
                                {value.description}
                            </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page