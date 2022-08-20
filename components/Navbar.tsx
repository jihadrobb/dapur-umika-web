import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import logo from "@/public/assets/logo-square.png";
import { FaBars, FaShoppingBasket, FaTimes } from "react-icons/fa";

function Navbar() {
  const router = useRouter();
  return (
    <>
      {/* Browser Navbar */}
      <div className="hidden md:flex sticky absolute top-0 bg-soft-pink h-[8vh] z-[999] px-10 overflow-hidden">
        <Link
          to="motto"
          spy
          smooth
          isDynamic
          offset={-60}
          className="flex flex-1 flex-row items-center justify-between"
        >
          <div className="flex flex-1 items-center cursor-pointer">
            <Image src={logo} height="80px" width="80px" />
            <p className="font-BobbyJones text-xl md:text-4xl text-soft-brown">
              DAPUR UMIKA
            </p>
          </div>
        </Link>
        <div className="flex flex-1 items-center h-full justify-end">
          <Link
            to="about"
            spy
            smooth
            isDynamic
            offset={-59}
            className="h-full border-y-4 border-soft-pink hover:border-b-navy-blue flex items-center px-[1vw] cursor-pointer text-xl text-soft-brown font-ElMessiri"
          >
            About
          </Link>
          <Link
            to="products"
            spy
            smooth
            isDynamic
            offset={-59}
            className="h-full border-y-4 border-soft-pink hover:border-b-navy-blue flex items-center px-[1vw] cursor-pointer text-xl text-soft-brown font-ElMessiri"
          >
            Products
          </Link>
          <Link
            to="contact"
            spy
            smooth
            isDynamic
            offset={-59}
            className="h-full border-y-4 border-soft-pink hover:border-b-navy-blue flex items-center px-[1vw] cursor-pointer text-xl text-soft-brown font-ElMessiri"
          >
            Contact
          </Link>
          <div className="h-full flex items-center px-[1vw] text-xl text-soft-brown font-ElMessiri">
            <div
              className="flex items-center py-2 px-5 border-[1px] cursor-pointer hover:text-white rounded hover:bg-pink border-soft-brown hover:border-soft-pink"
              onClick={() => router.push("/shop")}
            >
              <FaShoppingBasket className="mr-2 mb-1" />
              Shop
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="flex md:hidden sticky top-0 bg-soft-pink h-[8vh] flex z-[999] overflow-hidden"></div>
    </>
  );
}

export default Navbar;
