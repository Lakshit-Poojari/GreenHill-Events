import type { Metadata } from "next";
import "../../../globals.css";



export const metadata: Metadata = {
  title: "GreenHillEvent",
  // description: "",     ###############################################################
  icons: {
    icon: "/faviconV2.png",
    shortcut: "/faviconV2.png",
    apple: "/faviconV2.png",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {children}
    </div>
  );
}