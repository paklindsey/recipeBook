import "../styles/home.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useWidthSetter from "../hooks/useWidthSetter";
import heroBg from "../assets/heroBg.png";
import heroBgM from "../assets/heroBgM.png";

const Hero = () => {
  const width = useWidthSetter();

  const textRef = useRef();

  const { scrollYProgress } = useScroll({
    target: textRef,
    // container: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="hero" ref={textRef}>
      <div className="hero__wrapper">
        <div className="hero__wrapper__text">
          <motion.h1
            initial={{ x: -80 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ x: x }}
          >
            {" "}
            no chef
          </motion.h1>
          <motion.h1
            className="large"
            initial={{ x: 80 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ x: x2 }}
          >
            required
          </motion.h1>
        </div>
        <motion.div
          className="hero__wrapper__image"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ y: imgY }}
        >
          <img src={width > 900 ? heroBg : heroBgM} alt="toast on plate" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
