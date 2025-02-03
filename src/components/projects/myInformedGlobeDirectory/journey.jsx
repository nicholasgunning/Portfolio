import React from "react";
import styles from "../../../stylesheets/informedGlobeJourney.module.css";
import FadeInOnScroll from "./../fadeInOnScroll";

import discoverIcon from "@/assets/myInformedGlobe/journey/discoverIcon.png";
import defineIcon from "@/assets/myInformedGlobe/journey/defineIcon.png";
import ideateIcon from "@/assets/myInformedGlobe/journey/ideateIcon.png";
import designIcon from "@/assets/myInformedGlobe/journey/designIcon.png";
import testIcon from "@/assets/myInformedGlobe/journey/testIcon.png";

import onlineEthnographyIcon from "@/assets/myInformedGlobe/journey/onlineEthnographyIcon.png";
import interviewIcon from "@/assets/myInformedGlobe/journey/interviewIcon.png";
import questionnaireIcon from "@/assets/myInformedGlobe/journey/questionnaireIcon.png";

import mainArrow from "@/assets/myInformedGlobe/journey/mainArrow.png";

function Journey() {
  const icons = [
    { id: "discoverIcon", src: discoverIcon },
    { id: "defineIcon", src: defineIcon },
    { id: "ideateIcon", src: ideateIcon },
    { id: "designIcon", src: designIcon },
    { id: "testIcon", src: testIcon },
  ];

  const secondaryIcons = [
    {
      id: "onlineEthnographyIcon",
      src: onlineEthnographyIcon,
    },
    {
      id: "interviewIcon",
      src: interviewIcon,
    },
    {
      id: "questionnaireIcon",
      src: questionnaireIcon,
    },
  ];

  return (
    <div id={styles.container}>
      {icons.map((icon, index) => {
        return (
          <FadeInOnScroll key={`${icon.id}-${index}`} delay={index * 200}>
            <div id={styles[icon.id]}>
              <img className={styles.icon} src={icon.src} alt={icon.id} />
            </div>
          </FadeInOnScroll>
        );
      })}

      {secondaryIcons.map((icon, index) => {
        return (
          <div key={`${icon.id}-${index}`} id={styles[icon.id]}>
            <img src={icon.src} alt={icon.id} />
          </div>
        );
      })}

      <div id={styles.discoverText}>
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
      <div id={styles.defineText}>
        <h3>Define</h3>
        <h4>
          Affinity Diagram
          <br />
          Personas
          <br />
          Storyboards
        </h4>
      </div>
      <div id={styles.ideateText}>
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
      <div id={styles.designText}>
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
      <div id={styles.testText}>
        <h3>Test</h3>
        <h4>
          Heuristic Evaluation
          <br />
          Usability Testing
          <br />
          Implementing Feedback
        </h4>
      </div>

      <div id={styles.mainArrow}>
        <img src={mainArrow} alt="mainArrow" />
      </div>

      <div id={styles.onlineEthnographyBlurb}>
        <h4>Online Ethnography</h4>
      </div>

      <div id={styles.interviewBlurb}>
        <h4>Interviews</h4>
      </div>

      <div id={styles.questionnaireBlurb}>
        <h4>Questionnaires</h4>
      </div>
    </div>
  );
}

export default Journey;
