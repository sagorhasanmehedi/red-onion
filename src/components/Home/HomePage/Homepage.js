import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Baner from "../Baner/Baner";
import Meals from "../Meals/Meals";
import Whyyouchoos from "../Whyyouchosus/Whyyouchoos";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Baner />
      <Meals />
      <Whyyouchoos />
      <Footer />
    </div>
  );
};

export default Homepage;
