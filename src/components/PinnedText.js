import "../styles/home.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PinnedText = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // container: containerRef,
    offset: ["start center", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 0]);
  //   const position = useTransform(scrollYProgress, (pos) => {
  //     return pos === 1 ? "sticky" : "fixed";
  //   });

  return (
    <div className="pinnedText" ref={containerRef}>
      <motion.div className="pinnedText__single" style={{ opacity }}>
        <div className="pinnedText__single__textBlock">
          <h2>simplicity is the ultimate sophistication </h2>
          <h6>- leonardo davinci</h6>
        </div>
      </motion.div>
    </div>
  );
};

export default PinnedText;
