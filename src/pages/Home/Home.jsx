import React from "react";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import FourCards from "./components/FourCards";
import FeaturedProperties from "./components/FeaturedProperties";
import MostPropertyBasedOnCity from "./components/MostPropertyBasedOnCity";

const Home = () => {
  return (
    <>
      <Banner />
      <SearchBar />
      <FourCards />
      <FeaturedProperties />
      <MostPropertyBasedOnCity />
    </>
  );
};

export default Home;
