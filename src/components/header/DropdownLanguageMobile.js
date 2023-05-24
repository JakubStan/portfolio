import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./DropdownLanguage.js.scss";

import pl from "../../img/PL.png";
import en from "../../img/UK.png";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropdownLanguageMobile = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("pl");

  const handleLangChange = (lang) => {
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  var src = pl;
  if (language == "pl") {
    src = pl;
    console.log(pl);
  } else if (language == "en") {
    src = en;
    console.log(en);
  }

  return (
    <>
      <DropdownButton
        id="dropdown-basic-button"
        value={language}
        className="medium-display"
        title={<img className="thumbnail-image" src={src} />}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "100%",
        }}
      >
        <Dropdown.Item value="pl" onClick={() => handleLangChange("pl")}>
          <img className="flag" src={pl} />
        </Dropdown.Item>
        <Dropdown.Item value="en" onClick={() => handleLangChange("en")}>
          <img className="flag" src={en} />
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default DropdownLanguageMobile;
