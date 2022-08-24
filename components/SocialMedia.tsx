import React from "react";

interface SocialMediaProps {
  type: "fb" | "ig" | "shopee" | "tokopedia" | "wa";
  imgAlt: string;
  name: string;
  fontColor?: string;
  onClick?: () => void;
}

function SocialMedia({
  type,
  imgAlt,
  name,
  fontColor,
  onClick,
}: SocialMediaProps) {
  const getImgSrc = () => {
    switch (type) {
      case "fb":
        return "https://res.cloudinary.com/dapurumika/image/upload/v1661356431/Icons/fb_ae5k79.png";
      case "ig":
        return "https://res.cloudinary.com/dapurumika/image/upload/v1661356432/Icons/ig_yu2qln.png";
      case "shopee":
        return "https://res.cloudinary.com/dapurumika/image/upload/v1661356431/Icons/shopee_td1acb.png";
      case "tokopedia":
        return "https://res.cloudinary.com/dapurumika/image/upload/v1661356431/Icons/tokopedia_iszbug.png";
      case "wa":
        return "https://res.cloudinary.com/dapurumika/image/upload/v1661356431/Icons/wa_rovsjj.png";
    }
  };

  return (
    <>
      <div
        className="flex flex-row justify-center items-center cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
        }}
      >
        <img src={getImgSrc()} alt={imgAlt} className="w-[50px]" />
        <span
          className="ml-5 text-xl"
          style={{
            color: fontColor || "#fff",
          }}
        >
          {name}
        </span>
      </div>
    </>
  );
}

export default SocialMedia;
