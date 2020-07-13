import React from "react";

import PrivateRoute from "../utils/PrivateRoute";
import AdminBookPage from "./adminBooks/adminBookPage";
import AddBook from "./adminBooks/addBook";

export default function adminRoutes() {
  return (
    <>
      <PrivateRoute exact path="/admin/books" component={AdminBookPage} />
      <PrivateRoute exact path="/admin/addBook" component={AddBook} />
    </>
  );
}
