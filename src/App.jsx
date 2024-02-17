import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./contact";
import {Routes, Route} from 'react-router-dom';
import Navigation from "./Navigation";

export default function APP() {
  return(
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={< Contact />} />
    </Routes>
    </>
  )
}