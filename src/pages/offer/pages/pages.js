import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import "./pages.scss";
import SzatanCars from "../../../img/SzatanCars.png";
import Elmark from "../../../img/Elmark.png";

const PagesOffer = () => {
  return (
    <>
      <section id="PagesOffer">
        <div className="container">
          <div className="top">
            <h3>
              Zobacz moje<br></br>
              najnowsze realizacje.
            </h3>
            <div className="right">
              <Link
                to="https://github.com/JakubStan?tab=repositories"
                className="github-link"
              >
                <AiFillGithub className="git-hub" />
              </Link>

              <Link className="btn-light" href="">
                Zobacz więcej
              </Link>
            </div>
          </div>

          <div className="portfolio-links">
            <a href="http://szatan-cars.pl/" className="page-link">
              <img src={SzatanCars} alt=" Szatan Cars" />
              <h5>Szatan Cars</h5>
              <p>Wypożyczasna samochodów Szatan Cars</p>
            </a>

            <a href="http://www.elmark-rtv.pl/" className="page-link">
              <img src={Elmark} alt=" Szatan Cars" />
              <h5>Elmark - Profesjonalny skleo</h5>
              <p>Profesjonalny sklep z elektroniką</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PagesOffer;
