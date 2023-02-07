import React from "react";
import "./technologies.scss";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Bootstrap from "../icons/Bootstrap.png";
import HTML from "../icons/Html.png";
import Css from "../icons/Css.png";
import JS from "../icons/JS.png";
import Scss from "../icons/Scss.png";
import ReactIcon from "../icons/React.png";
import Wordpress from "../icons/Wordpress.png";
import Webpack from "../icons/Webpack.png";

const Technologies = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  if (pathname === "/portfolio") {
    return null;
  } else if (pathname === "/myoffer") {
    return null;
  }
  return (
    <>
      <section id="technologies">
        <div className="container">
          <div className="technologies">
            <h3 className="heading">{t("Technologies")}</h3>
            <div className="boxes">
              <div className="box">
                <img src={HTML} alt="HTML" />
              </div>

              <div className="box">
                <img src={Css} alt="Css" />
              </div>

              <div className="box">
                <img src={Scss} alt="Scss" />
              </div>

              <div className="box">
                <img src={JS} alt="JavaScript" />
              </div>

              <div className="box">
                <img src={ReactIcon} alt="React" />
              </div>

              <div className="box">
                <img src={Wordpress} alt="Wordpress" />
              </div>

              <div className="box">
                <img src={Bootstrap} alt="Bootstrap" />
              </div>

              <div className="box">
                <img src={Webpack} alt="Webpack" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
