import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // Projects tailored for SOC Engineer
  const projects = [
    {
      id: 1,
      title: "Security Monitoring Dashboard",
      description: "A comprehensive security monitoring dashboard built with React and Node.js. Features include real-time alert visualization, threat intelligence integration, and customizable security metrics.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "ElasticSearch", "Kibana"],
      github: "https://github.com/yourusername/security-dashboard",
      demo: "https://your-demo-link.com"
    },
    {
      id: 2,
      title: "Threat Intelligence Platform",
      description: "A platform for collecting, analyzing, and sharing threat intelligence data. Helps security teams stay informed about the latest threats and vulnerabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Django", "PostgreSQL", "Redis"],
      github: "https://github.com/yourusername/threat-intel",
      demo: "https://your-demo-link.com"
    },
    {
      id: 3,
      title: "Network Traffic Analyzer",
      description: "A tool for analyzing network traffic patterns to detect anomalies and potential security threats. Uses machine learning algorithms to identify suspicious activities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "Wireshark API", "Data Visualization"],
      github: "https://github.com/yourusername/network-analyzer",
      demo: "https://your-demo-link.com"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <Code className="text-indigo-600" />
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              
              <p className="mt-3 text-gray-600 text-sm line-clamp-3">{project.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;