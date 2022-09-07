import React, { useState } from "react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import { FaBars, FaShoppingBasket, FaTimes } from "react-icons/fa";

function Navbar() {
  const router = useRouter();
  const [logoUrl, setLogoUrl] = useState<string>(
    "https://res.cloudinary.com/dapurumika/image/upload/v1661340036/Icons/logo-square_qd5cv3.png"
  );

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const closeMobileMenu = () => setOpenMenu(false);

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
            <img src={logoUrl} className="max-h-[7vh] mr-3" />
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
      <div className="flex md:hidden sticky top-0 bg-soft-pink h-[8vh] flex z-[999] justify-center items-center px-1">
        <Link to="motto" spy smooth isDynamic offset={-60}>
          <img src={logoUrl} alt="logo" className="max-h-[7vh] w-[7vh]" />
        </Link>
        <Link to="motto" spy smooth isDynamic offset={-60} className="flex-1">
          <p className="font-BobbyJones text-4xl text-soft-brown text-center">
            DAPUR UMIKA
          </p>
        </Link>
        <div
          className="cursor-pointer w-[7vh] flex justify-center text-xl text-soft-brown"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? <FaTimes /> : <FaBars />}
        </div>
        {/* Mobile Menu */}
        <div
          className={`flex md:hidden flex-col absolute w-full h-auto bg-soft-pink bg-opacity-90 transition-all duration-500 ease-in-out z-10 ${
            openMenu ? "top-[8vh]" : "-top-[100vh]"
          }`}
        >
          <Link
            to="about"
            spy
            smooth
            isDynamic
            offset={-59}
            onClick={closeMobileMenu}
            className="w-full text-center font-ElMessiri text-soft-brown text-xl py-3"
          >
            About
          </Link>
          <Link
            to="products"
            spy
            smooth
            isDynamic
            offset={-59}
            onClick={closeMobileMenu}
            className="w-full text-center font-ElMessiri text-soft-brown text-xl py-3"
          >
            Products
          </Link>
          <Link
            to="contact"
            spy
            smooth
            isDynamic
            offset={-59}
            onClick={closeMobileMenu}
            className="w-full text-center font-ElMessiri text-soft-brown text-xl py-3"
          >
            Contact
          </Link>
          <div className="w-full flex items-center py-2 text-xl text-soft-brown font-ElMessiri">
            <div
              className="flex items-center justify-center py-1 w-full mx-5 border-[1px] cursor-pointer hover:text-white rounded-lg hover:bg-pink border-soft-brown hover:border-soft-pink"
              onClick={() => router.push("/shop")}
            >
              <FaShoppingBasket className="mr-2 mb-1" />
              Shop
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
