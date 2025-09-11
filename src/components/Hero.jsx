import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import photo from "../images/suraj.jpg";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-black"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-10">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-snug break-words">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Suraj Shinde
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 h-10 font-semibold">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "MERN Stack Developer",
                  "Java Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0">
            I design and build scalable, modern, responsive applications — blending creativity with technical expertise to deliver impactful solutions.
          </p>

          {/* Resume & CTA */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6 justify-center md:justify-start">
            <a
              href="/Suraj-Shinde-Resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
            >
              Download Resume
              <Download size={20} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            {[
              { icon: <Github size={22} />, link: "https://github.com/surajshinde87", hover: "hover:text-gray-700 dark:hover:text-gray-200" },
              { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/suraj-shinde-1039a42ba/", hover: "hover:text-blue-500" },
              { icon: <Mail size={22} />, link: "mailto:jsurajpshinde@gmail.com", hover: "hover:text-green-500" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.1, rotate: 3 }}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md hover:shadow-xl transition ${social.hover}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            whileHover={{ rotateY: 8, rotateX: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            <img
  src={photo}
  alt="Suraj Shinde"
  className="
    rounded-full 
    w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 
    object-cover 
    border-4 border-white dark:border-gray-800
    shadow-[15px_15px_50px_rgba(0,0,0,0.2),-15px_-15px_50px_rgba(255,255,255,0.1)]
    shadow-inner-[inset_0_10px_30px_rgba(0,0,0,0.3)]
  "
/>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
