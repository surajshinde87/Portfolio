import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-7 h-7" />,
    gradient: "from-blue-500 to-cyan-500",
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
    icon: <Server className="w-7 h-7" />,
    gradient: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Hibernate", logo: "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST APIs", logo: "https://cdn-icons-png.flaticon.com/512/6011/6011885.png" },
      { name: "JWT", logo: "https://jwt.io/img/pic_logo.svg" },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-7 h-7" />,
    gradient: "from-yellow-500 to-orange-500",
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL", logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Workbench", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
      { name: "JDBC", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
      { name: "JPA", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
    ],
  },
  {
    category: "Dev Tools",
    icon: <Wrench className="w-7 h-7" />,
    gradient: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Netlify", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
      { name: "Vercel", logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Eclipse", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
    ],
  },
];

// New DevOps / Cloud-Native skills - currently learning
const newSkills = [
  { name: "CI/CD", logo: "https://cdn-icons-png.flaticon.com/512/8638/8638655.png" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "SonarQube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  { name: "Microservices", logo: "https://cdn-icons-png.flaticon.com/512/2104/2104413.png" },
  { name: "Apache Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "JMeter", logo: "https://cdn.simpleicons.org/apachejmeter/D22128" },
 { name: "Keycloak", logo: "https://avatars.githubusercontent.com/u/35160367?s=200&v=4" },
  { name: "OAuth2", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968827.png" },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50">
            🛠️ My toolkit
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Tools
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
            A snapshot of the technologies I work with
          </p>
        </motion.div>

        {/* Skill Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_20px_45px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_20px_45px_rgba(99,102,241,0.15)] transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-30 blur-lg`} />
                  <div className={`relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${skill.gradient} text-white shadow-[0_8px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]`}>
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>

              {/* Tech grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
                {skill.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_6px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/60 dark:border-gray-700/50">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning - DevOps & Cloud Native */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-3xl p-8 sm:p-10 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 dark:from-gray-950 dark:via-indigo-950 dark:to-black shadow-[0_20px_60px_rgba(79,70,229,0.35)]"
        >
          {/* Animated glow accents */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 opacity-50 blur-md animate-pulse" />
                <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)]">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Currently{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Leveling Up
                </span>
              </h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Diving deep into DevOps, observability, and secure microservice architectures —
              building production-grade pipelines and distributed systems.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5">
              {newSkills.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.06 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
                    <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:border-white/30 transition-colors duration-300">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>
                  </div>
                  <span className="mt-3 text-xs sm:text-sm font-medium text-gray-200">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};