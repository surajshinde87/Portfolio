import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Laptop } from 'lucide-react';

export const About = () => {
  const cards = [
    {
      icon: <Sparkles className="w-9 h-9" />,
      title: "Creative Builder",
      desc: "I enjoy blending design & development to bring concepts to life.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Rocket className="w-9 h-9" />,
      title: "Driven by Impact",
      desc: "I aim to build solutions that create value and make a difference.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Laptop className="w-9 h-9" />,
      title: "Always Evolving",
      desc: "I'm constantly learning and exploring new technologies to stay ahead.",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto px-6 text-center"
      >
        {/* Eyebrow badge */}
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-purple-600 dark:text-purple-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-[0_4px_12px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50">
          ✨ Get to know me
        </span>

        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)]">
          A Little About{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Hey, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Suraj Shinde</span> 👋.
          I'm a <span className="font-medium">Full Stack Software Developer</span> who loves turning ideas into
          functional, scalable, and beautiful web applications. My focus is always on creating
          <span className="italic"> experiences that matter</span> — whether it's solving real-world problems or making
          products more delightful to use.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10" style={{ perspective: "1200px" }}>
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 4,
                rotateY: -4,
                scale: 1.03,
              }}
              className="group relative p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] transition-shadow hover:shadow-[0_20px_45px_rgba(99,102,241,0.25)] dark:hover:shadow-[0_20px_45px_rgba(99,102,241,0.2)]"
            >
              {/* Icon badge with gradient + glow */}
              <div className="relative mx-auto mb-5 w-16 h-16 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-25 blur-lg group-hover:opacity-50 transition-opacity`} />
                <div className={`relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-[0_8px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]`}>
                  {card.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {card.desc}
              </p>

              {/* Bottom accent line */}
              <div className={`mx-auto mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${card.gradient} opacity-70 group-hover:w-16 transition-all duration-300`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};