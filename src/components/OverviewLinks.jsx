import React from "react";
import "../stylesheets/Overview.scss";

function OverviewLinks() {
  const handleDownload = () => {};
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kritikalpa-saha/");
  };
  return (
    <div className="overview-links">
      <div className="overview-links-item" onClick={handleDownload}>
        <div>01</div>
        <div>resume</div>
      </div>
      <div className="overview-links-item" onClick={openLinkedIn}>
        <div>02</div>
        <div>linkedin</div>
      </div>
    </div>
  );
}

export default OverviewLinks;
