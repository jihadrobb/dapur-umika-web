import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Element } from "react-scroll";

import { IPricelist } from "interfaces/pricelist";
import pricelistApis from "@/apis/pricelist";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import SocialMedia from "@/components/SocialMedia";

interface HomeProps {
  pricelists: IPricelist[];
}

function Home({ pricelists }: HomeProps) {
  const router = useRouter();
  const [imageMix, setImageMix] = useState<string>(
    "https://res.cloudinary.com/dapurumika/image/upload/v1662543768/mix_gbdk0b.png"
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  if (loading) return <>Loading...</>;

  return (
    <>
      <div className="relative">
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
          <div className="min-h-[92vh] w-screen pb-[8vh] flex flex-col md:flex-row justify-center items-center bg-dark-dotted overflow-hidden">
            <div className="flex flex-1 h-full items-center justify-center z-0">
              <img src={imageMix} className="max-w-[95%] " />
            </div>
            <div className="flex flex-col flex-1 h-full items-start justify-center px-[5vw]">
              <p className="text-md md:text-2xl font-bold text-dark-blue font-Garamond cursor-default">
                ASLI PALEMBANG
              </p>
              <p className="font-bold text-3xl md:text-5xl md:text-7xl text-white leading-none font-Copperplate cursor-default">
                FRESH AND BEST QUALITY PRODUCTS
              </p>
              <p className="text-xl md:text-3xl text-left text-dark-blue font-Mollenia mt-5 cursor-default">
                Kami adalah bagian dari penyedia ikan giling dan bahan baku
                pempek, siap melayani permintaan dalam kapasitas banyak ataupun
                sedikit
              </p>
            </div>
          </div>
        </Element>
        <Element name="products">
          <div className="min-h-[92vh] w-screen flex flex-col md:flex-row justify-center items-center bg-light-dotted">
            <div className="flex flex-col flex-1 h-full w-full items-end justify-center p-[1vw]">
              <p className="font-bold text-3xl md:text-5xl text-black leading-none font-Copperplate text-right md:text-7xl cursor-default">
                OUR PRODUCTS
              </p>
              <p className="text-xl md:text-3xl text-dark-blue font-Mollenia mt-5 text-right md:text-3xl cursor-default">
                Kami menyediakan berbagai jenis ikan giling seperti tenggiri,
                gabus, dan kakap serta sarden. Adapun bahan baku pempek, seperti
                gula batok, udang rebon, asam jawa dsb. Kami juga menyediakan
                berbagai macam jenis pempek, seperti pempek ikan kakap, gabus
                maupun tenggiri
              </p>
              <div
                className="hidden md:block bg-red text-white hover:text-black hover:bg-pink cursor-pointer mt-2 px-12 py-2 text-lg text-center rounded font-ElMessiri"
                onClick={() => router.push("/shop")}
              >
                Selengkapnya
              </div>
            </div>
            <div className="flex flex-col flex-1 h-full w-full items-center justify-center">
              <Slider data={pricelists} />
            </div>
          </div>
        </Element>
        <Element name="contact" className="bg-dark-dotted">
          <div className="w-screen py-5 flex flex-col md:flex-row justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7257295331256!2d106.03868101483968!3d-6.032328695631201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418f8ea2b30903%3A0x1f57233c64308131!2sIKAN%20GILING%20DAPUR%20UMIKA!5e0!3m2!1sen!2sid!4v1657672358200!5m2!1sen!2sid"
              className="w-[85vw] h-[30vh] md:w-[35vw] md:h-[20vw] max-w-[550px] rounded-xl "
              loading="lazy"
            />
            <div className="text-white text-lg flex-wrap max-w-[180px] self-baseline mx-[100px] mt-3">
              <p className="text-2xl">Address:</p> Cluster Amyra,
              <br />
              Jalan Remazol 1 No.3 Ciwedus Kecamatan Cilegon Banten 42418
              Indonesia
            </div>
            <div className="flex flex-col items-start mt-3">
              <SocialMedia
                name="+62 815-1717-0599"
                type="wa"
                imgAlt="whatsapp"
                onClick={() => router.push("/external?type=whatsapp")}
              />
              <SocialMedia
                name="@dapurumika"
                type="ig"
                imgAlt="instagram"
                onClick={() => router.push("/external?type=instagram")}
              />
              <SocialMedia
                name="dapurumika"
                type="fb"
                imgAlt="facebook"
                onClick={() => router.push("/external?type=facebook")}
              />
              <SocialMedia
                name="DAPUR UMIKA"
                type="shopee"
                imgAlt="shopee"
                onClick={() => router.push("/external?type=shopee")}
              />
              <SocialMedia
                name="dapur umika"
                type="tokopedia"
                imgAlt="tokopedia"
                onClick={() => router.push("/external?type=tokopedia")}
              />
            </div>
          </div>
          <div className="flex justify-center items-center pb-2">
            <span className="text-white text-sm">
              Copyright © 2022 Dapur Umika
            </span>
          </div>
        </Element>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const pricelists = await pricelistApis.getAll();

  return { props: { pricelists } };
};

export default Home;
