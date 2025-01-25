import Bg from "./p5-sketch";
import Project from "./projectUtility";
import homePage from "../stylesheets/homepage.module.css";
import Collable from "./projects/collableDirectory/collable";
import MyInformedGlobe from "./projects/myInformedGlobeDirectory/myInformedGlobe";
import Chemtable from "./projects/chemTableDirectory/chemtable";
import SoftwareProjects from "./projects/softwareProjectsDirectory/softwareProjects";

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
                <Project name="COLLABLE1" link="/collable" />
                <Project name="MY INFORMED GLOBE" link="/myInformedGlobe" />
                <Project name="CHEMTABLE" link="/chemtable" />
                <Project name="SOFTWARE PROJECTS" link="/softwareProjects" />
              </>
            }
          />
          <Route path="/collable" element={<Collable />} />
          <Route path="/myInformedGlobe" element={<MyInformedGlobe />} />
          <Route path="/chemtable" element={<Chemtable />} />
          <Route path="/softwareprojects" element={<SoftwareProjects />} />
        </Routes>
      </div>
    </>
  );
}

export default ProjectCards;
