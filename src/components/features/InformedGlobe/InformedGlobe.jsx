// InformedGlobe.jsx

import React from "react";
import styles from "../InformedGlobe/InformedGlobe.module.scss";
import { Parallax } from "react-scroll-parallax";

// --- Data & Asset Imports ---
import { projectData } from "./InformedGlobeData"; // Data for the component
import backArrow from "@/assets/icons/backArrow.png";
import globe from "@/assets/images/myInformedGlobe/globe.png";
import mainIphone1 from "@/assets/images/myInformedGlobe/coverPhones/mainIphone1.png";
import mainIphone2 from "@/assets/images/myInformedGlobe/coverPhones/mainIphone2.png";
import mainIphone3 from "@/assets/images/myInformedGlobe/coverPhones/mainIphone3.png";

// --- Component Imports ---
import TeamMember from "../../../components/TeamMember";
import Journey from "./UserJourney";

function InformedGlobe() {
  // Helper function to render HTML content from the data file safely
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className={styles.background}>
      {/* --- Header Section --- */}
      <header className={styles.header}>
        <span>
          <a href="/">
            <img
              className={styles.backArrow}
              src={backArrow}
              alt="Back to home"
            />
          </a>
        </span>
        <h1>
          <span className={styles.blackTitleText}>My Informed</span> Gl
          <span className={styles.salmonTitleText}>
            <img id={styles.globe} src={globe} alt="" />
            be
          </span>
        </h1>
      </header>

      {/* --- Phone Parallax Section --- */}
      <div className={styles.phoneWrapper}>
        <Parallax speed={-10} className={styles.parallaxItem}>
          <img
            src={mainIphone1}
            className={styles.phoneSide}
            alt="Informed Globe Screen 1"
          />
        </Parallax>

        <Parallax speed={-2} className={styles.parallaxItem}>
          <img
            src={mainIphone2}
            className={styles.phoneMain}
            alt="Informed Globe Main Screen"
          />
        </Parallax>

        <Parallax speed={-10} className={styles.parallaxItem}>
          <img
            src={mainIphone3}
            className={styles.phoneSide}
            alt="Informed Globe Screen 3"
          />
        </Parallax>
      </div>
      <div className={styles.content}>
        {/* --- Team Section --- */}
        <h2>Team:</h2>
        <div className={styles.teamMembers}>
          <div className={styles.flexContent}>
            {projectData.team.slice(0, 2).map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                name={member.name}
                description={member.description}
              />
            ))}
          </div>
          <div style={{ maxWidth: "50%" }}>
            <TeamMember
              image={projectData.team[2].image}
              name={projectData.team[2].name}
              description={projectData.team[2].description}
            />
          </div>
        </div>

        {/* --- Problem Section --- */}
        <h2>Problem:</h2>
        <div className={styles.flexContent}>
          <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={createMarkup(
              projectData.problem.paragraph
            )}
          />
          <img
            src={projectData.problem.image}
            id={styles.donutGraph}
            alt="Donut graph showing news consumption data"
          />
        </div>

        {/* --- Journey Section --- */}
        <h2>Journey:</h2>
        <Journey />

        {/* --- Design Decisions Section --- */}
        <h2>Design Decision's</h2>
        <div className={styles.designDecisions}>
          {projectData.designDecisions.map((decision, index) => (
            <React.Fragment key={index}>
              <img
                src={decision.image}
                className={styles.ddImage}
                alt={`Design decision iteration ${index + 1}`}
              />
              <div className={styles.ddTextContainer}>
                {decision.texts.map((text, textIndex) => (
                  <p
                    key={textIndex}
                    id={styles[text.id]}
                    dangerouslySetInnerHTML={createMarkup(text.content)} 
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InformedGlobe;
