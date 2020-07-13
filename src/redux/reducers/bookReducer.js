import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const getImageUrl = (link) => {
  let mediaId = "";
  link.split("/").forEach((c, index, array) => {
    if (array[index - 1] === "d") {
      mediaId = c;
    }
  });

  return `https://drive.google.com/thumbnail?id=${mediaId}`;
};

export default function bookReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      console.log("action payload: ", action.payload);
      return [
        ...state,
        ...action.payload.map((book) => ({
          ...book,
          photoLink: getImageUrl(book.photoLink),
        })),
      ];
    default:
      return state;
  }
}
