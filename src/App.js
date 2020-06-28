import React from "react";
// react spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ContentContainer from "./components/contentContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;
