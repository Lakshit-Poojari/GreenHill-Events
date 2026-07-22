import SectionHeading from "@/components/public/SectionHeading";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="pt-26 mx-16.25 px-6.75 text-[#C9AC8C] text-lg items-start italic text-justify space-y-1.5 my-6 py-3 
        font-['Old Standard TT']">
        <SectionHeading title="Complimentary Bar" />
        <div>
          <p>Treat your guests to a free bar. We can do this in 4 ways:</p>
          <div className="mx-4">
            <ol className="list-decimal">
              <li>Bar tab on the day</li>
              <li>Prepay for your drinks an agreed amount</li>
              <li>Buy drinks tokens for your guests to redeem at the bar</li>
              <li>Invoiced after the event</li>
            </ol>
          </div>
          <div>
            <p>
              On any of the above options if there is an agreed spend and it
              runs out, we make it a cash bar for guests or agree to extend the
              tab. Simples!
              <br />
              We attend your event and run a ‘tab’ for hosts who would like to
              entertain their guests with complimentary drinks of their choice.
              <br />
              Our POS software allows us to track all drinks in real time to
              give the host a breakdown of everything that was spent, on what
              and when.
              <br />A hire fee is payable (from £250) with an agreed minimum
              spend.
            </p>
          </div>
          <div>
            <ul className="list-disc">
              <p>Included in our package:</p>
              <div className="mx-4">
                <li>
                  Hire of one of our horsebox or pop up bar for the duration of
                  your event
                </li>
                <li>Minimum of 2 friendly bar staff</li>
                <li>Bio degradable plastic cups with paper straws</li>
                <li>Ice and fruit</li>
                <li>Travel costs included</li>
                <li>Set up time and set down time</li>
                <li>TENS – Temporary Events Notice applied for by us</li>
                <li>Personalised chalk boards with your menu</li>
              </div>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link href="/contact-us">
              <button
                className="mt-12 mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3 text-[#C9AC8C]
                        animate-[bounce-x_0.49s_ease-in-out_infinite] hover:bg-[#C9AC8C] hover:text-black transition duration-300"
              >
                ENQUIRE TODAY
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
