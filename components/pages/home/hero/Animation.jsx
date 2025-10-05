'use client';

import { motion, useScroll, useTransform, useMotionValueEvent, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const FrontPageAnimation = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [frames, setFrames] = useState([]);
  const [src, setSrc] = useState(null);

  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const prevFrame = useRef(null);

  // Preload frames once
  useEffect(() => {
    const loadedFrames = [];
    for (let i = 1; i <= 50; i++) {
      const num = String(i).padStart(4, "0");
      const img = new Image();
      img.src = `/graphics/video/animation/loremscroll/${num}.png`;
      loadedFrames.push(img.src);
    }
    setFrames(loadedFrames);
    setSrc(loadedFrames[0]); // first frame
  }, []);

  // Mouse move for pupils
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isInView) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isInView]);

  // Scroll container
  useEffect(() => {
    scrollRef.current = document.querySelector("#lorem-frame");
  }, []);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    layoutEffect: false,
  });

  const frameIndex = useTransform(scrollYProgress, [0, 0.1], [0, 49]); // match frames array (0–49)

  // Change frame only if it's new
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const idx = Math.round(latest);
    if (frames[idx] && prevFrame.current !== idx) {
      prevFrame.current = idx;
      setSrc(frames[idx]);
    }
  });

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1.2 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 280 }}
    >
      {/* main animation frame */}
      {src && (
        <img
          src={src}
          style={{
            width: "75%",
            objectFit: "contain",
          }}
        />
      )}

      {/* pupil box overlay */}
      <motion.div
        animate={{
          x: document.documentElement.clientWidth > 768 ? (pos.x * 20) : 0,
          y: document.documentElement.clientWidth > 768 ? (pos.y * 10) : -7,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        style={{
          backgroundImage: "url(/graphics/video/animation/loremscroll/pupils.png)",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "30%",
          height: "4%",
          minHeight: "24px",
          position: "absolute",
          top: "48%",
          left: "38%",
          zIndex: 1,
        }}
      />
    </motion.div>
  );
};

export default FrontPageAnimation;
