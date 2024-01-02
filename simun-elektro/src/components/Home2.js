import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./styles.css";
import { Image } from "react-bootstrap";
import MovingImage from "./MovingImg";

let parallaxMainDivInitalYPos

const Home2 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      

      document.querySelector(".parallaxMainDiv").style.backgroundPositionY = `${-250 + scrolled * 0.5}px`;
      document.querySelector(".parallaxMainDiv2").style.backgroundPositionY = `${scrolled * 0.5}px`;
      document.querySelector(".parallaxMainDiv3").style.backgroundPositionY = `${scrolled * 0.5}px`;
      document.querySelector(".parallaxMainDiv4").style.backgroundPositionY = `${scrolled * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="mainDiv">
      <ResponsiveNavbar />
      <div className="parallaxMainDiv slika" style={{ backgroundImage: `url(/resources/img5.jpg)`, backgroundPositionY:"-250px"  }}>
        <div className="headerContent" >
            <h1>Lorem Ipsum </h1> 
        </div>
      </div>
      <div className="noImageDiv">
        <div style={{width : '100px', height: '100px'}}>
            {/* <MovingImage imageList={["/resources/img6.jpg", "/resources/img7.jpg", "/resources/img8.jpg"]} /> */}
        </div>
        <div className="rollingContent">
          <p>noImageDiv content noImageDiv content noImageDiv content</p>
        </div>
      </div>
      <div className="parallaxMainDiv2 slika" style={{ backgroundImage: `url(/resources/img6.jpg)` }}>
        {/* Content goes here */}
      </div>
      <div className="parallaxMainDiv3 slika" style={{ backgroundImage: `url(/resources/img5.jpg)` }}>
        {/* Content goes here */}
      </div>
      <div className="parallaxMainDiv4 slika" style={{ backgroundImage: `url(/resources/img3.jpg)` }}>
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
