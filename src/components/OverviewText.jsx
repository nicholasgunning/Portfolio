import React, { useEffect } from "react";
import "../stylesheets/Overview.scss";

function OverviewText() {
  useEffect(() => {
    const element = document.getElementById("my-name");
    if (element) {
      setTimeout(() => {
        document.getElementById("my-name").classList.add("is-mounted");
      }, 1000 * 1);
      return () => {
        document.getElementById("my-name").classList.remove("is-mounted");
      };
    }
  }, []);

  return (
    <div>
      <div id="my-name" className="overview-name">
        Nick Gunning
      </div>
      <div className="overview-details">
        <div>
          <div>Frontend Developer and UI/UX Designer</div>
          <div>3 Years Experience</div>
        </div>
        <div className="overview-location">
          <div>Sydney, AUSTRALIA</div>
          <div>nickgunning7@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default OverviewText;
