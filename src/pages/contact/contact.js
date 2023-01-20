import React from "react";
import Photo from "../../components/photo/photo";
import "./contact.scss";
import hand from "./hand.png";

const Contact = () => {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <>
      <Photo />

      <section id="contact-data">
        <div className="container">
          <h3 className="heading">Chcesz nawiązać współpracę?</h3>
          <p>
            Miło mi ,że chcesz mnie poznać! Proszę Cie zadzwoń/napisz. Odpowiem
            tak szybko jak to tylko możliwe.
          </p>

          <div className="contact-data">
            <h4>Mailowo:</h4>
            <Mailto email="stankiewiczj88nt@gmail.com">
              stankiewiczj88nt@gmail.com
            </Mailto>
          </div>

          <div className="contact-data">
            <h4>Telefonicznie</h4>
            <Callto phone="+48 665 387 278">+48 665 387 278</Callto>
          </div>
        </div>

        <img src={hand} alt="hand" />
      </section>
    </>
  );
};

export default Contact;
