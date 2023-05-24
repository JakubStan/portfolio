import React from "react";
import "./about.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Resume from "../../../Resume.pdf";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section id="aboutme">
        <div className="container">
          <h3 className="heading">{t("AboutMe")}</h3>

          <p>{t("AboutDescription")}</p>

          <p>{t("AboutDescription2")}</p>

          <p>{t("AboutDescription3")}</p>

          <div className="link-cv">
            <a className="cv-link" href={Resume} download="Resume">
              {t("Download_link")}
              <MdOutlineKeyboardArrowDown />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
