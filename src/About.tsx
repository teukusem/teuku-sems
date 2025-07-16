import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTime } from './hooks/useTime';
import { skills } from './data/skills';
import { ANIMATION_DELAYS } from './constants/ui';

export default function About() {
  const currentTime = useTime();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden text-white bg-black font-michroma">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: ANIMATION_DELAYS.HEADER_DELAY }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-6 md:p-8"
      >
        <Link to="/" className="text-lg font-bold uppercase md:text-xl hover:text-red-500 transition-colors duration-300">
          Teuku Sem
        </Link>
        <div 
          className="flex-col items-center justify-center hidden space-y-1 cursor-pointer md:flex"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-8 h-0.5 bg-white rounded-full"></div>
          <div className="w-8 h-0.5 bg-white rounded-full"></div>
        </div>
        <div 
          className="flex-col items-center justify-center flex space-y-1 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 bg-white rounded-full"></div>
          <div className="w-6 h-0.5 bg-white rounded-full"></div>
        </div>
        <div className="hidden text-sm md:text-base md:block">{currentTime}</div>
      </motion.header>

      {/* Fullscreen Menu */}
      <motion.div
        className="fixed inset-0 z-50 bg-black"
        initial={{ y: '-100%' }}
        animate={{ y: menuOpen ? '0%' : '-100%' }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute text-2xl text-white transition-colors duration-300 top-8 right-8 hover:text-red-500"
          >
            ✕
          </button>
          
          <div className="flex flex-col items-center space-y-12">
            <motion.button
              onClick={() => {
                setMenuOpen(false);
                window.location.href = '/';
              }}
              className="text-4xl font-bold text-white uppercase transition-colors duration-300 md:text-6xl hover:text-red-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 50
              }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Home
            </motion.button>

            <motion.button
              onClick={() => {
                setMenuOpen(false);
                window.location.href = '/about';
              }}
              className="text-4xl font-bold text-red-500 uppercase transition-colors duration-300 md:text-6xl hover:text-yellow-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 50
              }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              About
            </motion.button>

            <motion.button
              onClick={() => {
                setMenuOpen(false);
                window.location.href = '/#projects';
              }}
              className="text-4xl font-bold text-white uppercase transition-colors duration-300 md:text-6xl hover:text-red-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 50
              }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Projects
            </motion.button>

            <motion.button
              onClick={() => {
                setMenuOpen(false);
                window.location.href = '/#contact';
              }}
              className="text-4xl font-bold text-white uppercase transition-colors duration-300 md:text-6xl hover:text-red-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 50
              }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-16 lg:px-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* About Title */}
          <motion.h1
            className="mb-12 text-4xl font-bold uppercase md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            About Me
          </motion.h1>

          {/* Description */}
          <motion.div
            className="space-y-8 text-lg leading-relaxed md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-gray-300">
              I'm a full-stack software engineer with a primary focus on front-end development, specializing in React.js and Next.js. Passionate about creating clean, responsive, and user-friendly web applications. Eager to contribute to a team dedicated to building exceptional online experiences.
            </p>
            
            <p className="text-gray-300">
              When I'm not building or exploring new web technologies, you'll likely find me indoors gaming or watching YouTube.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="mb-8 text-2xl font-bold uppercase md:text-3xl">Skills & Technologies</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="p-3 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-red-500 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                >
                  <span className="text-sm md:text-base">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Link
              to="/"
              className="inline-block px-8 py-4 text-lg font-bold uppercase transition-colors duration-300 border-2 border-white hover:bg-white hover:text-black"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}