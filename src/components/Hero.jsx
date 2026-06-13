import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import photo from "../images/suraj.jpg";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-black"
    >
      {/* Ambient 3D blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -right-10 w-80 h-80 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-10">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-snug break-words">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(99,102,241,0.35)]">
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

          <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0">
            I design and build scalable, modern, responsive applications — blending creativity with technical expertise to deliver impactful solutions.
          </p>

          {/* Resume & CTA */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6 justify-center md:justify-start">
            <motion.a
              href="/Suraj-Shinde-Resume.pdf"
              download
              whileHover={{ y: -3, boxShadow: "0 12px 24px rgba(37,99,235,0.4)" }}
              whileTap={{ y: 1, scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-medium rounded-xl shadow-[0_8px_20px_rgba(37,99,235,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all"
            >
              Download Resume
              <Download size={20} />
            </motion.a>
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
                whileHover={{ scale: 1.1, y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95, y: 0 }}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 shadow-[0_6px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_6px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/50 dark:border-gray-700/50 transition-colors ${social.hover}`}
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
            whileHover={{ rotateY: 10, rotateX: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 blur-2xl opacity-30 dark:opacity-40 scale-105" />

            {/* Floating rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-60"
              style={{ filter: "blur(2px)" }}
            />

            <img
              src={photo}
              alt="Suraj Shinde"
              className="
                relative z-10
                rounded-full
                w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80
                object-cover
                border-[6px] border-white dark:border-gray-900
                shadow-[20px_20px_60px_rgba(0,0,0,0.25),-20px_-20px_60px_rgba(255,255,255,0.5),inset_0_4px_20px_rgba(0,0,0,0.15)]
                dark:shadow-[20px_20px_60px_rgba(0,0,0,0.6),-10px_-10px_40px_rgba(255,255,255,0.03),inset_0_4px_20px_rgba(0,0,0,0.4)]
              "
            />

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};