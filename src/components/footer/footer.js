import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

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
  return (
    <>
      <footer>
        <div className="container footer-container">
          <div className="col">
            <h4>
              <span>Jakub</span>Stankiewicz
            </h4>
            <p>
              Tworzę profesjonalne strony www oraz sklepy internetowe.
              Specjalizuję się w technologiach webowych w obszarze Front-Endu:
              HTML, CSS.
            </p>
          </div>

          <div className="col">
            <h4>Usługi</h4>
            <Link to="offer">Strony www</Link>
            <Link to="offer">E-Sklepy</Link>
          </div>

          <div className="col">
            <h4>Kontakt</h4>
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
        <div className="copyright">
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
