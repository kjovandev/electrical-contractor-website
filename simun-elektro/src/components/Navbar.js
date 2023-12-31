import React from "react";
import "./Navbar.css";


function NavbarBootstrap(){

};

function Navbar() {
 return (
    <>
      <div className="navbar">
      <a href="#"><img src="./logo.png" alt="" /></a>

        <div className="hyperLinks">
        <a href="#home">POCETNA</a>
        <a href="#about">O NAMA</a>
        <a href="#contact">KONTAKT</a>
        </div>
      </div>
      <br />
    </>
 );
}

export default Navbar;
