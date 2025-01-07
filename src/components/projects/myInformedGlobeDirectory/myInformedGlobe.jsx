import React from "react";
import styles from "../../../stylesheets/informedGlobe.module.css";
import { Parallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";

import ScrollText from "./scrollText";
import TeamMember from "./teamMember";
import { fill } from "three/src/extras/TextureUtils.js";
import Background from "three/src/renderers/common/Background.js";

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

        <Parallax translateY={getTranslateY(-25, -40)}>
          <div className={styles.textUnderPhone}>
            <ScrollText />
          </div>
        </Parallax>


      <h3>Hello</h3>
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
    </div>
  );
}

export default InformedGlobe;
