import React from "react";
import styles from "../../../stylesheets/informedGlobe.module.css";
import { Parallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";

import ScrollText from "./scrollText";
import TeamMember from "./teamMember";

import Journey from "./journey";
 
function InformedGlobe() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // Update viewport height on resize
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust translateY values based on viewport height
  const getTranslateY = (min, max) => [
    min * (viewportHeight / 1000),
    max * (viewportHeight / 1000),
  ];

  return (
    <div className={styles.background}>
      <div id={styles.titleContainer}>
        <h1>Informed Globe</h1>
      </div>

      <div id={styles.imageContainer}>
        <Parallax translateY={getTranslateY(7, -50)}>
          <img
            src="../../../../src/assets/myInformedGlobe/coverPhones/mainIphone1.png"
            alt="Placeholder globe"
            className={styles.phones}
          />
        </Parallax>

        <Parallax translateY={getTranslateY(-40, 20)}>
          <img
            src="../../../../src/assets/myInformedGlobe/coverPhones/mainIphone2.png"
            alt="Placeholder globe"
            className={styles.phones}
          />
        </Parallax>

        <Parallax translateY={getTranslateY(35, -100)}>
          <img
            src="../../../../src/assets/myInformedGlobe/coverPhones/mainIphone3.png"
            alt="Placeholder globe"
            className={styles.phones}
            id={styles.thirdImage}
          />
        </Parallax>

        <Parallax translateY={getTranslateY(-40, -20)}>
          <div className={styles.textUnderPhone}>
            <ScrollText />
          </div>
        </Parallax>
        <div id={styles.blurb}>
          <p id={styles.blurbText}>
            <span className={styles.boldText}>Informed Globe</span> is a news
            app tailored for
            <span className={styles.boldText}> younger generations</span>,
            delivering relevant political information in a format that resonates
            with their preferences. It
            <span className={styles.boldText}>
              {" "}
              simplifies complex topics{" "}
            </span>{" "}
            and highlights
            <span className={styles.boldText}> direct impacts</span>, making
            staying informed
            <span className={styles.boldText}> accessible and engaging</span>.
          </p>
        </div>
      </div>
      <h2 className={styles.newSubtitle}>Team:</h2>
      <div id={styles.teamMembers}>
        <div id={styles.person1}>
          <TeamMember
            image="../../../../src/assets/collable/nickPhoto1.jpeg"
            name="Zoe Jansen"
            description="Lorem ipsum dolor sit amet..."
          />
        </div>
        <div id={styles.person2}>
          <TeamMember
            image="../../../../src/assets/collable/nickPhoto1.jpeg"
            name="Nick Gunning (Myself)"
            description="Lorem ipsum dolor sit amet..."
          />
        </div>
        <div id={styles.person3}>
          <TeamMember
            image="../../../../src/assets/collable/nickPhoto1.jpeg"
            name="Nick Gunning (Myself)"
            description="Lorem ipsum dolor sit amet..."
          />
        </div>
      </div>

      <h2 className={styles.newSubtitle}>Problem: </h2>
      <div id={styles.problemContainer}>
        <p className={styles.problemText}>
          Survey and Interview data revealed that young adults consume less news
          than older generations and often find it overwhelming or confusing.
          This can lead to{" "}
          <span className={styles.boldText}>uninformed voting</span> and
          disinterest in current events. While they have more access to
          political information than ever,{" "}
          <span className={styles.boldText}>misinformation </span>
          and biased portrayals make it{" "}
          <span className={styles.boldText}>
            challenging to make informed decisions
          </span>
          .
        </p>
        <img
          src="../../../../src/assets/myInformedGlobe/graph/donutGraph.png"
          id={styles.donutGraph}
        />
      </div>

      <h2 className={styles.newSubtitle}>Journey:</h2>
      <Journey />
    </div>
  );
}

export default InformedGlobe;
