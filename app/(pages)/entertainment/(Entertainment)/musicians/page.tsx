import EntertainmentCards from '@/components/Entertainment/EntertainmentCards'
import React from 'react'

const cards = [
  {
    title: "Beat Box/Flute",
    title1:'Nathan Flutebox Lee',
    image: "/Entertainment/Musicians/Nathan.png",
    text: "The Valentines are a close harmony girl group with a vintage style and a fabulous retro sound. They sing songs from the 1920’s to 1960’s and also modern songs with a vintage twist. Previous gigs have included The Playboy Club, Chelsea Town Hall and London Zoo.",
  },
  {
    title: "Brass",
    title1:'Sarah Louise',
    image: "/Entertainment/Musicians/Sarah.png",
    text: "This fresh new 3-man vocal harmony group will bring to life some of your favourite groups such as Frankie Vallie and the Four Seasons, The Overtones and The Temptations. The show takes the sounds of the 50’s & 60’s and incorporates slick Motown choreography and tight harmonies, with a modern twist.",
  },
  {
    title: "Brass",
    title1:'Riverside Brass',
    image: "/Entertainment/Musicians/Riverside.png",
    text: "The Rockafellas celebrate the sound of yesteryear – paying tribute to all the classic vocal groups such as The Beatles, The Four Seasons, The Everly Brothers and The Beach Boys. With the great sounds of Doo Wop, and some Acapella stylings of modern songs, this really is the group to get your party ‘rocking’!",
  },
  {
    title: "Classical Musicians",
    title1:'Lizz Lipscombe',
    image: "/Entertainment/Musicians/Lizz.png",
    text: `The Penny Arcade Vocal Quartet consists of four classically trained Londoners with a fine ear for a classic and a mutual love of Frank Sinatra. Performing bespoke acapella arrangements of classic songs from The Beatles and Nat King Cole to Adele and R Kelly, The Penny Arcade have a quintessentially English style.`,
  },
  {
    title: "Brass",
    title1:'Hackney Colliery Band',
    image: "/Entertainment/Musicians/Hackney.png",
    text: "Justine’s stunning soprano voice, with its purity of tone and emotional warmth, has earned her the affectionate title of ‘songbird’. She has headlined on the QE2, Royal Caribbean, Azamara, Regent and Seabourn cruises and has performed at many top London venues including Royal Festival Hall, Royal Albert Hall and Cadogan Hall",
  },
  {
    title: "Classical Musicians",
    title1:'Eloise Prouse',
    image: "/Entertainment/Musicians/Ellie.png",
    text: "Jon has hosted the London Guitar Night at the Troubadour, appeared on Gibson’s new music channel and won the Best Musical Act at the National Wedding Industry Awards. Jon can provide any kind of music, for any kind of occasion.",
  },
  {
    title: "Brass",
    title1:'Alter Ego',
    image: "/Entertainment/Musicians/Alter.png",
    text: "Whether it’s an upbeat, sing-along set you’re after or a more background, chilled out vibe – Jay’s got it covered. For the more energetic crowd who want to party into the night, Jay offers a duo or a trio option with a DJ package to complement the live performance.",
  },
  {
    title: "Brass",
    title1:'Miranda Gunn',
    image: "/Entertainment/Musicians/Miranda.jpg",
    text: `Hailing from Barcelona, Javier has brought his unique take on Gypsy Rumba to the UK, adding his twist to music from Dire Straits to The Police. An accomplished songwriter in his own right, Javier is able to provide a Latin feel for any occasion, from weddings to festivals.`,
  },
  {
    title: "Classical Musicians",
    title1:'Magdalena Reising',
    image: "/Entertainment/Musicians/Magdalena.jpg",
    text: "As an actor and singer, James has appeared in a number of West End musicals and national tours including Man of La Mancha, Sweeney Todd, The Woman in White, The Phantom of the Opera and Chess. He has sung on many radio broadcasts for BBC Radio 2 and has appeared as a soloist with the Bournemouth Symphony Orchestra and London Concert Orchestra.",
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