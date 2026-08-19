import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - GreenHillEvent",
  icons: {
    icon: "/faviconV2.png",
    shortcut: "/faviconV2.png",
    apple: "/faviconV2.png",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}