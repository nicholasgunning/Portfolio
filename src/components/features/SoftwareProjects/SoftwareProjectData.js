import video1 from "@/assets/images/softwareProjects/project1/video1.mp4";
import sprintBacklog from "@/assets/images/softwareProjects/project1/sprintBacklog.png";
import project1ImageBoard from "@/assets/images/softwareProjects/project1/project1ImageBoard.png";
import groupPhoto from "@/assets/images/softwareProjects/project1/groupPhoto.png";
import report1 from "@/assets/images/softwareProjects/project1/project1Report.pdf";
import video2 from "@/assets/images/softwareProjects/project2/video2.mp4";
import video3 from "@/assets/images/softwareProjects/project3/video3.mp4";
import report2 from "@/assets/images/softwareProjects/project3/project3Report.pdf";
import video4 from "@/assets/images/softwareProjects/project4/video4.mp4";
import umlClassDiagram from "@/assets/images/softwareProjects/project4/umlClassDiagram.png";
import sequenceDiagram from "@/assets/images/softwareProjects/project4/sequenceDiagram.png";
import report3 from "@/assets/images/softwareProjects/project4/project4Report.pdf";

export const projectData = {
  virtualScroll: {
    title: "Virtual Scroll Access System",
    video: video1,
    overview: `This project focused on creating a virtual txt file access system in Java Swing. Over 3 Sprints my group and I developed a portal where users would login and upload documents to a portal. Based on the users credentials they could read, view, download, search and preview txt files.\n\nThe project was set over 4 weeks and included bi-weekly meetings with our tutor to perform Sprint demonstrations in front of our key stakeholder.`,
    ciCd: {
      heading: "CI/CD Pipeline",
      text: "The project tasked us with using the Scrum Framework and specific applications and services in accordance to the Agile Development Cycle. Most notably, Github for collaboration, Gradle for build automation, Jira for project management and Jenkins for automated testing.",
      image: sprintBacklog,
    },
    role: {
      heading: "Role/Responsibilities",
      text: `This project saw me take the role as a Scrum Master. This mainly involved reviewing the code, making any changes as per the requirements and working on the feedback given by the product manager. In a more practical sense, this involved me resolving conflicts on Github between conflicting commits and ensuring the group was on the same page about incoming features and responsibilities. I was also tasked with leading the group in the daily standups and ensuring the group was on track to meet the sprint goals.\n\nAdditionally, my role as a Software Developer also involved me working on specific features.`,
      image: project1ImageBoard,
    },
    reflection: {
      heading: "Reflection",
      text: `Working as a Scrum Master taught me the importance of communication between software developers. Many times during this project I felt there was a lack of key communication which left our group working inefficiently.\n\nDespite this, this project gave me a great understanding of real world working conditions. it taught me how to manage group conflicts and work around a difficult group. The final assignment scored 21/25.`,
      image: groupPhoto,
    },
    links: {
      report: report1,
      code: "https://github.com/nicholasgunning/TextFileAcessSystem.git",
    },
  },
  cryptoInfo: {
    title: "Crypto Info",
    video: video2,
    overview: {
      heading: "Project Overview",
      text: `Crypto Info is a comprehensive application that enables users to track cryptocurrency prices and access the latest crypto-related news within a single platform. Developed using Xcode and SwiftUI, the app integrates live price data and news updates through APIs, providing users with real-time information.\n\nThis project allowed me to deepen my understanding of API integration and enhanced my proficiency with SwiftUI for building intuitive user interfaces.`,
    },
    videoExplanation: {
      heading: "Video Explanation",
      youtubeId: "f150eqMuVoM?si=_HkRWop1HOt7PwBU",
    },
    improvements: {
      heading: "Improvements",
      text: "Looking back, one enhancement I would consider is implementing a user authentication system to enable personalized experiences, such as tailored cryptocurrency watchlists and customized news feeds. With this personalisation, users could receive notifications for price changes and news updates for their selected cryptocurrencies.",
    },
  },
  towerDefence: {
    title: "Tower Defence",
    video: video3,
    overview: {
      heading: "Project Overview:",
      text: `Tower Defence is a game I developed during an object oriented programming subject. The game was built using JavaFX and showcased vital object oriented skills through a game designed at building a defense against ghosts. The ghosts travelled in waves and are stopped using towers and spells.\n\nThe project also showcases algorithmic design skills such as a modified breath first search algorithm to track the shortest path for the ghosts.`,
    },
    report: {
      heading: "Report",
      text: "The project also included a Report and UML diagram to display object oriented features of the game. This highlighted the importance of GRASP and SOLID principles through abstract classes, interfaces etc. This project scored a 16.25/17.",
      link: report2,
    },
    reflection: {
      heading: "Reflection:",
      text: "Although this project was highly challenging as a beginner developer, completing it and delivering a polished game was incredibly rewarding. The extensive time spent debugging not only enhanced my skills in error checking but also taught me effective strategies for resolving common coding issues.",
    },
  },
  pacman: {
    title: "Pacman",
    video: video4,
    overview: {
      heading: "Project Overview:",
      text: `One of my more recent projects involved me creating a Pacman game in Java fx. While this initially doesn't sound too difficult, the complexity of the project came in utilising software design and construction patterns to build the game.\n\nThe project was constructed over 3 assignments and required me to\n\nThis project conceptualised the importance of utilising these patterns for more readable, reusable and extendable code.`,
    },
    uml: {
      heading: "UML Diagrams",
      images: [umlClassDiagram, sequenceDiagram],
      text: "The subject also taught me the importance of different UML diagrams required to help express and conceptualise code. These UML diagrams are much more developed then previous projects and helped me understand the importance of planning before coding. The feature correct relationships between classes and helped me understand the flow of the game. The final assignment scored 18/20.",
    },
    links: {
      report: report3,
      code1: "https://github.com/nicholasgunning/PacmanP1.git",
      code2: "https://github.com/nicholasgunning/PacmanP2.git",
    },
  },
};