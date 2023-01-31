import React from "react";
import "./portfolio.scss";

import SzatanCars from "../../../img/SzatanCars.png";
import Tylka from "../../../img/Tylka.png";
import Elmark from "../../../img/Elmark.png";

import Kotwica from "../../../img/Kotwica.png";
import Wyroby from "../../../img/Wyroby.png";
import GAP from "../../../img/GAP.png";
import Naprawy from "../../../img/Naprawy.png";
import Noclegi from "../../../img/Noclegizwidokami.png";

const MyPortfolio = () => {
  return (
    <>
      <section id="MyPortfolio">
        <div className="container">
          <div className="portfolio-links">
            <div className="text">
              <h3>
                Zobacz moje<br></br>
                najnowsze realizacje.
              </h3>
            </div>

            <a href="http://szatan-cars.pl/" className="page-link">
              <img src={SzatanCars} alt=" Szatan Cars" />
              <h5>Szatan Cars</h5>
              <p>Wypożyczalnia Samochodów Szatan Cars</p>
            </a>

            <a href="http://tylka-extrem-hobby.pl/" className="page-link">
              <img src={Tylka} alt=" Szatan Cars" />
              <h5>Tylka Extreme Hobby</h5>
              <p>Offroad i Pintball w podhalańskich lasach</p>
            </a>

            <a href="http://www.elmark-rtv.pl/" className="page-link">
              <img src={Elmark} alt=" Szatan Cars" />
              <h5>Elmark - Profesjonalny sklep</h5>
              <p>Profesjonalny sklep z elektroniką</p>
            </a>

            <a href="https://kotwicamrzezyno.pl/" className="page-link">
              <img src={Kotwica} alt="Kotwica Mrzeżyno" />
              <h5>Kotwica Mrzeżyno</h5>
              <p>Ośrodek wypoczynkowy nad Bałtykiem</p>
            </a>

            <a href="https://wyrobynaturalne.pl/" className="page-link">
              <img src={Wyroby} alt="Wyroby Naturalne" />
              <h5>Wyroby naturalne</h5>
              <p>Tracycyjne regionalne wyroby</p>
            </a>

            <a href="https://sklep.gappoland.com/" className="page-link">
              <img src={GAP} alt="Gap Food Additives" />
              <h5>Gap Food Additives</h5>
              <p>Sklep z artykułami serowarskimi</p>
            </a>

            <a href="https://naprawyawarie.pl/" className="page-link">
              <img src={Naprawy} alt="Naprawy Awarie" />
              <h5>Naprawy Awarie</h5>
              <p>Firma Remontowo Budowlana</p>
            </a>

            <a href="https://noclegizwidokami.pl/" className="page-link">
              <img src={Noclegi} alt="Noclegi z widokami" />
              <h5>Noclegi z Widokami</h5>
              <p>Pensjonat w Rzepiskach</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPortfolio;
