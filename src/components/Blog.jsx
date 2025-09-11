import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          query {
            publication(host: "surajshinde.hashnode.dev") {
              title
              posts(first: 6) {
                edges {
                  node {
                    title
                    brief
                    slug
                    coverImage {
                      url
                    }
                  }
                }
              }
            }
          }
        `;

        const res = await fetch("https://gql.hashnode.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });

        const data = await res.json();
        setPosts(data.data.publication.posts.edges.map((edge) => edge.node));
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
           My Blogs
        </motion.h2>

        {/* Blog Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl shadow-md overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300"
            >
              {/* Cover Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.coverImage?.url || "./src/images/default-blog.webp"}
                  alt={post.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/default-blog.jpg";
                  }}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base flex-grow line-clamp-3">
                  {post.brief}
                </p>

                <a
                  href={`https://surajshinde.hashnode.dev/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 self-start inline-block px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
