import EntertainmentCards from "@/components/public/Entertainment/EntertainmentCards";
import React from "react";

const cards = [
  {
    title: "Burlesque",
    title1: "The Twins",
    image: "/Entertainment/Dancer/Twins.jpg",
    text: "Sexy, innovative, a one of a kind twosome. Technically tantalising, professionally provocative, a dynamic duo. The perfect blend, where demure meets darkness and seduction meets sass, these twisted sisters are burlesque’s most exciting twin double act.",
  },
  {
    title: "Cabaret & Surprise",
    title1: "Pretty Pollys",
    image: "/Entertainment/Dancer/Pretty.jpg",
    text: "The Pretty Polly’s are London based Showgirls who bring a touch of glamour to any event. Enjoy the Belle Epoque Shows which are a lively performance of Showgirl feathers mixed in with a Burlesque twist.",
  },
  {
    title: "Burlesque",
    title1: "Persia Porzia",
    image: "/Entertainment/Main/dancer.png",
    text: "Persia is an ethereal vision of beauty and grace. Reminiscent of Lily St Cyr and likened to Rita Hayworth. This lithe-limbed, flame-haired showgirl will bedazzle you with her feats of balletic grace and flexibility.",
  },
  {
    title: "Burlesque",
    title1: "Lady D",
    image: "/Entertainment/Dancer/Lady.png",
    text: `Lady D has become one of the most notable burlesque performers on the UK circuit. With intricate, elegant costumes and an array of props, her performances are demure and delicately pieced together using her classical dance training.`,
  },
];

const page = () => {
  return (
    <div>
      <EntertainmentCards
        heading="Dancers"
        description="When it comes to event entertainment, dancers can add a real talking point as well as a sense of glamour and elegance. We work with many burlesque acts in particular, who you can find out more about below:"
        cards={cards}
      />
    </div>
  );
};

export default page;
