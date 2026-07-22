import EntertainmentCards from "@/components/public/Entertainment/EntertainmentCards";
import React from "react";

const cards = [
  {
    title: "Singing Waiters",
    title1: "West End Waiters",
    image: "/Entertainment/Cabaret-waiter/WEST-END-WAITERS.jpg",
    text: "Our West End stars perform as fabulous operatic waiters: the fantastic music, the unforgettable characters and their remarkable performances will leave your guests cheering for more. And with our West End Waiters, there is more…a stunning 45minute cabaret set is sure to delight your guests.",
  },
  {
    title: "Pop Opera",
    title1: "Pop Up Tenors",
    image: "/Entertainment/Cabaret-waiter/POP-UP-TENORS.jpg",
    text: "Pop Up Tenors can surprise your audiences as waiters, or be saved as the ultimate after dinner treat; either way, with inch perfect choreography and harmonies to die for – the boys are guaranteed to have your guests dancing.",
  },
  {
    title: "Singing Waiters",
    title1: "Operatic Singing Waiters",
    image: "/Entertainment/Cabaret-waiter/OPERATIC-SINGING-WAITERS.jpg",
    text: "Our Singing Waiters have performed in over thirty countries, from intimate gatherings to large award ceremonies and society weddings. We take immense pride in hand picking our performers direct from London’s West End.",
  },
  {
    title: "Singing Waiters",
    title1: "Female Leading Ladies",
    image: "/Entertainment/Cabaret-waiter/Leading-Ladies.jpg",
    text: `Some of the West End’s finest performers serve up the ultimate cabaret as our Leading Ladies. Our ladies will transport your guests to the glittering heights of theatre land and beyond in this jaw dropping show.`,
  },
];

const page = () => {
  return (
    <>
      <EntertainmentCards
        heading="CABARET & SINGING WAITERS"
        description="Cabaret and Singing waiters can bring an element of theatre and surprise to any event."
        cards={cards}
      />
    </>
  );
};

export default page;
