import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience/>
        <Projects />
        <Skills />
        <Blog/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;