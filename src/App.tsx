import React from "react";

import Navbar from "./components/Navbar/Navbar";
import "../src/index.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";

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
