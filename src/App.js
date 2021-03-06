import React from "react";
import { Route, Switch } from "react-router-dom";
// react spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ContentContainer from "./components/contentContainer";
import LandingPage from "./components/landingpage";

import Dashboard from "./adminComponents/dashboard";

function App() {
  return (
    <Switch>
      <Route path="/admin" component={Dashboard} />

      <Route exact path="/" component={LandingPage} />

      <Route path="/home">
        <div className="App">
          <Header />
          <ContentContainer />
          <Footer />
        </div>
      </Route>

      {/* <div className="App">
        <Header />
        <ContentContainer />
        <Footer />
      </div> */}
    </Switch>
  );
}

export default App;
