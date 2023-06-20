import React from "react";
import "./offer.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Offer = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  if (pathname === "/portfolio") {
    return null;
  } else if (pathname === "/myoffer") {
    return null;
  }

  return (
    <>
      <section id="offer">
        <div className="container">
          <div className="offer-content">
            <div className="left-col">
              <h3>{t("Offer1")}</h3>
              <h3>{t("Offer3")}</h3>
              <h3>{t("Offer2")}</h3>

              <h3 className="heading-mobile">{t("Offer4")}</h3>

              <Link to="/portfolio" className="btn btn__white">
                {t("btn_more")}
              </Link>
            </div>

            <div className="right-col">
              <div className="box">
                <div className="box-icon">
                  <BsLaptop alt="Strony www" />
                </div>
                <h4>{t("website")}</h4>
                <p>{t("website1")}</p>
              </div>
              <div className="box">
                <div className="box-icon">
                  <FaShoppingCart alt="E sklepy" />
                </div>
                <h4>{t("OnlineStores")}</h4>
                <p>{t("OnlineStores1")}</p>
              </div>
            </div>

            <Link
              to="/offer"
              className="btn btn__white btn_mobile btn__width-50"
            >
              {t("btn_more")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
