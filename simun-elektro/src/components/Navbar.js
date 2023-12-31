import React from "react";
import { Image } from "react-bootstrap";




function Navbar() {

  return(

<nav class="navbar navbar-expand-sm navbar-dark bg-black px-3" style={{justifyContent:"space-between"}} >
<Image src="./logo.png" width="30" height="30" class="d-inline-block align-top" alt="logo" />  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mx-3 text-light" 
        style={{
          fontWeight: "600",
          fontStyle: "normal",
          fontSize: "15px",
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}
        
        href="/">Početna</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-3 text-light" 

        style={{
          fontWeight: "600",
          fontStyle: "normal",
          fontSize: "15px",
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}

        href="/about">O nama</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-3 text-light" 
        
        style={{
          fontWeight: "600",
          fontStyle: "normal",
          fontSize: "15px",
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}

        href="/contact">Kontakt</a>
      </li>
   
    </ul>
  </div>
</nav>
  )



























}




export default Navbar;




