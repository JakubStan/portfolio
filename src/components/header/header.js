import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

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

const header = () => {
  return (
    <>
      <header class="header">
        <div className="header-top">
          <div className="contact">
            <div className="mail">
              <HiMail />
              <Mailto
                email="stankiewiczj88nt@gmail.com"
                subject="Hello"
                body="Hello world!"
              >
                stankiewiczj88nt@gmail.com
              </Mailto>
            </div>
            <div className="phone">
              <BsFillTelephoneFill />{" "}
              <Callto phone="+48 665 387 278">+48 665 387 278</Callto>
            </div>
          </div>

          <a href="https://github.com/JakubStan" className="github-link">
            <AiFillGithub />
          </a>
        </div>

        <div className="header-bottom">
          <Link to="/" className="logo">
            <h1>
              <span>Jakub</span>Stankiewicz
            </h1>
          </Link>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          <ul class="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">O mnie</Link>
            </li>
            <li>
              <Link to="/offer">Usługi</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <Link className="question" to="">
                Zadaj pytanie
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default header;
