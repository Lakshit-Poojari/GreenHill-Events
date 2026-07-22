import EntertainmentCards from "@/components/public/Entertainment/EntertainmentCards";
import React from "react";

const cards = [
  {
    title: "Crazy & Weird",
    title1: "Victoria Bye",
    image: "/Entertainment/Main/Victoria-Bye.png",
    text: "Fire eating, breathing, body burning, fire fans and poi. Stilt walker and angle grinder performer.",
  },
  {
    title: "Aerial Act",
    title1: "Luna La Luna",
    image: "/Entertainment/Wired/Luna.png",
    text: "In combining the grace and fluidity of classical Ballet, with the power and strength of aerial hoop, a dynamic new performance has been developed. In a selection of beautifully choreographed works, La Luna has fast become one of the UK’s most popular aerial acts.",
  },
  {
    title: "Aerial Act",
    title1: "La Luna & Skills",
    image: "/Entertainment/Wired/La.png",
    text: "With the grace of an angel and the dynamics of a demon, aerial silks can at once be the most elegant of acts and also the most powerful. Whether you prefer elegant and balletic or fast moving and dynamic, this is aerial performance at its best.",
  },
  {
    title: "Aerial Act",
    title1: "Katie & Leyla",
    image: "/Entertainment/Wired/KATIE.jpg",
    text: `Katie and Leyla provide perfectly synchronised duo, solo and group acts for corporate events, product launches, commercials, film, event entertainment, cabarets, wedding entertainment, outdoor festivals, theatre, themed events, television & photography shoots.`,
  },
  {
    title: "Aerial Act",
    title1: "Champagne glitterati",
    image: "/Entertainment/Wired/Glee.png",
    text: `These world-class aerial artists are a fabulous choice for any celebratory occasion, combining effortless acrobatic skill with oodles of charm. Suspended high above your guests, they perform in aerial hoops or harnesses.`,
  },
  {
    title: "Aerial Act",
    title1: "Aerial Hoop",
    image: "/MobileBar/Partys/aerial.png",
    text: `Set in a white hoop suspended in the air, this is an exceptionally captivating act. The aerialist moves gracefully and elegantly, dancing in the air, in and around her hoop whilst the beautiful and haunting melodies add to this most graceful of performances.`,
  },
];

const page = () => {
  return (
    <div>
      <EntertainmentCards
        heading="Weird Stuff"
        description="If you are looking for something different to surprise and delight your guests, then we may have just the thing for you and your event:"
        cards={cards}
      />
    </div>
  );
};

export default page;
