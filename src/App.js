import React from "react";

import BookPage from "./components/booksPage";

import Header from "./components/header";
import Footer from "./components/footer";
import ResponsiveNav from "./components/navigationMenu/responsiveNav";
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
