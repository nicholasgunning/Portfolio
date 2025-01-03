import ProjectCards from "./components/projectCards";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <ProjectCards />
      </ParallaxProvider>
    </>
  );
}
