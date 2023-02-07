import React from "react";
import "./skils.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import { useTranslation } from "react-i18next";

const Skils = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="skils">
        <div className="container">
          <div className="skils">
            <div className="inner">
              <div className="col">
                <div className="item">
                  <h5>HTML</h5>
                  <ProgressBar className="progressbar" completed={95} />
                </div>
                <div className="item">
                  <h5>CSS</h5>
                  <ProgressBar className="progressbar" completed={90} />
                </div>
                <div className="item">
                  <h5>SCSS</h5>
                  <ProgressBar className="progressbar" completed={70} />
                </div>
                <div className="item">
                  <h5>Bootstrap</h5>
                  <ProgressBar className="progressbar" completed={90} />
                </div>
                <div className="item">
                  <h5>WordPress</h5>
                  <ProgressBar className="progressbar" completed={70} />
                </div>
                <div className="item">
                  <h5>GIT</h5>
                  <ProgressBar className="progressbar" completed={50} />
                </div>
                <div className="item">
                  <h5>NPM</h5>
                  <ProgressBar className="progressbar" completed={60} />
                </div>
                <div className="item">
                  <h5>SEO</h5>
                  <ProgressBar className="progressbar" completed={60} />
                </div>
                <div className="item">
                  <h5>Woocommerce, Shoper</h5>
                  <ProgressBar className="progressbar" completed={60} />
                </div>
              </div>
              <div className="col">
                <div className="item">
                  <h5>React</h5>
                  <ProgressBar className="progressbar" completed={50} />
                </div>
                <div className="item">
                  <h5>JavaScript</h5>
                  <ProgressBar className="progressbar" completed={50} />
                </div>
                <div className="item">
                  <h5>jQuery</h5>
                  <ProgressBar className="progressbar" completed={50} />
                </div>
                <div className="item">
                  <h5>Webpack</h5>
                  <ProgressBar className="progressbar" completed={60} />
                </div>
                <div className="item">
                  <h5>RWD</h5>
                  <ProgressBar className="progressbar" completed={80} />
                </div>
                <div className="item">
                  <h5>SQL</h5>
                  <ProgressBar className="progressbar" completed={60} />
                </div>
                <div className="item">
                  <h5>PHP</h5>
                  <ProgressBar className="progressbar" completed={40} />
                </div>
                <div className="item">
                  <h5>PhpMyAdmin, MySQL Workbench</h5>
                  <ProgressBar className="progressbar" completed={60} />
                </div>
                <div className="item">
                  <h5>Adobe Photoshop </h5>
                  <ProgressBar className="progressbar" completed={60} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skils;
