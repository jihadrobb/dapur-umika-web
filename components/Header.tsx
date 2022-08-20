import Head from "next/head";
import React from "react";

function Header() {
  return (
    <Head>
      <title>Dapur Umika</title>
      <link rel="icon" href="/assets/logo-round.png" />
      <meta name="title" content="Dapur Umika" />
      <meta name="description" content="Ikan Giling dan Bahan Baku Pempek" />
      <link rel="apple-touch-icon" href="/assets/logo-round.png" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dapurumika.com/" />
      <meta property="og:title" content="Dapur Umika" />
      <meta
        property="og:description"
        content="Ikan Giling dan Bahan Baku Pempek"
      />
      <meta
        property="og:image"
        content="https://asset.cloudinary.com/dapurumika/6e44a4e20f51148498574e2d14039838"
      />
      <meta
        name="robots"
        content="dapur umika, ikan giling, pempek, pempek cilegon, ikan giling cilegon, bahan baku pempek"
      />
    </Head>
  );
}

export default Header;
