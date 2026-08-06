import React from 'react'

interface SectionHeadingProps {
    title: string,
}

const SectionHeading = ({title}: SectionHeadingProps) => {
  return (
    <div>
      <p className="font-['Playfair_Display'] py-5 font-light text-center text-white text-[102px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem]">
        {title}
      </p>

      <hr className="w-[12%] mx-auto py-24 border-2 rounded-full border-[#C9AC8C]" />
    </div>
  )
}

export default SectionHeading