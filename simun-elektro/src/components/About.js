import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./about.css";


const AboutPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      

      document.querySelector(".parallaxMainDivAbout").style.backgroundPositionY = `${-600 + scrolled * 0.5}px`;
       };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="mainDivAbout">
      
      <ResponsiveNavbar />
      
      <div className="parallaxMainDivAbout slikaAbout" style={{ backgroundImage: `url(/resources/img17.jpg)`, backgroundPositionY:"-600px"  }}>
        <div className="headerContentAbout" >
            <p className="headerAbout">Upoznajte SIMUNOV Tim</p>
             
        </div>
      </div>
      
      <div className="noImageDivAbout noImageDivAboutLarge">
        <div className="contentDivAbout">

          <p className="contentAbout">
            "Simun Elektroinstalation", sa sedištem u Nišu, predstavlja uglednu električarsku 
          firmu sa trogodišnjim iskustvom, a u vlasništvu je stručnjaka u oblasti električnih 
          instalacija, gospodina Nikole Ilića. Sa posvećenim timom od pet članova, firma se 
          ističe pružanjem visokokvalitetnih električarskih usluga na stambenim i industrijskim
          objektima.
          </p>
          <hr/>
          <p className="contentAbout">
          Nikola Ilić, kao vlasnik, donosi stručnost i liderstvo u poslovanje "Simun Elektroinstalation".
          Firma se ponosi brzim odgovorom na klijentske zahteve, tačnošću u izvršenju projekata i poštovanjem najviših standarda 
          kvaliteta.
          </p>
          <hr/>
          <p className="contentAbout">
          Sa pažljivim pristupom svakom projektu, "Simun Elektroinstalation" pruža sveobuhvatne usluge instalacija, od novogradnje 
          do održavanja sistema. Nikola Ilić i njegov tim su posvećeni zadovoljenju potreba klijenata, prateći najnovije tehnološke
          trendove i garantujući sigurnost i efikasnost u svakom aspektu električarskih radova.
          </p>

        </div>

        <div className="imageDivAbout" >
          <img className="imageAbout" src="/resources/people.jpg" />
        </div>
        
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
