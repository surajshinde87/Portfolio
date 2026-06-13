import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Sparkles } from "lucide-react";
import medicheck from "../images/medicheck.png";
import gemini from "../images/gemini.png";
import recipechef from "../images/ai-recipe-chef.png";
import agrisync from "../images/agrisync.png";
import web_quize from "../images/web quiz.png";
import healthcare_dashborad from "../images/healthcare dashboard.png";

const projects = [
  {
    title: "MediCheck – Doctor Appointment Booking System",
    description:
      "A full-stack web application for booking doctor appointments with features like user authentication, appointment scheduling, and payment integration.",
    image: medicheck,
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Razorpay"],
    live: "https://medichecks.netlify.app/",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AgriSync – Agriculture Marketplace Platform",
    description:
      "A Java full-stack platform connecting Farmers, Buyers, and Drivers for direct crop trading and delivery management.",
    image: agrisync,
    technologies: ["React.js", "Java", "Spring Boot", "MySQL", "Hibernate", "JWT", "WebSocket", "REST APIs"],
    live: "https://github.com/surajshinde87/AgriSync.git",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "AI Recipe Chef – AI-Based Recipe Generation Platform",
    description:
      "An AI-powered full-stack application that generates complete recipes, ingredient quantities, and cooking steps based on user-entered ingredients using Spring AI and Ollama.",
    image: recipechef,
    technologies: ["React.js", "Java", "Spring Boot", "Spring AI", "Ollama", "Framer Motion", "REST APIs"],
    live: "https://github.com/surajshinde87/Spring-AI/tree/main/recipe-suggester",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "HealthCare Dashboard",
    description: "A responsive healthcare dashboard UI showcasing patient data, appointments, and analytics.",
    image: healthcare_dashborad,
    technologies: ["React", "HTML", "CSS", "JavaScript", "Responsive Designs", "Media Queries", "Flexbox", "Flat icons"],
    live: "https://healthcareappdashboard.netlify.app/",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Quiz Website",
    description: "You can test your coding knowledge here by answering the questions.",
    image: web_quize,
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "Responsive"],
    live: "https://surajshinde87.github.io/web-quiz/",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    title: "Gemini Clone",
    description: "The modern and responsive website designed to replicate the functionality.",
    image: gemini,
    technologies: ["React", "Gemini Api", "Tailwind CSS", "Node.js"],
    live: "https://gemini-clone-surajshinde.netlify.app/",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50">
            💼 Selected work
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A selection of my most recent and impactful work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1500px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 4, rotateY: -4, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_55px_rgba(99,102,241,0.25)] dark:hover:shadow-[0_24px_55px_rgba(99,102,241,0.2)] transition-shadow duration-300"
            >
              {/* Top accent gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              {/* Image with Overlay */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Folder icon badge */}
                <div className="absolute top-4 left-4">
                  <div className={`relative w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)]`}>
                    <Folder className="w-5 h-5" />
                  </div>
                </div>

                {/* Live demo button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl flex items-center gap-2 font-semibold shadow-[0_10px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.3)]`}
                  >
                    <ExternalLink className="w-4 h-4" /> View Project
                  </motion.a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border border-white/50 dark:border-gray-600/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sister's portfolio shoutout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
       
          <motion.a
            href="https://mansiunge.vercel.app/projects"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, boxShadow: "0 16px 36px rgba(236,72,153,0.4)" }}
            whileTap={{ y: 1, scale: 0.98 }}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-[0_10px_28px_rgba(168,85,247,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all"
          >
            <div className="relative w-7 h-7 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            View My Sister's Work
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};