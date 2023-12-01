import {Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Solutions from "../pages/Solutions";
import About from "../pages/About"
import Contact from "../pages/Contact";

export default function MainRoutes() {
  return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

  )
}
    