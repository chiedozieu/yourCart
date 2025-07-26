import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BottomBanner from "../components/BottomBanner";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSellers />
      <BottomBanner />
      
    </div>
  );
};

export default Home;
