import React from "react";
import "./technologies.scss";
import { useLocation } from "react-router-dom";

import Bootstrap from "../icons/Bootstrap.png";
import HTML from "../icons/HTML.png";
import Css from "../icons/Css.png";
import Js from "../icons/Js.png";
import Scss from "../icons/Scss.png";
import ReactIcon from "../icons/React.png";
import Wordpress from "../icons/Wordpress.png";

const Technologies = () => {
  const { pathname } = useLocation();

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
            <h3 className="heading">Jakich używam technologii</h3>
            <div className="boxes">
              <div className="box">
                <img src={HTML} alt />
              </div>

              <div className="box">
                <img src={Css} alt />
              </div>

              <div className="box">
                <img src={Scss} alt />
              </div>

              <div className="box">
                <img src={Js} alt />
              </div>

              <div className="box">
                <img src={ReactIcon} alt />
              </div>

              <div className="box">
                <img src={Wordpress} alt />
              </div>

              <div className="box">
                <img src={Bootstrap} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
