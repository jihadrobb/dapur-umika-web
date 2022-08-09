import React from "react";
import useTranslation from "next-translate/useTranslation";

function Shop() {
  const { t } = useTranslation("shop");
  return <div className="font-bold bg-red-500">{t("hello")}</div>;
}

export default Shop;
