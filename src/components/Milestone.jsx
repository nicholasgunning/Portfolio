import React from "react";
import "../stylesheets/Journey.scss";

function Milestone({ milestone, year, index }) {
  return (
    <div className="milestone">
      <div>{year}</div>
      <div>/</div>
      <div>{milestone}</div>
    </div>
  );
}

export default Milestone;
