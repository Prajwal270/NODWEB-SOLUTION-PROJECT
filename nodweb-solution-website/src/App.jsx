import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services/>}/>
        <Route path="career" element={<Career/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
