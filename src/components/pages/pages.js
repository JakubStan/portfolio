import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SzatanCars from "../../img/SzatanCars.png";
import Poloniamoda from "../../img/Poloniamoda.png";
import Elmark from "../../img/Elmark.png";

import "./pages.scss";

const Pages = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="pages">
        <div className="container">
          <div className="portfolio-links">
            <h3 className="mobile-heading">{t("Ralizations3")}</h3>

            <a
              className="page-link"
              target="_blank"
              href="https://www.elmark-rtv.pl/"
            >
              <img src={Elmark} alt="Elmark" />
              <h5>{t("Ralizations4")}</h5>
              <p>{t("Ralizations5")}</p>
            </a>

            <div className="portfolio-link">
              <div className="content">
                <h3>{t("Ralizations1")}</h3>
                <h3>{t("Ralizations2")}</h3>
                <Link to="portfolio" className="btn btn__dark">
                  {t("btn_more")}
                </Link>
              </div>
            </div>

            <a
              className="page-link"
              target="_blank"
              href="https://szatan-cars.pl/"
            >
              <img src={SzatanCars} alt=" Szatan Cars" />
              <h5>Szatan Cars</h5>
              <p>{t("Ralizations6")}</p>
            </a>

            <a
              className="page-link"
              target="_blank"
              href="https://polonia-moda.com.pl/"
            >
              <img src={Poloniamoda} alt="Poloniamoda" />
              <h5>Polonia Moda</h5>
              <p>{t("PoloniaModa")}</p>
            </a>
          </div>

          <Link
            to="portfolio"
            className="btn btn__dark btn_mobile btn__width-50"
          >
            {t("btn_more")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Pages;
