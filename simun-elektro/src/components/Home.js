import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./home.css";
import CarouselBootstrap from "./Carousel";


let parallaxMainDivInitalYPos

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      

      document.querySelector(".parallaxMainDivHome").style.backgroundPositionY = `${-600 + scrolled * 0.5}px`;
      document.querySelector(".parallaxMainDivHome2").style.backgroundPositionY = `${-250+ scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDivHome3").style.backgroundPositionY = `${700 + scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDivHome4").style.backgroundPositionY = `${700 + scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDivHome5").style.backgroundPositionY = `${scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDivHome6").style.backgroundPositionY = `${-100 + scrolled * 0.2}px`;

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="mainDivHome">
      
      <ResponsiveNavbar />
      
      <div className="parallaxMainDivHome slikaHome" style={{ backgroundImage: `url(/resources/img16.jpg)`, backgroundPositionY:"-600px"  }}>
      
        <div className="headerContentHome" >
            <h1>
              <span className="first-rowH1Home">SIMUN</span>  
              <br />
              <span className="second-rowH1Home">ELEKTROINSTALATION</span>
            </h1>
            <h2>Sinonim za kvalitet</h2> 
        </div>
      
      </div>
      

      <div className="noImageDivHome">
        <p className="noImageDivHeaderHome">Naši Partneri </p>

        <div className="carouselDivHome">
          <CarouselBootstrap style={{outerHeight:"400px", outerWidth:"100%"}} />
        </div>
      
      </div>


      <div className="parallaxMainDivHome2 slikaHome" style={{ backgroundImage: `url(/resources/img6.jpg)`,backgroundPositionY:"-250px" }}>

      <div className="picContentDivHome">
        <p className="invertedTextHome textPic2Home" >
          Montaza svih vrsta
          <br/>
          Elektro opreme.
        </p>
      </div>
      
      </div>


      <div className="parallaxMainDivHome3 slikaHome" style={{ backgroundImage: `url(/resources/img19.jpg)`,backgroundPositionY:"700px" }}>
      
      <div className="picContentDivHome">
      <p className="invertedTextHome textPic3Home" >
          Popravka i prepravka
          <br/>
          Postojećih instalacija.
        </p>
      </div>
      
      
      </div>

      <div className="parallaxMainDivHome4 slikaHome" style={{ backgroundImage: `url(/resources/img18.jpg)`,backgroundPositionY:"700px" }}>
      
        <div className="picContentDivHome">
          <p className="invertedTextHome textPic4Home">Dijagnostika i 
            <br/>
            Otklanajnje kvarova</p>
        </div>

      </div>


      <div className="parallaxMainDivHome5 slikaHome" style={{ backgroundImage: `url(/resources/img21.jpg)` }}>
      
        <div className="picContentDivHome">
          <p className="invertedTextHome textPic5Home">Kako u 
              <br/>
              Industriji...
          </p>
        </div>

      </div>
      
      <div className="parallaxMainDivHome6 slikaHome" style={{ backgroundImage: `url(/resources/img22.jpg)`, backgroundPositionY:"-100px" }}>
      
        <div className="picContentDivHome">
            <p className="invertedTextHome textPic6Home ">
            Tako i u <br/>
            Vašem domu.
            </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Home;
