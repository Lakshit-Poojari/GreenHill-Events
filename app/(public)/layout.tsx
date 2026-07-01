import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
      </div>
 
  );
}
