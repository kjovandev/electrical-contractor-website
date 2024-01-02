// Home.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./styles.css";

const Home = () => {
  return (
    <div className="mainDiv">
      <ResponsiveNavbar />
      <div className="bodyDiv">
        <div className="scrollingDiv">
          <div className="scrollingContent" id="firstPic">
          </div>
        </div>
        <div className="rollingDiv">
          <div className="rollingContent">
          </div>
        </div>
        <div className="scrollingDiv">
          <div className="scrollingContent" id="secondPic">
          </div>
        </div>
        <div className="rollingDiv">
          <div className="rollingContent">
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
