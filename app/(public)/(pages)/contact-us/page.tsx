import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us - GreenHillEvent",
  // description: "",
};

export default function Page() {
  return <ContactPage />;
}
