import * as types from "./actionTypes";
import axioswithAuth from "../../utils/axiosWithAuth";

export const loginUser = (userInfo) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_START });

  return axioswithAuth()
    .post("https://sunnisociety.herokuapp.com/api/login", userInfo)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data });
      return res;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_USER_ERROR, payload: err });
      return err;
    });
};

export const registerUser = (userInfo) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_START });

  return axioswithAuth()
    .post("https://sunnisociety.herokuapp.com/api/register", userInfo)
    .then((res) => {
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data });
      return res;
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_USER_ERROR, payload: err });
      return err;
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: types.LOGOUT_USER_SUCCESS });
};
