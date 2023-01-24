import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import photo from "../../img/photo.png";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about-content">
            <img src={photo} />

            <div className="about-details">
              <h3 className="heading">
                Kilka słow <br></br>o mnie
              </h3>

              <p>
                Nazywam się Jakub, jestem góralem i pochodzę spod samiuśkich
                Tater! Jestem młodym i energicznym programistą. Uwielbiam
                programowanie, dla mnie to nie tylko praca - to coś dużo więcj.
                To pasja, zainteresowanie, hobby coś co na prawdę uwielbiam.
                Celem życia nie jest jego przeżycie, daltego też rozwój osobisty
                ,zdobywanie nowej wiedzy i umiejętnosci są istotną częścia
                mojego życia. Tworze profesjonalne strony www oraz sklepy
                internetowe. Specjalizuję się w technologiach webowych w
                obszarze front-endu: HTML i CSS.
              </p>

              <div className="abouth-likns">
                <Link className="btn btn__light" to="/about">
                  Zobacz więcej
                </Link>
                <a href="https://github.com/JakubStan">
                  <AiFillGithub className="git-hub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
