import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

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

          <a href="https://github.com/JakubStan" className="github-NavLink">
            <AiFillGithub />
          </a>
        </div>

        <div className="header-bottom">
          <NavLink to="/" className="logo">
            <h1>
              <span>Jakub</span>Stankiewicz
            </h1>
          </NavLink>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          <ul class="menu">
            <li>
              <NavLink to="/about">O mnie</NavLink>
            </li>
            <li>
              <NavLink to="/offer">Usługi</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
            <li>
              <NavLink className="question" to="">
                Zadaj pytanie
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default header;
