import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import WindowSizeListener from "react-window-size-listener";
import { withWindowSizeListener } from "react-window-size-listener";

import logo from "../assets/images/logo.png";
import logoDesktop from "../assets/images/logoDesktop.png";
import NavBar from "./navigationMenu/responsiveNav";

function Header(props) {
  let currentWindowWidth = props.windowSize.windowWidth;
  const [navOpen, setNavOpen] = useState(false);
  const history = useHistory();

  const hamburgerIconStyle = navOpen ? "hamburgerIconActive" : "hamburgerIcon";
  const hamburgerButton = navOpen
    ? "hamburgerButton hamburgerButton__active"
    : "hamburgerButton";
  const navigationStyle =
    currentWindowWidth >= 1300 ? "navigationDesktop" : "navigation";

  if (currentWindowWidth >= 1300) {
    return (
      <>
        <header className="headerDesktop">
          <figure onClick={() => history.push("/")}>
            <img src={logoDesktop} alt="logo" className="headerDesktop__logo" />
          </figure>
          <NavBar
            navOpen={navOpen}
            navigationStyle={navigationStyle}
            currentWindowWidth={currentWindowWidth}
          />
          <span></span>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className="header">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className={hamburgerButton}
          >
            <span className={hamburgerIconStyle}>&nbsp;</span>
          </button>
          <figure onClick={() => history.push("/")}>
            <img src={logo} alt="logo" className="header__logo" />
          </figure>
          <span></span>
        </header>

        <NavBar
          navOpen={navOpen}
          navigationStyle={navigationStyle}
          currentWindowWidth={currentWindowWidth}
        />
      </>
    );
  }
}

export default withWindowSizeListener(Header);
