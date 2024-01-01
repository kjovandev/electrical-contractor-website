import React from "react";
import ResponsiveNavbar from "./Navbar";
import { Button, Card, Image } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import MovingImage from "./MovingImg";


const Home = () =>{
    return(
    

        <div className="bodyDiv " > 

            <ResponsiveNavbar />

            {/* IMPORTING IMAGES FROM /resources/img1.jpg  as a prop in MovingImage  */}
            <div className="movingImage" ><MovingImage imageSource="/resources/img9.jpg" /></div>
            <div className="randomDiv" style={{height:"500px", width:"100%", backgroundColor:"purple", zIndex:"2"}}> asdasd</div>
            <div className="movingImage" ><MovingImage imageSource="/resources/img9.jpg"  style={{top:"-200px"}}/></div>
            {/* popraviti poziciju slike */}
            
            <div className="randomDiv" style={{height:"500px", width:"100%", backgroundColor:"purple", zIndex:"2"}}> asdasd</div>

            
            
        
        </div>
        

    )
}



export default Home;