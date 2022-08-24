import React from "react";
import useTranslation from "next-translate/useTranslation";
import LoadingPage from "@/components/LoadingPage";

function Shop() {
  const { t } = useTranslation("shop");

  return (
    <>
      <LoadingPage text="Under Construction" />
    </>
  );
}

export default Shop;
