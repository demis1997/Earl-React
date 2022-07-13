import React from "react";

import { drinksMenu } from "../repository/drinks-menu";

import DrinkMenu from "../components/menu/drinks/DrinkMenu";
import Banner from "../components/layout/banner/Banner";

export const TheEarl = () => {
  return (
    <div>
      <Banner
        title="The Earl Cocktail Bar Menu"
        subtitle="Check out our highlighted cocktails and special deals we have for you"
      />{" "}
      <DrinkMenu menu={drinksMenu} />
    </div>
  );
};

export default TheEarl;
