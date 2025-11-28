import React from "react";
import "../containers/Journey.scss";
import { Link } from "react-router-dom";

function Milestone({ milestone, year, to }) {
  return (
      <Link to={to} className="milestone">
        <div>{year}</div>
        <div>/</div>
        <div>{milestone}</div>
      </Link>
  );
}

export default Milestone;
