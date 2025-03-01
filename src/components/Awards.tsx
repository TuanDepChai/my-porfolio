import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Awards = () => {
  // Awards and activities tailored for SOC Engineer
  const awards = [
    {
      id: 1,
      title: "Cybersecurity Excellence Award",
      organization: "Security Conference 2023",
      date: "November 2023",
      description: "Received award for developing an innovative security monitoring solution that improved threat detection capabilities."
    },
    {
      id: 2,
      title: "Cyber Defense Competition Winner",
      organization: "National Cyber League 2022",
      date: "July 2022",
      description: "First place in a 48-hour cyber defense competition for effectively detecting and mitigating simulated cyber attacks."
    }
  ];

  const activities = [
    {
      id: 1,
      title: "Cybersecurity Community Volunteer",
      organization: "Local Security Meetup",
      date: "2021 - Present",
      description: "Organize monthly security workshops and awareness sessions for local professionals to share knowledge and improve security practices."
    },
    {
      id: 2,
      title: "Open Source Security Tool Contributor",
      organization: "Various Security Projects",
      date: "2020 - Present",
      description: "Actively contribute to open-source security tools, focusing on improving threat detection capabilities and security monitoring solutions."
    }
  ];

  return (
    <section id="awards" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <Award className="text-indigo-600" />
        Awards & Activities
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Awards & Recognition</h3>
          
          <div className="space-y-6">
            {awards.map((award) => (
              <div key={award.id} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                <h4 className="text-lg font-medium text-gray-800">{award.title}</h4>
                <p className="text-indigo-600">{award.organization}</p>
                
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <Calendar size={16} className="mr-1" />
                  {award.date}
                </div>
                
                <p className="mt-3 text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Activities & Involvement</h3>
          
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                <h4 className="text-lg font-medium text-gray-800">{activity.title}</h4>
                <p className="text-indigo-600">{activity.organization}</p>
                
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <Calendar size={16} className="mr-1" />
                  {activity.date}
                </div>
                
                <p className="mt-3 text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;