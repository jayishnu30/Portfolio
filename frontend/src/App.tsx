import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <section id="projects" className="min-h-screen py-20 relative">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen py-20 relative">
          <Contact />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
