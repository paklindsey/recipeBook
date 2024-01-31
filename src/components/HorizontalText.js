import "../styles/home.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const HorizontalText = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // container: containerRef,
    offset: ["start center", "center start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  return (
    <div className="horizontalText" ref={containerRef}>
      <motion.div className="horizontalText__textCont" style={{ x, opacity }}>
        <h1>
          so, lets get to{" "}
          <span>
            <Link to="/recipes">cooking</Link>
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default HorizontalText;
