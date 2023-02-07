import React from "react";
import "./photo.scss";
import photo from "../../img/photo.png";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Photo = () => {
  const { t, i18n } = useTranslation();

  const { pathname } = useLocation();

  var heading;
  var description;
  if (pathname === "/portfolio") {
    heading = "Portfolio";
    description = <p>{t("PortfolioDetails")}</p>;
  } else if (pathname === "/offer") {
    heading = <>{t("OfferServices")}</>;
    description = (
      <>
        <p>{t("OfferDetails")}</p>
        <p>{t("OfferDetails1")}</p>
      </>
    );
  } else if (pathname === "/about") {
    heading = <>{t("About")}</>;
    description = (
      <>
        <p>{t("About_me3")}</p>
        <p>{t("About_me4")}</p>
      </>
    );
  } else if (pathname === "/contact") {
    heading = <>{t("Contact")}</>;
    description = (
      <>
        <p>{t("ContactDetails")}</p>
        <p>{t("ContactDetails1")}</p>
      </>
    );
  }

  return (
    <>
      <section id="photo">
        <div className="blue-bg">
          <div className="container">
            <h2>{heading}</h2>
          </div>
        </div>

        <div className="data">
          <div className="container">
            <img src={photo} alt="MyPhoto" />
            <div className="description">{description}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
