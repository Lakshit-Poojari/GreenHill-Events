import Link from "next/link";
import React from "react";

const MobileBarIntro = () => {
  return (
    <div className="text-center mx-16.25  py-6  text-[#C9AC8C]">
      <p className="font-['Cormorant_Garamond'] italic font-bold text-[27.2px] tracking-[4.08px]">
        Bring a touch of Mayfair to your event.
      </p>

      <div className="text-left italic text-[20.4px] leading-6 tracking-[0.6px] font-['Cormorant_Garamond']">
        <p>
          The Greenhill Bar is a fleet of rice horsebox trailers which have been
          beautifully renovated to create modern, stylish mobile bars.
        </p>
        <p>
          Likened to a mobile Mayfair wine bar, our offering is based around an
          extensive gin, champagne and prosecco menu. We can also provide a wide
          range of cocktails and bottled beers.
        </p>
        <p>
          All of our drinks are beautifully presented in fully recyclable
          plastics, something we know is a priority to many of our clients.
        </p>
      </div>

      <div className="w-full px-4 sm:px-0">
        <Link href="/contact-us">
          <button
            className="mt-8 mb-5 w-full sm:w-auto rounded-4xl border-2 sm:border-3 border-white px-5 py-3 sm:px-8 md:px-10 text-sm sm:text-base 
              md:text-lg lg:text-[1.25rem] leading-tight text-[#C9AC8C] transition duration-300 animate-[shake-horizontal_3.5s_cubic-bezier(.455,.03,.515,.955)_infinite_both]
              hover:bg-[#C9AC8C] hover:text-black "
          >
            CONTACT US FOR MORE INFORMATION
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MobileBarIntro;
