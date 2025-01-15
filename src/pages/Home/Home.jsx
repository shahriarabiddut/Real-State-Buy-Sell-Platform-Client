import React from "react";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import FourCards from "./components/FourCards";
import FeaturedProperties from "./components/FeaturedProperties";
import MostPropertyBasedOnCity from "./components/MostPropertyBasedOnCity";
import WorkFlow from "./components/WorkFlow";
import About from "./components/About";
import UserReviews from "./components/UserReviews";
import Agents from "./components/Agents";

const Home = () => {
  return (
    <>
      <Banner />
      <SearchBar />
      <FourCards />
      <FeaturedProperties />
      <MostPropertyBasedOnCity />
      <WorkFlow />
      <About />
      <UserReviews />
      <Agents />
    </>
  );
};

export default Home;
