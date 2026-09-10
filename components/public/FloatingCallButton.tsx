"use client";

import { Phone, PhoneCall } from "lucide-react";

const FloatingCallButton = () => {
  return (
<a
  href="tel:+919876543210"
  className="fixed bottom-6 left-6 z-9999 flex items-center group"
>
  {/* Phone Icon */}
  <div
    className="
      relative z-10 flex h-16 w-16 items-center justify-center
      rounded-full bg-[#00E676]
      shadow-xl
      transition-all duration-300
      group-hover:scale-105
    "
  >
    {/* Pulse ring */}
    <span
      className="
        absolute inset-0 rounded-full
        border-2 border-[#00E676]
        animate-ping
        opacity-40
      "
    />

    <PhoneCall
      className="relative h-8 w-8 text-white"
      fill="white"
    />
  </div>

  {/* Text */}
  <div
    className="
      -ml-4 rounded-r-full
      border border-[#C9AC8C]/50
      bg-[#242020]
      px-7 py-3 pl-9
      shadow-xl
      transition-all duration-300
      group-hover:border-[#C9AC8C]
      group-hover:bg-[#2D2929]
    "
  >
    <span
      className="
        text-base font-medium tracking-wide
        text-[#C9AC8C]
        transition-colors duration-300s
      "
    >
      Contact Us
    </span>
  </div>
</a>
  );
};

export default FloatingCallButton;
