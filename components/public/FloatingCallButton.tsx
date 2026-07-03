"use client";

import { Phone, PhoneCall } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+919876543210"
      className="fixed bottom-6 left-6 z-9999 flex items-center"
    >
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00E676] shadow-xl">
        <PhoneCall className="h-8 w-8 text-white" fill="white" />
      </div>

      {/* Text */}
      <div className="-ml-1 rounded-r-full rounded-l-full bg-white px-7 py-3 shadow-xl">
        <span className="text-lg font-medium text-[#555]">
          Contact Us
        </span>
      </div>
    </a>
  );
};

export default FloatingCallButton;