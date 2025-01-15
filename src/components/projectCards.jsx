import Bg from "./p5-sketch";
import Project from "./projectUtility";
import homePage from "../stylesheets/homepage.module.css";
import Collable from "./projects/collableDirectory/collable";
import MyInformedGlobe from "./projects/myInformedGlobeDirectory/myInformedGlobe";
import Chemtable from "./projects/chemtable";
import Travelbud from "./projects/travelbud";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function ProjectCards() {
  return (
    <>
      <div id={homePage.container}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Bg />
                <Project name="COLLABLE" link="/collable" />
                <Project name="MY INFORMED GLOBE" link="/myinformedglobe" />
                <Project name="CHEMTABLE" link="/chemtable" />
                <Project name="TRAVELBUD" link="/travelbud" />
              </>
            }
          />
          <Route path="/collable" element={<Collable />} />
          <Route path="/myinformedglobe" element={<MyInformedGlobe />} />
          <Route path="/chemtable" element={<Chemtable />} />
          <Route path="/travelbud" element={<Travelbud />} />
        </Routes>
      </div>
    </>
  );
}

export default ProjectCards;
