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
      

      document.querySelector(".parallaxMainDiv").style.backgroundPositionY = `${-600 + scrolled * 0.5}px`;
      document.querySelector(".parallaxMainDiv2").style.backgroundPositionY = `${150+ scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDiv3").style.backgroundPositionY = `${100 + scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDiv4").style.backgroundPositionY = `${scrolled * 0.2}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="mainDiv">
      <ResponsiveNavbar />
      <div className="parallaxMainDiv slika" style={{ backgroundImage: `url(/resources/img16.jpg)`, backgroundPositionY:"-600px"  }}>
        <div className="headerContent" >
            <h1>SIMUN</h1>
            <h2>ELEKTROINSTALATION</h2>
            <h3>sinonim za kvalitet</h3> 
        </div>
      </div>
      <div className="noImageDiv">
        
        <div className="rollingContent">
          <p>noImageDiv content noImageDiv content noImageDiv content</p>
        </div>
      </div>
      <div className="parallaxMainDiv2 slika" style={{ backgroundImage: `url(/resources/img6.jpg)`,backgroundPositionY:"150px" }}>
      
      <div className="pic2contentDiv">
        <p>Lorem Ipsum LOrem lroe asddas 
          <br/>
          akorem jedan dva tri cetri pet sest</p>
      </div>
      
      </div>
      <div className="parallaxMainDiv3 slika" style={{ backgroundImage: `url(/resources/img14.jpg)`,backgroundPositionY:"100px" }}>
      
      <div className="pic2contentDiv">
        <p>Lorem Ipsum LOrem lroe asddas 
          <br/>
          akorem jedan dva tri cetri pet sest</p>
      </div>
      
      
      </div>
      <div className="parallaxMainDiv4 slika" style={{ backgroundImage: `url(/resources/img3.jpg)` }}>
      <div className="pic2contentDiv">
        <p>Lorem Ipsum LOrem lroe asddas 
          <br/>
          akorem jedan dva tri cetri pet sest</p>
      </div>
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
