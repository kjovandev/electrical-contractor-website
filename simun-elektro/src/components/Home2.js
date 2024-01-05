import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./home.css";
import { Carousel, Item, Caption, Image} from "react-bootstrap";
import MovingImage from "./MovingImg";
import CarouselBootstrap from "./Carousel";


let parallaxMainDivInitalYPos

const Home2 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      

      document.querySelector(".parallaxMainDiv").style.backgroundPositionY = `${-600 + scrolled * 0.5}px`;
      document.querySelector(".parallaxMainDiv2").style.backgroundPositionY = `${-250+ scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDiv3").style.backgroundPositionY = `${700 + scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDiv4").style.backgroundPositionY = `${700 + scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDiv5").style.backgroundPositionY = `${scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDiv6").style.backgroundPositionY = `${-100 + scrolled * 0.2}px`;

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
            <h1>
              <span className="first-rowH1">SIMUN</span>  
              <br />
              <span className="second-rowH1">ELEKTROINSTALATION</span>
            </h1>
            <h2>Sinonim za kvalitet</h2> 
        </div>
      </div>
      <div className="noImageDiv">
        <p className="noImageDivHeader">Naši Partneri </p>
        <div className="carouselDiv">
        <CarouselBootstrap style={{outerHeight:"400px", outerWidth:"100%"}} />

        </div>
      </div>
      <div className="parallaxMainDiv2 slika" style={{ backgroundImage: `url(/resources/img6.jpg)`,backgroundPositionY:"-250px" }}>
      
      <div className="pic2contentDiv">
        <p className="invertedTextHome textPic2" >
          Montaza svih vrsta
          <br/>
          Elektro opreme.
        </p>
      </div>
      
      </div>
      <div className="parallaxMainDiv3 slika" style={{ backgroundImage: `url(/resources/img19.jpg)`,backgroundPositionY:"700px" }}>
      
      <div className="pic2contentDiv">
      <p className="invertedTextHome textPic3" >
          Popravka i prepravka
          <br/>
          Postojećih instalacija.
        </p>
      </div>
      
      
      </div>
      <div className="parallaxMainDiv4 slika" style={{ backgroundImage: `url(/resources/img18.jpg)`,backgroundPositionY:"700px" }}>
      <div className="pic2contentDiv">
        <p className="invertedTextHome textPic4">Dijagnostika i 
          <br/>
          Otklanajnje kvarova</p>
      </div>
            </div>
            <div className="parallaxMainDiv5 slika" style={{ backgroundImage: `url(/resources/img21.jpg)` }}>
      <div className="pic2contentDiv">
      <p className="invertedTextHome textPic5">Kako u 
          <br/>
          Industriji...</p>
      </div>
            </div>
            <div className="parallaxMainDiv6 slika" style={{ backgroundImage: `url(/resources/img22.jpg)`, backgroundPositionY:"-100px" }}>
      <div className="pic2contentDiv  ">
      <p className="invertedTextHome textPic6 ">
          <br/>
          Tako i u <br/>
          Vašem domu.</p>
      </div>
            </div>

      <Footer />
    </div>
  );
};

export default Home2;
