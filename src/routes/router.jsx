import {Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SolutionsAndProjects from "../pages/SolutionsAndProjects";
import About from "../pages/About"
import Contact from "../pages/Contact";

export default function MainRoutes() {
  return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<SolutionsAndProjects />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

  )
}
    