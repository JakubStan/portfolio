import React from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Offer from "../components/offer/offer";
import Pages from "../components/pages/pages";
import Contact from "../components/contact/contact";
import Technologies from "../components/technologies/technologies";

const Home = () => {
  const { pathname } = useLocation();

  if (pathname === "/portfolio") {
    return null;
  } else if (pathname === "/offer") {
    return null;
  } else if (pathname === "/about") {
    return null;
  } else if (pathname === "/contact") {
    return null;
  }

  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Offer />
      <Pages />
      <Contact />
    </>
  );
};

export default Home;
