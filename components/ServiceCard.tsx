import Link from "next/link";
import { FaTheaterMasks, FaCalendarAlt, FaCocktail, FaHandsHelping,} from "react-icons/fa";

const serviceCards = [
  {
    icon: FaTheaterMasks,
    title: "Entertainment",
    bgColor: "#171d23",
  },
  {
    icon: FaCalendarAlt,
    title: "Events",
    bgColor: "#2d3745",
  },
  {
    icon: FaCocktail,
    title: "Mobile Bar",
    bgColor: "#a87350",
  },
  {
    icon: FaHandsHelping,
    title: "Hire",
    bgColor: "#a99a64",
  },
];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {serviceCards.map((service, index) => {
        const Icon = service.icon;

        return (
          <div key={index} className="flex flex-col items-center justify-center py-10"
            style={{ backgroundColor: service.bgColor }} >
            <Icon className="text-white text-8xl mb-6" />

            <h2 className="text-white text-5xl font-['Playfair_Display']">
              {service.title}
            </h2>

            <Link href="/contact-us">
              <button className="mt-5 mb-3 text-[1rem] border border-white rounded-4xl px-5 py-3 text-white
                 animate-[bounce-x_0.49s_ease-in-out_infinite] transition duration-300" >
                SEE MORE
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;