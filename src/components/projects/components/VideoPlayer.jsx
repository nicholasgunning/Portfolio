import React, { useRef, useEffect, useState } from "react";
import styles from "../../../stylesheets/VideoPlayer.module.scss";

const VideoPlayer = ({
  movSrc,
  webmSrc,
  width = {},
  height = "auto",
  className = "",
  containerStyle = {},
  videoStyle = {},
  loadingText = "Loading video...",
}) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Simply track if the video is buffering or ready to play
    //const handleWaiting = () => setIsLoading(true);
    const handleReady = () => setIsLoading(false);

    //video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleReady);
    video.addEventListener("playing", handleReady);
    video.addEventListener("loadeddata", handleReady);

    // Check if video is already ready on mount
    if (video.readyState >= 3) {
      setIsLoading(false);
    }

    return () => {
      //video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("playing", handleReady);
      video.removeEventListener("loadeddata", handleReady);
    };
  }, []);

  const containerClasses =
    `${styles.transparentVideoContainer} ${className}`.trim();

  return (
    <div className={containerClasses} style={containerStyle}>
      {/* Simplified Loading State */}
      {isLoading && (
        <div className={styles.videoLoading}>
          <div className={styles.loadingSpinner}></div>
          <p>{loadingText}</p>
        </div>
      )}

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline // CRITICAL for Safari autoplay
        className={styles.transparentVideo}
        style={{
          width,
          height,
          objectFit: "contain",
          // Hide video visually until loaded to avoid "popping" in
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease",
          ...videoStyle,
        }}
      >
        {/* Safari (HEVC/MOV) */}
        {movSrc && <source src={movSrc} type="video/quicktime" />}
        {/* Chrome/Firefox (WebM) */}
        {webmSrc && <source src={webmSrc} type="video/webm" />}
      </video>
    </div>
  );
};

export default VideoPlayer;
