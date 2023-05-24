import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import photo from "../../img/photo2.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about-content">
            <img src={photo} alt="Jakub Stankiewicz" />

            <div className="about-details">
              <h3 className="heading">{t("About_me1")}</h3>
              <h3 className="heading">{t("About_me2")}</h3>

              <h3 className="mobile-heading heading">{t("AboutMe")}</h3>

              <p>{t("AboutDescription")}</p>

              <div className="abouth-likns">
                <Link className="btn btn__light" to="/about">
                  {t("btn_more")}
                </Link>
                <a href="https://github.com/JakubStan">
                  <AiFillGithub className="git-hub" alt="Git Hub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
