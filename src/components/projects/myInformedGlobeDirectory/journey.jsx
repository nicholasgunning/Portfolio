import React from "react";
import styles from "../../../stylesheets/informedGlobeJourney.module.css";
import FadeInOnScroll from "./fadeInOnScroll";

function Journey() {
  const icons = [
    { id: "discoverIcon", src: "discoverIcon.png" },
    { id: "defineIcon", src: "defineIcon.png" },
    { id: "ideateIcon", src: "ideateIcon.png" },
    { id: "designIcon", src: "designIcon.png" },
    { id: "testIcon", src: "testIcon.png" },
  ];

  const secondaryIcons = [
    {
      id: "onlineEthnographyIcon",
      src: "onlineEthnographyIcon.png",
    },
    {
      id: "interviewIcon",
      src: "interviewIcon.png",
    },
    {
      id: "questionnaireIcon",
      src: "questionnaireIcon.png",
    },
  ];

  return (
    <div id={styles.container}>
      {icons.map((icon, index) => {
        console.log(icon.id); // Log the ID
        return (
          <FadeInOnScroll key={`${icon.id}-${index}`} delay={index * 200}>
            <div id={styles[icon.id]}>
              <img
                className={styles.icon}
                src={`../../../../src/assets/myInformedGlobe/journey/${icon.src}`}
                alt={icon.id}
              />
            </div>
          </FadeInOnScroll>
        );
      })}

      {secondaryIcons.map((icon, index) => {
        console.log(icon.id); // Log the ID
        return (
          // <FadeInOnScroll delay={index * 200}>
          <div key={`${icon.id}-${index}`} id={styles[icon.id]}>
            <img
              src={`../../../../src/assets/myInformedGlobe/journey/${icon.src}`}
              alt={icon.id}
            />
          </div>
          // </FadeInOnScroll>
        );
      })}

      <div id={styles.discoverBlurb}>
        <h3>Discover</h3>
        <h4>
          User Interviews
          <br />
          Questionnaires
          <br />
          User Research
          <br />
          Academic Analysis
          <br />
          Online Ethnography
        </h4>
      </div>
      <div id={styles.defineBlurb}>
        <h3>Define</h3>
        <h4>
          Affinity Diagram
          <br />
          Personas
          <br />
          Storyboards
        </h4>
      </div>
      <div id={styles.ideateBlurb}>
        <h3>Ideate</h3>
        <h4>
          Crazy 8s
          <br />
          Decision Matrix
          <br />
          HMW Statements
          <br />
          Sketches
        </h4>
      </div>
      <div id={styles.designBlurb}>
        <h3>Design</h3>
        <h4>
          Wireframes
          <br />
          Lo-Fi Mockups
          <br />
          Hi-Fi Mockups
          <br />
          Visual Design
        </h4>
      </div>
      <div id={styles.testBlurb}>
        <h3>Test</h3>
        <h4>
          Heuristic Evaluation
          <br />
          Usability Testing
          <br />
          Implementing Feedback
        </h4>
      </div>

      <div id={styles.onlineEthnographyBlurb}>
        <h3>Online Ethnography</h3>
      </div>

      <div id={styles.interviewBlurb}>
        <h3>Interviews</h3>
      </div>

      <div id={styles.questionnaireBlurb}>
        <h3>Questionnaires</h3>
      </div>
    </div>
  );
}

export default Journey;
