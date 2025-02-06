import styles from "../../../stylesheets/chemtable.module.css";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function VideoPlay() {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: canvasRef,
    offset: ["center end", "start start"],
  });

  const images = useMemo(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= 198; i++) {
      const img = new Image();
      const paddedNumber = i.toString().padStart(4, "0");
      const getImageUrl = (number) => {
        return new URL(
          `../../../../src/assets/chemtable/mainImages/${number}.png`,
          import.meta.url
        ).href;
      };

      img.src = getImageUrl(paddedNumber);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === 198) {
          setImagesLoaded(true);
        }
      };

      img.onerror = (e) => {
        console.error(`Failed to load image ${paddedNumber}:`, e);
      };

      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  const render = useCallback(
    (index) => {
      if (!imagesLoaded) return;

      const context = canvasRef.current?.getContext("2d");
      if (context && images[index - 1]) {
        if (images[index - 1].width) {
          canvasRef.current.width = images[index - 1].width;
          canvasRef.current.height = images[index - 1].height;
        }
        context.drawImage(images[index - 1], 0, 0);
      }
    },
    [images, imagesLoaded]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 86]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    if (imagesLoaded) {
      render(1);
    }
  }, [render, imagesLoaded]);

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} className={styles.animatedVideo} />
    </div>
  );
}

function ChemTable() {
  return (
    <div className={styles.background} style={{ position: "relative" }}>
      <h1>CHEM TABLE</h1>
      <VideoPlay />
    </div>
  );
}

export default ChemTable;
