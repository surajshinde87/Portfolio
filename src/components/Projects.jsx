import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import medicheck from "../images/medicheck.png";
import gemini from "../images/gemini.png";
import agrios from "../images/agrios.png";
import agrisync from "../images/agrisync.png";
import web_quize from "../images/web quiz.png";
import healthcare_dashborad from "../images/healthcare dashboard.png";

const projects = [
  {
    title: "MediCheck – Doctor Appointment Booking System",
    description:
      "A full-stack web application for booking doctor appointments with features like user authentication, appointment scheduling, and payment integration.",
    image: medicheck,
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Razorpay",
    ],
    live: "https://medichecks.netlify.app/",
  },

  {
    title: "AgriSync – Agriculture Marketplace Platform",
    description:
      "A Java full-stack platform connecting Farmers, Buyers, and Drivers for direct crop trading and delivery management.",
    image: agrisync,
    technologies: [
      "React.js",
      "Java",
      "Spring Boot",
      "MySQL",
      "Hibernate",
      "JWT",
      "WebSocket",
      "REST APIs",
    ],
    live: "https://github.com/surajshinde87/AgriSync.git",
  },
  {
    title: "HealthCare Dashboard",
    description: "A responsive healthcare dashboard UI showcasing patient data, appointments, and analytics.",
    image: healthcare_dashborad,
    technologies: ["React", "HTML", "CSS", "JavaScript", "Responsive Designs", "Media Queries", 
    "Flexbox", "Flat icons"
    ],
    live: "https://healthcareappdashboard.netlify.app/",
  },

  {
    title: " Agrios - Landing Page",
    description:
      "Agricultural website landing page with working functionality.",
    image: agrios,
    technologies: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
    live: "https://surajshinde87.github.io/agrios-landing-page/",
  },
  {
    title: "Quiz Website",
    description:
      "You can test your coding knowledge here by answering the questions.",
    image: web_quize,
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "Responsive"],
    live: "https://surajshinde87.github.io/web-quiz/",
  },
  {
    title: "Gemini Clone",
    description:
      "The modern and responsive website designed to replicate the functionality.",
    image: gemini,
    technologies: ["React", "Gemini Api", "Tailwind CSS", "Node.js"],
    live: "https://gemini-clone-surajshinde.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            A selection of my most recent and impactful work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg 
                         bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center gap-2 mb-3 hover:scale-105 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-100 to-purple-100 
                                 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
