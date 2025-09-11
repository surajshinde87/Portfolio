import React from "react";
import { motion } from "framer-motion";
import { Server } from "lucide-react";

const experiences = [
  {
    role: "Software Intern",
    company: "PRYM Aerospace Pvt. Ltd.",
    duration: "3 Months",
    responsibilities: [
      "Developed efficient backend systems using Python and Flask.",
      "Integrated APIs to enhance functionality and streamline workflows.",
      "Collaborated with teams to optimize server-side performance.",
      "Assisted in database management and troubleshooting backend issues.",
    ],
    icon: <Server className="w-8 h-8" />,
  },
  {
    role: "Frontend Developer",
    company: "Octanet Services Pvt. Ltd.",
    duration: "1 Month",
    responsibilities: [
      "Designed and implemented responsive user interfaces using React.js and Tailwind CSS.",
      "Developed and optimized interactive components to enhance user engagement and functionality.",
      "Improved website performance and accessibility through efficient coding practices and debugging.",
    ],
    icon: <Server className="w-8 h-8" />,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey so far
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                         rounded-2xl p-6 shadow-md hover:shadow-xl 
                         hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-14 h-14 
                                rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 
                                text-white shadow-md mr-4">
                  {experience.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {experience.company} • {experience.duration}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                {experience.responsibilities.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
