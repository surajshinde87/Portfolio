import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Laptop } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          A Little About Me
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Hey, I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Suraj Shinde</span> 👋.  
          I’m a <span className="font-medium">Full Stack Developer</span> who loves turning ideas into 
          functional, scalable, and beautiful web applications. My focus is always on creating 
          <span className="italic"> experiences that matter</span> — whether it’s solving real-world problems or making 
          products more delightful to use.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg"
          >
            <Sparkles className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Creative Builder</h3>
            <p className="text-gray-600 dark:text-gray-300">I enjoy blending design & development to bring concepts to life.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg"
          >
            <Rocket className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Driven by Impact</h3>
            <p className="text-gray-600 dark:text-gray-300">I aim to build solutions that create value and make a difference.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg"
          >
            <Laptop className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Always Evolving</h3>
            <p className="text-gray-600 dark:text-gray-300">I’m constantly learning and exploring new technologies to stay ahead.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
