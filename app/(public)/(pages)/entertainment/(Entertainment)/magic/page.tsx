import EntertainmentCards from "@/components/public/Entertainment/EntertainmentCards";
import React from "react";

const cards = [
  {
    title: "Individuals",
    title1: "NEB",
    image: "/Entertainment/Main/magic.png",
    text: "Ten years of studying magic, psychology, self-help books and Star Wars have left Neb with a set of magic and mind-reading skills that could prove very dangerous in the wrong hands",
  },
  {
    title: "Individuals",
    title1: "Jasz Vegas",
    image: "/Entertainment/magic/Jasz.png",
    text: "With vibrant hair, a fabulous fashion sense and a gaze that could shatter the London shard, Jasz Vegas is a showgirl extraordinaire with a magic touch. Vegas holds a varied and impressive skill set; from burlesque to freak show.",
  },
  {
    title: "Magic groups",
    title1: "Chicks With Tricks",
    image: "/Entertainment/magic/Chicks.png",
    text: "Redefining magic Chicks ‘n’ Tricks are set to revolutionise the entertainment industry. The World’s ONLY super group of female magicians perform their own incredible style of magic creating the Wow factor at any type of event.",
  },
];

const page = () => {
  return (
    <div>
      <EntertainmentCards
        heading="MAGIC"
        description="Magic acts really can add the wow factor to any event and provide unforgettable stories that your guests will be talking about days and weeks later."
        cards={cards}
      />
    </div>
  );
};

export default page;
