import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <main className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pointer-events-none" />
          <Hero />
          <section id="about" className="min-h-screen py-20 relative">
            <About />
          </section>
          <section id="experience" className="min-h-screen py-20 relative">
            <Experience />
          </section>
          <section id="projects" className="min-h-screen py-20 relative">
            <Projects />
          </section>
          <section id="contact" className="min-h-screen py-20 relative">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
