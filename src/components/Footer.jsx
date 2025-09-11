import React, { useRef } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

export const Footer = () => {
  const socialLinksRef = useRef(null);

  return (
    <footer className="relative py-16 bg-gradient-to-t from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Brand & tagline */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-3xl font-bold">Suraj Shinde</h3>
          <p className="text-gray-400 max-w-xs">
            Crafting modern, scalable, responsive web apps.
          </p>
        </div>

        {/* Social links */}
        <div
          ref={socialLinksRef}
          className="flex flex-wrap justify-center md:justify-start gap-6"
        >
          {[
            { icon: <Github className="w-6 h-6" />, link: 'https://github.com/surajshinde87', color: 'hover:text-gray-300' },
            { icon: <Linkedin className="w-6 h-6" />, link: 'https://www.linkedin.com/in/suraj-shinde-1039a42ba/', color: 'hover:text-blue-500' },
            { icon: <Twitter className="w-6 h-6" />, link: 'https://x.com/surajshinde_87', color: 'hover:text-blue-400' },
            { icon: <Mail className="w-6 h-6" />, link: 'mailto:surajpshinde8767@gmail.com', color: 'hover:text-green-400' },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-xl bg-gray-800 dark:bg-gray-950 shadow-md transform transition duration-300 hover:scale-110 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Quick links using react-scroll */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Blog', 'Contact'].map((link, idx) => (
            <Link
              key={idx}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} // adjust for fixed navbar height
              className="cursor-pointer text-gray-400 hover:text-white hover:underline transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Suraj Shinde. All rights reserved.
      </div>
    </footer>
  );
};
  