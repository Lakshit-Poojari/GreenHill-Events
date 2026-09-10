import Link from "next/link";
import React from "react";

const DryHire = () => {
  return (
    <>
      <div className="text-center mx-16.25 py-6  text-[#C9AC8C]">
        <p className="font-['Cormorant_Garamond'] italic font-bold text-[27.2px] tracking-[4.08px]">
          Dry Hire.
        </p>
        <p className="text-left italic text-[20.4px] leading-6 tracking-[0.6px] font-['Cormorant_Garamond']">
          Our stylish horse boxes are also available to dry hire. We simply
          provide the horse box and you or the venue can supply the
          refreshments. We will deliver it safely and collect it from your
          desired location.
        </p>
        <div>
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
    </>
  );
};

export default DryHire;
