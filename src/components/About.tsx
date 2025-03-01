import React from 'react';
import { MapPin, Mail, Github, Linkedin, User, GraduationCap } from 'lucide-react';

const About = () => {
  // Personal information
  const personalInfo = {
    name: "Phạm Minh Tuấn",
    title: "SOC Engineer",
    school: "FPT University",
    location: "Quận 9, Hồ Chí Minh",
    email: "tinyly90891@gmail.com",
    github: "https://github.com/TuanDepChai/Tuan",
    linkedin: "https://linkedin.com/in/minhtuan",
    bio: "I'm a passionate SOC Engineer with expertise in cybersecurity, threat detection, and incident response. I specialize in security monitoring, threat intelligence, and implementing security solutions to protect organizations from cyber threats.",
    avatar: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/475012650_955831763305802_725933530397526272_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=htd4lp8MuVEQ7kNvgFDih_u&_nc_oc=AdiWOCUAX4oAifccqCraXx8rOpk3t10fowl_8QXrKfrBBIYmPfXU0UrFdlYNujDCaMQ&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=A5QohMMkA89ghSkkByEFthF&oh=00_AYDn6alnxwCUuM1zxnI9Qzb_7jYhXtLqYGSb2OfJfsr11w&oe=67C91F59"
  };

  return (
    <section id="about" className="pt-24 pb-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-indigo-100">
          <img 
            src={personalInfo.avatar} 
            alt={personalInfo.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800">{personalInfo.name}</h1>
          <h2 className="text-xl text-indigo-600 mt-1">{personalInfo.title}</h2>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <GraduationCap size={18} />
              <span>{personalInfo.school}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={18} />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-600 transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>
          
          <div className="mt-4 flex gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">About Me</h3>
            <p className="text-gray-600 leading-relaxed">{personalInfo.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;