import React from "react";
import styles from "../../../stylesheets/informedGlobeJourney.module.css";

function Journey() {
  return (
    <div className={styles.container}>
      <div className={styles.discoverIcon}>
        <img src="../../../../src/assets/myInformedGlobe/journey/discoverIcon.png" />
      </div>
      <div className={styles.defineIcon}>
        <img src="../../../../src/assets/myInformedGlobe/journey/defineIcon.png" />
      </div>
      <div className={styles.ideateIcon}>
        <img src="../../../../src/assets/myInformedGlobe/journey/ideateIcon.png" />
      </div>
      <div className={styles.designIcon}>
        <img src="../../../../src/assets/myInformedGlobe/journey/designIcon.png" />
      </div>
      <div className={styles.testIcon}>
        <img src="../../../../src/assets/myInformedGlobe/journey/testIcon.png" />
      </div>

      <div className={styles.discoverBlurb}>
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
      <div className={styles.defineBlurb}>
        <h3>Define</h3>
        <h4>
          Affinity Diagram
          <br />
          Personas
          <br />
          Storyboards
        </h4>
      </div>
      <div className={styles.ideateBlurb}>
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
      <div className={styles.designBlurb}>
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
      <div className={styles.testBlurb}>
        <h3>Test</h3>
        <h4>
          Heuristic Evaluation
          <br />
          Usability Testing
          <br />
          Implementing Feedback
        </h4>
      </div>

      <div className={styles.mainArrow}>
        <img src="../../../../src/assets/myInformedGlobe/journey/mainArrow.png" />
      </div>
      <div className={styles.onlineEthnographyIcon}>
        <img src="../../../../src/assets/myInformedGlobe/journey/onlineEthnographyIcon.png" />
      </div>
      <div className={styles.interviewsIcon}>
        <img src="../../../../src/assets/myInformedGlobe/journey/interviewIcon.png" />
      </div>
      <div className={styles.questionnaireIcon}>
        <img src="../../../../src/assets/myInformedGlobe/journey/questionnaireIcon.png" />
      </div>

      <div className={styles.onlineEthnographyBlurb}>
        <h3>Online Ethnography</h3>
      </div>
      <div className={styles.interviewsBlurb}>
        <h3>Interviews</h3>
      </div>
      <div className={styles.questionnaireBlurb}>
        <h3>Questionnaires</h3>
      </div>
    </div>
  );
}

export default Journey;
