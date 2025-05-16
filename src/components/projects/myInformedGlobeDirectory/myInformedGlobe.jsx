import React from "react";
import styles from "../../../stylesheets/informedGlobe.module.css";
import { Parallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";

import ScrollText from "./scrollText";
import TeamMember from "../teamMember";

import Journey from "./journey";

import backArrow from "@/assets/backArrow.png";
import globe from "@/assets/myInformedGlobe/globe.png";

// Phone images
import mainIphone1 from "@/assets/myInformedGlobe/coverPhones/mainIphone1.png";
import mainIphone2 from "@/assets/myInformedGlobe/coverPhones/mainIphone2.png";
import mainIphone3 from "@/assets/myInformedGlobe/coverPhones/mainIphone3.png";

// Team member images
import nickPhoto from "@/assets/photos/nickGunning.png";
import zoePhoto from "@/assets/photos/zoeJansen.jpeg";
import oliverPhoto from "@/assets/photos/oliverWaterhouse.jpeg";

// Graph and design decision images
import donutGraph from "@/assets/myInformedGlobe/graph/donutGraph.png";
import designD1 from "@/assets/myInformedGlobe/designD/designD1.png";
import designD2 from "@/assets/myInformedGlobe/designD/designD2.png";
import designD3 from "@/assets/myInformedGlobe/designD/designD3.png";

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
        <h1>
          <span>
            <a href="/">
              {" "}
              <img id={styles.backArrow} src={backArrow} alt="" />
            </a>
          </span>
          <span className={styles.blackTitleText}>My Informed</span> Gl
          <span>
            <img id={styles.globe} src={globe} alt="" />
          </span>
          be
        </h1>
      </div>

      <div id={styles.imageContainer}>
        <Parallax translateY={getTranslateY(7, -50)}>
          <img src={mainIphone1} className={styles.phones} />
        </Parallax>

        <Parallax translateY={getTranslateY(-65, 50)}>
          <img src={mainIphone2} className={styles.phones} />
        </Parallax>

        <Parallax translateY={getTranslateY(35, -100)}>
          <img
            src={mainIphone3}
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
            app designed for
            <span className={styles.boldText}> younger generations</span> that
            <span className={styles.boldText}>
              {" "}
              simplifies complex topics{" "}
            </span>{" "}
            and highlights their
            <span className={styles.boldText}> direct impacts</span>, making
            political news
            <span className={styles.boldText}> accessible and engaging</span>.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(255, 249, 240)",
          zIndex: 1,
          maxWidth: "80%",
        }}
      >
        <h2 className={styles.newSubtitle}>Team:</h2>
        <div id={styles.teamMembers} style={{ paddingLeft: "5%" }}>
          <div className={styles.flexContent}>
            <TeamMember
              image={nickPhoto}
              name="Nick Gunning (Myself)"
              description="Focused on creating an intuitive user experience through the Figma Prototype. Conducted user interviews and research to ensure our content remains relevant."
            />

            <TeamMember
              image={zoePhoto}
              name="Zoe Jansen"
              description="Led the development of the interactive features based on user feedback. Helped build upon the Design iterations."
            />
          </div>
          <div style={{ maxWidth: "50%" }}>
            <TeamMember
              image={oliverPhoto}
              name="Oliver Waterhouse"
              description="Developed the Heuristic Evaluation and Usability testing. Also assisted in the Affinity Mapping and User Journey Mapping."
            />
          </div>
        </div>
      </div>

      <h2 className={styles.newSubtitle}>Problem: </h2>
      <div className={styles.flexContent}>
        <p className={styles.paragraph}>
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
        <img src={donutGraph} id={styles.donutGraph} />
      </div>

      <h2 className={styles.newSubtitle}>Journey:</h2>
      <Journey />

      <h2 className={styles.newSubtitle}>Design Decision's</h2>
      <div className={styles.designDecisions}>
        <img src={designD1} className={styles.ddImage} />
        <div className={styles.ddTextContainer}>
          <p id={styles.dd1Text1}>
            Initial Sketches saw an{" "}
            <span className={styles.boldText}>introduction of a globe</span> for
            users to select the country they were interested in.
            <br />
            <br />
            This was later rejected due to the{" "}
            <span className={styles.boldText}>lack of user feedback</span> and
            usability compared to a 2D flat map.
          </p>

          <p id={styles.dd1Text2}>
            Map includes names of countries to assist individuals who are
            unaware of geography.
            <br />
            <br />
            Implementing a search feature so that{" "}
            <span className={styles.boldText}>
              users have choice about which country to read about
            </span>
            . <i>(User control and freedom)</i>
            <br />
            <br />
            Added instructions at the top of the page to{" "}
            <span className={styles.boldText}>
              keep users informed about what to do
            </span>
            . <i>(Visibility of system status)</i>
          </p>
        </div>
        <img src={designD2} className={styles.ddImage} />
        <div className={styles.ddTextContainer}>
          <p id={styles.dd2Text1}>
            A grid like layout was first sketched to show{" "}
            <span className={styles.boldText}>
              feature articles based on a country
            </span>
            .
            <br />
            <br />
            First sketches showed the info on and about the country below the
            article tiles, however, user refinement highlighted that{" "}
            <span className={styles.boldText}>
              users wanted to context on the country first
            </span>{" "}
            before viewing news stories.
          </p>

          <p id={styles.dd2Text2}>
            Refined mockups show key information about a country before showing{" "}
            <span className={styles.boldText}>top news stories</span>. We wanted
            to give users{" "}
            <span className={styles.boldText}>
              non-bias important information
            </span>{" "}
            based on a country that would make articles{" "}
            <span className={styles.boldText}>more informative</span>.
            <br />
            <br />
            The addition of tags for the news articles gave{" "}
            <span className={styles.boldText}>
              users quick access to what they were looking for
            </span>
            .
          </p>
        </div>
        <img src={designD3} className={styles.ddImage} />
        <div className={styles.ddTextContainer}>
          <p id={styles.dd2Text1}>
            Highlighted article page that showed information based on the
            searched country. Users revealed that they wanted to include
            information on how it impacts their home country. This created,{" "}
            <span className={styles.boldText}>
              intrinsic motivation for the user
            </span>
            .
            <br />
            <br />
            Removal of search bar was needed because{" "}
            <span className={styles.boldText}>
              users could simply just navigate back to the globe page
            </span>
            .
          </p>

          <p id={styles.dd2Text2}>
            Refined mockups showed a dictionary feature that provided
            definitions of unknown words to{" "}
            <span className={styles.boldText}>
              give users more accessibility
            </span>
            .
            <br />
            <br />
            Article content was further broken down to{" "}
            <span className={styles.boldText}>
              create more whitespace for the user
            </span>
            .
            <br />
            <br />
            At conclusion of article a circle diagram visualised economic
            factors and how they impact your home country.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InformedGlobe;
