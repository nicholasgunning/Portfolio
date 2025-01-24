import styles from "../../../stylesheets/softwareProjects.module.css";
import video1 from "@/assets/softwareProjects/project1/video1.mp4";
import sprintBacklog from "@/assets/softwareProjects/project1/sprintBacklog.png";
import project1ImageBoard from "@/assets/softwareProjects/project1/project1ImageBoard.png";
import groupPhoto from "@/assets/softwareProjects/project1/groupPhoto.png";
import report1 from "@/assets/softwareProjects/project1/project1Report.pdf";
import video2 from "@/assets/softwareProjects/project2/video2.mp4";
import video3 from "@/assets/softwareProjects/project3/video3.mp4";
import report2 from "@/assets/softwareProjects/project3/project3Report.pdf";
import video4 from "@/assets/softwareProjects/project4/video4.mp4";
import umlClassDiagram from "@/assets/softwareProjects/project4/umlClassDiagram.png";
import sequenceDiagram from "@/assets/softwareProjects/project4/sequenceDiagram.png";
import report3 from "@/assets/softwareProjects/project4/project4Report.pdf";

function softwareProjects() {
  return (
    <div className={styles.background}>
      <h1>Software Projects</h1>
      <h2 className={styles.projectTitle}>Virtual Scroll Access System</h2>
      <div className={styles.blockContent}>
        <div className={styles.flexContent}>
          <video width="60%" controls={false} autoPlay muted>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ paddingTop: "5%" }}>
            This project focused on creating a virtual txt file access system in
            Java Swing. Over 3 Sprints my group and I developed a portal where
            users would login and upload documents to a portal. Based on the
            users credentials they could read, view, download, search and
            preview txt files.
            <br />
            <br />
            The project was set over 4 weeks and included bi-weekly meetings
            with our tutor to perform Sprint demonstrations in front of our key
            stakeholder.{" "}
          </p>
        </div>
        <h3 style={{ paddingLeft: "5%" }}>CI/CD Pipeline</h3>
        <div className={styles.flexContent}>
          <p style={{ paddingLeft: "5%" }}>
            The project tasked us with using the Scrum Framework and specific
            applications and services in accordance to the Agile Development
            Cycle. Most notably, Github for collaboration, Gradle for build
            automation, Jira for project management and Jenkins for automated
            testing.
          </p>
          <img
            src={sprintBacklog}
            style={{
              width: "30%",
              height: "auto",
              padding: "0 5% 0 5%",
              marginTop: "-3%",
            }}
          />
        </div>
        <h3 style={{ paddingLeft: "5%" }}>Role/Responsibilities</h3>
        <p style={{ paddingLeft: "5%" }}>
          This project saw me take the role as a Scrum Master. This mainly
          involved reviewing the code, making any changes as per the
          requirements and working on the feedback given by the product manager.
          In a more practical sense, this involved me resolving conflicts on
          Github between conflicting commits and ensuring the group was on the
          same page about incoming features and responsibilities. I was also
          tasked with leading the group in the daily standups and ensuring the
          group was on track to meet the sprint goals.
          <br />
          <br />
          Additionally, my role as a Software Developer also involved me working
          on specific features.
        </p>
        <div className={styles.flexContent}>
          <img
            src={project1ImageBoard}
            style={{
              width: "90%",
              height: "auto",
              padding: "0 5% 0 5%",
            }}
          />
        </div>

        <h3 style={{ paddingLeft: "5%" }}>Reflection</h3>
        <div className={styles.flexContent}>
          <p style={{ paddingLeft: "5%" }}>
            Working as a Scrum Master taught me the importance of communication
            between software developers. Many times during this project I felt
            there was a lack of key communication which left our group working
            inefficiently.
            <br />
            <br />
            Despite this, this project gave me a great understanding of real
            world working conditions. it taught me how to manage group conflicts
            and work around a difficult group. The final assignment scored
            21/25.
          </p>
          <img
            src={groupPhoto}
            style={{
              width: "30%",
              height: "auto",
              padding: "0 5% 0 0",
              marginTop: "-3%",
            }}
          />
        </div>
        <div className="styles.flexContent">
          <a href={report1} target="_blank">
            <button
              style={{ marginLeft: "5%" }}
              className={styles.viewPDFButton}
            >
              View Report
              <span>→</span>
            </button>
          </a>
          <a
            href={"https://github.com/nicholasgunning/TextFileAcessSystem.git"}
            target="_blank"
          >
            <button
              style={{ marginLeft: "5%" }}
              className={styles.viewPDFButton}
            >
              View Code
              <span>→</span>
            </button>
          </a>
        </div>
      </div>
      <h2 className={styles.projectTitle} style={{ paddingTop: "7%" }}>
        Crypto Info
      </h2>
      <div className={styles.project2Content}>
        <div className={styles.flexContent}>
          <video id={styles.video2} width="25%" muted autoPlay loop>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.blockContent}>
            <h3>Project Overview</h3>
            <p>
              Crypto Info is a comprehensive application that enables users to
              track cryptocurrency prices and access the latest crypto-related
              news within a single platform. Developed using Xcode and SwiftUI,
              the app integrates live price data and news updates through APIs,
              providing users with real-time information.
              <br />
              <br />
              This project allowed me to deepen my understanding of API
              integration and enhanced my proficiency with SwiftUI for building
              intuitive user interfaces.
            </p>
            <h3>Video Explaination</h3>
            <iframe
              width="400"
              height="260"
              src="https://www.youtube.com/embed/f150eqMuVoM?si=_HkRWop1HOt7PwBU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <h3 style={{ paddingLeft: "5%" }}>Improvements</h3>
        <p style={{ paddingLeft: "5%" }}>
          Looking back, one enhancement I would consider is implementing a user
          authentication system to enable personalized experiences, such as
          tailored cryptocurrency watchlists and customized news feeds. With
          this personalisation, users could receive notifications for price
          changes and news updates for their selected cryptocurrencies.
        </p>
      </div>
      <h2 className={styles.projectTitle} style={{ paddingTop: "7%" }}>
        Tower Defence
      </h2>
      <div className={styles.flexContent}>
        <div className={styles.blockContent}>
          <video id={styles.video3} width="130%" muted autoPlay loop>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 style={{ paddingLeft: "10%" }}>Report</h3>
          <p style={{ paddingLeft: "10%", width: "100%" }}>
            The project also included a Report and UML diagram to display object
            oriented features of the game. This highlighted the importance of
            GRASP and SOLID principles through abstract classes, interfaces etc.
            This project scored a 16.25/17.
          </p>
          <a href={report2} target="_blank">
            <button
              style={{ marginLeft: "10%" }}
              className={styles.viewPDFButton}
            >
              View Report
              <span>→</span>
            </button>
          </a>
        </div>
        <div className={styles.blockContent} style={{ paddingLeft: "15%" }}>
          <h3>Project Overview: </h3>
          <p>
            Tower Defence is a game I developed during an object oriented
            programming subject. The game was built using JavaFX and showcased
            vital object oriented skills through a game designed at building a
            defense against ghosts. The ghosts travelled in waves and are
            stopped using towers and spells.
            <br />
            <br />
            The project also showcases algorithmic design skills such as a
            modified breath first search algorithm to track the shortest path
            for the ghosts.
          </p>

          <h3>Reflection: </h3>
          <p>
            Although this project was highly challenging as a beginner
            developer, completing it and delivering a polished game was
            incredibly rewarding. The extensive time spent debugging not only
            enhanced my skills in error checking but also taught me effective
            strategies for resolving common coding issues.
          </p>
        </div>
      </div>
      <h2 className={styles.projectTitle} style={{ paddingTop: "7%" }}>
        Pacman
      </h2>
      <div className={styles.flexContent}>
        <video id={styles.video3} width="50%" muted autoPlay loop>
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.blockContent}>
          <h3>Project Overview: </h3>
          <p>
            One of my more recent projects involved me creating a Pacman game in
            Java fx. While this initially doesn't sound too difficult, the
            complexity of the project came in utilising software design and
            construction patterns to build the game.
            <br />
            <br />
            The project was constructed over 3 assignments and required me to
            <br />
            <br />
            This project conceptualised the importance of utilising these
            patterns for more readable, reusable and extendable code.
          </p>
        </div>
      </div>
      <div className={styles.blockContent} style={{ paddingBottom: "10%" }}>
        <h3 style={{ paddingLeft: "5%" }}>UML Diagrams</h3>
        <div className={styles.flexContent}>
          <img
            src={umlClassDiagram}
            style={{
              width: "35%",
              height: "auto",
              padding: "0 5% 0 5%",
              marginTop: "-3%",
            }}
          />
          <img
            src={sequenceDiagram}
            style={{
              width: "35%",
              height: "auto",
              padding: "0 5% 0 5%",
              marginTop: "-3%",
            }}
          />
        </div>
        <p style={{ paddingLeft: "5%", width: "80%" }}>
          The subject also taught me the importance of different UML diagrams
          required to help express and conceptualise code. These UML diagrams
          are much more developed then previous projects and helped me
          understand the importance of planning before coding. The feature
          correct relationships between classes and helped me understand the
          flow of the game. The final assignment scored 18/20.
        </p>
        <div className="styles.flexContent">
          <a href={report3} target="_blank">
            <button
              style={{ marginLeft: "5%" }}
              className={styles.viewPDFButton}
            >
              View Report
              <span>→</span>
            </button>
          </a>
          <a
            href="https://github.com/nicholasgunning/PacmanP1.git"
            target="_blank"
          >
            <button
              style={{ marginLeft: "5%" }}
              className={styles.viewPDFButton}
            >
              View Part 1 Code
              <span>→</span>
            </button>
          </a>

          <a
            href="https://github.com/nicholasgunning/PacmanP2.git"
            target="_blank"
          >
            <button
              style={{ marginLeft: "5%" }}
              className={styles.viewPDFButton}
            >
              View Part 2 Code
              <span>→</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default softwareProjects;
