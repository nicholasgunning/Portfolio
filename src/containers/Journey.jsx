import React, { useEffect } from "react";
import Milestone from "../components/Milestone";
import "../stylesheets/Journey.scss";

function Journey() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("my-journey").classList.add("is-journey-mounted");
    }, 1000 * 1);
    return () => {
      document
        .getElementById("my-journey")
        .classList.remove("is-journey-mounted");
    };
  }, []);
  return (
    <div id="my-journey" className="journey">
      <Milestone milestone={"Collable"} year={"2021-202"} />
      <Milestone milestone={"My Informed Globe"} year={"2021-202"} />
      <Milestone milestone={"Software Projects"} year={"2021-202"} />
      <Milestone milestone={"DASH"} year={"2021-202"} />
    </div>
  );
}

export default Journey;
