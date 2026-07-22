import Heading from "@/components/public/Event/Heading";
import Photos from "@/components/public/Event/Photos";
import ServiceCard from "@/components/public/ServiceCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Events - GreenHillEvent",
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
      <div className="pt-26 text-center">
        <Heading />
        <Photos />
        <ServiceCard />
      </div>
    </>
  );
};

export default page;
