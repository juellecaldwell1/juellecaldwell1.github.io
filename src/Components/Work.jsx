import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution",
      image: "/placeholder.svg?height=150&width=250",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application",
      image: "/placeholder.svg?height=150&width=250",
      tags: ["React", "API", "CSS3"],
      link: "#",
    },
    {
      id: 3,
      title: "Task Management",
      description: "Kanban-style task manager",
      image: "/placeholder.svg?height=150&width=250",
      tags: ["React", "Redux", "Firebase"],
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio showcase",
      image: "/placeholder.svg?height=150&width=250",
      tags: ["React", "Tailwind", "Netlify"],
      link: "#",
    },
  ];

  return (
    <section className="section bg-black text-white py-12 min-h-screen flex items-center justify-center relative overflow-hidden" id="work">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-black opacity-40 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: "false", amount: 0.7 }}
          className="text-3xl font-bold text-red-600 mb-8 text-center"
        >
          My Projects
        </motion.h2>
        <div className="overflow-hidden">
          <div className="flex flex-wrap gap-6 justify-center">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: "false", amount: 0.7 }}
                className="w-full sm:w-[45%] md:w-[300px] bg-black rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl relative"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-red-800 text-red-100 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors duration-300"
                  >
                    View Project
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
