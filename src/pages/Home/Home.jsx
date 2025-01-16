import React from "react";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import FourCards from "../../components/FourCards";
import FeaturedProperties from "./components/FeaturedProperties";
import MostPropertyBasedOnCity from "./components/MostPropertyBasedOnCity";
import WorkFlow from "../../components/WorkFlow";
import About from "../../components/About";
import UserReviews from "../../components/UserReviews";
import Agents from "./components/Agents";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <Banner />
      <SearchBar />
      <FourCards home={true} />
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
