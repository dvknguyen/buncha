import React from "react";

import Navbar from "./components/Navbar/Navbar";
import "../src/index.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
