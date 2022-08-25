import React from "react";
import { useTranslation } from "next-export-i18n";
import LoadingPage from "@/components/LoadingPage";

function Shop() {
  const { t } = useTranslation();

  return (
    <>
      <LoadingPage text={t("shop.under-construction")} />
    </>
  );
}

export default Shop;
