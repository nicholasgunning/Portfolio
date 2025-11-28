import React from "react";
import OverviewLinks from "../components/OverviewLinks.jsx";
import OverviewText from "../components/OverviewText.jsx";
import "./Overview.scss";

function Overview() {
  return (
    <div className="overview">
      <OverviewText />
      <OverviewLinks />
    </div>
  );
}

export default Overview;
