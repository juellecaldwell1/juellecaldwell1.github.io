import { TypeAnimation } from "react-type-animation";
import Logo from "../assets/logo.svg";
import custom from "../assets/custom-logo.png";
import name from "../assets/Modern Brand Name Initials Typography Logo (1).png";
import "./Css/header.css";

import business from "./modelImage/buinesslogo.jpg-removebg-preview.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="business">
            <motion.a
              href="#"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              whileHover={{ scale: 1.1 }} // Add hover scale effect
              transition={{ duration: 0.3 }} // Smooth transition
            >
              <img src={business} alt="My name" />
            </motion.a>
          </div>
          <motion.button
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: "false", amount: 0.7 }}
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }} // Add hover scale and color change effect
            transition={{ duration: 0.3 }} // Smooth transition
            className="btn btn-sm"
          >
            <TypeAnimation sequence={["Let me Work for you", 1000]} />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
