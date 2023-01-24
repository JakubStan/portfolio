import React from "react";
import "./photo.scss";
import photo from "../../img/photo.png";
import { useLocation } from "react-router-dom";

const Photo = () => {
  const { pathname } = useLocation();
  var heading;
  var description;
  if (pathname === "/portfolio") {
    heading = "Portfolio";
    description = (
      <p>
        Zobacz moje najnowsze realizacje ston www oraz sklepów internetowych.
      </p>
    );
  } else if (pathname === "/offer") {
    heading = "Oferta / Usługi";
    description = (
      <p>
        Tworzę profesjonalne strony www oraz sklepy internetowe. <br></br>
        Specjalizuję się w technologiach webowych w obszarze Front-Endu: HTML,
        CSS.
      </p>
    );
  } else if (pathname === "/about") {
    heading = "O mnie";
    description = (
      <p>
        Jestem ambitnym i ciągle rozwijającym się Front-End Developerem.
        <br></br>
        Uwielbiam to co robię. Dla mnie to nie tylko praca ale pasja i hobby.
      </p>
    );
  } else if (pathname === "/contact") {
    heading = "Kontakt";
    description = (
      <p>
        Jesteś zinteresowany współpracą? Potrzebujesz strony www, chcesz
        przenieść swój biznes do internetu?<br></br>
        Napisz/zadzwoń odpowiem tak szybko jak to możliwe. Na pewno się
        dogadamy!
      </p>
    );
  }

  return (
    <>
      <section id="photo">
        <div className="blue-bg">
          <div className="container">
            <h2>{heading}</h2>
          </div>
        </div>

        <div className="data">
          <div className="container">
            <div>{description}</div>
            <img src={photo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
