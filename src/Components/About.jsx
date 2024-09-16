import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import {Link} from "react-router-dom";
const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section bg-black text-white" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="flex-1 bg-about bg-cover bg-center h-[640px] mix-blend-lighten"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex-1">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              className="text-red-600 mb-6 text-4xl font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              About Me
            </motion.h2>
            <motion.h3
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              className="mb-4 text-2xl"
              whileHover={{ scale: 1.05, color: "#ff6f61" }}
              transition={{ duration: 0.3 }}
            >
              Hello, my name is Juelle, and I've been learning web development for about 1 year now.
            </motion.h3>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: "false", amount: 0.7 }}
              className="flex gap-x-6 lg:gap-x-10 mb-12"
            >
              {[
                { label: "Years of Experience", count: 0 },
                { label: "Years of Javascript", count: 1 },
                { label: "Months of C#", count: 6 },
                { label: "Years of Html and Css", count: 1 },
              ].map(({ label, count }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-[40px] font-tertiary text-gradient">
                    {inView ? <CountUp start={0} end={count} duration={5} /> : null}
                  </div>
                  <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: "false", amount: 0.7 }}
                    className="font-primary text-sm tracking-[2px]"
                    whileHover={{ color: "#ff6f61" }}
                    transition={{ duration: 0.3 }}
                  >
                    {label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex gap-x-8 items-center mb-12">
              <Link to="/resume">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff" }}
                transition={{ duration: 0.3 }}
                className="btn btn-lg"
              >
                View Resume
              </motion.button>
              </Link>
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05, color: "#4f46e5" }}
                transition={{ duration: 0.3 }}
                className="text-gradient btn-link"
              >
                My Portfolio
              </motion.a>
            </div>
            <div className="flex justify-center gap-6">
              <FaHtml5 className="text-[40px] text-red-600" />
              <FaCss3Alt className="text-[40px] text-blue-600" />
              <FaJsSquare className="text-[40px] text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
