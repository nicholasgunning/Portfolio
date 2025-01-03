import React from "react";
import styles from "../../../stylesheets/informedGlobe.module.css";
import { Parallax } from "react-scroll-parallax";

function InformedGlobe() {
  return (
    <div className={styles.background}>
      <div id={styles.titleContainer}>
        <h1 className={styles.title}>Informed Globe</h1>
      </div>

      <div id={styles.imageContainer}>
        <Parallax translateY={[7, -50]}>
          <img
            src="../../../../src/assets/myInformedGlobe/coverPhones/mainIphone1.png"
            alt="Placeholder globe"
            className={styles.image}
          />
        </Parallax>

        <Parallax translateY={[-40, 30]}>
          <img
            src="../../../../src/assets/myInformedGlobe/coverPhones/mainIphone2.png"
            alt="Placeholder globe"
            className={styles.image}
          />
        </Parallax>

        <Parallax translateY={[35, -100]}>
          <img
            src="../../../../src/assets/myInformedGlobe/coverPhones/mainIphone3.png"
            alt="Placeholder globe"
            className={styles.image}
            id={styles.thirdImage}
          />
        </Parallax>

        <Parallax translateY={[-170, 28]}>
          <div className={styles.textUnderImage}>
            <p>This is the text under the third iPhone</p>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default InformedGlobe;
