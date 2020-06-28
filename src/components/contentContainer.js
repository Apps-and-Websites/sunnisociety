import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./contentsPages/Home";
import BookList from "./bookComponents/booksPage";

export default function contentContainer() {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={BookList} />
      </Switch>
    </main>
  );
}
