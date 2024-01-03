import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./home.css";
import { Image } from "react-bootstrap";
import MovingImage from "./MovingImg";

let parallaxMainDivInitalYPos

const Home2 = () => {
  

  return (
    <div className="mainDiv">
      <ResponsiveNavbar />
      
      <div className="noImageDiv">
        <div className="rollingContent">
          <p>noImageDiv content noImageDiv content noImageDiv content</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home2;
