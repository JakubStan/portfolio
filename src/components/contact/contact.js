import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container contact">
          <h3 className="heading">
            Masz do mnie dodatkowe pytania?<br></br>
            Potrzebujesz darmowej wyceny?
          </h3>

          <div>
            <Link to="/contact" className="btn btn__white">
              Napisz do mnie
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
