import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Componant/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
