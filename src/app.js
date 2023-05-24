import React from "react";
import Header from "./components/header/header";
import Home from "./pages/home";
import Footer from "./components/footer/footer";

import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";

import Portfolio from "./pages/portfolio/index.js";
import Offer from "./pages/offer/offer/offer";
import AboutMe from "./pages/about/about";
import Contact from "./pages/contact/contact.js";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="portfolio" element={<Portfolio />} />

        <Route path="offer" element={<Offer />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Home />
      <Footer />
    </>
  );
};

export default App;
