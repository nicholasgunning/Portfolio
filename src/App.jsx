import Journey from "./containers/Journey";
import Overview from "./containers/Overview";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <Overview />
        <Journey />
      </ParallaxProvider>
    </>
  );
}
