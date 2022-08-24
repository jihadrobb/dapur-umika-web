import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";

interface LoadingProps {
  text?: string;
}

function LoadingPage({ text }: LoadingProps) {
  const [logoUrl, setLogoUrl] = useState(
    "https://res.cloudinary.com/dapurumika/image/upload/v1660055890/Icons/logo-round_kxsxxr.png"
  );
  return (
    <>
      <Header />
      <div className="relative w-screen h-screen bg-soft-pink flex flex-col items-center justify-center">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ loop: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute border-[12px] md:border-[30px] border-dotted border-soft-pink border-r-soft-brown rounded-full h-[60vw] w-[60vw] md:h-[40vw] md:w-[40vw]"
        />
        <img
          src={logoUrl}
          className="h-[50vw] w-[50vw] md:h-[30vw] md:w-[30vw]"
        />
        {text ? (
          <p className="text-xs md:text-2xl -mt-8 md:-mt-10 font-ElMessiri text-soft-brown">
            {text}
          </p>
        ) : null}
      </div>
    </>
  );
}

export default LoadingPage;
