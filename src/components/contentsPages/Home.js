import React from "react";
// import { useHistory, Link } from "react-router-dom";

export default function Home() {
  const Book = {
    name: "Majlis e Shari Ke Faisle",
    bookLink:
      "https://drive.google.com/file/d/1NSVE0j-FWoHpFZvJ9pe9YmhGSU-ZQveY/view",
    photoLink:
      "https://drive.google.com/thumbnail?id=14ksWfLwhDuXNpt7pt5yfZCpLCmd4-VvI",
    author: "Mufti Mohammad Nizamuddin",
    translator: "",
    category: "Fiqh",
    language: "Urdu",
  };

  return (
    <div className="home">
      <h1 className="heading-primary">{Book.name}</h1>
      <span className="home__image">
        <a href={Book.bookLink} target="_blank" rel="noopener noreferrer">
          <img src={Book.photoLink} alt={Book.name} />
        </a>
      </span>
      <a
        className="btn-download"
        href={Book.bookLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>

      <nav className="home__nav">
        <ul>
          <li>
            <a
              href="http://www.ahlesunnat.net/past-event-s.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bayan
            </a>
          </li>
          <li>
            <a
              href="https://aljamiatulashrafia.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ashrafia
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
