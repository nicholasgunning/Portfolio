import styles from "../../../stylesheets/chemtable.module.css";
import VideoPlay from "./videoPlay";
import { useEffect, useState } from "react";

import statistic from "@/assets/chemtable/statistic.png";
import initialSolution1 from "@/assets/chemtable/initialSolutions/initialSolution1.png";
import initialSolution2 from "@/assets/chemtable/initialSolutions/initialSolution2.png";
import surveyPhoto from "@/assets/chemtable/surveyPhoto.png";
import oldModel from "@/assets/chemtable/oldModel.png";
import tokens from "@/assets/chemtable/tokens.png";
import prototypeVideo from "@/assets/chemtable/prototypeVideo.mp4";
import backArrow from "@/assets/backArrow.png";

function ChemTable() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutPoint = 100;
      const newOpacity = Math.max(1 - scrollY / fadeOutPoint, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.background}
      style={{ position: "relative", paddingBottom: "5%" }}
    >
      <h1>
        {" "}
        <span style={{ paddingBottom: "5%" }}>
          <a href="/">
            {" "}
            <img id={styles.backArrow} src={backArrow} alt="" />
          </a>
        </span>{" "}
        CHEMTABLE
      </h1>
      <div className={styles.headerContainer}>
        <VideoPlay />
        <div className={styles.headerTextContainer}>
          <p className={styles.headerText} style={{ opacity }}>
            Easing teacher workload with interactive digital lessons,
            maintaining quality education despite Australia's growing teacher
            shortage.{" "}
          </p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h2>Problem</h2>
        <div className={styles.flexContent}>
          <p className={styles.description}>
            The Chemtable is designed to provide effective digital lessons to
            students that don’t compromise on quality. Teachers in Australia see
            workload as a pressing issue. The Chemtable provides digital lesson
            plans alleviating an increasing teacher workload that’s resulted
            from growing teacher shortages around Australia.
          </p>

          <img
            className={styles.statisticImg}
            loading="lazy"
            src={statistic}
            alt="statistic"
          />
        </div>

        <h2>User Research</h2>
        <div className={styles.flexContent}>
          <p className={styles.description}>
            Our user research on Australian teachers revealed significant
            challenges with workload and lesson planning. Teachers spend an
            average of{" "}
            <span className={styles.boldText}>10 hours per week</span> on lesson
            planning and an additional{" "}
            <span className={styles.boldText}>5 hours each</span> on resource
            gathering, marking, and providing feedback. Through Questionnaires
            and Online Ethnography, we found that time constraints make it
            difficult for teachers to{" "}
            <span className={styles.boldText}>
              efficiently plan and execute their lessons.
            </span>
          </p>
          <img
            className={styles.surveyPhoto}
            src={surveyPhoto}
            loading="lazy"
            alt="surveyPhoto"
          />
        </div>
        <h2>Initial Solutions</h2>

        <img
          className={styles.initialSolutionImg}
          src={initialSolution1}
          alt="initialSolution1"
          loading="lazy"
        />
        <p>
          An early solution we storyboarded was a digital based platform used to
          connect current teachers to university students studying teachers
          looking to increase there placement hours.
          <br />
          <br />
          The platform connected remote teachers to these students and allowed
          the teachers with excessive workloads to offload monotonous and
          administrative work to these students to free up more time for them.
          This work was designed for students to get a feel for there placements
          and what type of work they would be doing before they committed to a
          full placement. This work is also designed to increase placement hours
          for students.
          <br />
          <br />
          We decided not to further iterate through with this method because it
          would require significant change in university systems to motivate
          these placement students to support these rural teachers for
          additional placement hours.
        </p>

        <img
          className={styles.initialSolutionImg}
          src={initialSolution2}
          alt="initialSolution2"
          loading="lazy"
        />

        <p>
          Another potential solution we storyboarded was something called “The
          Resource Box”. It was a another digital platform used for resource
          sharing between schools in Australia who lacked resources. By
          connecting these schools, it allows these under privileged schools to
          share resources that help them and can free up time for other schools.{" "}
          <br />
          <br />
          The solution also aims to gamify this on its digital platform by
          rewarding schools who donate both digital and physical resources. The
          app aims to facilitate a wide sharing web for schools to all
          contribute together through its intrinsic motivation.
          <br />
          <br />
          However, we did not decide to move forward with this due to the
          establishment of other digital platforms used for schools to share
          resources. We also found that finding intrinisic motivation for this
          to work properly would be difficult without excessive funding.
        </p>
      </div>
      <h2 style={{ paddingTop: "5%" }}>Initial Prototype</h2>
      <div className={styles.flexContent}>
        <p className={styles.description}>
          We evaluated both projector and touchscreen options for our final
          prototype. While projectors were more cost effective, they presented
          significant technical challenges, particularly in implementing
          reliable object recognition (Yuan et al., 2022). Through collaboration
          with ADP faculty, we secured a ten point touchscreen display, which
          aligned with our original vision. The touchscreen solution offers
          superior interactivity and provides a more engaging STEM learning
          experience for students compared to a projected interface.
        </p>
        <img className={styles.oldModel} src={oldModel} alt="oldModel" />
      </div>

      <h2 style={{ paddingTop: "5%" }}>Final Prototype</h2>

      <div className={styles.flexContent}>
        <p className={styles.description}>
          The final prototype consists of an interactive touchscreen table with
          advanced object recognition capabilities. The system uses
          triangulation of touch points to identify and track physical objects
          placed on its surface. To demonstrate its educational potential, we
          implemented a chemistry lesson module featuring real laboratory
          equipment specifically are placed on the table's surface, the system
          recognizes them through their unique touch point patterns.
        </p>
        <img className={styles.tokensImg} src={tokens} alt="oldModel" />
      </div>

      <h2>Prototype Video</h2>
      <video className={styles.prototypeVideo} controls>
        <source src={prototypeVideo} type="video/mp4" loading="lazy" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ChemTable;
