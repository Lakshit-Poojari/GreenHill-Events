import EntertainmentCards from '@/components/Entertainment/EntertainmentCards'
import React from 'react'

const cards = [
  {
    title: "Beat Box/Flute",
    title1:'Nathan Flutebox Lee',
    image: "/Entertainment/Musicians/Nathan.png",
    text: "Incorporating his dynamic trademark ‘Fluteboxing’ – simultaneously playing the flute whilst beat boxing; Nathan’s futuristic style is a fusion of Hip Hop, Dubstep, and Drum & Bass beats, blended with Jazz, Funk, and hypnotic Eastern melodies.",
  },
  {
    title: "Brass",
    title1:'Sarah Louise',
    image: "/Entertainment/Musicians/Sarah.png",
    text: "Performing live with her band and stage show with dancers, Sarah performs globally with her show on cruise ships, at corporate events, festivals and public performances.",
  },
  {
    title: "Brass",
    title1:'Riverside Brass',
    image: "/Entertainment/Musicians/Riverside.png",
    text: "Riverside Brass provides entertainment suitable for any occasion as they play a very broad range of styles from jazz to classical. All of the arrangements are unique and purposely written, which makes them something slightly different from the usual jazz trio or string quartet.",
  },
  {
    title: "Classical Musicians",
    title1:'Lizz Lipscombe',
    image: "/Entertainment/Musicians/Lizz.png",
    text: `Lizz is a versatile performer and offers the traditional solo violin for corporate and private events and weddings or a more contemporary amplified acoustic violin or electric violin with live band, DJ or backing tracks to create a more chilled “Café Del Mar” ambience.`,
  },
  {
    title: "Brass",
    title1:'Hackney Colliery Band',
    image: "/Entertainment/Musicians/Hackney.png",
    text: "Mining nuggets of funk, hip-hop and high-octane rock from the musical coalface and throwing in a few chunks of Balkan brass, ska and contemporary jazz for good measure, the Hackney Colliery Band’s setlist is as diverse as the London borough that gave them their name.",
  },
  {
    title: "Classical Musicians",
    title1:'Eloise Prouse',
    image: "/Entertainment/Musicians/Ellie.png",
    text: "Eloise is a classically trained violinist and enjoys a busy and successful orchestral and solo career. Her solo repertoire consists of beautifully arranged classical and pop favourites, ambient chillout music and electro-classical fusion tracks.",
  },
  {
    title: "Brass",
    title1:'Alter Ego',
    image: "/Entertainment/Musicians/Alter.png",
    text: "A great alternative to a string quartet or a jazz band for your event. The girls are also available as a horn section for session work, tours and TV, backing pop artists or performing with existing bands.",
  },
  {
    title: "Brass",
    title1:'Miranda Gunn',
    image: "/Entertainment/Musicians/Miranda.jpg",
    text: `Miranda Gunn is the only female flute beatboxer in the UK! The music she performs could be classed as a Hip Hop/Classical crossover. She reinvents classical music using beat boxing for today’s audience, purely through the flute.`,
  },
  {
    title: "Classical Musicians",
    title1:'Magdalena Reising',
    image: "/Entertainment/Musicians/Magdalena.jpg",
    text: "Magdalena Reising is a Scottish born singer, songwriter and musician. Whether it’s Jazz, Classical or traditional Scottish and Polish folk songs, she is perfect for weddings or corporate events.",
  },

];

const page = () => {
  return (
    <div>
        <EntertainmentCards heading='Musicians' 
        description='Music of any type is the perfect accompaniment to any event – from something more classic for a wedding 
        drinks reception to something more upbeat and unusual for a corporate event. Whatever your needs or event we work with a 
        wide range of musicians and are sure to be able to meet your needs.' 
        cards={cards}/>
    </div>
  )
}

export default page