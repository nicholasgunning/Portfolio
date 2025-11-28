// informedGlobeData.js

// --- Asset Imports ---

// Team member images
import nickPhoto from "@/assets/images/teamPhotos/nickGunning.png";
import zoePhoto from "@/assets/images/teamPhotos/zoeJansen.jpeg";
import oliverPhoto from "@/assets/images/teamPhotos/oliverWaterhouse.jpeg";

// Graph and design decision images
import donutGraph from "@/assets/images/myInformedGlobe/graph/donutGraph.png";
import designD1 from "@/assets/images/myInformedGlobe/designD/designD1.png";
import designD2 from "@/assets/images/myInformedGlobe/designD/designD2.png";
import designD3 from "@/assets/images/myInformedGlobe/designD/designD3.png";

export const projectData = {
  // --- Team Member Data ---
  team: [
    {
      image: nickPhoto,
      name: "Nick Gunning (Myself)",
      description:
        "Focused on creating an intuitive user experience through the Figma Prototype. Conducted user interviews and research to ensure our content remains relevant.",
    },
    {
      image: zoePhoto,
      name: "Zoe Jansen",
      description:
        "Led the development of the interactive features based on user feedback. Helped build upon the Design iterations.",
    },
    {
      image: oliverPhoto,
      name: "Oliver Waterhouse",
      description:
        "Developed the Heuristic Evaluation and Usability testing. Also assisted in the Affinity Mapping and User Journey Mapping.",
    },
  ],

  // --- Problem Statement Data ---
  problem: {
    paragraph: `Survey and Interview data revealed that young adults consume less news than older generations and often find it overwhelming or confusing. This can lead to <strong>uninformed voting</strong> and disinterest in current events. While they have more access to political information than ever, <strong>misinformation</strong> and biased portrayals make it <strong>challenging to make informed decisions</strong>.`,
    image: donutGraph,
  },

  // --- Design Decisions Data ---
  designDecisions: [
    {
      image: designD1,
      texts: [
        {
          id: "dd1Text1",
          content: `Initial Sketches saw an <strong>introduction of a globe</strong> for users to select the country they were interested in.<br/><br/>This was later rejected due to the <strong>lack of user feedback</strong> and usability compared to a 2D flat map.`,
        },
        {
          id: "dd1Text2",
          content: `Map includes names of countries to assist individuals who are unaware of geography.<br/><br/>Implementing a search feature so that <strong>users have choice about which country to read about</strong>. <i>(User control and freedom)</i><br/><br/>Added instructions at the top of the page to <strong>keep users informed about what to do</strong>. <i>(Visibility of system status)</i>`,
        },
      ],
    },
    {
      image: designD2,
      texts: [
        {
          id: "dd2Text1",
          content: `A grid like layout was first sketched to show <strong>feature articles based on a country</strong>.<br/><br/>First sketches showed the info on and about the country below the article tiles, however, user refinement highlighted that <strong>users wanted to context on the country first</strong> before viewing news stories.`,
        },
        {
          id: "dd2Text2",
          content: `Refined mockups show key information about a country before showing <strong>top news stories</strong>. We wanted to give users <strong>non-bias important information</strong> based on a country that would make articles <strong>more informative</strong>.<br/><br/>The addition of tags for the news articles gave <strong>users quick access to what they were looking for</strong>.`,
        },
      ],
    },
    {
      image: designD3,
      texts: [
        {
          id: "dd2Text1",
          content: `Highlighted article page that showed information based on the searched country. Users revealed that they wanted to include information on how it impacts their home country. This created, <strong>intrinsic motivation for the user</strong>.<br/><br/>Removal of search bar was needed because <strong>users could simply just navigate back to the globe page</strong>.`,
        },
        {
          id: "dd2Text2",
          content: `Refined mockups showed a dictionary feature that provided definitions of unknown words to <strong>give users more accessibility</strong>.<br/><br/>Article content was further broken down to <strong>create more whitespace for the user</strong>.<br/><br/>At conclusion of article a circle diagram visualised economic factors and how they impact your home country.`,
        },
      ],
    },
  ],
};
