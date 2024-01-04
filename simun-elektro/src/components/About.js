import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./about.css";


const AboutPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      

      document.querySelector(".about-parallaxMainDiv").style.backgroundPositionY = `${-600 + scrolled * 0.5}px`;
       };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="about-mainDiv">
      <ResponsiveNavbar />
      <div className="about-parallaxMainDiv slika" style={{ backgroundImage: `url(/resources/img17.jpg)`, backgroundPositionY:"-600px"  }}>
        <div className="about-headerContent" >
            <p className="aboutHeader">Upoznajte SIMUNOV Tim</p>
             
        </div>
      </div>
      <div className="about-noImageDiv">
        <div className="aboutContentDiv">

        <p className="aboutContent">
          "Simun Elektroinstalation", sa sedištem u Nišu, predstavlja uglednu električarsku <br/>
        firmu sa trogodišnjim iskustvom, a u vlasništvu je stručnjaka u oblasti električnih <br/>
        instalacija, gospodina Nikole Ilića. Sa posvećenim timom od pet članova, firma se <br/>
        ističe pružanjem visokokvalitetnih električarskih usluga na stambenim i industrijskim<br/>
        objektima.
        </p>
        
        <p className="aboutContent">
        Nikola Ilić, kao vlasnik, donosi stručnost i liderstvo u poslovanje "Simun Elektroinstalation". <br/>
        Firma se ponosi brzim odgovorom na klijentske zahteve, tačnošću u izvršenju projekata i poštovanjem najviših standarda <br/>
        kvaliteta.
        </p>

        <p className="aboutContent">
        Sa pažljivim pristupom svakom projektu, "Simun Elektroinstalation" pruža sveobuhvatne usluge instalacija, od novogradnje <br/>
        do održavanja sistema. Nikola Ilić i njegov tim su posvećeni zadovoljenju potreba klijenata, prateći najnovije tehnološke <br/>
        trendove i garantujući sigurnost i efikasnost u svakom aspektu električarskih radova.
</p>
        </div>
        <div className="aboutImageDiv" >
          <img className="aboutImage" src="/resources/people.jpg" />
        </div>
        
      </div>
     
      
      <Footer />
    </div>
  );
};

export default AboutPage;
