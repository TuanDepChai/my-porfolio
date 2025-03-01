import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  // Contact information
  const contactInfo = {
    email: "tinyly90891@gmail.com",
    github: "https://github.com/TuanDepChai/Tuan",
    linkedin: "https://linkedin.com/in/minhtuan",
    location: "Quận 9, Hồ Chí Minh"
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <Mail className="text-indigo-600" />
        Contact Me
      </h2>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-600 mb-6">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">{contactInfo.email}</p>
            </div>
          </a>
          
          <a 
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
              <Github size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">GitHub</h3>
              <p className="text-gray-600">github.com/yourusername</p>
            </div>
          </a>
          
          <a 
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
              <Linkedin size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/yourusername</p>
            </div>
          </a>
          
          <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Location</h3>
              <p className="text-gray-600">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;