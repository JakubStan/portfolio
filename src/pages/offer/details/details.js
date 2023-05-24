import React from "react";
import "./details.scss";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="details">
        <div className="container">
          <h3 className="heading">{t("Offer4")}</h3>
          <p>{t("OfferDetailsDetails")}</p>
        </div>
      </section>
    </>
  );
};

export default Details;
