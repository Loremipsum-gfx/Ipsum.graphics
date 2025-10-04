'use client';

import { motion, useScroll, useTransform, useMotionValueEvent, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const FrontPageAnimation = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [src, setSrc] = useState("/graphics/video/animation/loremscroll/0001.png");

  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });


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

  
  useEffect(() => {
    scrollRef.current = document.querySelector("#lorem-frame");
  }, []);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    layoutEffect: false,
  });

  const frameIndex = useTransform(scrollYProgress, [0, 0.1], [1, 50]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const num = String(Math.round(latest)).padStart(4, "0");
    setSrc(`/graphics/video/animation/loremscroll/${num}.png`);
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
      <img
        src={src}
        style={{
          width: "75%",
          objectFit: "contain",
        }}
      />

      {/* pupil box overlay */}
      <motion.div
        animate={{
          x: pos.x * 20,
          y: pos.y * 10,
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
