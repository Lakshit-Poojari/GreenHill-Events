import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    title: "Dry Hire",
    image: "/MobileBar/Bar/dry.webp",
    description: `Simply hire just the horsebox, fully equipped ready for service. We will deliver, set-up and collect. 
                 This is ideal for venues that already have a bar team, to compliment an existing bar, provide additional 
                 refrigeration facilities, for caterers providing drinks, or for those who simply wish to throw their own party 
                 and provide the drink. A refundable damage deposit is required. Bar Staff optional.`,
    link: "/dry-hire",
  },
  {
    title: "Standard Bar",
    image: "/MobileBar/Bar/standard.webp",
    description: `We attend your event with our experienced team of bar staff and a full range of mouth-watering drinks 
                 designed by us or chosen by you.We are personal license holders, we will formally take care of the TENS 
                 application if one is required. Cash and payments are taken. A hire fee is payable with an agreed minimum spend.`,
    link: "/cocktail-bar",
  },
  {
    title: "Complimentary Bar",
    image: "/MobileBar/Bar/complementry.webp",
    description: `We attend your event and run a ‘tab’ for hosts who would like to entertain their guests with complimentary 
                  drinks of their choice. Our software allows us to track all drinks in real time to give the host a breakdown 
                  of everything that was spent, on what and when. A hire fee is payable with an agreed minimum spend.`,
    link: "/wedding-bar",
  },
  {
    title: "Sporting & festivals",
    image: "/MobileBar/Bar/sporting-and-festival.jpg",
    description: `We provide high-quality bars to a multitude of events, including festivals, concerts, stadiums and sporting 
                  venues. We have worked with venues and events such as Saracens Rugby, Twickenham, London Stadium, Kia Oval, 
                  Winter wonderland Hyde Park.`,
    link: "/corporate-events",
  },
  {
    title: "Our Bars",
    image: "/MobileBar/Bar/our-bar.jpg",
    description: `After deciding that horse box bars would be the right fit in 2018 Simon went on a mission to find the first 
                  of many. The fleet started off with Wombat who after a long transformation process became the first bar to join 
                  the business. Now 5 years later Wombat has been joined by Freddie, Bentos, Mercer and Fairbanks 4 other horsebox 
                  bars. Not forgetting Bella & Neller our simply perfect pop-up bar that can be ready for any occasion. Following 
                  Simons love of rugby our horsebox bars are named after players who played for his hometown rugby team Halifax 
                  Panthers.`,
    link: "/private-parties",
  },
];

const page = () => {
  return (
    <>
        <div className="pt-26 mx-16.25 px-6.75 text-[#C9AC8C]">
            <SectionHeading title='Bar'/>
            <div className=" text-lg items-start italic text-justify space-y-1.5 my-6 py-3 font-['Old Standard TT']">
                <div>
                    <p>WE ASPIRE TO DELIVER A TRULY UNIQUE AND MEMORABLE EXPERIENCE FROM START TO FINISH.</p>
                </div>
                <div>
                    <p>While the market already offered a range of horse box bars, the majority only offer the bar. We believed 
                        there was a gap in the market for a company that not only supplies the bar but can offer a range of 
                        entertainment acts or the option to organise the whole event for you.</p>
                    <p>Simon Greenhill owner of The Greenhill Bar and entertainment has always had a passion for good alcohol and 
                        music. With a passion to deliver an unrivalled level of service Simon founded a business with the simple 
                        principles of fair prices, cold premium beverages, conversations and smiles and a beautifully presented bar 
                        with excellent entertainment.</p>
                    <p>We operate a clear pricing tariff with no extra hidden charges. The Booking fee covers the cost of setting 
                        up the bar and two trained members of staff per event.</p>
                    <p>Depending on the size of the event and bar package, there might be a minimum spend deposit required.</p>
                    <div>
                        <p>Why we do it</p>
                        <ol className='list-decimal ml-4'>
                            <li>Making memories with family and friend</li>
                            <li>Crafting incredible experiences for people</li>
                            <li>Showing others what the arts and entertainment industry has to offer</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className={`grid gap-15 mx-9 items-stretch ${
                services.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : services.length === 2
                ? "grid-cols-2 max-w-4xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
                {services.map((service, index) => (
                    <div key={index} className="shadow-md overflow-hidden flex flex-col min-h-197.5">
                        <Image src={service.image} alt={service.title} width={500} height={300} className="w-full h-64 object-cover"/>

                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold mb-3 text-center">
                            {service.title}
                            </h3>

                            <p className="text-justify flex-1">
                            {service.description}
                            </p>

                            <Link href={service.link} className="mt-auto self-center">
                                <button className="mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3
                                    text-[#C9AC8C] animate-[bounce-x_0.49s_ease-in-out_infinite]
                                    hover:bg-[#C9AC8C] hover:text-black transition duration-300">
                                    MORE INFO
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default page