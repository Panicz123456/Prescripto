import React from "react";
import Header from "../components/Home/Header";
import SpecialtyMenu from "../components/Home/SpecialtyMenu";
import TopDoctors from "../components/Home/TopDoctors";
import Banner from "../components/Home/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialtyMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
