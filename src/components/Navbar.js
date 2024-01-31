import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import circle from "../assets/circle.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const linkVariant = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        staggerChildren: 1,
      },
    },
  };
  return (
    <div className="navbar">
      <motion.div
        className="navbar__linkCont"
        variants={linkVariant}
        initial="initial"
        animate="animate"
      >
        <motion.img
          src={circle}
          alt="circle"
          className="circle1"
          variants={linkVariant}
        />
        <Link to="/" className="link">
          Home
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="navbar__logo"
      >
        <img src={logo} alt="lp logo" />
      </motion.div>
      <motion.div
        className="navbar__linkCont"
        variants={linkVariant}
        initial="initial"
        animate="animate"
      >
        <img src={circle} alt="circle" className="circle2" />
        <Link to="/recipes" className="link">
          Recipes
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
