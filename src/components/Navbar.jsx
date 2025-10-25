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
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
  href="/"
  className="logofont text-3xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:animate-pulse transition-all duration-500"
>
  &lt; SS /&gt;
</a>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true} // <-- Enable scroll spy
                activeClass="text-blue-600 dark:text-blue-400 font-semibold"
                className="relative group cursor-pointer text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
            className="md:hidden fixed top-16 right-0 w-64 h-auto bg-white dark:bg-gray-900 shadow-lg border-l border-gray-200 dark:border-gray-800 z-40 flex flex-col p-6 space-y-4 rounded-l-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true} // scroll spy for mobile
                activeClass="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-md"
                className="block text-gray-700 dark:text-gray-200 font-medium py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
              className="mt-4 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
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
