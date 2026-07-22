"use client";

import ContactModal from "@/components/public/ContactModel";
import SectionHeading from "@/components/public/SectionHeading";
import React, { useState } from "react";
// import ContactModal from "@/components/public/ContactModal"; // <-- Import

const Page = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-16.25 px-6.75 pt-26 text-center">
        <SectionHeading title="Contact Us" />

        <div>
          <p className="mt-10 text-center font-['Old Standard T'] text-[1.2rem] italic text-[#C9AC8C]">
            If you would like to get in touch with us to discuss your
            requirements for any event that you may be organising, then we will
            be more than happy to help. With many ways to contact us you can
            choose whichever method suits you best.
          </p>
        </div>

        <div className="mt-10 flex flex-row gap-5">
          <div className="w-1/2 text-right text-6xl">Office</div>

          <div className="w-1/2 text-left">
            <p className="mb-3 text-[1.25rem] tracking-[6px] text-[#C9AC8C]">
              CONTACT
            </p>

            <p>
              Phone /{" "}
              <span className="font-extrabold underline">
                44 (0)1483 497213
              </span>
            </p>

            <p>
              Mobile /{" "}
              <span className="font-extrabold underline">
                44 (0)7595 219612
              </span>
            </p>

            <p>
              EMAIL /{" "}
              <span className="font-extrabold underline">
                hello@simongreenhill.com
              </span>{" "}
              /{" "}
              <span className="font-extrabold underline">
                simon@simongreenhill.com
              </span>
            </p>

            <p>
              IN PERSON / <span className="font-extrabold">London</span>
            </p>

            <p>
              Complete our contact us form and we will aim to get back to you.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-12 mb-5 rounded-4xl border border-[#C9AC8C] px-10 py-3 text-[1.25rem] text-[#C9AC8C] transition duration-300 hover:bg-[#C9AC8C] hover:text-black"
            >
              CONTACT US NOW
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Page;
