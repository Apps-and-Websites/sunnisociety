import React from "react";
import { Route } from "react-router-dom";

import Home from "./contentsPages/Home";

export default function contentContainer() {
  return (
    <main className="container">
      <Route exact path="/" component={Home} />
    </main>
  );
}
