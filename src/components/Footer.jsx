import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export const Footer = () => {
  const socials = [
    { icon: <Github className="w-5 h-5" />, link: 'https://github.com/surajshinde87', gradient: 'from-gray-500 to-gray-700' },
    { icon: <Linkedin className="w-5 h-5" />, link: 'https://www.linkedin.com/in/suraj-shinde-1039a42ba/', gradient: 'from-blue-500 to-cyan-500' },
    { icon: <Twitter className="w-5 h-5" />, link: 'https://x.com/surajshinde_87', gradient: 'from-sky-400 to-blue-500' },
    { icon: <Mail className="w-5 h-5" />, link: 'mailto:surajpshinde8767@gmail.com', gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">

          {/* Brand & tagline */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-3xl font-bold">
              &lt;{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Suraj Shinde
              </span>{" "}
              /&gt;
            </h3>
            <p className="text-gray-400 max-w-xs">
              Crafting modern, scalable, responsive web apps.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br ${social.gradient} text-white shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition-shadow`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 max-w-xs md:max-w-none">
            {[
              { to: 'home', label: 'Home' },
              { to: 'about', label: 'About' },
              { to: 'experience', label: 'Experience' },
              { to: 'projects', label: 'Projects' },
              { to: 'skills', label: 'Skills' },
              { to: 'blog', label: 'Blog' },
              { to: 'bughunt', label: 'Bug Hunt' },
              { to: 'contact', label: 'Contact' },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="cursor-pointer text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Suraj Shinde. All rights reserved.
          </p>

          {/* Back to top button */}
          <Link to="home" smooth={true} duration={500}>
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-sm font-semibold shadow-[0_8px_20px_rgba(37,99,235,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] cursor-pointer transition-shadow"
            >
              Back to Top
              <ArrowUp size={16} />
            </motion.div>
          </Link>
        </div>
      </div>
    </footer>
  );
};