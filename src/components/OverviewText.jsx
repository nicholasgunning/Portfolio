import { useEffect, useRef } from "react";
import "../stylesheets/Overview.scss";

function OverviewText() {
  const elementRef = useRef(); 

  useEffect(() => {
    if (elementRef.current) {
      const timeoutId = setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add("is-mounted");
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
        if (elementRef.current) {
          elementRef.current.classList.remove("is-mounted");
        }
      };
    }
  }, []);

  return (
    <div>
      <div ref={elementRef} id="my-name" className="overview-name">
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
