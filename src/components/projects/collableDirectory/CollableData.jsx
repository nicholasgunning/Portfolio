// src/components/your/path/collableData.js

// Asset Imports
import nickPhoto from "@/assets/photos/nickGunning.png";
import zoePhoto from "@/assets/photos/zoeJansen.jpeg";
import collableProblemStat from "@/assets/collable/collableProblemStat.png";
import productFrame from "@/assets/collable/productFrame.png";
import challengesImg from "@/assets/collable/challengesFrame.png";
import keyUserInsights1 from "@/assets/collable/keyUserInsights1.png";
import keyUserInsights2 from "@/assets/collable/keyUserInsights2.png";
import keyUserInsights3 from "@/assets/collable/keyUserInsights3.png";

export const collableData = {
  snapshot: {
    description: `Collable is an AR solution that enhances equity and engagement in remote work. It transforms physical spaces like walls and desks into interactive tools such as virtual whiteboards and shared creative surfaces. With AR glasses, team members can co-create and communicate in real time, replicating the energy of in office collaboration from home.`,
  },
  team: {
    title: "Team:",
    members: [
      {
        image: nickPhoto,
        name: "Nick Gunning (Myself)",
        description:
          "I assisted on the research of the problem area and worked on developing feature based feedback through methods like interviews and surveys.",
      },
      {
        image: zoePhoto,
        name: "Zoe Janssen",
        description:
          "Zoe worked on the design and development of the Glasses. She assisted in building the report and also forming features based on user feedback.",
      },
    ],
  },
  userInsights: {
    title: "User Insights:",
    intro: `Through interviews and surveys our group found compelling insights into the struggles of working at home.\n\nWe found that naturally employees produce more insightful outcomes when motivated by visual and tangible stimulation. By doing this, employees promote a more focused environment by reducing external distractions when working.`,
    keyInsightsTitle: "Key User Insights:",
    images: [
      { src: keyUserInsights1, alt: "Key user insight 1" },
      { src: keyUserInsights2, alt: "Key user insight 2" },
      { src: keyUserInsights3, alt: "Key user insight 3" },
    ],
  },
  problem: {
    title: "Problem",
    text: `The **pandemic** triggered a global shift to **remote and hybrid work**, fundamentally changing how we **communicate and collaborate**.\n\nThis transition exposed significant gaps in **hybrid and equitable collaboration**.\n\n**Equitable collaboration** means ensuring everyone can **contribute equally**, regardless of their financial status, available devices, or location.`,
    image: {
      src: collableProblemStat,
      alt: "Statistic showing collaboration issues in remote work",
      className: "problemStatImg",
    },
  },
  product: {
    title: "Product",
    text: `**Collabble** leverages **Augmented Reality (AR)** to transform hybrid team collaboration. Through AR glasses, team members connect via **interactive virtual avatars**, enabling seamless communication across locations.\n\nThe platform features **real-time collaborative tools**, including virtual sticky notes that facilitate instant ideation and feedback among all team members. Developed through comprehensive research, Collabble addresses the growing need for **effective hybrid collaboration solutions** in today's evolving workplace.`,
    image: {
      src: productFrame,
      alt: "Diagram of the Collable product features",
      className: "productFrameImg",
    },
  },
  video: {
    title: "Product Video",
    vimeoId: "1084847802?h=11e5d103d9",
  },
  challenges: {
    title: "Challenges and how we overcame them:",
    text: `**Collable** served as an initial project to develop **foundational design skills**. One significant challenge we encountered was effectively demonstrating user interactions with the design even with CGI, the advanced technological nature of the concept made it difficult to create realistic simulations.\n\nAdditionally, we recognized opportunities to strengthen our **user centered design process**. A more comprehensive approach would have included multiple iterations based on user feedback, allowing us to document and showcase how features evolved throughout the development cycle.`,
    image: {
      src: challengesImg,
      alt: "Illustration of design challenges",
      className: "challengesImg",
    },
  },
};
