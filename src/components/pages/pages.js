import React from "react";
import { Link } from "react-router-dom";
import SzatanCars from "../../img/SzatanCars.png";
import Tylka from "../../img/Tylka.png";
import Elmark from "../../img/Elmark.png";

const Pages = () => {
  return (
    <>
      <section id="pages">
        <div className="container">
          <div className="portfolio-links">
            <a className="page-link" href="https://www.elmark-rtv.pl/">
              <img src={Elmark} alt="Elmark" />
              <h5>Elmark - Profsjonalny Sklep</h5>
              <p>Profesjonalny sklep z elektroniką</p>
            </a>

            <div className="portfolio-link">
              <div className="content">
                <h3>
                  Zobacz moje <br></br>
                  najnowsze realizacje.
                </h3>
                <Link to="portfolio" className="btn btn__dark">
                  Zobacz więcej
                </Link>
              </div>
            </div>

            <a className="page-link" href="https://szatan-cars.pl/">
              <img src={SzatanCars} alt=" Szatan Cars" />
              <h5>Szatan Cars</h5>
              <p>Wypożyczalnia samochodów Szatan Cars</p>
            </a>

            <a className="page-link" href="http://tylka-extrem-hobby.pl/">
              <img src={Tylka} alt="Tylka Extreme Hobby" />
              <h5>Tylka Extreme Hobby</h5>
              <p>Offroad i Paintball w podhalańskich lasach</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pages;
