import React from "react";
import styles from "../../../stylesheets/collable.module.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Glasses from "../../../../public/Glasses";

function Collable() {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Collable</h1>
      <div className={styles.collable}>
        <div className={styles.modelContainer}>
          <Canvas>
            <ambientLight />
            <OrbitControls
              enableZoom={false}
              rotateSpeed={0.2} // Lower number = less sensitive rotation
              dampingFactor={0.1} // Adds smoothing to the movement
            />
            <Suspense fallback={null}>
              <Glasses />
            </Suspense>
            <Environment preset="apartment" />
          </Canvas>
        </div>
        <div className={styles.description}>
          <h2 className={styles.subtitle}>Snapshot</h2>
          <p className={styles.paragraph}>
            Collable enhances collaborative efforts among workers by providing
            visual and tangible stimulation. It employees create a more focused
            work environment by minimizing external distractions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collable;
