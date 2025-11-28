import React from "react";
import "../containers/Overview.scss";
import resumePdf from "../assets/images/homePage/Resume.pdf";

function OverviewLinks() {
  const handleDownload = () => {
    "../assets/homePage/Resume.pdf";
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/nick-gunning-7189371b9/");
  };

  return (
    <div className="overview-links">
      <a href={resumePdf} download="Nick_Gunning_Resume.pdf">
        <div className="overview-links-item" onClick={handleDownload}>
          <div>01</div>
          <div>Resume</div>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/nick-gunning-7189371b9/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="overview-links-item">
          <div>02</div>
          <div>LinkedIn</div>
        </div>
      </a>
    </div>
  );
}

export default OverviewLinks;
