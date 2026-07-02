import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const cards = [
  {
    title: "Weddings",
    image: "/Entertainment/main/wedding.jpg",
    text: "From entertaining and welcoming guests as they arrive at your wedding reception, to singing waiters to surprise and delight guests during the wedding breakfast. We can also arrange DJs, bands or musicians to keep your guests dancing into the night.",
  },
  {
    title: "Birthday Parties",
    image: "/Entertainment/main/birthdayparty.jpg",
    text: "A big birthday can be a great excuse for a big celebration! So why not organise entertainment to create that extra special memory for both you and your guests?",
  },
  {
    title: "Corporate events",
    image: "/Entertainment/main/corporate-events.jpg",
    text: "Christmas parties, end of year celebrations, conferences, client entertaining - the list goes on. Whatever your requirements and budget, we have a solution. We know it can seem difficult to provide something new and exciting, but Simon’s experience, creativity and network means this won’t be a concern.",
  },
  {
    title: "Hospitality",
    image: "/Entertainment/main/hospitality-event.jpg",
    text: `Our hospitality packages specialise in offering the magic of London’s West End theatre with lots of added extras to really provide that VIP experience. Our packages for London’s top shows such as Les Misérables, The Lion King and the Phantom of the Opera include:`,
  },
  {
    title: "Cabaret & Singing Waiters",
    image: "/Entertainment/main/Cabaret & Singing Waiters.jpg",
    text: "From entertaining and welcoming guests as they arrive at your wedding reception, to singing waiters to surprise and delight guests during the wedding breakfast. We can also arrange DJs, bands or musicians to keep your guests dancing into the night.",
  },
  {
    title: "Singers",
    image: "/Entertainment/main/singer.jpg",
    text: "A big birthday can be a great excuse for a big celebration! So why not organise entertainment to create that extra special memory for both you and your guests?",
  },
  {
    title: "Dancers",
    image: "/Entertainment/main/dancer.png",
    text: "Christmas parties, end of year celebrations, conferences, client entertaining - the list goes on. Whatever your requirements and budget, we have a solution. We know it can seem difficult to provide something new and exciting, but Simon’s experience, creativity and network means this won’t be a concern.",
  },
  {
    title: "Musicians",
    image: "/Entertainment/main/musician.png",
    text: `Our hospitality packages specialise in offering the magic of London’s West End theatre with lots of added extras to really provide that VIP experience. Our packages for London’s top shows such as Les Misérables, The Lion King and the Phantom of the Opera include:`,
  },
  {
    title: "Bands",
    image: "/Entertainment/main/band.jpg",
    text: "From entertaining and welcoming guests as they arrive at your wedding reception, to singing waiters to surprise and delight guests during the wedding breakfast. We can also arrange DJs, bands or musicians to keep your guests dancing into the night.",
  },
  {
    title: "Magic",
    image: "/Entertainment/main/magic.png",
    text: "A big birthday can be a great excuse for a big celebration! So why not organise entertainment to create that extra special memory for both you and your guests?",
  },
  {
    title: "Dj",
    image: "/Entertainment/main/dj.jpg",
    text: "Christmas parties, end of year celebrations, conferences, client entertaining - the list goes on. Whatever your requirements and budget, we have a solution. We know it can seem difficult to provide something new and exciting, but Simon’s experience, creativity and network means this won’t be a concern.",
  },
  {
    title: "Shows",
    image: "/Entertainment/main/show.jpg",
    text: `Our hospitality packages specialise in offering the magic of London’s West End theatre with lots of added extras to really provide that VIP experience. Our packages for London’s top shows such as Les Misérables, The Lion King and the Phantom of the Opera include:`,
  },
  {
    title: "Unusual Entertainment",
    image: "/Entertainment/main/Victoria-Bye.png",
    text: `Our hospitality packages specialise in offering the magic of London’s West End theatre with lots of added extras to really provide that VIP experience. Our packages for London’s top shows such as Les Misérables, The Lion King and the Phantom of the Opera include:`,
  },
];

const EntertaimentEvents = () => {
  return (
    <>
      <div className='text-center '>
        

        <div className='bg-[#686868]  py-6'>

          <div className="mx-4 md:mx-8 lg:mx-16.25  px-4 md:px-6.75 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                  cards.map((card, index) => (
                    <div key={index}   className={`group w-full h-112.5 perspective-[1000px] ${
                        cards.length % 2 !== 0 && index === cards.length - 1
                          ? "lg:col-span-2 lg:max-w-[50%] lg:mx-auto"
                          : ""
                      }`} >
                      <div className=" relative h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] ">
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden">
                          <Image src={card.image} fill alt={`Event ${index + 1}`} className="object-cover object-left rounded-lg brightness-35 " />
                        </div>
                          <div className="absolute backface-hidden w-3xl top-40 left-1/2 -translate-x-1/2 z-10">
                            <h3 className="text-white text-2xl  md:text-3xl font-bold text-center">
                              {card.title}
                            </h3>
                            <hr className="w-[102] mx-auto mt-2 border-2 rounded-full border-[#C9AC8C]" />
                          </div>


                        {/* Back */}
                        <div className=" absolute inset-0 flex flex-col justify-between bg-black text-white p-6 rounded-lg 
                          transform-[rotateY(180deg)] backface-hidden ">
                          <p className="md:text-lg text-[#C9AC8C] leading-relaxed">
                            {card.text}
                          </p>

                          {
                            index >= 4 && (
                              <Link href="" className="self-center">
                                <button className="px-6 py-3 border border-[#C9AC8C] rounded-full text-[#C9AC8C]  hover:bg-[#C9AC8C]
                                    hover:text-black">
                                  FIND OUT MORE
                                </button>
                              </Link>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
          </div>

          <div className='mx-16.25 px-6.75'>
            <p className='text-[#C9AC8C]'>As well as providing entertainment solutions we can also provide refreshments.
              <span className='text-white'>The Greenhill Bars </span>, a fleet of beautifully restored rice horseboxes, 
                are our modern and stylish mobile bar solutions. With drink menus featuring extensive gin collections, prosecco 
                and champagne, they really are the perfect addition to any event.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default EntertaimentEvents