import React from "react";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import FourCards from "./components/FourCards";
import FeaturedProperties from "./components/FeaturedProperties";

const Home = () => {
  return (
    <>
      <Banner />
      <SearchBar />
      <FourCards />
      <FeaturedProperties />
    </>
  );
};

export default Home;
