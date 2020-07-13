import * as types from "./actionTypes";
import axioswithAuth from "../../utils/axiosWithAuth";

export function loadBooks() {
  return function (dispatch) {
    return axioswithAuth()
      .get("https://sunnisociety.herokuapp.com/api/books")
      .then((books) => {
        dispatch({ type: types.LOAD_BOOKS_SUCCESS, payload: books.data });
      })
      .catch((err) => {
        throw err;
      });
  };
}
