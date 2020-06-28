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

  const getImageUrl = (link) => {
    let mediaId = "";
    link.split("/").forEach((c, index, array) => {
      if (array[index - 1] === "d") {
        mediaId = c;
      }
    });

    return `https://drive.google.com/thumbnail?id=${mediaId}`;
  };
  //   const mediaId = photoLink.split("/").forEach((c, index, array) => {
  //     if (array[index - 1] === "d") {
  //       return c;
  //     }
  //   });

  //   const myId = photoLink.split("/").filter((el, index, array) => {
  //     if (array[index - 1] === "d") {
  //       return array[index];
  //     }
  //   });

  //   console.log("name is: ", name);
  //   console.log("link is: ", photoLink);
  //   console.log("media id: ", mediaId);
  //   console.log("my id: ", myId[0]);
  //   const imageLink = ``;

  console.log("url is: ", getImageUrl(photoLink));
  return (
    <article className="bookCard">
      <h2 className="bookCard__heading">{name}</h2>
      <div className="bookCard__image">
        <img src={getImageUrl(photoLink)} alt={name} />
      </div>
      <a
        className="bookCard__download"
        href={bookLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download2
      </a>
    </article>
  );
}
