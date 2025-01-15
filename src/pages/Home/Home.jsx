import React from "react";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import FourCards from "./components/FourCards";

const Home = () => {
  return (
    <>
      <Banner />
      <SearchBar />
      <FourCards />
    </>
  );
};

export default Home;
