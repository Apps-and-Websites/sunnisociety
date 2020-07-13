import React from "react";

export default function bookCard(props) {
  const {
    name,
    bookLink,
    photoLink,
    category,
    language,
    author,
    translator,
  } = props.book;

  return (
    <article className="bookCard">
      <h2 className="bookCard__heading">{name}</h2>
      <div className="bookCard__image">
        <a href={bookLink} target="_blank" rel="noopener noreferrer">
          <img src={photoLink} alt={name} />
        </a>
      </div>
      <a
        className="bookCard__download"
        href={bookLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    </article>
  );
}
