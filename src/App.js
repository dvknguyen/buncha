import React from "react";

import Navbar from "./components/Navbar/Navbar";
import "../src/index.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import { Switch, Route, Routes, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
