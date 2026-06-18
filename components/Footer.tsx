import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16  px-3.75">
      <div className="mx-16.25  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.2fr_2fr_1fr_0.8fr] gap-12 py-6">

        {/* Social Links */}
        <div className="">
          <h3 className=" font-[1.2em] font-['Playfair_Display'] mb-3">Social Links</h3>

          <div className="flex  md:justify-start gap-3">

            <Link
              href="https://www.facebook.com/simongreenhillallin/"
              className="w-12 h-12 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#1877F2] rounded-md flex items-center justify-center text-white text-xl"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://www.instagram.com/greenhill_entertainment/?hl=en"
              className="w-12 h-12 rounded-md flex items-center justify-center text-white text-xl "
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}>
              <FaInstagram />
            </Link>

            <Link
              href="https://uk.pinterest.com/simongreenhill7/"
              className="w-12 h-12 bg-[#E60023] rounded-md flex items-center justify-center text-white text-xl"
            >
              <FaPinterestP />
            </Link>

            <Link
              href="https://x.com/si_greenhill"
              className="w-12 h-12 bg-black border border-gray-600 rounded-md flex items-center justify-center text-white text-xl "
            >
              <FaXTwitter />
            </Link>

          </div>
        </div>


        {/* Copyright */}
        <div>
          <h3 className="font-[1.2em] font-['Playfair_Display'] mb-3">
            Copyright &copy;
          </h3>

          <p className="text-sm lg:text-[15px] text-[#A7A7A7] leading-7 lg:leading-8 font-['Poppins']">
            Copyright © 2021 Simon Greenhill. All rights reserved. Designed & <br/>
            <span> Developed by{" "}</span>
            <Link href={"https://www.visualytes.com/"} className="text-white font-medium hover:underline">
              Visualytes
            </Link>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-[1.2em] font-['Playfair_Display'] mb-3">
            Contact
          </h3>

          <div className=" text-[#A7A7A7] text-[15px] font-['Poppins'] leading-8">
            <p>London</p>
            <p>
              Tel: <span className="text-white">01483 497213</span>
            </p>
            <p>
              Mob: <span className="text-white">07595 219612</span>
            </p>
            <p>Email:</p>
            <p className="text-white break-all">
              hello@simongreenhill.com /
            </p>
            <p className="text-white break-all">
              simon@simongreenhill.com
            </p>
          </div>
        </div>

        {/* Terms */}
        <div>
          <h3 className="font-[1.2em] font-['Playfair_Display'] mb-3">
            Terms
          </h3>

          <div className="flex flex-col gap-4 mb-0.5 text-[#A7A7A7] text-[15px] font-['Poppins']">
            <Link href="#">Terms & conditions</Link>
            <Link href="#">Privacy policy & cookies</Link>
            <Link href="#">Terms of use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;