export default {
  books: [],
  authors: [],
  apiCallsInProgress: 0,
  users: {
    loginUserError: false,
    loginUserStart: false,
    registerUserStart: false,
    registerUserError: false,
    token: localStorage.getItem("token"),
  },
};
