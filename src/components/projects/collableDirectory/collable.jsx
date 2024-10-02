import React from "react";
import styles from "../../../stylesheets/collable.module.css";
// import CollableModel from "../../../../public/collableModel";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";

function Collable() {
  return (
    <div className={styles.background}>
      <h1>Collable</h1>
      <p>
        Collable is a web application that allows users to create and share
        collaborative playlists. Users can create a playlist, add songs to it,
        and share it with others. Users can also collaborate on playlists by
        adding songs to playlists created by others. Collable is built using
        React, Node.js, Express, and MongoDB.
      </p>
      {/* <Canvas>
      <ambientLight/>
      <OrbitControls />
        <Suspense fallback={null}>
          <CollableModel />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas> */}
    </div>
  );
}

export default Collable;
