import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[320px_500px_250px_180px] gap-10 lg:gap-8">

        {/* Social Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-5">Social Links</h3>

          <div className="flex gap-3">

            <Link
              href="https://www.facebook.com/simongreenhillallin/"
              className="w-12 h-12 bg-[#1877F2] rounded-md flex items-center justify-center text-white text-xl"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://www.instagram.com/greenhill_entertainment/?hl=en"
              className="w-12 h-12 rounded-md flex items-center justify-center text-white text-xl"
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
              className="w-12 h-12 bg-[#1DA1F2] rounded-md flex items-center justify-center text-white text-xl"
            >
              <FaTwitter />
            </Link>

          </div>
        </div>


        {/* Copyright */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Copyright &copy;
          </h3>

          <p className="text-[#A7A7A7] text-[15px] leading-8">
            Copyright © 2021 Simon Greenhill. All rights reserved.
            Designed & Developed by{" "}
            <span className="text-white font-medium">
              Visualytes
            </span>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-2 text-[#A7A7A7] text-[15px] leading-8">
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
          <h3 className="text-xl font-semibold mb-5">
            Terms
          </h3>

          <div className="flex flex-col gap-4 text-[#A7A7A7] text-[15px]">
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