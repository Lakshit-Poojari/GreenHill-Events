import EntertainmentCards from '@/components/Entertainment/EntertainmentCards'
import React from 'react'

const cards = [
  {
    title: "Party Bands",
    title1:'Vibetown',
    image: "/Entertainment/Party/Band/Vibetown.jpg",
    text: "Vibetown are an amazing 6-piece Leeds based function and corporate wedding band that specialise in playing Pop, Rock, Funk & Soul.",
  },
  {
    title: "Party Bands",
    title1:'Urban Collective',
    image: "/Entertainment/Party/Band/Urban.png",
    text: "Performing live with her band and stage show with dancers, Sarah performs globally with her show on cruise ships, at corporate events, festivals and public performances.",
  },
  {
    title: "Party Bands",
    title1:'The Rise',
    image: "/Entertainment/Party/Band/rise.jpg",
    text: "Riverside Brass provides entertainment suitable for any occasion as they play a very broad range of styles from jazz to classical. All of the arrangements are unique and purposely written, which makes them something slightly different from the usual jazz trio or string quartet.",
  },
  {
    title: "Party Bands",
    title1:'The Facination',
    image: "/Entertainment/Party/Band/Fascinations.png",
    text: `Lizz is a versatile performer and offers the traditional solo violin for corporate and private events and weddings or a more contemporary amplified acoustic violin or electric violin with live band, DJ or backing tracks to create a more chilled “Café Del Mar” ambience.`,
  },
  {
    title: "Party Bands",
    title1:'The Daily Specials',
    image: "/Entertainment/Party/Band/Specials.png",
    text: "Mining nuggets of funk, hip-hop and high-octane rock from the musical coalface and throwing in a few chunks of Balkan brass, ska and contemporary jazz for good measure, the Hackney Colliery Band’s setlist is as diverse as the London borough that gave them their name.",
  },
  {
    title: "Party Bands",
    title1:'The Accidentals',
    image: "/Entertainment/Party/Band/Accidentals.png",
    text: "Eloise is a classically trained violinist and enjoys a busy and successful orchestral and solo career. Her solo repertoire consists of beautifully arranged classical and pop favourites, ambient chillout music and electro-classical fusion tracks.",
  },
  {
    title: "Party Bands",
    title1:'Schwing',
    image: "/Entertainment/Party/Band/Schwing.png",
    text: "A great alternative to a string quartet or a jazz band for your event. The girls are also available as a horn section for session work, tours and TV, backing pop artists or performing with existing bands.",
  },
  {
    title: "Party Bands",
    title1:'Rollercoaster',
    image: "/Entertainment/Party/Band/Rollercoaster.png",
    text: `Miranda Gunn is the only female flute beatboxer in the UK! The music she performs could be classed as a Hip Hop/Classical crossover. She reinvents classical music using beat boxing for today’s audience, purely through the flute.`,
  },
  {
    title: "Classical Musicians",
    title1:'MIB Rocks',
    image: "/Entertainment/Party/Band/Rocks.png",
    text: "Magdalena Reising is a Scottish born singer, songwriter and musician. Whether it’s Jazz, Classical or traditional Scottish and Polish folk songs, she is perfect for weddings or corporate events.",
  },
  {
    title: "Party Bands",
    title1:'MIB',
    image: "/Entertainment/Party/Band/MIB.png",
    text: "Vibetown are an amazing 6-piece Leeds based function and corporate wedding band that specialise in playing Pop, Rock, Funk & Soul.",
  },
  {
    title: "Party Bands",
    title1:'Metropolis',
    image: "/Entertainment/Party/Band/Metropolis.png",
    text: "Performing live with her band and stage show with dancers, Sarah performs globally with her show on cruise ships, at corporate events, festivals and public performances.",
  },
  {
    title: "Party Bands",
    title1:'London Ukelele',
    image: "/Entertainment/Party/Band/London.png",
    text: "Riverside Brass provides entertainment suitable for any occasion as they play a very broad range of styles from jazz to classical. All of the arrangements are unique and purposely written, which makes them something slightly different from the usual jazz trio or string quartet.",
  },
  {
    title: "Party Bands",
    title1:'LOL',
    image: "/Entertainment/Party/Band/LOL.png",
    text: `Lizz is a versatile performer and offers the traditional solo violin for corporate and private events and weddings or a more contemporary amplified acoustic violin or electric violin with live band, DJ or backing tracks to create a more chilled “Café Del Mar” ambience.`,
  },
  {
    title: "Party Bands",
    title1:'Cocktail Safari',
    image: "/Entertainment/Party/Band/Cocktail.png",
    text: "Mining nuggets of funk, hip-hop and high-octane rock from the musical coalface and throwing in a few chunks of Balkan brass, ska and contemporary jazz for good measure, the Hackney Colliery Band’s setlist is as diverse as the London borough that gave them their name.",
  },
  {
    title: "Party Bands",
    title1:'Bloomfield',
    image: "/Entertainment/Party/Band/Bloomfield.png",
    text: "Eloise is a classically trained violinist and enjoys a busy and successful orchestral and solo career. Her solo repertoire consists of beautifully arranged classical and pop favourites, ambient chillout music and electro-classical fusion tracks.",
  },
  {
    title: "Motown/Funk/Soul",
    title1:'The Milestones',
    image: "/Entertainment/Party/Soul/Milestones.png",
    text: "A great alternative to a string quartet or a jazz band for your event. The girls are also available as a horn section for session work, tours and TV, backing pop artists or performing with existing bands.",
  },
  {
    title: "Motown/Funk/Soul",
    title1:'Soul Fiesta',
    image: "/Entertainment/Party/Soul/Soul.png",
    text: `Miranda Gunn is the only female flute beatboxer in the UK! The music she performs could be classed as a Hip Hop/Classical crossover. She reinvents classical music using beat boxing for today’s audience, purely through the flute.`,
  },
  {
    title: "Motown/Funk/Soul",
    title1:'Motown Supreme',
    image: "/Entertainment/Party/Soul/Motown.png",
    text: "Magdalena Reising is a Scottish born singer, songwriter and musician. Whether it’s Jazz, Classical or traditional Scottish and Polish folk songs, she is perfect for weddings or corporate events.",
  },
  {
    title: "Motown/Funk/Soul",
    title1:'Live Loungers',
    image: "/Entertainment/Party/Soul/Live.png",
    text: "Vibetown are an amazing 6-piece Leeds based function and corporate wedding band that specialise in playing Pop, Rock, Funk & Soul.",
  },
  {
    title: "Unique Bands",
    title1:'The Flying Hits Parade',
    image: "/Entertainment/Party/Unique/Flying.png",
    text: "Performing live with her band and stage show with dancers, Sarah performs globally with her show on cruise ships, at corporate events, festivals and public performances.",
  },
  {
    title: "Unique Bands",
    title1:'Ta Mere',
    image: "/Entertainment/Party/Unique/Mere.png",
    text: "Riverside Brass provides entertainment suitable for any occasion as they play a very broad range of styles from jazz to classical. All of the arrangements are unique and purposely written, which makes them something slightly different from the usual jazz trio or string quartet.",
  },
  {
    title: "Unique Bands",
    title1:'Doctor Schwamp',
    image: "/Entertainment/Party/Unique/Doctor.png",
    text: `Lizz is a versatile performer and offers the traditional solo violin for corporate and private events and weddings or a more contemporary amplified acoustic violin or electric violin with live band, DJ or backing tracks to create a more chilled “Café Del Mar” ambience.`,
  },
  {
    title: "Unique Bands",
    title1:'Cashcows',
    image: "/Entertainment/Party/Unique/Cashcows.png",
    text: "Mining nuggets of funk, hip-hop and high-octane rock from the musical coalface and throwing in a few chunks of Balkan brass, ska and contemporary jazz for good measure, the Hackney Colliery Band’s setlist is as diverse as the London borough that gave them their name.",
  },
  {
    title: "Swing/Jazz Bands",
    title1:"Jivin'Miss Daisy",
    image: "/Entertainment/Party/Swing/Jivin.png",
    text: "Eloise is a classically trained violinist and enjoys a busy and successful orchestral and solo career. Her solo repertoire consists of beautifully arranged classical and pop favourites, ambient chillout music and electro-classical fusion tracks.",
  },
  {
    title: "Swing/Jazz Bands",
    title1:'Jazz Cannons',
    image: "/Entertainment/Party/Swing/Jazz.png",
    text: "A great alternative to a string quartet or a jazz band for your event. The girls are also available as a horn section for session work, tours and TV, backing pop artists or performing with existing bands.",
  },
  {
    title: "Swing/Jazz Bands",
    title1:'Captain Redeye',
    image: "/Entertainment/Party/Swing/Captain.png",
    text: `Miranda Gunn is the only female flute beatboxer in the UK! The music she performs could be classed as a Hip Hop/Classical crossover. She reinvents classical music using beat boxing for today’s audience, purely through the flute.`,
  },
  {
    title: "Swing/Jazz Bands",
    title1:'Benoit and his Orchestra',
    image: "/Entertainment/Party/Swing/Benoit.png",
    text: "Magdalena Reising is a Scottish born singer, songwriter and musician. Whether it’s Jazz, Classical or traditional Scottish and Polish folk songs, she is perfect for weddings or corporate events.",
  },

];

const page = () => {
  return (
    <div>
        <EntertainmentCards heading='Bands' 
        description='Bands have to be one of the most popular event entertainment. Take a look at the wide range of bands that we work with below – we are confident there will be something that suits your event.' 
        cards={cards}/>
    </div>
  )
}

export default page