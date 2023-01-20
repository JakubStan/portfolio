import React from "react";
import "./opinions.scss";
import { useLocation } from "react-router-dom";

import Daniel from "../../img/Daniel.png";
import Karol from "../../img/Karol.png";
import Artur from "../../img/Artur.png";

const Opinions = () => {
  const { pathname } = useLocation();

  if (pathname === "/portfolio") {
    return null;
  } else if (pathname === "/myoffer") {
    return null;
  }

  return (
    <>
      <section id="opinions">
        <div className="container opinions">
          <h3>Zobacz opinię moich klientów.</h3>

          <div className="boxes">
            <div className="box">
              <img src={Daniel} alt="" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <h3>Daniel</h3>
              </div>
            </div>
            <div className="box">
              <img src={Karol} alt="" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <h3>Karol</h3>
              </div>
            </div>
            <div className="box">
              <img src={Artur} alt="" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <h3>Artur</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opinions;
