import React from "react";
import styles from "../../../stylesheets/collable.module.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Glasses from "../../../../public/Glasses";

function TeamMember({ image, name, description }) {
  return (
    <div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.circleFrame}>
        <img className={styles.circleImage} src={image} alt={name} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

function Collable() {
  return (
    <div className={styles.background}>
      <h1>Collable</h1>
      <div className={styles.collable}>
        <div className={styles.modelContainer}>
          <Canvas className={styles.canvas}>
            <ambientLight />
            <OrbitControls
              enableZoom={false}
              rotateSpeed={0.2}
              dampingFactor={0.1}
            />
            <Suspense fallback={null}>
              <Glasses />
            </Suspense>
            <Environment preset="apartment" />
          </Canvas>
        </div>
        <div className={styles.description}>
          <h2>Snapshot</h2>
          <p className={styles.paragraph}>
            Collable enhances collaborative efforts among workers by providing
            visual and tangible stimulation. It employees create a more focused
            work environment by minimizing external distractions.
          </p>
        </div>
      </div>
      <h2 className={styles.newSubtitle}>Team:</h2>
      <div id={styles.teamMembers}>
        <TeamMember
          image="../../../../src/assets/collable/nickPhoto1.jpeg"
          name="Zoe Jansen"
          description="Lorem ipsum dolor sit amet..."
        />
        <TeamMember
          image="../../../../src/assets/collable/nickPhoto1.jpeg"
          name="Nick Gunning (Myself)"
          description="Lorem ipsum dolor sit amet..."
        />
      </div>

      <h2 className={styles.newSubtitle}>Problem</h2>
      <div className={styles.problemText}>
        <p className={styles.paragraph}>
          Due to the pandemic where there was a global shift to remote and
          hybrid work, causing the way we communicate and collaborate to change
          indefinitely.
          <br />
          <br />
          Therefore, the gap of hybrid and equitable collaboration was exposed.
          <br />
          <br />
          Equitable collaboration calls for the equal contribution of work from
          all, regardless of their financial status, device, or location.
        </p>
      </div>
      <h2 className={styles.newSubtitle}>INSERT VIDEO</h2>
      <h2 className={styles.newSubtitle}>
        Challenges and how we overcame them:
      </h2>
      <div className={styles.problemText}>
        <div className={styles.problemContainer}>
          <p className={styles.paragraph}>
            Collable was an early project that highlighted some introductory
            design skills. During the project, we were unable to effectively
            capture an effective demonstration of user interaction with the
            design, the high tech and futuristic nature of the design itself
            made it particularly difficult to simulate even with the assistance
            of CGI.
            <br />
            <br />
            During the project we also struggled to ideate and refine it based
            on user feedback, a more comprehensive project would of highlighted
            how the feature evolved overtime.
          </p>
          <img
            className={styles.problemFrame}
            src="../../../../src/assets/collable/problemFrame.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Collable;
