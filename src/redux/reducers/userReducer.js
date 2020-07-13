import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.LOGIN_USER_START:
      return { ...state, loginUserStart: true };

    case types.LOGIN_USER_SUCCESS:
      return { ...state, loginUserStart: false, ...action.payload };

    case types.LOGIN_USER_ERROR:
      return { ...state, loginUserStart: false, loginUserError: true };

    case types.REGISTER_USER_START:
      return { ...state, registerUserStart: true };
    case types.REGISTER_USER_SUCCESS:
      return { ...state, registerUserStart: false };
    case types.REGISTER_USER_ERROR:
      return { ...state, registerUserStart: false, registerUserError: true };
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, token: "" };
    // return Object.assign({}, state, { token: "" });
    // return { ...state }.filter((value) => value !== "token");
    default:
      return state;
  }
}
