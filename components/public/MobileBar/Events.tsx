import Link from "next/link";
import { Gem, Trophy, Cake, Handshake } from "lucide-react";

const Occasions = [
  {
    icon: Gem,
    color: "#916f6e",
    title: "Weddings",
    description:
      "Our mobile bars are ideal whatever wedding style you are creating. We will do all of the hard work so you can relax knowing that your guests are being well taken care of.",
  },
  {
    icon: Trophy,
    color: "#b99c30",
    title: "Sports",
    description:
      "We have supported lots of big sporting events at the London Stadium, The Oval and many more. Our mix of entertainment and mobile bars creates an incredible atmosphere, which means customers stay longer and spend more. Increasing profits for all stakeholders.",
  },
  {
    icon: Cake,
    color: "#e5bb84",
    title: "Occasions",
    description:
      "Whether it’s a birthday party, a cocktail party or a summer garden party, our mobile bar will be sure to provide a talking point for all of your guests.",
  },
  {
    icon: Handshake,
    color: "#82d0da",
    title: "Events",
    description:
      "The mobile bars can be hired for all types of events. Whether you are entertaining staff or clients at a corporate event or organising a food and drink festival, our professional and expert service means you won’t be disappointed.",
  },
];

const Events = () => {
  return (
    <div className="mx-16.25 grid grid-cols-1 px-6.75 md:grid-cols-2 lg:grid-cols-4">
      {Occasions.map((Occasion, index) => {
        const Icon = Occasion.icon;

        return (
          <div
            key={index}
            className="group flex flex-col items-center px-5 text-center transition-all duration-500 hover:-translate-y-2"
          >
            <div className="rounded-full p-4 transition-all duration-500 group-hover:bg-[#C9AC8C]/10 group-hover:shadow-[0_0_35px_rgba(201,172,140,0.18)]">
              <Icon
                size={100}
                strokeWidth={1.5}
                style={{ color: Occasion.color }}
                className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>

            <h2 className="mt-4 font-['Playfair_Display'] text-[3rem] text-white transition-colors duration-500 group-hover:text-[#C9AC8C]">
              {Occasion.title}
            </h2>

            <p className="mt-6 font-['Poppins'] text-lg leading-7 text-white/80 transition-colors duration-500 group-hover:text-white">
              {Occasion.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
