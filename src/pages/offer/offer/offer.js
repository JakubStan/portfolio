import React from "react";
import "./offer.scss";

import Photo from "../../../components/photo/photo";
import Technologies from "../../../components/technologies/technologies";
import Offer from "../../../components/offer/offer";
import Contact from "../../../components/contact/contact";
import Details from "../details/details";
import PagesOffert from "../pages/pages";

const MyOffer = () => {
  return (
    <>
      <Photo />
      <Details />
      <Offer />
      <Technologies />
      <PagesOffert />
      <Contact />
    </>
  );
};

export default MyOffer;
