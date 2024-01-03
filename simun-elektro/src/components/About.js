import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./about.css";


const AboutPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      

      document.querySelector(".parallaxMainDiv").style.backgroundPositionY = `${-600 + scrolled * 0.5}px`;
       };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="mainDiv">
      <ResponsiveNavbar />
      <div className="parallaxMainDiv slika" style={{ backgroundImage: `url(/resources/img17.jpg)`, backgroundPositionY:"-600px"  }}>
        <div className="headerContent" >
            <p>Upoznajte SIMUNOV Tim</p>
             
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

export default AboutPage;
