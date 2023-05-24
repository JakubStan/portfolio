import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import "./pages.scss";
import SzatanCars from "../../../img/SzatanCars.png";
import Elmark from "../../../img/Elmark.png";
import { useTranslation } from "react-i18next";

const PagesOffer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="PagesOffer">
        <div className="container">
          <div className="top">
            <div>
              <h3>{t("Ralizations1")}</h3>
              <h3>{t("Ralizations2")}</h3>
            </div>

            <div className="right">
              <a
                href="https://github.com/JakubStan?tab=repositories"
                className="github-link"
              >
                <AiFillGithub className="git-hub" />
              </a>

              <Link className="btn btn__dark" to="/portfolio">
                {t("btn_more")}
              </Link>
            </div>
          </div>

          <div className="portfolio-links">
            <a href="http://www.szatan-cars.pl/" className="page-link">
              <img src={SzatanCars} alt=" Szatan Cars" />
              <h5>Szatan Cars</h5>
              <p>{t("Ralizations6")}</p>
            </a>

            <a href="http://www.elmark-rtv.pl/" className="page-link">
              <img src={Elmark} alt=" Szatan Cars" />
              <h5>{t("Ralizations4")}</h5>
              <p>{t("Ralizations5")}</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PagesOffer;
