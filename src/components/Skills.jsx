import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-7 h-7 text-blue-500 dark:text-blue-400" />,
    technologies: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" },
      { name: "Redux Toolkit", logo: "https://redux-toolkit.js.org/img/redux.svg" },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-7 h-7 text-green-500 dark:text-green-400" />,
    technologies: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Hibernate", logo: "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg" }, // fixed
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST APIs", logo: "https://cdn-icons-png.flaticon.com/512/6011/6011885.png" },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-7 h-7 text-yellow-500 dark:text-yellow-300" />,
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL", logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    category: "Dev Tools",
    icon: <Wrench className="w-7 h-7 text-purple-500 dark:text-purple-400" />,
    technologies: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Netlify", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
      { name: "Vercel", logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg" },
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
            A snapshot of the technologies I work with
          </p>
        </motion.div>

        {/* Skill Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-8 overflow-hidden group"
            >
              {/* Snake-style animated gradient border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-borderMove">
                <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {skill.category}
                  </h3>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                  {skill.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
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

/* Tailwind animation for snake-style moving gradient */
const styles = `
@keyframes borderMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-borderMove {
  background-size: 200% 200%;
  animation: borderMove 5s linear infinite;
}
`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
