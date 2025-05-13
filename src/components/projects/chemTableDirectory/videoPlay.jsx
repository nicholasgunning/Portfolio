import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "../../../stylesheets/chemtable.module.css";

function PrototypeModel() {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { scrollYProgress } = useScroll();

  const images = useMemo(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= 198; i++) {
      const img = new Image();
      const paddedNumber = i.toString().padStart(4, "0");
      img.src = `/chemtable/mainImages/${paddedNumber}.webp`;

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / 198) * 100));
        if (loadedCount === 198) {
          setImagesLoaded(true);
        }
      };

      img.onerror = (e) => {
        console.error(`Failed to load image ${paddedNumber}:`, e);
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / 198) * 100));
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
        const image = images[index - 1];

        const fixedWidth = 1920;
        const fixedHeight = 1080;
        canvasRef.current.width = fixedWidth;
        canvasRef.current.height = fixedHeight;

        context.clearRect(0, 0, fixedWidth, fixedHeight);

        const x = (fixedWidth - image.width) / 2;
        const y = (fixedHeight - image.height) / 2;

        context.drawImage(image, x, y);
      }
    },
    [images, imagesLoaded]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 0.1], [1, 198]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    if (imagesLoaded) {
      render(1);
    }
  }, [render, imagesLoaded]);

  return (
    <div
      className={styles.animatedModelContainer}
      style={{ position: "relative" }}
    >
      {!imagesLoaded && (
        <div className={styles.loadingOverlay}>
          <p className={styles.loadingText}>
            Loading model images: {loadingProgress}%
          </p>
        </div>
      )}
      <canvas ref={canvasRef} className={styles.animatedModel} />
    </div>
  );
}

export default PrototypeModel;
