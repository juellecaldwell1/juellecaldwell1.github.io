'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {

    const [hoveredSection, setHoveredSection] = useState(null)

    const sections = [
      {
        title: 'Summary',
        content: `I am an experienced web developer passionate about building responsive and user-friendly applications. 
        My expertise lies in React, where I enjoy focusing on functionality to ensure seamless user experiences. 
        I have a strong interest in JavaScript and C#, and I am committed to continuous learning in these areas. 
        While Im good at back-end functionality, I am working on improving my front-end design skills. 
        I also leverage AI tools to speed up development and improve efficiency in my projects.`
      },
      {
        title: 'Experience',
        content: `Currently seeking hands-on experience and mentorship from industry experts to further develop my skills. 
        In the meantime, I have worked on several personal projects, including:
        - A full-stack portfolio website showcasing my skills and projects
        - A full-stack note-taking application with user authentication and data persistence
        - A C# application for tracking game trophies, incorporating data management and user-friendly features`
      },
      {
        title: 'Education',
        content: `Ranken Technical College (Associate's Degree in Web Development, expected 2024)
        Relevant Coursework: Full-Stack Development, Databases, Object-Oriented Programming`
      },
      {
        title: 'Skills',
        content: 'React, JavaScript, HTML, CSS, Git, C#, MongoDB, SQL, Node.js, Express, MERN stack, Postman, Visual Studio, Axios, Bootstrap'
      }
    ];
    

    return(
        <div className="resume">
<motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800 p-4 sm:p-8"
    >
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Juelle Caldwell</h1>
        <p className="text-xl text-gray-600">Beginner Web Developer</p>
      </header>

      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          className={`mb-6 p-4 rounded-lg transition-all duration-300 ease-in-out ${
            hoveredSection === index ? 'bg-red-50 shadow-lg scale-105' : 'bg-white'
          }`}
          onMouseEnter={() => setHoveredSection(index)}
          onMouseLeave={() => setHoveredSection(null)}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-2">{section.title}</h2>
          <div className="text-gray-700 whitespace-pre-line">{section.content}</div>
        </motion.section>
      ))}
 <div className="flex gap-x-8 items-center mb-12">
              <Link to="/">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff" }}
                transition={{ duration: 0.3 }}
                className="btn btn-lg"
              >
                Go Back
              </motion.button>
              </Link>
            </div>
      <footer className="mt-8 text-center text-gray-500">
        <p>© 2024 Juelle Caldwell. All rights reserved.</p>
      </footer>
    </motion.div>
        </div>
    )
}
export default Resume