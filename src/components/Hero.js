import "../styles/hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <motion.h1
          initial={{ y: "50vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, Welcome to My Recipe Book
        </motion.h1>
        <motion.div
          initial={{ y: "50vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero__text__subtitle"
        >
          <h2 className="special">
            You know how when you ask asian moms, ‘how much of this [ingredient]
            do i put in?’ and they just kind of give you that look and say,
            ‘uhm, enough’?
          </h2>
          <h2 className="special">
            Yeah, thats kind of how this experience is going to go. So take
            everything with a grain of salt, or a pinch 😉
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;