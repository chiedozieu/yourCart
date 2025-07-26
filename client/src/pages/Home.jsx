import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BottomBanner from "../components/BottomBanner";
import BestSellers from "../components/BestSellers";
import NewsLetter from "../components/NewsLetter";


const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSellers />
      <BottomBanner />
      <NewsLetter />
      
    </div>
  );
};

export default Home;
