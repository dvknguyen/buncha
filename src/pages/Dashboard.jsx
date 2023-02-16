import React from "react";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Dashboard;
