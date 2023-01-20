import React from "react";
import "./offer.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";

const Offer = () => {
  const { pathname } = useLocation();

  if (pathname === "/portfolio") {
    return null;
  } else if (pathname === "/myoffer") {
    return null;
  }

  return (
    <>
      <section id="offer">
        <div className="container">
          <div className="offer-content">
            <div className="left-col">
              <h3 className="heading">
                Co mogę <br></br>
                dla Ciebie<br></br>
                zrobić?
              </h3>
              <Link to="offer" className="btn-light">
                Zobacz więej
              </Link>
            </div>

            <div className="right-col">
              <div className="box">
                <div className="box-icon">
                  <BsLaptop />
                </div>
                <h4>Strony www</h4>
                <p>Profesjonalne responsywne strony www</p>
              </div>
              <div className="box">
                <div className="box-icon">
                  <FaShoppingCart />
                </div>
                <h4>E-sklepy</h4>
                <p>Przenieś swój biznes do internetu</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
