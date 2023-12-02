import React from "react";
import "./portfolio.scss";
import { useTranslation } from "react-i18next";

import SzatanCars from "../../../img/SzatanCars.png";
import Tylka from "../../../img/Tylka.png";
import Elmark from "../../../img/Elmark.png";

import Kotwica from "../../../img/Kotwica.png";
import Wyroby from "../../../img/Wyroby.png";
import GAP from "../../../img/GAP.png";
import Naprawy from "../../../img/Naprawy.png";
import Sting from "../../../img/Sting.png";
import Noclegi from "../../../img/Noclegizwidokami.png";
import Poloniamoda from "../../../img/Poloniamoda.png";
import OffRoad from "../../../img/OffRoad.png";
import Outlet from "../../../img/Outlet.png";
import Gemour from "../../../img/Gemour.png";

const MyPortfolio = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="MyPortfolio">
        <div className="container">
          <div className="portfolio-links">
            <div className="text">
              <h3>{t("Ralizations1")}</h3>
              <h3>{t("Ralizations2")}</h3>
            </div>

            <a href="https://gemour.pl/" target="_blank" className="page-link">
              <img src={Gemour} alt=" Gemour" />
              <h5>Gemour</h5>
              <p>{t("Gemour")}</p>
            </a>

            <a
              href="https://marketowyoutlet.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Outlet} alt=" Outlet" />
              <h5>Marketowy Outlet</h5>
              <p>{t("Outlet")}</p>
            </a>

            <a
              href="https://off-road-zakopane.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={OffRoad} alt=" OffRoad" />
              <h5>Off Road Zakopane</h5>
              <p>{t("OffRoad")}</p>
            </a>

            <a
              href="https://polonia-moda.com.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Poloniamoda} alt=" Poloniamoda" />
              <h5>Polonia Moda</h5>
              <p>{t("PoloniaModa")}</p>
            </a>

            <a
              href="http://szatan-cars.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={SzatanCars} alt=" Szatan Cars" />
              <h5>Szatan Cars</h5>
              <p>{t("Ralizations6")}</p>
            </a>

            <a
              href="http://tylka-extrem-hobby.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Tylka} alt=" Szatan Cars" />
              <h5>Tylka Extreme Hobby</h5>
              <p>{t("Ralizations7")}</p>
            </a>

            <a
              href="http://www.elmark-rtv.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Elmark} alt=" Szatan Cars" />
              <h5>{t("Ralizations4")}</h5>
              <p>{t("Ralizations5")}</p>
            </a>

            <a
              href="https://kotwicamrzezyno.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Kotwica} alt="Kotwica Mrzeżyno" />
              <h5>Kotwica Mrzeżyno</h5>
              <p>{t("Ralizations8")}</p>
            </a>

            <a
              href="https://wyrobynaturalne.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Wyroby} alt="Wyroby Naturalne" />
              <h5>Wyroby naturalne</h5>
              <p>{t("Ralizations9")}</p>
            </a>

            <a
              href="https://sklep.gappoland.com/"
              target="_blank"
              className="page-link"
            >
              <img src={GAP} alt="Gap Food Additives" />
              <h5>Gap Food Additives</h5>
              <p>{t("Ralizations10")}</p>
            </a>

            <a
              href="https://naprawyawarie.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Naprawy} alt="Naprawy Awarie" />
              <h5>Naprawy Awarie</h5>
              <p>{t("Ralizations11")}</p>
            </a>

            <a
              href="https://narzedzia24.com.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Sting} alt="Narzędzia24" />
              <h5>Narzędzia24</h5>
              <p>{t("Ralizations13")}</p>
            </a>

            <a
              href="https://noclegizwidokami.pl/"
              target="_blank"
              className="page-link"
            >
              <img src={Noclegi} alt="Noclegi z widokami" />
              <h5>Noclegi z Widokami</h5>
              <p>{t("Ralizations12")}</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPortfolio;
