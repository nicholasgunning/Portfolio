import React, { useState } from "react";
import styles from "../../../stylesheets/SoftwareProjects.module.scss";
import backArrow from "@/assets/backArrow.png";
import { projectData } from "./softwareProjectData.jsx";

// Helper component for project links to reduce repetition
const ProjectLink = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <button className={styles.viewButton}>
      {text}
      <span>→</span>
    </button>
  </a>
);

// Reusable component for the video with its own loading state
const LoadingVideo = ({ src, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={className}>
      {isLoading && <p className={styles.loadingText}>Loading video...</p>}
      <video
        {...props}
        onLoadedData={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

function SoftwareProjects() {
  const { virtualScroll, cryptoInfo, towerDefence, pacman } = projectData;

  return (
    <div className={styles.background}>
      <header className={styles.header}>
        <span>
          <a href="/">
            {" "}
            <img className={styles.backArrow} src={backArrow} alt="" />
          </a>
        </span>
        <h1>Software Projects</h1>
      </header>

      <div className={styles.content}>
        {/* --- Project 1: Virtual Scroll Access System --- */}
        <section className={styles.projectSection}>
          <h2 className={styles.subtitle}>{virtualScroll.title}</h2>
          <div className={styles.blockContent}>
            <div className={styles.flexContent}>
              <LoadingVideo
                src={virtualScroll.video}
                className={styles.videoP1}
                autoPlay
                muted
                controls={false}
              />
              <p className={styles.descriptionText}>{virtualScroll.overview}</p>
            </div>

            <h3>{virtualScroll.ciCd.heading}</h3>
            <div className={styles.flexContent}>
              <p className={styles.paragraph}>{virtualScroll.ciCd.text}</p>
              <img
                src={virtualScroll.ciCd.image}
                alt="Sprint backlog in Jira"
                className={styles.imageP1_sprint}
              />
            </div>

            <h3>{virtualScroll.role.heading}</h3>
            <p className={styles.paragraph}>{virtualScroll.role.text}</p>

            <img
              src={virtualScroll.role.image}
              alt="Project planning board"
              className={styles.imageP1_board}
            />

            <h3>{virtualScroll.reflection.heading}</h3>
            <div className={styles.flexContent}>
              <p className={styles.paragraph}>
                {virtualScroll.reflection.text}
              </p>
              <img
                src={virtualScroll.reflection.image}
                alt="Project group photo"
                className={styles.imageP1_group}
              />
            </div>

            <div className={styles.buttonGroup}>
              <ProjectLink
                href={virtualScroll.links.report}
                text="View Report"
              />
              <ProjectLink href={virtualScroll.links.code} text="View Code" />
            </div>
          </div>
        </section>

        {/* --- Project 2: Crypto Info --- */}
        <section className={styles.projectSection}>
          <h2 className={styles.subtitle}>{cryptoInfo.title}</h2>
          <div className={styles.project2Content}>
            <div className={styles.flexContent}>
              <video className={styles.videoP2} autoPlay loop muted>
                <source src={cryptoInfo.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.blockContent}>
                <h3>{cryptoInfo.overview.heading}</h3>
                <p>{cryptoInfo.overview.text}</p>
                <h3>{cryptoInfo.videoExplanation.heading}</h3>
                <iframe
                  width="400"
                  height="260"
                  src={`https://www.youtube.com/embed/${cryptoInfo.videoExplanation.youtubeId}`}
                  title="YouTube video player for Crypto Info project"
                  FrameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <h3>{cryptoInfo.improvements.heading}</h3>
            <p className={styles.paragraph}>{cryptoInfo.improvements.text}</p>
          </div>
        </section>

        {/* --- Project 3: Tower Defence --- */}
        <section className={styles.projectSection}>
          <h2 className={styles.subtitle}>{towerDefence.title}</h2>
          <div className={styles.flexContent}>
            <div className={styles.blockContent}>
              <video className={styles.videoP3} autoPlay loop muted>
                <source src={towerDefence.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.textBlockP3}>
                <h3>{towerDefence.report.heading}</h3>
                <p>{towerDefence.report.text}</p>
                <ProjectLink
                  href={towerDefence.report.link}
                  text="View Report"
                />
              </div>
            </div>
            <div className={styles.blockContentP3}>
              <h3>{towerDefence.overview.heading}</h3>
              <p>{towerDefence.overview.text}</p>
              <h3>{towerDefence.reflection.heading}</h3>
              <p>{towerDefence.reflection.text}</p>
            </div>
          </div>
        </section>

        {/* --- Project 4: Pacman --- */}
        <section className={styles.projectSection}>
          <h2 className={styles.subtitle}>{pacman.title}</h2>
          <div className={styles.flexContent}>
            <video className={styles.videoP4} autoPlay loop muted>
              <source src={pacman.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.blockContent}>
              <h3>{pacman.overview.heading}</h3>
              <p>{pacman.overview.text}</p>
            </div>
          </div>
          <div className={styles.blockContent}>
            <h3>{pacman.uml.heading}</h3>
            <div className={styles.flexContent}>
              <img
                src={pacman.uml.images[0]}
                alt="UML Class Diagram"
                className={styles.imageP4}
              />
              <img
                src={pacman.uml.images[1]}
                alt="Sequence Diagram"
                className={styles.imageP4}
              />
            </div>
            <p className={styles.paragraph}>{pacman.uml.text}</p>
            <div className={styles.buttonGroup}>
              <ProjectLink href={pacman.links.report} text="View Report" />
              <ProjectLink href={pacman.links.code1} text="View Part 1 Code" />
              <ProjectLink href={pacman.links.code2} text="View Part 2 Code" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SoftwareProjects;
