import React, { useState } from "react";
import Header from "@/components/Header";
import { Element } from "react-scroll";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "@/components/Slider";

function Home() {
  const router = useRouter();
  const [imageMix, setImageMix] = useState(
    "https://res.cloudinary.com/dapurumika/image/upload/v1660055938/Products/mix_b78vwp.png"
  );
  return (
    <>
      <div className="relative">
        <Header />
        <Navbar />
        <Element name="motto">
          <div className="h-[92vh] w-screen pb-[8vh] flex flex-col justify-center items-center bg-light-dotted">
            <p className="font-Flor text-[20vw] md:text-[12vw] leading-[18vw] text-soft-brown mb-[50px] text-center cursor-default">
              DAPUR UMIKA
            </p>
            <p className="font-BohemeFloral text-[13vw] md:text-[10vw] text-brown font-bold cursor-default">
              Dapurnyo uong kito
            </p>
          </div>
        </Element>
        <Element name="about">
          <div className="h-[92vh] w-screen pb-[8vh] flex flex-col md:flex-row justify-center items-center bg-dark-dotted overflow-hidden">
            <div className="flex flex-1 h-full items-center justify-center z-0">
              <Image
                src={imageMix}
                width="500%"
                height="500%"
                className="z-0 w-auto h-full"
              />
            </div>
            <div className="flex flex-col flex-1 h-full items-start justify-center px-[5vw]">
              <p className="text-2xl font-bold text-dark-blue font-Garamond cursor-default">
                ASLI PALEMBANG
              </p>
              <p className="font-bold text-5xl md:text-7xl text-white leading-none font-Copperplate cursor-default">
                FRESH AND BEST QUALITY PRODUCTS
              </p>
              <p className="text-2xl md:text-3xl text-left text-dark-blue font-Mollenia mt-5 cursor-default">
                Kami adalah bagian dari penyedia ikan giling dan bahan baku
                pempek, siap melayani permintaan dalam kapasitas banyak ataupun
                sedikit
              </p>
            </div>
          </div>
        </Element>
        <Element name="products">
          <div className="h-[92vh] w-screen pb-[8vh] flex flex-col md:flex-row justify-center items-center bg-light-dotted">
            <div className="flex flex-col flex-1 h-full w-full items-end justify-center p-[5vw]">
              <p className="font-bold text-5xl text-black leading-none font-Copperplate text-right md:text-7xl cursor-default">
                OUR PRODUCTS
              </p>
              <p className="text-2xl text-dark-blue font-Mollenia mt-5 text-right md:text-3xl cursor-default">
                Kami menyediakan berbagai jenis ikan giling seperti tenggiri,
                gabus, dan kakap serta sarden. Adapun bahan baku pempek, seperti
                gula batok, udang rebon, asam jawa dsb. Kami juga menyediakan
                berbagai macam jenis pempek, seperti pempek ikan kakap, gabus
                maupun tenggiri
              </p>
              <div
                className="bg-red text-white hover:text-black hover:bg-pink cursor-pointer mt-2 px-12 py-2 text-lg text-center rounded font-ElMessiri"
                onClick={() => router.push("/shop")}
              >
                Selengkapnya
              </div>
            </div>
            <div className="flex flex-col flex-1 h-full w-full items-center justify-center">
              <Slider />
            </div>
          </div>
        </Element>
        <Element name="contact">
          <div className="w-screen pb-[8vh] flex flex-col justify-center items-center bg-dark-dotted">
            contact
          </div>
        </Element>
      </div>
    </>
  );
}

export default Home;
