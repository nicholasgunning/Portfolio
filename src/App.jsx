import Journey from "./containers/Journey";
import Overview from "./containers/Overview";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ParallaxProvider>
        <Journey />
      </ParallaxProvider>
    </Router>
  );
}
