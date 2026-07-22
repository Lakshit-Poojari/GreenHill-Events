import SectionHeading from "@/components/public/SectionHeading";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About Us - GreenHillEvent",
  // description: "",     ###############################################################
  icons: {
    icon: "/faviconV2.png",
    shortcut: "/faviconV2.png",
    apple: "/faviconV2.png",
  },
};

const page = () => {
  return (
    <>
      <div className="pt-26 mx-16.25 px-6.75">
        <SectionHeading title="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="text-[#C9AC8C] text-lg italic text-justify space-y-1.5  font-['Old Standard TT']">
            <p>
              Since 2007, Greenhill Events have been forging a reputation as a
              pioneer in the event entertainment industry. With our unique
              consultative approach, we have been able to create bespoke event
              experiences for a variety of clients all over the globe.
            </p>
            <p>
              Building upon our success within the United Kingdom and further
              afield into Europe, the Middle East and Asia, the business
              expanded internationally and in 2011 we opened Elegant
              Entertainment in South Africa, which serves to cover the Southern
              Hemisphere.
            </p>
            <p>
              In 2016 we were commissioned to organise our first event for a
              client. Since then we have gone on to organise and event manage
              sporting lunches, hospitality events, private parties, birthday
              parties, charity events and concerts.
            </p>
            <p>
              2018 saw us launch our fleet of bars. The Greenhill bars are a
              fleet of beautifully restored rice horseboxes which bring an
              elegant drinks experience to large scale events. Since our
              inception we have worked with many bride and grooms at countless
              weddings alongside our appearances at the many sporting events,
              concerts & festivals.
            </p>
          </div>
          <div className="">
            <Image
              src={"/About/About.jpg"}
              alt="About"
              width={700}
              height={450}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
