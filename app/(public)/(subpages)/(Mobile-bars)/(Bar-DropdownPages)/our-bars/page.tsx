import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div className='pt-26 mx-16.25 px-6.75 text-[#C9AC8C]'>
            <SectionHeading title='Our Bars'/>
            <div className="text-lg items-start italic text-justify space-y-1.5 my-6 py-3 font-['Old Standard TT']">
                <p>After deciding that horse box bars would be the right fit in 2018 Simon went on a mission to find the first of 
                    many. The fleet started off with Wombat who after a long transformation process became the first bar to join 
                    the business. Now 5 years later Wombat has been joined by Freddie, Bentos, Mercer and Fairbanks 4 other horsebox 
                    bars. Not forgetting Bella our simply perfect pop-up bar that can be ready for any occasion.<br/>

                    Following Simons love of rugby our horsebox bars are named after players who played for his hometown rugby team 
                    Halifax Panthers.<br/>

                    Bentos is a special member of our fleet as he not only offers a large alcohol selection but can also offer 
                    proper coffee with our Simonelli coffee machine. With this option it leads to a wide selection of boozy hot 
                    drinks that can also be added to your events menu.<br/>

                    Wombat our original converted Rice trailer can also offer a range of coffees and boozy hot drinks from our 
                    Simonelli Automatic coffee machine. However you can choose to not have the coffee and keep the horsebox full 
                    of all your favourite alcohol and mixers.<br/>

                    Mercer is our smallest in the fleet however can still be fully loaded with all your favourite drinks! During 
                    lockdown Mercer became our only horse box in action when he was turned into a coffee shop, but now he’s back up 
                    and running as a full Monty bar.<br/>

                    Freddie is Simon’s favourite box, really beautifully renovated and looks smart. The perfect horse box for any 
                    wedding or private party. Freddie has some miles in his legs and has appeared at many events over the last few 
                    years.<br/>
                    
                    Fairbanks is the baby of the fleet only being completed in November of 2021. Although he’s the newest of the 
                    fleet he comes in first place for size, being the largest box! Ideal for larger events Fairbanks can store a 
                    lot of stock, keeping your event stocked all night</p>
            </div>
            <div className='flex justify-center'>
                <Link href="/contact-us">
                    <button className="mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3
                            text-[#C9AC8C] animate-[bounce-x_0.49s_ease-in-out_infinite]
                            hover:bg-[#C9AC8C] hover:text-black transition duration-300">ENQUIRE TODAY</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default page