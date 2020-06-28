import * as types from "./actionTypes";
import axios from "axios";

export function loadBooks() {
  return function (dispatch) {
    return axios
      .get("https://sunnisociety.herokuapp.com/api/books")
      .then((books) => {
        dispatch({ type: types.LOAD_BOOKS_SUCCESS, books });
      })
      .catch((err) => {
        throw err;
      });
  };
}
