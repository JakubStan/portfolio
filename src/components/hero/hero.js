import React from "react";
import "./hero.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import photo from "../../img/photo.png";
import icon1 from "../icons/icon1.png";
import icon2 from "../icons/icon2.png";
import icon3 from "../icons/icon3.png";

import Resume from "../../Resume.pdf";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero-top">
            <div className="hero-details">
              <h3 className="margin-top">{t("MyOoffer_1")}</h3>
              <h3 className="margin">{t("MyOoffer_2")}</h3>

              <p>{t("About_1")}</p>
              <p>{t("About_2")}</p>

              <div className="contact">
                <Link to="contact" className="btn btn__light">
                  {t("Contact_link")}
                </Link>

                <a href="https://github.com/JakubStan">
                  <AiFillGithub className="git-hub" />
                </a>

                <a className="cv-link" href={Resume} download="Resume">
                  {t("Download_link")}
                  <MdOutlineKeyboardArrowDown />
                </a>
              </div>
            </div>
            <div className="photo">
              <img src={photo} alt="Jakub Stankiewicz" />
            </div>
          </div>

          <div className="hero-bottom">
            <div className="box">
              <img src={icon1} alt="Promuj swoją firmę w sieci" />
              <p>{t("box_1")}</p>
            </div>

            <div className="box">
              <img src={icon2} alt="Zdobywaj nowych klientów" />
              <p>{t("box_2")}</p>
            </div>

            <div className="box">
              <img src={icon3} alt="Zwiekszaj dochody firmy" />
              <p>{t("box_3")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
