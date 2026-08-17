import React from "react";

const WellcomeToGrennHill = () => {
  return (
    <>
      <div className="bg-[#1a1919] mx-16.25 px-6.75  pt-40 py-30">
        <div className="text-center  ">
          <p className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.125rem]">
            Welcome to Simon Greenhill
          </p>
          <hr className="w-[15%] mx-auto mt-2 border-2 rounded-2xl border-[rgba(201,172,140,1)] " />
        </div>

        <div className="text-center font-['Old_Standard_TT'] text-[rgba(201,172,140,1)] italic mt-10 text-[1.5rem]">
          Greenhill events started life in 2007. We offer an all-inclusive event
          service. From weddings to birthday parties, Corporate Events to
          Christmas parties,
          <span>
            Match Day Entertainment to Private Parties we pride ourselves on
            delivering bespoke event solutions.
          </span>
        </div>
      </div>
    </>
  );
};

export default WellcomeToGrennHill;
