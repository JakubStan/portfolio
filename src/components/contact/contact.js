import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="contact">
        <div className="container contact">
          <div>
            <h3>{t("ContactMe1")}</h3>
            <h3>{t("ContactMe2")}</h3>
          </div>

          <Link to="/contact" className="btn btn__white btn__width-50">
            {t("ContactMe")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;
