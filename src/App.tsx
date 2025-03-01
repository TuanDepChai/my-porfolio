import React from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Award, Briefcase, GraduationCap, User } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} - Portfolio Website</p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;