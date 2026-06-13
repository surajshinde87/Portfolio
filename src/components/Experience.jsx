import React from "react";
import { motion } from "framer-motion";
import { Server, Code2, Layout } from "lucide-react";

const experiences = [
  {
    role: "Jr. Software Developer",
    company: "Dakshabhi IT Solutions Pvt. Ltd.",
    duration: "Feb 2026 -Present",
    period: "Current Role",
    responsibilities: [
      "Developing scalable applications using Java, React, and Spring Boot.",
      "Working on CI/CD pipelines and automation using Jenkins.",
      "Contributing to the Electronic Visa (e-Visa) project for efficient digital processing.",
      "Collaborating with cross-functional teams to build and maintain robust systems.",
      "Debugging and optimizing application performance across frontend and backend.",
    ],
    icon: <Server className="w-7 h-7" />,
    gradient: "from-blue-500 to-indigo-500",
    active: true,
  },
  {
    role: "Software Intern",
    company: "PRYM Aerospace Pvt. Ltd.",
    duration: "Oct 2025 - Jan 2026",
    period: "Internship",
    responsibilities: [
      "Developed efficient backend systems using Python and Flask.",
      "Integrated APIs to enhance functionality and streamline workflows.",
      "Collaborated with teams to optimize server-side performance.",
      "Assisted in database management and troubleshooting backend issues.",
    ],
    icon: <Code2 className="w-7 h-7" />,
    gradient: "from-purple-500 to-pink-500",
    active: false,
  },
  {
    role: "Frontend Developer",
    company: "Octanet Services Pvt. Ltd.",
    duration: "June 2025 - Sept 2025",
    period: "Internship",
    responsibilities: [
      "Designed and implemented responsive user interfaces using React.js and Tailwind CSS.",
      "Developed and optimized interactive components to enhance user engagement and functionality.",
      "Improved website performance and accessibility through efficient coding practices and debugging.",
    ],
    icon: <Layout className="w-7 h-7" />,
    gradient: "from-indigo-500 to-blue-500",
    active: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50">
            🚀 Career path
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey so far
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-7 sm:left-9 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 opacity-40" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative flex gap-5 sm:gap-7"
              >
                {/* Timeline node */}
                <div className="relative flex-shrink-0 z-10">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.gradient} opacity-30 blur-lg`} />
                  <div className={`relative flex items-center justify-center w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-2xl bg-gradient-to-br ${experience.gradient} text-white shadow-[0_8px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]`}>
                    {experience.icon}
                  </div>
                  {experience.active && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white dark:border-gray-900"></span>
                    </span>
                  )}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/50 rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_20px_45px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_20px_45px_rgba(99,102,241,0.15)] transition-shadow duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {experience.company}
                      </p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full text-white bg-gradient-to-r ${experience.gradient} shadow-[0_4px_12px_rgba(0,0,0,0.15)]`}>
                      {experience.duration}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {experience.responsibilities.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3">
                        <span className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.gradient}`} />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};