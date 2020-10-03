import React from "react";
import { useHistory } from "react-router-dom";

import LandingPageImage from "../assets/images/landingpage.jpg";
import logoDesktop from "../assets/images/logoDesktop.png";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="landingpage">
      <div className="landingpage__left">
        <img src={LandingPageImage} alt="Landing Page" />
      </div>
      <div className="landingpage__right">
        <button
          onClick={() => history.push("/home")}
          className="landingpage__btn"
        >
          Home
        </button>
        <figure
          onClick={() => history.push("/home")}
          className="landingpage__logoContainer"
        >
          <img src={logoDesktop} alt="logo" className="landingpage__logo" />
          <div className="landingpage__logoContainer-lines">
            <span className="landingpage__logoContainer-line">&nbsp;</span>
            <span className="landingpage__logoContainer-line">&nbsp;</span>
          </div>
          <span className="landingpage__logoContainer-lineright">&nbsp;</span>
        </figure>
        <button className="landingpage__btn">Fatwa</button>
      </div>
    </div>
  );
}

export default LandingPage;
