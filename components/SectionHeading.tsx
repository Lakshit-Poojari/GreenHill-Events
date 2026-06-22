import React from 'react'

interface SectionHeadingProps {
    title: string,
}

const SectionHeading = ({title}: SectionHeadingProps) => {
  return (
    <div>
      <p className="font-['Poppins'] text-[6.5rem] font-light text-center text-white">
        {title}
      </p>

      <hr className="w-[12%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />
    </div>
  )
}

export default SectionHeading