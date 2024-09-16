import { FaYoutube, FaGithub, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import juelle from "../assets/file.png";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center relative overflow-hidden bg-gradient-to-r from-black via-black to-red-600"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900 opacity-50 z-0" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] text-white bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-500"
              whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255, 0, 0, 0.8)" }}
              transition={{ duration: 0.5 }}
            >
              Juelle <span className="text-red-700">Caldwell</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] text-white"
            >
              <span className="text-white mr-4">I am an</span>
              <TypeAnimation
                sequence={[
                  "Web Developer ",
                  2000,
                  "That Goes ",
                  1000,
                  "To Ranken College ",
                ]}
                speed={50}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-white"
              whileHover={{ scale: 1.05, color: "#FFD700" }}
              transition={{ duration: 0.3 }}
            >
              Hello and welcome to my portfolio website
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              className="flex gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <motion.button
                className="btn btn-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                whileHover={{ scale: 1.1, backgroundColor: "#ffdd00" }}
                transition={{ duration: 0.3 }}
              >
                Contact me
              </motion.button>
              <motion.a
                href="#"
                className="text-gradient btn-link"
                whileHover={{ scale: 1.05, color: "#ffdd00" }}
                transition={{ duration: 0.3 }}
              >
                My Portfolio
              </motion.a>
            </motion.div>

            <br />

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              className="flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#" className="text-white hover:text-red-400 transition-colors duration-300">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors duration-300">
                <FaDribbble />
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <motion.img
              src={juelle}
              alt="Juelle Caldwell"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
