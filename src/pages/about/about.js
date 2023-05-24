import React from "react";
import Photo from "../../components/photo/photo";
import AboutMe from "./about/about";
import Skils from "./skils/skils";
import Contact from "../../components/contact/contact";

const About = () => {
  return (
    <>
      <Photo />
      <AboutMe />
      <Skils />
      <Contact />
    </>
  );
};

export default About;
