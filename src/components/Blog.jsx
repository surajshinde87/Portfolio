import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    title: "Mastering React Hooks in 2026",
    brief:
      "A practical guide to useState, useEffect, useMemo, useCallback, and custom hooks with real-world examples.",
    url: "https://surajshinde.hashnode.dev/",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    tag: "React",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Spring Boot Microservices Architecture",
    brief:
      "Learn how to build scalable microservices using Spring Boot, Eureka Server, API Gateway, Kafka, and Docker.",
    url: "https://surajshinde.hashnode.dev/",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    tag: "Java",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Java Interview Questions for Freshers",
    brief:
      "Most frequently asked Java interview questions covering OOP, Collections, Streams, Multithreading, and JVM.",
    url: "https://surajshinde.hashnode.dev/",
    coverImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    tag: "Interview Prep",
    gradient: "from-purple-500 to-pink-500",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50">
            📝 Latest writings
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group flex flex-col rounded-3xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_50px_rgba(99,102,241,0.25)] dark:hover:shadow-[0_24px_50px_rgba(99,102,241,0.2)] transition-shadow duration-300"
            >
              {/* Cover Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Tag badge */}
                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${post.gradient} shadow-[0_4px_12px_rgba(0,0,0,0.25)]`}>
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base flex-grow line-clamp-3">
                  {post.brief}
                </p>

                <motion.a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="mt-5 self-start inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-[0_8px_20px_rgba(37,99,235,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] transition-shadow"
                >
                  Read More
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://surajshinde.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, boxShadow: "0 16px 32px rgba(0,0,0,0.25)" }}
            whileTap={{ y: 1, scale: 0.98 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 dark:text-gray-900 shadow-[0_10px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition-all"
          >
            <BookOpen size={18} />
            View All Blogs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;