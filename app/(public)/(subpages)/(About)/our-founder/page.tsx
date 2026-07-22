import SectionHeading from "@/components/public/SectionHeading";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="pt-26 mx-16.25 px-6.75">
        <SectionHeading title="Our Founder" />
        <SectionHeading title="About – Simon Greenhill" />
        <div className="grid grid-cols-2 gap-4 mt-6 py-3 ">
          <div className="text-[#C9AC8C] text-lg items-start italic text-justify space-y-1.5 font-['Old Standard TT']">
            <p>
              Simon is an Actor, Singer and an Entrepreneur. He won the
              prestigious scholarship of The Stage Newspaper and received
              funding from The Sir Anthony Hopkins trust, which paved the way
              for his studies at Mountview Theatre Academy.
            </p>
            <p>
              As an actor, he has been fortunate to have performed in West End
              Musicals such as Joseph and the Amazing Technicolour Dreamcoat and
              The Full Monty (and, yes, he did get naked!), Operas such as
              Jonathan Dove’s Tobias and the Angel and has appeared in numerous
              plays, short films and commercials.
            </p>
            <p>
              Alongside the events industry Simon’s other passion as a huge
              sporting fan, he has been fortunate to have sung at many sporting
              arenas all over the world including Wembley Stadium, Twickenham,
              Lord’s, Old Trafford, Ascot Racecourse, Wentworth, Aviva Stadium
              (Dublin), Ellis Park (Johannesburg), Moses Mabhida Stadium
              (Durban), Kings Park (Durban), Ellis Park (Auckland), as well as
              performing on behalf of a number of huge sporting clubs and events
              such as Ferrari F1 (Abu Dhabi), Ryder Cup, Saracens, Harlequins,
              Exeter Chiefs, HCup, Yorkshire CCC, British Lions, Cheltenham
              Festival, Shanghai International Horse Festival.
            </p>
            <p>
              With his background as a performer in West End productions and in
              countless International Corporate Acts, Simon identified the need
              for a higher quality entertainment service and brought together a
              trusted team of experienced performers, musicians, choreographers
              and musical directors to create a truly bespoke service.
            </p>
            <p>
              Simon continues to build his artistic team with a commitment to
              maintaining quality, discovering new talent, and finding new ways
              to ensure that his new and existing clients’ events stand out.
            </p>
          </div>
          <div>
            <Image
              src={"/About/Our-Founder.jpg"}
              alt="our-founder"
              width={600}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
