import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  // Work experience tailored for SOC Engineer
  const experiences = [
    {
      id: 1,
      role: "Senior SOC Engineer",
      company: "Cybersecurity Company",
      period: "Jan 2022 - Present",
      description: "Led the Security Operations Center team in monitoring and responding to security incidents. Implemented advanced threat detection systems and improved incident response time by 40%.",
      skills: ["SIEM", "Threat Intelligence", "Incident Response", "Vulnerability Management"]
    },
    {
      id: 2,
      role: "SOC Analyst",
      company: "Security Services Provider",
      period: "Mar 2020 - Dec 2021",
      description: "Monitored security events and alerts using SIEM tools. Conducted security incident investigations and implemented security controls to mitigate threats.",
      skills: ["Security Monitoring", "Malware Analysis", "Network Security", "Log Analysis"]
    },
    {
      id: 3,
      role: "Cybersecurity Intern",
      company: "Tech Corporation",
      period: "Jun 2019 - Feb 2020",
      description: "Assisted in security monitoring and basic incident response. Learned security operations practices and collaborated with senior security analysts on various security projects.",
      skills: ["Basic SIEM", "Security Fundamentals", "Network Monitoring", "Security Tools"]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <Briefcase className="text-indigo-600" />
        Work Experience
      </h2>
      
      <div className="relative border-l-2 border-indigo-200 pl-8 ml-4 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-12 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {exp.period}
                </div>
              </div>
              
              <p className="text-indigo-600 font-medium mt-1">{exp.company}</p>
              
              <p className="mt-4 text-gray-600">{exp.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;