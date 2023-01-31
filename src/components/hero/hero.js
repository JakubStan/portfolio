import React from "react";
import "./hero.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import photo from "../../img/photo.png";
import icon1 from "../icons/icon1.png";
import icon2 from "../icons/icon2.png";
import icon3 from "../icons/icon3.png";

const Hero = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero-top">
            <div className="hero-details">
              <h3>
                Stworzę dla Twojej firmy porfesionalną <br></br>
                Stronę WWW/platformę E-Commerce
              </h3>

              <p>
                Jestem ambitnym i ciągle rozwijającym się Front-End Developerem.
              </p>
              <p>
                Uwielbiam to co robię. Dla mnie to nie tylko praca ale pasja i
                hobby.
              </p>

              <div className="contact">
                <Link to="contact" className="btn btn__light">
                  Skontaktuj się
                </Link>

                <a href="https://github.com/JakubStan">
                  <AiFillGithub className="git-hub" />
                </a>

                <button className="cv-link" onClick={onButtonClick}>
                  Pobierz CV
                  <MdOutlineKeyboardArrowDown />
                </button>
              </div>
            </div>
            <div className="photo">
              <img src={photo} alt="Jakub Stankiewicz" />
            </div>
          </div>

          <div className="hero-bottoma">
            <div className="box">
              <img src={icon1} alt="Promuj swoją firmę w sieci" />
              <p>Promuj swoją firmę w sieci</p>
            </div>

            <div className="box">
              <img src={icon2} alt="Zdobywaj nowych klientów" />
              <p>Zdobywaj nowych klientów</p>
            </div>

            <div className="box">
              <img src={icon3} alt="Zwiekszaj dochody firmy" />
              <p>Zwiekszaj dochody firmy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
