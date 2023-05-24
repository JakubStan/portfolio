import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <footer>
        <div className="container footer-container">
          <div className="col">
            <h4>
              <span>Jakub</span>Stankiewicz
            </h4>
            <p>{t("FooterDetails")}</p>
          </div>

          <div className="col col_inner">
            <div className="inner">
              <h4>{t("Services")}</h4>
              <Link to="offer">{t("website")}</Link>
              <Link to="offer">{t("OnlineStores")}</Link>
            </div>
          </div>

          <div className="col">
            <h4>{t("Contact")}</h4>
            <div className="contact-link">
              <p>Tel:&nbsp;</p>
              <Callto phone="+48 665 387 278">+48 665 387 278</Callto>
            </div>
            <div className="contact-link">
              <p>Email: &nbsp;</p>
              <Mailto email="stankiewiczj88nt@gmail.com">
                stankiewiczj88nt@gmail.com
              </Mailto>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>
            Copyright © 2023 Jakub Stankiewicz, all Right Reserved. Development
            by JMS
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
