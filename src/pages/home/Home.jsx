import React, { useEffect } from "react";
import Details from "../details/Details.jsx";
import Footer from "../footer/Footer.jsx";
import MainSlider from "../mainSlider/MainSlider.jsx";
import Nav from "../nav/Nav.jsx";
import PopularSilder from "../popularSilder/PopularSilder.jsx";
import "./home.scss";
import { useLocation } from "react-router-dom";

function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="home">
      <MainSlider />
      <PopularSilder cat="Popular Movies" api="popularMovie" />
      <PopularSilder cat="TV Movies" api="popularTv" />
      <PopularSilder cat="Coming Movies" api="commingMovie" />
      <PopularSilder cat="Coming Tv" api="commingtv" />
    </div>
  );
}

export default Home;
