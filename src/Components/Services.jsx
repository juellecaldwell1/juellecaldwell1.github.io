import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { TbXboxX } from "react-icons/tb";

const services = [
  {
    title: "Frontend Development",
    description: "Creating engaging and interactive frontend experiences with modern web design techniques.",
    icon: "🎨",
    color: "from-red-600 to-red-800"
  },
  {
    title: "Backend Development",
    description: "Building robust and scalable server-side solutions with SQL and MongoDB.",
    icon: "🖥️",
    color: "from-red-700 to-red-900"
  },
  {
    title: "Full Stack Development",
    description: "Crafting comprehensive web applications with end-to-end development expertise.",
    icon: "🚀",
    color: "from-red-800 to-black"
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20 bg-black text-white overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              My Services
            </span>
          </h2>
          <p className="text-xl text-gray-400">Bringing your ideas to life with cutting-edge web solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative p-8 bg-black rounded-xl transform group-hover:-translate-y-3 transition-transform duration-300">
                <div className="text-5xl mb-4 animate-pulse">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-red-500">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-sm font-medium text-white bg-red-600 rounded-full px-4 py-2 hover:bg-red-700 transition-colors duration-300"
                >
                  Learn More
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-red-800"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-red-500">{selectedService.title}</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  <TbXboxX className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gray-300 mb-6">{selectedService.description}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-red-600 text-white rounded-full px-6 py-2 hover:bg-red-700 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
