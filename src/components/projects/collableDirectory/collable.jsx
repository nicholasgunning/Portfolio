import React from "react";
import styles from "../../../stylesheets/collable.module.css";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import FadeInOnScroll from "../fadeInOnScroll";
import backArrow from "@/assets/backArrow.png";

import Glasses from "./glasses";

import TeamMember from "../teamMember";

import nickPhoto from "@/assets/photos/nickGunning.png";
import zoePhoto from "@/assets/photos/zoeJansen.jpeg";
import collableProblemStat from "@/assets/collable/collableProblemStat.png";
import productFrame from "@/assets/collable/productFrame.png";
import challengesImg from "@/assets/collable/challengesFrame.png";
import keyUserInsights1 from "@/assets/collable/keyUserInsights1.png";
import keyUserInsights2 from "@/assets/collable/keyUserInsights2.png";
import keyUserInsights3 from "@/assets/collable/keyUserInsights3.png";

function RotatingGlasses() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.3;
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Glasses />
    </group>
  );
}

function Collable() {
  return (
    <div className={styles.background}>
      <h1>
        <span>
          <a href="/">
            {" "}
            <img id={styles.backArrow} src={backArrow} alt="" />
          </a>
        </span>
        Collable
      </h1>
      <h2 className={styles.newSubtitle}>Snapshot</h2>
      <div className={styles.collable}>
        <div className={styles.modelContainer}>
          <Canvas className={styles.model}>
            <ambientLight />
            <OrbitControls
              enableZoom={false}
              rotateSpeed={0.2}
              dampingFactor={0.1}
            />
            <Suspense fallback={null}>
              <RotatingGlasses />
            </Suspense>
            <Environment preset="apartment" />
          </Canvas>
        </div>
        <div className={styles.mainDescription}>
          <p id={styles.mainBlurb}>
            Collable is an AR solution that enhances equity and engagement in
            remote work. It transforms physical spaces like walls and desks into
            interactive tools such as virtual whiteboards and shared creative
            surfaces. With AR glasses, team members can co-create and
            communicate in real time, replicating the energy of in office
            collaboration from home.
          </p>
        </div>
      </div>
      <h2 className={styles.newSubtitle}>Team:</h2>
      <div id={styles.teamMembers}>
        <div className={styles.flexContent}>
          <TeamMember
            image={nickPhoto}
            name="Nick Gunning (Myself)"
            description="I assisted on the research of the problem area and worked on developing feature based feedback through methods like interviews and surveys."
          />
          <TeamMember
            image={zoePhoto}
            name="Zoe Janssen"
            description="Zoe worked on the design and development of the Glasses. She assisted in building the report and also forming features based on user feedback."
          />
        </div>
      </div>

      <h2 className={styles.newSubtitle}>User Insights: </h2>
      <p style={{ paddingLeft: "5%", paddingRight: "10%" }}>
        Through interviews and surveys our group found compelling insights into
        the struggles of working at home.
        <br />
        <br />
        We found that naturally employees produce more insightful outcomes when
        motivated by visual and tangible stimulation. By doing this, employees
        promote a more focused environment by reducing external distractions
        when working.
      </p>
      <h3
        className={styles.newSubtitle}
        style={{ textAlign: "center", paddingRight: "10%" }}
      >
        Key User Insights:
      </h3>
      <div className={styles.flexContent}>
        <FadeInOnScroll delay={0}>
          <img className={styles.keyUserInsights} src={keyUserInsights1} />
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <img className={styles.keyUserInsights} src={keyUserInsights2} />
        </FadeInOnScroll>

        <FadeInOnScroll delay={400}>
          <img className={styles.keyUserInsights} src={keyUserInsights3} />
        </FadeInOnScroll>
      </div>

      <h2 className={styles.newSubtitle}>Problem</h2>
      <div className={styles.flexContent}>
        <p className={styles.paragraph}>
          The <span className={styles.boldText}>pandemic</span> triggered a
          global shift to{" "}
          <span className={styles.boldText}>remote and hybrid work</span>,
          fundamentally changing how we{" "}
          <span className={styles.boldText}>communicate and collaborate</span>.
          <br />
          <br />
          This transition exposed significant gaps in{" "}
          <span className={styles.boldText}>
            hybrid and equitable collaboration
          </span>
          .
          <br />
          <br />
          <span className={styles.boldText}>Equitable collaboration</span> means
          ensuring everyone can{" "}
          <span className={styles.boldText}>contribute equally</span>,{" "}
          regardless of their financial status, available devices, or location.
        </p>
        <img src={collableProblemStat} id={styles.problemStatImg} />
      </div>
      <h2 className={styles.newSubtitle}>Product</h2>
      <div className={styles.flexContent}>
        <p className={styles.paragraph}>
          <span className={styles.boldText}>Collabble</span> leverages{" "}
          <span className={styles.boldText}>Augmented Reality (AR)</span> to
          transform hybrid team collaboration. Through AR glasses, team members
          connect via{" "}
          <span className={styles.boldText}>interactive virtual avatars</span>,
          enabling seamless communication across locations.
          <br />
          <br />
          The platform features{" "}
          <span className={styles.boldText}>real-time collaborative tools</span>
          , including virtual sticky notes that facilitate instant ideation and
          feedback among all team members. Developed through comprehensive
          research, Collabble addresses the growing need for{" "}
          <span className={styles.boldText}>
            effective hybrid collaboration solutions
          </span>{" "}
          in today's evolving workplace.
        </p>
        <img src={productFrame} id={styles.productFrameImg} />
      </div>
      <h2 className={styles.newSubtitle}>Product Video</h2>

      <iframe
        style={{ width: "50vw", height: "60vh", paddingLeft: "5%"}}
        src="https://player.vimeo.com/video/1084847802?h=11e5d103d9&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title="Collable Video"
      ></iframe>

      <h2 className={styles.newSubtitle}>
        Challenges and how we overcame them:
      </h2>
      <div className={styles.flexContent}>
        <p className={styles.paragraph}>
          <span className={styles.boldText}>Collable</span> served as an initial
          project to develop{" "}
          <span className={styles.boldText}>foundational design skills</span>.
          One significant challenge we encountered was effectively demonstrating
          user interactions with the design even with CGI, the advanced
          technological nature of the concept made it difficult to create
          realistic simulations.
          <br />
          <br />
          Additionally, we recognized opportunities to strengthen our{" "}
          <span className={styles.boldText}>user centered design process</span>.
          A more comprehensive approach would have included multiple iterations
          based on user feedback, allowing us to document and showcase how
          features evolved throughout the development cycle.
        </p>

        <img className={styles.challengesImg} src={challengesImg} />
      </div>
    </div>
  );
}

export default Collable;
