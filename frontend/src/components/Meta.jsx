import React from "react";
import { Helmet } from "react-helmet-async";

function Meta({ title, descritpion, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={descritpion} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

Meta.defautlProps = {
  title: "Welcome to Proshop",
  descritpion: "We sell the best products",
  keywords: "electronics, buy electronics",
};
export default Meta;
