import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";

function ExternalLinks() {
  const router = useRouter();

  useEffect(() => {
    switch (router.query.type) {
      case "facebook":
        window.location.replace("https://www.facebook.com/dapurumika");
        break;
      case "instagram":
        window.location.replace("https://www.instagram.com/dapurumika");
        break;
      case "shopee":
        window.location.replace("https://shopee.co.id/rizkanovarina");
        break;
      case "tokopedia":
        window.location.replace("https://www.tokopedia.com/dapurumika");
        break;
      case "whatsapp":
        window.location.replace("https://wa.me/6281517170599");
        break;
      default:
        window.location.replace("/");
        break;
    }
  }, []);

  return (
    <>
      <LoadingPage />
    </>
  );
}

export default ExternalLinks;
