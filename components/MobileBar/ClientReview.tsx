import React from 'react'

const clientreviews = [
    {
        review:"Amazing event and the mobile bar made it! Will definitely spread the word",
        name:"A. Goodwin",
    },
    {
        review:"Simon and his team have been adaptable to each match day and not only reacted to the audience, but, brought a fresh impetus to each fixture.",
        name:"Olly Kohn, Partner, The Jolly Hog",
    },
    {
        review:"At The Oval, we are always looking to give our customers the very best match day experience and Simon and his team have contributed hugely to this mindset.",
        name:"Rafal Gacek, Head of Concessions, The Kia Oval",
    },
]

const ClientReview = () => {
  return (
    <>
        <div className='text-center mx-16.25 px-6.75 py-6 '>
            <div className="font-['Cormorant_Garamond'] text-[#C9AC8C] italic font-bold text-[27.2px] tracking-[4.08px]">
                <p>What our clients say…</p>
            </div>
            {clientreviews.map((review, index) => (
                    <div key={index} className='text-center py-3'>
                        <p className=" italic text-[20.4px] leading-6 tracking-[0.6px] text-[#C9AC8C] font-['Cormorant_Garamond']">{review.review}</p>
                        <p className="font-['Cormorant_Garamond']">{review.name}</p>
                    </div>
                        )
                )
            }
            
        </div>
    </>
  )
}

export default ClientReview