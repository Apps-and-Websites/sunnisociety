import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "./navLinks";

function ResponsiveNav(props) {
  const { navigationStyle, currentWindowWidth } = props;
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <nav className={navigationStyle}>
      <ul
        onMouseLeave={() => props.setNavOpen(false)}
        className={props.navOpen ? "active" : ""}
      >
        {navLinks.map((link, index) => (
          <li
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{ background: hoverIndex === index ? "green" : "" }}
            key={link.text}
          >
            <Link to={link.path} onClick={() => props.setNavOpen(false)}>
              {link.text}
              {currentWindowWidth >= 1300 ? "" : <i className={link.icon}></i>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ResponsiveNav;

//////////=========old code ============

// import React, { useState } from "react";
// import { Link } from "@reach/router";
// import { useHistory } from "react-router-dom";

// import logo from "../../assets/images/logo.png";
// import { navLinks } from "./navLinks";

// function ResponsiveNav(props) {
//   const [hoverIndex, setHoverIndex] = useState(-1);
//   const [navOpen, setNavOpen] = useState(false);
//   const history = useHistory();

//   const hamburgerIconStyle = navOpen ? "hamburgerIconActive" : "hamburgerIcon";
//   const hamburgerButton = navOpen
//     ? "hamburgerButton hamburgerButton__active"
//     : "hamburgerButton";

//   return (
//     <nav className="navBar">
//       <section className="navBar-top">
//         <button
//           onClick={() => setNavOpen(!navOpen)}
//           className={hamburgerButton}
//         >
//           <span className={hamburgerIconStyle}>&nbsp;</span>
//         </button>
//         <figure onClick={() => history.push("/")}>
//           <img src={logo} alt="logo" className="navBar__logo" />
//         </figure>
//         <span></span>
//       </section>
//       <nav className="navigation">
//         <ul className={navOpen ? "active" : ""}>
//           {navLinks.map((link, index) => (
//             <li
//               onMouseEnter={() => setHoverIndex(index)}
//               onMouseLeave={() => setHoverIndex(-1)}
//               style={{ background: hoverIndex === index ? "green" : "" }}
//             >
//               <Link to={link.path}>
//                 {link.text}
//                 <i className={link.icon}></i>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </nav>
//   );
// }

// export default ResponsiveNav;
