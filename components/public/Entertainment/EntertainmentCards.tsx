import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/public/SectionHeading";

interface Card {
  title: string;
  title1: string;
  image: string;
  text: string;
  link?: string;
  slug?: string;
}

interface Props {
  heading: string;
  description: string;
  cards: Card[];
  loading: boolean;
}

const EntertainmentCards = ({
  heading,
  description,
  cards,
  loading,
}: Props) => {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-5 rounded-full border-4 border-[#C9AC8C]/30 border-t-[#C9AC8C] animate-spin" />

          <p className="text-[#C9AC8C] text-xl italic font-['Old_Standard_TT']">
            Loading offering...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-26 ">
      <div className="text-center mx-16.25 px-6.75">
        <SectionHeading title={heading} />
      </div>

      <div className="text-[#C9AC8C] mx-16.25 px-6.75 text-xl my-8 italic text-center space-y-1.5 py-4 font-['Old_Standard_TT']">
        <p>{description}</p>
      </div>

      <div className="bg-[#686868] py-6">
        <div className="mx-4 md:mx-8 lg:mx-16.25 px-4 md:px-6.75 py-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group w-full h-95.5 perspective-[1000px]
                  ${
                    cards.length % 2 !== 0 && index === cards.length - 1
                      ? "lg:col-span-2 lg:max-w-[50%] lg:mx-auto"
                      : ""
                  }`}
              >
                <div className="relative min-h-89 w-full transition-transform  duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute shadow-lg rounded-lg shadow-[#454545] inset-0 backface-hidden">
                    <Image
                      src={`/api/uploads/${card.image}`}
                      fill
                      alt={card.title1}
                      className="object-cover object-top rounded-lg brightness-55"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden font-['Playfair_Display'] px-6 text-center">
                    <h3 className="text-white mb-6 text-5xl font-bold text-center">
                      {card.title}
                    </h3>

                    <p className="text-white text-3xl font-bold text-center my-2">
                      {card.title1}
                    </p>

                    <hr className="w-25.5 mx-auto border-2 border-[#C9AC8C]" />
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-black shadow-lg rounded-lg shadow-[#454545]  p-6 flex flex-col justify-between transform-[rotateY(180deg)] backface-hidden">
                    <p className="text-[#C9AC8C] text-xl italic font-['Playfair_Display']">
                      {card.text}
                    </p>

                    <Link
                      href={card.link || `/entertainment/${card.slug}`}
                      className="self-center"
                    >
                      <button className="px-6 py-3 border border-[#C9AC8C] animate-[shake-horizontal_3.5s_cubic-bezier(.455,.03,.515,.955)_infinite_both] rounded-full text-[#C9AC8C] hover:bg-[#C9AC8C] hover:text-black">
                        FIND OUT MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentCards;
