import React, { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-scroll";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "blog", label: "Blog" },
    { to: "bughunt", label: "Bug Hunt" },
    { to: "contact", label: "Contact" }
    
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="logofont text-3xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-[0_2px_8px_rgba(139,92,246,0.35)] hover:scale-105 hover:drop-shadow-[0_4px_16px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            &lt; SS /&gt;
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1 p-1.5 rounded-2xl bg-gray-100/80 dark:bg-gray-800/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-white/40 dark:border-gray-700/40">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  spy={true}
                  activeClass="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-semibold shadow-[0_4px_12px_rgba(59,130,246,0.25)] dark:shadow-[0_4px_12px_rgba(96,165,250,0.2)] -translate-y-0.5"
                  className="relative cursor-pointer text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/60 dark:hover:bg-gray-900/60 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/50 dark:border-gray-700/50 ml-2"
              whileTap={{ scale: 0.9, y: 1 }}
              whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-24 right-4 w-64 h-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)] border border-white/50 dark:border-gray-700/50 z-40 flex flex-col p-4 space-y-2 rounded-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-600 dark:text-blue-400 shadow-[0_4px_12px_rgba(59,130,246,0.15)] font-semibold rounded-xl"
                className="block text-gray-700 dark:text-gray-200 font-medium py-2.5 px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <motion.button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="mt-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-white/50 dark:border-gray-700/50 font-medium"
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};