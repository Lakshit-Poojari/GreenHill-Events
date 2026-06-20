import Image from 'next/image'
import React from 'react'
import { FaUser } from 'react-icons/fa'

const blogs = [
  {
    image:"/Blog/birthdayparty.jpg",
    title:"An exclusive Birthday Celebration",
    description:"As guests entered Summer Place they were greeted by our Stilt Walkers and beautiful sounds of a harpist. The journey th ...",
  },
  {
    image:"/Blog/vodafoneevent.webp",
    title:"Vodacom 4 U & Chatz Connect Year End Event",
    description:"After our client had previously experienced our surprise entertainment, they brought us on board again to create an ‘ ...",
  },
  {
    image:"/Blog/largeplayer.webp",
    title:"Function for a large player in the Gold Market",
    description:"After experiencing our surprise Singing Waiter act Arias Anonymous as well as our surprise dance act Strictly Anonymous ...",
  },
  {
    image:"/Blog/cricketfunction.webp",
    title:"South Africa vs England Johannesburg",
    description:"Following Simon’s varied experience in the field of rugby (no pun intended!) he successfully delivered a slick and kn ...",
  },
]

const page = () => {
  return (
    <>
      <div className='mx-16.25 px-6.75 pt-26  text-center'>
        <div>
          <p className="font-['Poppins'] text-[5.5rem] font-light text-center text-white">
            Blog
          </p>
          <hr className="w-[15%] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />
        </div>
        <div>
          <p className="text-center font-['Old Standard T'] italic text-[rgba(201,172,140,1)]  mt-10 text-[1.2rem]">
            Explore some of the lovely events that we have organised and find out about some of our clients’ experiences with us:  
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-15'>
            {
              blogs.map((blog, index) => (
                <div className="relative" key={index}>

                  {/* Image */}
                  <div className='overflow-hidden relative w-full h-56 md:h-72 lg:h-81'>
                    <Image src={blog.image} alt="birthday" width={700} height={450}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"/>
                  </div>

                  {/* Content Box */}
                  <div className="bg-white w-[90%] mx-auto -mt-8 relative z-10 px-5 pb-5 justify-items-stretch shadow-lg">
                    <h2 className="text-[22px] md:text-[26px] lg:text-[30px] tracking-[4px] uppercase text-black">
                      {blog.title}
                    </h2>

                    <p className="text-[#C9AC8C] mt-2.5 text-[15px] md:text-[16px] lg:text-[17px] leading-8">
                      {blog.description}
                    </p>

                    <div className="flex items-center gap-3 text-[#C9AC8C]">
                      <FaUser className='text-[#C9AC8C]' />
                      <span className='ml-3.5'>theatrewp</span>
                    </div>
                  </div>

                </div>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default page