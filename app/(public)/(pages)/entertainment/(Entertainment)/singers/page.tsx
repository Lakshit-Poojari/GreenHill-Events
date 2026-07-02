import EntertainmentCards from '@/components/public/Entertainment/EntertainmentCards'
import React from 'react'

const cards = [
  {
    title: "Harmony Groups",
    title1:'The Valentines',
    image: "/Entertainment/Singer/The-Valentines.png",
    text: "The Valentines are a close harmony girl group with a vintage style and a fabulous retro sound. They sing songs from the 1920’s to 1960’s and also modern songs with a vintage twist. Previous gigs have included The Playboy Club, Chelsea Town Hall and London Zoo.",
  },
  {
    title: "Harmony Groups",
    title1:'The Basetones',
    image: "/Entertainment/Singer/The-Basetones.png",
    text: "This fresh new 3-man vocal harmony group will bring to life some of your favourite groups such as Frankie Vallie and the Four Seasons, The Overtones and The Temptations. The show takes the sounds of the 50’s & 60’s and incorporates slick Motown choreography and tight harmonies, with a modern twist.",
  },
  {
    title: "Harmony Groups",
    title1:'Rockafellas',
    image: "/Entertainment/Singer/Rockafellas.png",
    text: "The Rockafellas celebrate the sound of yesteryear – paying tribute to all the classic vocal groups such as The Beatles, The Four Seasons, The Everly Brothers and The Beach Boys. With the great sounds of Doo Wop, and some Acapella stylings of modern songs, this really is the group to get your party ‘rocking’!",
  },
  {
    title: "Harmony Groups",
    title1:'Penny Arcade',
    image: "/Entertainment/Singer/Penny-Arcade.jpg",
    text: `The Penny Arcade Vocal Quartet consists of four classically trained Londoners with a fine ear for a classic and a mutual love of Frank Sinatra. Performing bespoke acapella arrangements of classic songs from The Beatles and Nat King Cole to Adele and R Kelly, The Penny Arcade have a quintessentially English style.`,
  },
  {
    title: "Classical",
    title1:'Justine Balmer',
    image: "/Entertainment/Singer/Justine-Balmer.png",
    text: "Justine’s stunning soprano voice, with its purity of tone and emotional warmth, has earned her the affectionate title of ‘songbird’. She has headlined on the QE2, Royal Caribbean, Azamara, Regent and Seabourn cruises and has performed at many top London venues including Royal Festival Hall, Royal Albert Hall and Cadogan Hall",
  },
  {
    title: "Man and his guitar",
    title1:'Pop Up Tenors',
    image: "/Entertainment/Singer/Jon-Hart.jpg",
    text: "Jon has hosted the London Guitar Night at the Troubadour, appeared on Gibson’s new music channel and won the Best Musical Act at the National Wedding Industry Awards. Jon can provide any kind of music, for any kind of occasion.",
  },
  {
    title: "Man and his guitar",
    title1:'Operatic Singing Waiters',
    image: "/Entertainment/Singer/Jay-Marsh.png",
    text: "Whether it’s an upbeat, sing-along set you’re after or a more background, chilled out vibe – Jay’s got it covered. For the more energetic crowd who want to party into the night, Jay offers a duo or a trio option with a DJ package to complement the live performance.",
  },
  {
    title: "Man and his guitar",
    title1:'Javier Moreno',
    image: "/Entertainment/Singer/Javier1.jpg",
    text: `Hailing from Barcelona, Javier has brought his unique take on Gypsy Rumba to the UK, adding his twist to music from Dire Straits to The Police. An accomplished songwriter in his own right, Javier is able to provide a Latin feel for any occasion, from weddings to festivals.`,
  },
  {
    title: "Swing / Rat Pack",
    title1:'James Spilling',
    image: "/Entertainment/Singer/James-Spilling.png",
    text: "As an actor and singer, James has appeared in a number of West End musicals and national tours including Man of La Mancha, Sweeney Todd, The Woman in White, The Phantom of the Opera and Chess. He has sung on many radio broadcasts for BBC Radio 2 and has appeared as a soloist with the Bournemouth Symphony Orchestra and London Concert Orchestra.",
  },
  {
    title: "Swing / Rat Pack",
    title1:'Colin Roy',
    image: "/Entertainment/Singer/Colin-Roy.jpg",
    text: "Colin has appeared in West End musicals such as SoulTrain, Smokey Joes’ Café, Sweet Charity, Hair, The House That Nat Built, Five Guys Named Moe, to name but a few. His recordings include the cast album of the Nat King Cole musical The House That Nat Built and the cast album of Hair.",
  },
  {
    title: "Classical",
    title1:'ToneAcity (Glee Act)',
    image: "/Entertainment/Singer/ToneAcity.jpg",
    text: "ToneAcity are a 12 strong, all-singing all-dancing, real life Glee club! This troupe of professional performers from the world of musical theatre, boast an extensive repertoire of genres and musical styles, all taking their inspiration from the hit US television comedy Glee!",
  },

];

const page = () => {
  return (
    <div>
        <EntertainmentCards heading='Singer' 
        description='We can arrange a wide variety of singers to bring entertainment to your event. From harmony groups or classical singers, to guitar players or a more upbeat swing/ratpack style. Look at some of the acts we work with below:' 
        cards={cards}/>
    </div>
  )
}

export default page