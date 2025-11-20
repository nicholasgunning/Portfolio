import styles from "../../../stylesheets/Collable.module.scss";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { collableData } from "./CollableData.jsx";

import FadeInOnScroll from "../components/fadeInOnScroll.jsx";

import VideoPlayer from "../components/VideoPlayer.jsx";

import backArrow from "@/assets/backArrow.png";
import Glasses from "./glasses";
import TeamMember from "../components/teamMember.jsx";
import React from "react";

// The 3D model component remains unchanged
function RotatingGlasses() {
  const groupRef = useRef();
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * -0.02;
      groupRef.current.rotation.y += delta * 0.02;
    }
  });
  return (
    <group ref={groupRef}>
      <Glasses />
    </group>
  );
}

// A helper function to render paragraphs with bold text
const renderTextWithBold = (text) => {
  return text
    .split("**")
    .map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
};

function Collable() {
  const {
    landing,
    snapshot,
    team,
    userInsights,
    problem,
    product,
    video,
    challenges,
  } = collableData;

  return (
    <div className={styles.background}>
      <header className={styles.header}>
        <a href="/">
          <img
            className={styles.backArrow}
            src={backArrow}
            alt="Back to home"
          />
        </a>
        <h1>Collable</h1>
      </header>

      <div className={styles.content}>
        <div className={styles.flexContent}>
          <p className={styles.landingText}>
            {renderTextWithBold(landing.landingText)}
            {/* {renderTextWithBold(landing.landingText)} Why does this not work like it does for everything else */}
          </p>
          <div className={styles.collableScene}>
            <VideoPlayer
              width="150%"
              // Pass the WebM variable to webmSrc
              webmSrc={landing.Webm}
              // Pass the MOV variable to movSrc
              movSrc={landing.Mov}
            />
          </div>
        </div>

        <h2 className={styles.subtitle}>Snapshot</h2>
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
          <div className={styles.mainDescription}>
            <p className={styles.mainBlurb}>
              {renderTextWithBold(snapshot.description)}
            </p>
          </div>
        </div>

        <h2 className={styles.subtitle}>{team.title}</h2>
        <div className={styles.teamMembers}>
          <div className={styles.flexContent}>
            {team.members.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                name={member.name}
                description={member.description}
              />
            ))}
          </div>
        </div>

        <h2 className={styles.subtitle}>{userInsights.title}</h2>
        <p className={styles.paragraph}>{userInsights.intro}</p>
        <h3 className={styles.keyInsightsTitle}>
          {userInsights.keyInsightsTitle}
        </h3>
        <div className={styles.flexContent}>
          {userInsights.images.map((insight, index) => (
            <FadeInOnScroll key={index} delay={index * 200}>
              <img
                className={styles.keyUserInsights}
                src={insight.src}
                alt={insight.alt}
              />
            </FadeInOnScroll>
          ))}
        </div>

        <h2 className={styles.subtitle}>{problem.title}</h2>
        <div className={styles.flexContent}>
          <p className={styles.paragraph}>{renderTextWithBold(problem.text)}</p>
          <img
            src={problem.image.src}
            alt={problem.image.alt}
            className={styles[problem.image.className]}
          />
        </div>

        <h2 className={styles.subtitle}>{product.title}</h2>
        <div className={styles.flexContent}>
          <p className={styles.paragraph}>{renderTextWithBold(product.text)}</p>
          <img
            src={product.image.src}
            alt={product.image.alt}
            className={styles[product.image.className]}
          />
        </div>

        <h2 className={styles.subtitle}>{video.title}</h2>
        <iframe
          className={styles.videoFrame}
          src={`https://player.vimeo.com/video/${video.vimeoId}&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="Collable Product Video"
        ></iframe>

        <h2 className={styles.subtitle}>{challenges.title}</h2>
        <div className={styles.flexContent}>
          <p className={styles.paragraph}>
            {renderTextWithBold(challenges.text)}
          </p>
          <img
            src={challenges.image.src}
            alt={challenges.image.alt}
            className={styles[challenges.image.className]}
          />
        </div>
      </div>
    </div>
  );
}

export default Collable;
