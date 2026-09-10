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
          <p className="mt-10 text-center font-['Old_Standard_TT'] text-[1.5rem] italic text-[#C9AC8C]">
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
              <a
                href="tel:+441483497213"
                className="font-extrabold underline hover:text-[#C9AC8C]"
              >
                44 (0)1483 497213
              </a>
            </p>

            <p>
              Mobile /{" "}
              <a
                href="tel:+447595219612"
                className="font-extrabold underline hover:text-[#C9AC8C]"
              >
                44 (0)7595 219612
              </a>
            </p>

            <p>
              EMAIL /{" "}
              <a
                href="mailto:hello@simongreenhill.com"
                className="font-extrabold underline hover:text-[#C9AC8C]"
              >
                hello@simongreenhill.com
              </a>{" "}
              /{" "}
              <a
                href="mailto:simon@simongreenhill.com"
                className="font-extrabold underline hover:text-[#C9AC8C]"
              >
                simon@simongreenhill.com
              </a>
            </p>

            <p>
              IN PERSON / <span className="font-extrabold">London</span>
            </p>

            <p>
              Complete our contact us form and we will aim to get back to you.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-12 mb-5 text-[1.25rem] border border-[#C9AC8C] rounded-4xl px-10 py-3 text-[#C9AC8C]
              animate-[shake-horizontal_3.5s_cubic-bezier(.455,.03,.515,.955)_infinite_both]
              hover:bg-[#C9AC8C] hover:text-black transition duration-300"
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
