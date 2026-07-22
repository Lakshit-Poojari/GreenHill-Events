import EntertainmentCards from "@/components/public/Entertainment/EntertainmentCards";
import React from "react";

const cards = [
  {
    title: "show",
    title1: "Slam",
    image: "/Entertainment/Shows/Slam.png",
    text: "The Slam! boys have been touring their show for the last 8 years all over the world. From motor shows in Korea to international conferences at Euro Disney, this hard-hitting percussion show is a top-notch act that will resonate in the minds of the guests long after the event",
  },
  {
    title: "Show",
    title1: "Lumina",
    image: "/Entertainment/Shows/Lumina.png",
    text: "Lume is a sensational and breathtaking act featuring stunning violin performance and state of the art laser technology. The Laser Violinist literally plays her violin with a laser beam and manipulates lasers during her electrifying show.",
  },
];

const page = () => {
  return (
    <div>
      <EntertainmentCards heading="Shows" description="" cards={cards} />
    </div>
  );
};

export default page;
