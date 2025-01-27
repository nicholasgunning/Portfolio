import LoadPage from "./loadPage";
import Project from "./projectUtility";
import homePage from "../stylesheets/homepage.module.css";
import Collable from "./projects/collableDirectory/collable";
import MyInformedGlobe from "./projects/myInformedGlobeDirectory/myInformedGlobe";
import Chemtable from "./projects/chemTableDirectory/chemtable";
import SoftwareProjects from "./projects/softwareProjectsDirectory/softwareProjects";
import styles from "../stylesheets/homepage.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ProjectCards() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const hasSeenLoading = localStorage.getItem("hasSeenLoading");

    if (hasSeenLoading) {
      setShowLoading(false);
    } else {
      const timer = setTimeout(() => {
        setShowLoading(false);
        localStorage.setItem("hasSeenLoading", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return showLoading ? <LoadPage /> : <MainContent />;
}

function MainContent() {
  return (
    <div id={homePage.container}>
      <div id={homePage.background}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Project name="PROJECT #1 - COLLABLE" link="/collable" />
                <a href="/myInformedGlobe" style={{ textDecoration: "none" }}>
                  <h1 className={styles.title}>
                    PROJECT #2 - MY INFORMED GLOBE
                  </h1>
                </a>
                <Project name="PROJECT #3 - CHEMTABLE" link="/chemtable" />
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
    </div>
  );
}

export default ProjectCards;
