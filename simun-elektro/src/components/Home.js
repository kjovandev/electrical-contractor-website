import React from "react";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"


const Home = () =>{
    return(
    

        <div className="bodyDiv " > 

            <div className="navbarDiv">
                <Navbar />
            </div>

            <div className="headerContent">
                <h1>Naslov</h1>
                <p className=""> random text</p>
                    <Button className="" > dugme</Button>
            </div>
            
        
        </div>

    )
}



export default Home;