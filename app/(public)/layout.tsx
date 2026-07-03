import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import FloatingCallButton from "@/components/public/FloatingCallButton";

export const metadata: Metadata = {
  title: "GreenHillEvent",
  // description: "",     ###############################################################
  icons: {
    icon: "/faviconV2.png",
    shortcut: "/faviconV2.png",
    apple: "/faviconV2.png",
  },
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
  
      <div className="min-h-full flex flex-col text-white">
        <Navbar/>
        {children}
        <Footer/>
        <FloatingCallButton />
      </div>
 
  );
}
