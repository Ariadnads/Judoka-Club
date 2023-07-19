//import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

import "./layout.css";
import Header from "../Components/Header/Header";

function Root() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root
