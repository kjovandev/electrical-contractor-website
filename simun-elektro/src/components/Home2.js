import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./styles.css";
import { Image } from "react-bootstrap";

const Home2 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelector(".parallaxMainDiv").style.backgroundPositionY = `${scrolled * 0.5}px`;
      document.querySelector(".parallaxMainDiv2").style.backgroundPositionY = `${scrolled * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mainDiv">
      <ResponsiveNavbar />
      <div className="parallaxMainDiv" style={{ backgroundImage: `url(/resources/img2.jpg)` }}>
        <div className="headerContent" >
            <h1>Lorem Ipsum</h1> 
        </div>
      </div>
      <div className="noImageDiv">
        <div className="rollingContent">
          <p>noImageDiv content noImageDiv content noImageDiv content</p>
        </div>
      </div>
      <div className="parallaxMainDiv2" style={{ backgroundImage: `url(/resources/img6.jpg)` }}>
        {/* Content goes here */}
      </div>
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
