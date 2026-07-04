import Link from "next/link";
import { FaTheaterMasks, FaCalendarAlt, FaCocktail, FaHandsHelping,} from "react-icons/fa";

const serviceCards = [
  {
    icon: FaTheaterMasks,
    title: "Entertainment",
    bgColor: "#171d23",
    href:"/entertainment",
  },
  {
    icon: FaCalendarAlt,
    title: "Events",
    bgColor: "#2d3745",
    href:"/events",
  },
  {
    icon: FaCocktail,
    title: "Mobile Bar",
    bgColor: "#a87350",
    href:"/mobile-bar",
  },
  {
    icon: FaHandsHelping,
    title: "Hire",
    bgColor: "#a99a64",
    href:"/",
  },
];

const ServiceCard = () => {
  return (
 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
  {serviceCards.map((service, index) => {
    const Icon = service.icon;

    return (
      <div key={index} className="p-2">
        <div
          style={{ backgroundColor: service.bgColor }}
          className="group flex h-full flex-col items-center justify-between rounded-3xl px-8 py-12 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
        >
          {/* Icon */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="text-5xl text-white sm:text-6xl" />
          </div>

          {/* Title */}
          <h2 className="mt-8 font-['Playfair_Display'] text-3xl text-white sm:text-4xl">
            {service.title}
          </h2>

          {/* Divider */}
          <div className="my-6 h-0.5 w-16 rounded-full bg-white/40" />

          {/* Button */}
          <Link href={service.href}>
            <button className="rounded-full border border-white px-6 py-3 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
    );
  })}
</div>
  );
};

export default ServiceCard;