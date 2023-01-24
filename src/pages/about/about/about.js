import React from "react";
import "./about.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const About = () => {
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
      <section id="aboutme">
        <div className="container">
          <h3 className="heading">Kilka słow o mnie</h3>

          <p>
            Nazywam się Jakub, jestem góralem i pochodzę spod samiuśkich Tater!
            Jestem młodym i energicznym programistą. Uwielbiam programowanie,
            dla mnie to nie tylko praca - to coś dużo więcj. To pasja,
            zainteresowanie, hobby coś co na prawdę uwielbiam. Celem życia nie
            jest jego przeżycie, daltego też rozwój osobisty ,zdobywanie nowej
            wiedzy i umiejętność są istotną częścią mojego życia. Tworzę
            profesjonalne strony www oraz sklepy internetowe. Specjalizuję się w
            technologiach webowych w obszarze front-endu: HTML, CSS.
          </p>

          <p>
            Swoją przygodę z branżą IT rozpocząłem w 2012, posiadam wyższe
            wykształcenie. Ukończyłem studia podylomowe na Akademii
            Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Interesuję
            się historią, politologią, polityką oraz sztukami walki - posiadam
            stopnie mistrzowskie. Moją największą życiową pasją jest Taekwondo
            oraz Krav Maga - nie ma miękkiej gry czy to na ringu czy w kodzie.
          </p>

          <p>
            Jeśli potrzebujesz nowoczesnej, czytelnej strony internetowej oraz
            realizacji w terminie to dobrze trafiłeś. Napisz maila, zadzwoń -
            omówimy szczegóły.
          </p>

          <div className="link-cv">
            <button className="cv-link" onClick={onButtonClick}>
              Pobierz CV
              <MdOutlineKeyboardArrowDown />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
