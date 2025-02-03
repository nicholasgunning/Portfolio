import LoadPage from "./loadPage";
import Project from "./projectUtility";
import homePage from "../stylesheets/homepage.module.css";
import Collable from "./projects/collableDirectory/collable";
import MyInformedGlobe from "./projects/myInformedGlobeDirectory/myInformedGlobe";
import Chemtable from "./projects/chemTableDirectory/chemtable";
import SoftwareProjects from "./projects/softwareProjectsDirectory/softwareProjects";
import styles from "../stylesheets/homepage.module.css";
import Resume from "@/assets/homePage/Resume.pdf";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import profileIcon from "@/assets/homePage/profileIcon.png";

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
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {isHomePage && modal && (
        <div className={homePage.modal}>
          <div onClick={toggleModal} className={homePage.overlay}></div>
          <div className={homePage.modalContent}>
            <h2 id={homePage.modalTitle}>NICK GUNNING</h2>
            <p id={homePage.modalText}>
              I'm a{" "}
              <span className={homePage.boldText}>Software Developer</span> and{" "}
              <span className={homePage.boldText}>Human-Centered Designer</span>{" "}
              with a strong interest in Fintech, I aspire to create{" "}
              <span className={homePage.boldText}>
                functional digital solutions
              </span>{" "}
              that bring meaningful impact to{" "}
              <span className={homePage.boldText}>users' lives</span>. My{" "}
              approach involves transforming{" "}
              <span className={homePage.boldText}>conceptualised ideas</span> or
              problem spaces into fully realised,{" "}
              <span className={homePage.boldText}>
                feasible Fintech-based prototypes
              </span>{" "}
              and <span className={homePage.boldText}>solutions</span>.
            </p>
            <div id={homePage.modalButtons}>
              <a href={Resume} target="_blank" className={homePage.modalButton}>
                Resume <span className="arrow">↗</span>
              </a>

              <a href="/linkedin" target="_blank" className={homePage.modalButton}>
                LinkedIn <span className="arrow">↗</span>
              </a>
            </div>
            <button className={homePage.closeModal} onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}

      <div id={homePage.background}>
        {isHomePage && (
          <button onClick={toggleModal} id={homePage.profileButton}>
            ME <img src={profileIcon} id={homePage.profileIcon}></img>
          </button>
        )}
        <div id={homePage.container}>
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
    </>
  );
}

export default ProjectCards;
