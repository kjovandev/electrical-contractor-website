import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/About";

import Contact from "./components/Contact";
import Home2 from "./components/Home2";
import './App.css'
import { Nav } from "react-bootstrap";
function App() {


  return (


 
    <Router>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
 );
}

export default App;





















































// import React from "react";
// import { ReactDOM } from "react";
// import { Route, Router, BrowserRouter, Routes} from "react-router-dom";
// import Home from "./components/Home"
// import About from "./components/About"
// import Contact from "./components/Contact"

// function App() {
//   return (
//     <Router>
//     <Routes>
//     <Route path="/" Component={Home} ></Route>
//     </Routes>
//     </Router>
    


//   );
// }

// export default App;
