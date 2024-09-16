import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaMailBulk, FaAddressBook } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import emailjs from 'emailjs-com';

export default function FlashyContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  emailjs.init("w1NzKLHH-gmR3tfxV");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm('service_2pl30eo', 'template_ex9fw4i', e.target);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      setStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus(''), 3000); 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10
      }
    }
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.3 } }
  };

  return (
    <div className="contact" id="contact">
      <motion.div
        className="flex flex-col md:flex-row bg-black text-white p-8 rounded-lg shadow-xl max-w-6xl mx-auto overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex-1 pr-8" variants={childVariants}>
          <motion.h2
            className="text-4xl font-bold mb-2 text-red-600"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Send me a message
          </motion.h2>
          <motion.p
            className="text-red-400 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          >
            I'll get back to you as soon as possible.
          </motion.p>
          <form onSubmit={sendEmail} className="space-y-6">
            <div className="flex gap-4">
              <motion.div className="flex-1" variants={childVariants}>
                <label htmlFor="firstName" className="block mb-2">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-900 p-3 rounded border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  placeholder="First Name"
                  required
                />
              </motion.div>
              <motion.div className="flex-1" variants={childVariants}>
                <label htmlFor="lastName" className="block mb-2">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-gray-900 p-3 rounded border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  placeholder="Last Name"
                  required
                />
              </motion.div>
            </div>
            <motion.div variants={childVariants}>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 p-3 rounded border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                placeholder="Name@example.com"
                required
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-900 p-3 rounded border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                placeholder="Your message here..."
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
              <IoIosSend className="w-5 h-5" />
            </motion.button>
          </form>
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="mt-4 p-4 bg-green-500 text-white rounded"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="mt-4 p-4 bg-red-500 text-white rounded"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div className="flex-1 mt-8 md:mt-0" variants={childVariants}>
          <motion.div className="mb-8" variants={childVariants}>
            <motion.h2
              className="text-4xl font-bold mb-2 text-red-600"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              Contact Information
            </motion.h2>
            <motion.p
              className="text-red-400 mb-6"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            >
              Here's how you can reach me
            </motion.p>
            <motion.div className="space-y-4" variants={childVariants}>
              <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                <FaAddressBook className="mr-4 text-red-500" />
                <span>4431 Finney Ave, St. Louis, MO 63113</span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                <FaPhone className="mr-4 text-red-500" />
                <span>+1 (314) 986-9400</span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                <FaMailBulk className="mr-4 text-red-500" />
                <span>juellecc@gmail.com</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
