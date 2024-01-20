import React from "react";
import Discover from "../Discover/Discover";
import Hero from "./Hero/Hero";
import Home from "./mainContent/Homes/Home";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Home />
      <Discover />
    </>
  );
};

export default HomePage;
