import EntertainmentCards from '@/components/Entertainment/EntertainmentCards'
import React from 'react'

const cards = [
  {
    title: "DJ's & Musicians ",
    title1:'USO',
    image: "/Entertainment/DJ/USO.png",
    text: "The USO Chill Out set is a unique blend of live strings with a professionally produced soundtrack, creating a lusciously rich soundscape and a relaxed vibe for informal drinks receptions, or as unobtrusive background music.",
  },
  {
    title: "DJ's & Musicians",
    title1:'Late 78',
    image: "/Entertainment/DJ/Late.png",
    text: "David & Claudio aka LATE78 are a central London based DJ partnership. Having joined forces in 2013 they have travelled the world playing at clubs, parties, launches and events globally.",
  },
  {
    title: "DJ's & Musicians",
    title1:'Jewels Hartnell',
    image: "/Entertainment/DJ/Jewels.png",
    text: "Driven by outstanding baselines and melodious breakdowns, Hartnell justifies formidable appeal with deliverances on vinyl and digital which radiate pioneering underground.",
  },
  {
    title: "DJ's & Musicians ",
    title1:'Fish',
    image: "/Entertainment/DJ/Fish.png",
    text: `The Fish DJ Drums are basically a giant MIDI controller that gives Fish the ability to remix and perform popular music live on stage in the most visual and energetic way you have ever seen.`,
  },
  
];

const page = () => {
  return (
    <div>
        <EntertainmentCards heading='DJ’S' 
        description='No party would be complete without a DJ keeping your guests entertained and dancing into the night. Check out some of the DJ’s we can help organise for your event below:' 
        cards={cards}/>
    </div>
  )
}

export default page