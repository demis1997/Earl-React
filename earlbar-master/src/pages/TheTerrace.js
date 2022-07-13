import React from "react";
import Banner from "../components/layout/banner/Banner";
import ShishaMenu from "../components/menu/shishas/ShishaMenu";

export const TheTerrace = () => {
  return (
    <div>
      {" "}
      <Banner
        title="The Terrace Shisha Bar Menu"
        subtitle="Check out our premium shisha flavours specially chosen for a relaxing time"
      />
      <ShishaMenu />
    </div>
  );
};

export default TheTerrace;
